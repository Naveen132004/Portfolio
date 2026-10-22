import { FaGithub, FaLinkedinIn } from 'react-icons/fa';
import { Mail, Heart } from 'lucide-react';

const navLinks = [
  { label: 'About', href: '#about' },
  { label: 'Skills', href: '#skills' },
  { label: 'Projects', href: '#projects' },
  { label: 'Contact', href: '#contact' },
];

const socialLinks = [
  { icon: FaGithub, href: 'https://github.com/Naveen132004', label: 'GitHub' },
  { icon: FaLinkedinIn, href: 'https://www.linkedin.com/in/naveen-kumar-67981b312/', label: 'LinkedIn' },
  { icon: Mail, href: 'mailto:naveenkumar13may@gmail.com', label: 'Email' },
];

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const handleClick = (href: string) => {
    document.querySelector(href)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <footer className="tone-dark">
      <div className="container-narrow pt-14 pb-10">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 pb-12 border-b border-line">
          <div className="md:col-span-5">
            <a
              href="#"
              className="display text-[2.5rem] text-foam inline-block"
              onClick={(e) => {
                e.preventDefault();
                window.scrollTo({ top: 0, behavior: 'smooth' });
              }}
            >
              NK<span className="text-coral-glow">.</span>
            </a>
            <p className="mt-3 text-[15px] text-muted max-w-xs">
              Building intelligent systems & modern digital experiences.
            </p>
          </div>

          <nav className="md:col-span-4 flex flex-wrap gap-x-7 gap-y-3 md:pt-4" aria-label="Footer">
            {navLinks.map((link) => (
              <button
                key={link.label}
                onClick={() => handleClick(link.href)}
                className="text-[15px] text-foam/80 hover:text-foam link-underline cursor-pointer"
              >
                {link.label}
              </button>
            ))}
          </nav>

          <div className="md:col-span-3 flex md:justify-end gap-3 md:pt-2">
            {socialLinks.map((social) => (
              <a
                key={social.label}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                className="w-11 h-11 rounded-full border border-line flex items-center justify-center text-foam/80 hover:bg-foam hover:text-abyss transition-colors duration-300"
                aria-label={social.label}
              >
                <social.icon className="w-4 h-4" />
              </a>
            ))}
          </div>
        </div>

        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-3 pt-8 text-sm text-faint">
          <p>© {currentYear} Naveen Kumar. All rights reserved.</p>
          <p className="flex items-center gap-1.5">
            Designed with <Heart className="w-3.5 h-3.5 fill-coral-glow text-coral-glow" /> by Naveen
          </p>
        </div>
      </div>
    </footer>
  );
}
