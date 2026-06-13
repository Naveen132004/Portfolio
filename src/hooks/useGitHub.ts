import { useState, useEffect, useCallback } from 'react';

interface GitHubUser {
  login: string;
  name: string;
  avatar_url: string;
  bio: string;
  public_repos: number;
  followers: number;
  following: number;
  html_url: string;
}

interface GitHubRepo {
  id: number;
  name: string;
  description: string | null;
  html_url: string;
  homepage: string | null;
  language: string | null;
  stargazers_count: number;
  forks_count: number;
  updated_at: string;
  topics: string[];
}

interface GitHubStats {
  user: GitHubUser | null;
  repos: GitHubRepo[];
  languages: Record<string, number>;
  totalStars: number;
  loading: boolean;
  error: string | null;
}

const CACHE_KEY = 'github_stats_cache';
const CACHE_DURATION = 30 * 60 * 1000; // 30 minutes

export function useGitHub(username: string): GitHubStats {
  const [user, setUser] = useState<GitHubUser | null>(null);
  const [repos, setRepos] = useState<GitHubRepo[]>([]);
  const [languages, setLanguages] = useState<Record<string, number>>({});
  const [totalStars, setTotalStars] = useState(0);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  const fetchData = useCallback(async () => {
    // Check cache first
    try {
      const cached = localStorage.getItem(CACHE_KEY);
      if (cached) {
        const { data, timestamp } = JSON.parse(cached);
        if (Date.now() - timestamp < CACHE_DURATION) {
          setUser(data.user);
          setRepos(data.repos);
          setLanguages(data.languages);
          setTotalStars(data.totalStars);
          setLoading(false);
          return;
        }
      }
    } catch {
      // Cache miss, continue to fetch
    }

    const token = import.meta.env.VITE_GITHUB_TOKEN;
    const headers: HeadersInit = token
      ? { Authorization: `Bearer ${token}`, Accept: 'application/vnd.github.v3+json' }
      : { Accept: 'application/vnd.github.v3+json' };

    try {
      setLoading(true);
      setError(null);

      const [userRes, reposRes] = await Promise.all([
        fetch(`https://api.github.com/users/${username}`, { headers }),
        fetch(`https://api.github.com/users/${username}/repos?per_page=100&sort=updated`, { headers }),
      ]);

      if (!userRes.ok || !reposRes.ok) {
        throw new Error('Failed to fetch GitHub data');
      }

      const userData: GitHubUser = await userRes.json();
      const reposData: GitHubRepo[] = await reposRes.json();

      // Calculate languages
      const langCount: Record<string, number> = {};
      let stars = 0;
      reposData.forEach((repo) => {
        if (repo.language) {
          langCount[repo.language] = (langCount[repo.language] || 0) + 1;
        }
        stars += repo.stargazers_count;
      });

      // Sort repos by stars then by update date
      const sortedRepos = reposData.sort(
        (a, b) => b.stargazers_count - a.stargazers_count || new Date(b.updated_at).getTime() - new Date(a.updated_at).getTime()
      );

      setUser(userData);
      setRepos(sortedRepos);
      setLanguages(langCount);
      setTotalStars(stars);

      // Cache results
      localStorage.setItem(
        CACHE_KEY,
        JSON.stringify({
          data: { user: userData, repos: sortedRepos, languages: langCount, totalStars: stars },
          timestamp: Date.now(),
        })
      );
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Unknown error');
    } finally {
      setLoading(false);
    }
  }, [username]);

  useEffect(() => {
    fetchData();
  }, [fetchData]);

  return { user, repos, languages, totalStars, loading, error };
}
