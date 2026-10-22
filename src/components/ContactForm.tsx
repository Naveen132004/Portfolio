import { useState, useRef } from 'react';
import { motion } from 'framer-motion';
import emailjs from '@emailjs/browser';
import SectionHeader from './ui/SectionHeader';
import FadeInWrapper from './ui/FadeInWrapper';
import { FaGithub, FaLinkedinIn } from 'react-icons/fa';
import { Mail, MapPin, Phone, Send, CheckCircle, AlertCircle } from 'lucide-react';

const contactDetails = [
  {
    icon: Mail,
    label: 'Email',
    value: 'naveenkumar13may@gmail.com',
    href: 'mailto:naveenkumar13may@gmail.com',
  },
  {
    icon: MapPin,
    label: 'Location',
    value: 'Chennai, India',
  },
  {
    icon: Phone,
    label: 'Phone',
    value: '8809769960',
  },
];

const socials = [
  { icon: FaGithub, href: 'https://github.com/Naveen132004', label: 'GitHub' },
  { icon: FaLinkedinIn, href: 'https://www.linkedin.com/in/naveen-kumar-67981b312/', label: 'LinkedIn' },
  { icon: Mail, href: 'mailto:naveenkumar13may@gmail.com', label: 'Email' },
];

export default function ContactForm() {
  const formRef = useRef<HTMLFormElement>(null);
  const [sending, setSending] = useState(false);
  const [status, setStatus] = useState<'idle' | 'success' | 'error'>('idle');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!formRef.current) return;

    const serviceId = import.meta.env.VITE_EMAILJS_SERVICE_ID;
    const templateId = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
    const publicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;

    if (!serviceId || !templateId || !publicKey) {
      setStatus('error');
      return;
    }

    setSending(true);
    try {
      await emailjs.sendForm(serviceId, templateId, formRef.current, publicKey);
      setStatus('success');
      formRef.current.reset();
    } catch {
      setStatus('error');
    } finally {
      setSending(false);
      setTimeout(() => setStatus('idle'), 5000);
    }
  };

  return (
    <section id="contact" className="tone-dark section-spacing !pb-48 md:!pb-64 relative overflow-hidden">
      {/* Bookend: the glass sphere from the hero, rising at the foot of the page */}
      <div
        className="pointer-events-none absolute inset-x-0 bottom-0 h-[42%] [mask-image:linear-gradient(to_bottom,#000_20%,transparent_95%)]"
        aria-hidden="true"
      >
        <div
          className="orb orb-lower !top-[38%] opacity-30"
          style={{ backdropFilter: 'none', WebkitBackdropFilter: 'none' }}
        />
      </div>

      <div className="container-narrow relative z-10">
        <SectionHeader
          label="Get in Touch"
          title={["Let's work", 'together']}
          intro="Have a project in mind or want to collaborate? Drop me a message and I'll get back to you as soon as possible."
        />

        <div className="grid grid-cols-1 md:grid-cols-12 gap-14 md:gap-10">
          {/* Details */}
          <FadeInWrapper className="md:col-span-4 md:col-start-4">
            <dl className="space-y-7">
              {contactDetails.map((item) => (
                <div key={item.label} className="flex items-start gap-4">
                  <item.icon className="w-5 h-5 mt-0.5 text-tide shrink-0" aria-hidden="true" />
                  <div>
                    <dt className="text-sm text-muted mb-1">{item.label}</dt>
                    <dd className="text-[17px] text-foam [overflow-wrap:anywhere]">
                      {item.href ? (
                        <a href={item.href} className="link-underline">{item.value}</a>
                      ) : (
                        item.value
                      )}
                    </dd>
                  </div>
                </div>
              ))}
            </dl>

            <div className="pt-9 flex gap-3">
              {socials.map((social) => (
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
          </FadeInWrapper>

          {/* Form */}
          <FadeInWrapper delay={0.15} className="md:col-span-5">
            <form ref={formRef} onSubmit={handleSubmit} className="space-y-8">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
                <div>
                  <label htmlFor="user_name" className="field-label">Name</label>
                  <input id="user_name" type="text" name="user_name" required className="field" placeholder="John Doe" />
                </div>
                <div>
                  <label htmlFor="user_email" className="field-label">Email</label>
                  <input id="user_email" type="email" name="user_email" required className="field" placeholder="john@example.com" />
                </div>
              </div>

              <div>
                <label htmlFor="subject" className="field-label">Subject</label>
                <input id="subject" type="text" name="subject" required className="field" placeholder="Project inquiry" />
              </div>

              <div>
                <label htmlFor="message" className="field-label">Message</label>
                <textarea
                  id="message"
                  name="message"
                  required
                  rows={4}
                  className="field resize-none"
                  placeholder="Tell me about your project..."
                />
              </div>

              <div className="flex flex-col sm:flex-row sm:items-center gap-4 pt-2">
                <button type="submit" disabled={sending} className="btn-primary disabled:opacity-60 self-start">
                  {sending ? (
                    <span className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                  ) : (
                    <Send className="w-5 h-5" />
                  )}
                  {sending ? 'Sending...' : 'Send Message'}
                </button>

                <div aria-live="polite">
                  {status === 'success' && (
                    <motion.p
                      className="flex items-center gap-2 text-[15px] text-emerald-300"
                      initial={{ opacity: 0, y: 6 }}
                      animate={{ opacity: 1, y: 0 }}
                    >
                      <CheckCircle className="w-4 h-4" />
                      Message sent!
                    </motion.p>
                  )}
                  {status === 'error' && (
                    <motion.p
                      className="flex items-center gap-2 text-[15px] text-coral-glow"
                      initial={{ opacity: 0, y: 6 }}
                      animate={{ opacity: 1, y: 0 }}
                    >
                      <AlertCircle className="w-4 h-4" />
                      Failed to send. Try again.
                    </motion.p>
                  )}
                </div>
              </div>
            </form>
          </FadeInWrapper>
        </div>
      </div>
    </section>
  );
}
