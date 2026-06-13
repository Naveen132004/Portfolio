import { useState, useRef } from 'react';
import { motion } from 'framer-motion';
import emailjs from '@emailjs/browser';
import FadeInWrapper from './ui/FadeInWrapper';
import { FaGithub, FaLinkedinIn } from 'react-icons/fa';
import { Mail, MapPin, Phone, Send, CheckCircle, AlertCircle } from 'lucide-react';

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
    <section id="contact" className="section-spacing relative overflow-hidden">
      <div className="container-narrow relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16 md:mb-24">
          <FadeInWrapper blur>
            <p className="label-mono text-accent mb-4">
              Get in Touch
            </p>
          </FadeInWrapper>

          <FadeInWrapper delay={0.1} blur>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-[-0.03em] text-text-primary leading-[1.1] mb-6">
              Let's Work Together
            </h2>
          </FadeInWrapper>

          <FadeInWrapper delay={0.2}>
            <p className="text-base md:text-lg text-text-secondary max-w-xl mx-auto leading-relaxed">
              Have a project in mind or want to collaborate? Drop me a message and I'll get
              back to you as soon as possible.
            </p>
          </FadeInWrapper>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-5 gap-12 lg:gap-16">
          {/* Contact Info */}
          <FadeInWrapper className="lg:col-span-2">
            <div className="space-y-8">
              {[
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
              ].map((item) => (
                <div key={item.label} className="flex items-center gap-5">
                  <div className="w-12 h-12 rounded-xl bg-accent/10 border border-accent/20 flex items-center justify-center flex-shrink-0">
                    <item.icon className="w-5 h-5 text-accent" />
                  </div>
                  <div>
                    <p className="text-[11px] text-text-tertiary uppercase tracking-widest mb-1 font-mono font-medium">
                      {item.label}
                    </p>
                    {item.href ? (
                      <a
                        href={item.href}
                        className="text-base font-semibold text-text-primary hover:text-accent transition-colors link-underline"
                      >
                        {item.value}
                      </a>
                    ) : (
                      <p className="text-base font-semibold text-text-primary">{item.value}</p>
                    )}
                  </div>
                </div>
              ))}

              {/* Social links */}
              <div className="pt-6 flex gap-3">
                {[
                  { icon: FaGithub, href: 'https://github.com/Naveen132004', label: 'GitHub' },
                  { icon: FaLinkedinIn, href: 'https://www.linkedin.com/in/naveen-kumar-67981b312/', label: 'LinkedIn' },
                  { icon: Mail, href: 'mailto:naveenkumar13may@gmail.com', label: 'Email' },
                ].map((social) => (
                  <a
                    key={social.label}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-11 h-11 rounded-full border border-border flex items-center justify-center text-text-secondary hover:bg-accent hover:text-white hover:border-accent transition-all duration-300"
                    aria-label={social.label}
                  >
                    <social.icon className="w-4 h-4" />
                  </a>
                ))}
              </div>
            </div>
          </FadeInWrapper>

          {/* Contact Form */}
          <FadeInWrapper delay={0.2} className="lg:col-span-3">
            <form ref={formRef} onSubmit={handleSubmit} className="card-bento p-8 md:p-10">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 mb-5">
                <div>
                  <label className="block text-[11px] text-text-tertiary uppercase tracking-widest mb-3 font-mono font-medium">
                    Name
                  </label>
                  <input
                    type="text"
                    name="user_name"
                    required
                    className="w-full rounded-xl px-5 py-4 text-sm text-text-primary bg-chip border border-border placeholder:text-text-tertiary/50 focus:outline-none focus:border-accent transition-colors duration-300"
                    placeholder="John Doe"
                  />
                </div>
                <div>
                  <label className="block text-[11px] text-text-tertiary uppercase tracking-widest mb-3 font-mono font-medium">
                    Email
                  </label>
                  <input
                    type="email"
                    name="user_email"
                    required
                    className="w-full rounded-xl px-5 py-4 text-sm text-text-primary bg-chip border border-border placeholder:text-text-tertiary/50 focus:outline-none focus:border-accent transition-colors duration-300"
                    placeholder="john@example.com"
                  />
                </div>
              </div>

              <div className="mb-5">
                <label className="block text-[11px] text-text-tertiary uppercase tracking-widest mb-3 font-mono font-medium">
                  Subject
                </label>
                <input
                  type="text"
                  name="subject"
                  required
                  className="w-full rounded-xl px-5 py-4 text-sm text-text-primary bg-chip border border-border placeholder:text-text-tertiary/50 focus:outline-none focus:border-accent transition-colors duration-300"
                  placeholder="Project inquiry"
                />
              </div>

              <div className="mb-8">
                <label className="block text-[11px] text-text-tertiary uppercase tracking-widest mb-3 font-mono font-medium">
                  Message
                </label>
                <textarea
                  name="message"
                  required
                  rows={5}
                  className="w-full rounded-xl px-5 py-4 text-sm text-text-primary bg-chip border border-border placeholder:text-text-tertiary/50 focus:outline-none focus:border-accent resize-none transition-colors duration-300"
                  placeholder="Tell me about your project..."
                />
              </div>

              {/* Submit + Status */}
              <div className="flex flex-col sm:flex-row sm:items-center gap-4">
                <button
                  type="submit"
                  disabled={sending}
                  className="btn-primary disabled:opacity-50"
                >
                  {sending ? (
                    <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                  ) : (
                    <Send className="w-5 h-5" />
                  )}
                  {sending ? 'Sending...' : 'Send Message'}
                </button>

                {status === 'success' && (
                  <motion.div
                    className="flex items-center gap-2 px-4 py-2 rounded-full text-sm font-medium"
                    style={{ color: '#22C55E', background: 'rgba(34,197,94,0.08)', border: '1px solid rgba(34,197,94,0.2)' }}
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                  >
                    <CheckCircle className="w-4 h-4" />
                    Message sent!
                  </motion.div>
                )}
                {status === 'error' && (
                  <motion.div
                    className="flex items-center gap-2 px-4 py-2 rounded-full text-sm font-medium"
                    style={{ color: '#EF4444', background: 'rgba(239,68,68,0.08)', border: '1px solid rgba(239,68,68,0.2)' }}
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                  >
                    <AlertCircle className="w-4 h-4" />
                    Failed to send. Try again.
                  </motion.div>
                )}
              </div>
            </form>
          </FadeInWrapper>
        </div>
      </div>
    </section>
  );
}
