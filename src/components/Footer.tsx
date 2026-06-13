import { FaGithub, FaLinkedinIn } from 'react-icons/fa';
import { Mail, Heart } from 'lucide-react';
import FadeInWrapper from './ui/FadeInWrapper';

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
    const el = document.querySelector(href);
    el?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <footer className="border-t border-border">
      <div className="container-narrow py-14">
        <FadeInWrapper>
          <div className="flex flex-col md:flex-row items-center justify-between gap-8 mb-10">
            {/* Logo & Tagline */}
            <div className="text-center md:text-left">
              <a
                href="#"
                className="text-xl font-bold tracking-tight inline-block mb-2"
                onClick={(e) => {
                  e.preventDefault();
                  window.scrollTo({ top: 0, behavior: 'smooth' });
                }}
              >
                <span className="text-accent">NK</span><span className="text-text-tertiary">.</span>
              </a>
              <p className="text-sm text-text-tertiary max-w-xs">
                Building intelligent systems & modern digital experiences.
              </p>
            </div>

            {/* Nav Links */}
            <div className="flex flex-wrap justify-center items-center gap-x-8 gap-y-3">
              {navLinks.map((link) => (
                <button
                  key={link.label}
                  onClick={() => handleClick(link.href)}
                  className="text-sm font-medium text-text-secondary hover:text-accent transition-colors duration-300"
                >
                  {link.label}
                </button>
              ))}
            </div>

            {/* Social Icons */}
            <div className="flex items-center gap-3">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-full border border-border flex items-center justify-center text-text-secondary hover:bg-accent hover:text-white hover:border-accent transition-all duration-300"
                  aria-label={social.label}
                >
                  <social.icon className="w-4 h-4" />
                </a>
              ))}
            </div>
          </div>
        </FadeInWrapper>

        {/* Divider */}
        <div className="w-full h-[1px] bg-border mb-8" />

        {/* Bottom Text */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-3 text-xs text-text-tertiary">
          <p>
            © {currentYear} Naveen Kumar. All rights reserved.
          </p>
          <p className="flex items-center gap-1.5">
            Designed with <Heart className="w-3 h-3 fill-accent text-accent" /> by Naveen
          </p>
        </div>
      </div>
    </footer>
  );
}
