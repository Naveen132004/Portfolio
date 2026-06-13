import { motion } from 'framer-motion';
import { useGitHub } from '../hooks/useGitHub';
import FadeInWrapper from './ui/FadeInWrapper';
import { FaGithub } from 'react-icons/fa';
import { Star, GitFork, Users, Code2, ExternalLink } from 'lucide-react';

export default function GitHubStats() {
  const { user, repos, languages, totalStars, loading, error } = useGitHub('Naveen132004');

  if (error) {
    return (
      <section className="section-spacing">
        <div className="container-narrow text-center">
          <p className="text-text-secondary text-lg">Unable to load GitHub data. Please try again later.</p>
        </div>
      </section>
    );
  }

  const topLanguages = Object.entries(languages)
    .sort(([, a], [, b]) => b - a)
    .slice(0, 6);

  const totalLangs = topLanguages.reduce((sum, [, count]) => sum + count, 0);

  const langColors: Record<string, string> = {
    JavaScript: '#E48B59',
    TypeScript: '#3178c6',
    Python: '#3572A5',
    Java: '#b07219',
    HTML: '#e34c26',
    CSS: '#53617A',
    'C++': '#f34b7d',
    C: '#555555',
    Shell: '#89e051',
    Jupyter: '#DA5B0B',
  };

  return (
    <section className="section-spacing">
      <div className="container-narrow">
        {/* Section Header */}
        <div className="text-center mb-16 md:mb-24">
          <FadeInWrapper blur>
            <p className="label-mono text-accent mb-4">
              Open Source
            </p>
          </FadeInWrapper>

          <FadeInWrapper delay={0.1} blur>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-[-0.03em] text-text-primary leading-[1.1]">
              GitHub Activity
            </h2>
          </FadeInWrapper>
        </div>

        {loading ? (
          <div className="flex items-center justify-center py-24">
            <div className="w-8 h-8 border-2 border-border border-t-accent rounded-full animate-spin" />
          </div>
        ) : (
          <div className="space-y-8">
            {/* Stats Grid — Dashboard Panels */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-5">
              {[
                { icon: Code2, label: 'Repositories', value: user?.public_repos || 0 },
                { icon: Star, label: 'Total Stars', value: totalStars },
                { icon: Users, label: 'Followers', value: user?.followers || 0 },
                { icon: GitFork, label: 'Following', value: user?.following || 0 },
              ].map((stat, i) => (
                <FadeInWrapper key={stat.label} delay={i * 0.08}>
                  <div className="card-surface p-8 text-center flex flex-col items-center justify-center h-full">
                    <div className="w-12 h-12 rounded-xl bg-white/10 flex items-center justify-center mb-5">
                      <stat.icon className="w-5 h-5 text-white/70" />
                    </div>
                    <p className="text-3xl md:text-4xl font-bold text-white mb-2 tracking-[-0.02em]">
                      {stat.value}
                    </p>
                    <p className="text-[11px] text-white/50 uppercase tracking-[0.15em] font-mono font-medium">
                      {stat.label}
                    </p>
                  </div>
                </FadeInWrapper>
              ))}
            </div>

            {/* Languages — Dashboard Panel */}
            {topLanguages.length > 0 && (
              <FadeInWrapper delay={0.2}>
                <div className="card-bento p-8 md:p-12">
                  <h3 className="text-xl font-semibold text-text-primary mb-8">Most Used Languages</h3>

                  {/* Language bar */}
                  <div className="flex h-3 rounded-full overflow-hidden mb-8 gap-[2px]">
                    {topLanguages.map(([lang, count]) => (
                      <motion.div
                        key={lang}
                        className="rounded-full"
                        style={{ backgroundColor: langColors[lang] || '#8b949e' }}
                        initial={{ width: 0 }}
                        whileInView={{ width: `${(count / totalLangs) * 100}%` }}
                        viewport={{ once: true }}
                        transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
                      />
                    ))}
                  </div>

                  <div className="flex flex-wrap gap-5">
                    {topLanguages.map(([lang, count]) => (
                      <div key={lang} className="flex items-center gap-2.5">
                        <div
                          className="w-3 h-3 rounded-full"
                          style={{ backgroundColor: langColors[lang] || '#8b949e' }}
                        />
                        <span className="text-sm font-medium text-text-primary">
                          {lang}{' '}
                          <span className="text-text-tertiary font-mono text-xs">
                            {((count / totalLangs) * 100).toFixed(1)}%
                          </span>
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              </FadeInWrapper>
            )}

            {/* Recent Repos */}
            <div className="pt-4">
              <FadeInWrapper delay={0.1} blur>
                <h3 className="text-2xl font-semibold text-text-primary mb-8 text-center">
                  Recent Repositories
                </h3>
              </FadeInWrapper>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                {repos.slice(0, 6).map((repo, i) => (
                  <FadeInWrapper key={repo.id} delay={i * 0.06}>
                    <a
                      href={repo.html_url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="card-bento p-7 group block h-full flex flex-col"
                    >
                      <div className="flex items-start justify-between mb-4">
                        <div className="flex items-center gap-3">
                          <FaGithub className="w-5 h-5 text-text-secondary" />
                          <h4 className="text-base font-semibold text-text-primary group-hover:text-accent transition-colors">
                            {repo.name}
                          </h4>
                        </div>
                        <ExternalLink className="w-4 h-4 text-text-tertiary opacity-0 group-hover:opacity-100 transition-opacity" />
                      </div>

                      {repo.description && (
                        <p className="text-sm text-text-secondary leading-relaxed mb-6 line-clamp-2 flex-1">
                          {repo.description}
                        </p>
                      )}

                      <div className="flex items-center gap-4 mt-auto">
                        {repo.language && (
                          <div className="flex items-center gap-2">
                            <div
                              className="w-2.5 h-2.5 rounded-full"
                              style={{ backgroundColor: langColors[repo.language] || '#8b949e' }}
                            />
                            <span className="text-xs font-medium text-text-secondary font-mono">{repo.language}</span>
                          </div>
                        )}
                        {repo.stargazers_count > 0 && (
                          <div className="flex items-center gap-1.5 text-text-secondary">
                            <Star className="w-3.5 h-3.5" />
                            <span className="text-xs font-medium font-mono">{repo.stargazers_count}</span>
                          </div>
                        )}
                        {repo.forks_count > 0 && (
                          <div className="flex items-center gap-1.5 text-text-secondary">
                            <GitFork className="w-3.5 h-3.5" />
                            <span className="text-xs font-medium font-mono">{repo.forks_count}</span>
                          </div>
                        )}
                      </div>
                    </a>
                  </FadeInWrapper>
                ))}
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
