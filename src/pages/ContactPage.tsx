import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { RollText } from '../components/RollText';
import { PORTFOLIO_DATA } from '../data/portfolioData';

export const ContactPage: React.FC = () => {
  const { personal } = PORTFOLIO_DATA;
  const [copied, setCopied] = useState(false);
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [copiedTransmission, setCopiedTransmission] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(personal.contact.email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const getMailtoUrl = () => {
    const subject = encodeURIComponent(
      formData.subject ? `[genturo. Portfolio] ${formData.subject}` : 'New Engineering Inquiry'
    );
    const body = encodeURIComponent(
      `Sender: ${formData.name}\nEmail: ${formData.email}\nSubject: ${formData.subject}\n\nMessage:\n${formData.message}\n\n---\nSent via genturo. message dispatch`
    );
    return `mailto:${personal.contact.email}?subject=${subject}&body=${body}`;
  };

  const handleCopyTransmission = () => {
    const text = `To: ${personal.contact.email}\nFrom: ${formData.name} <${formData.email}>\nSubject: ${formData.subject}\n\n${formData.message}`;
    navigator.clipboard.writeText(text);
    setCopiedTransmission(true);
    setTimeout(() => setCopiedTransmission(false), 2000);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    const mailtoUrl = getMailtoUrl();

    try {
      // 1. Attempt FormSubmit background dispatch
      const controller = new AbortController();
      const timeoutId = setTimeout(() => controller.abort(), 4500);

      await fetch(`https://formsubmit.co/ajax/${personal.contact.email}`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Accept: 'application/json',
        },
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          _subject: `[genturo. Portfolio] ${formData.subject || 'Direct Dispatch'}`,
          message: formData.message,
          _template: 'box',
        }),
        signal: controller.signal,
      });

      clearTimeout(timeoutId);
    } catch (err) {
      console.warn('FormSubmit background dispatch bypassed, falling back to mail client:', err);
    } finally {
      setIsSubmitting(false);
      setFormSubmitted(true);
      // Trigger user's mail client as direct transmission channel
      try {
        window.location.href = mailtoUrl;
      } catch (e) {
        console.warn('Could not launch mailto automatically:', e);
      }
    }
  };

  return (
    <div className="pt-14 md:pt-16 text-brand-primary">
      {/* SECTION 1: HERO */}
      <section className="border-b border-brand-primary/50">
        <div className="grid grid-cols-4 md:grid-cols-12">
          <div className="relative z-10 col-span-4 flex flex-col justify-end px-3 py-8 md:col-span-8 md:px-4 md:py-16">
            <p className="text-[0.7rem] font-bold tracking-[0.18em] uppercase opacity-75 mb-3">
              get in touch
            </p>
            <h1 className="text-[clamp(3.5rem,22vw,17rem)] leading-[0.8] font-bold tracking-[-0.13em]">
              contact.
            </h1>
          </div>
          <div className="relative col-span-4 md:col-span-4 border-t md:border-t-0 md:border-l border-brand-primary/50 bg-brand-dark aspect-[4/3] md:aspect-auto md:min-h-0 overflow-hidden">
            <img
              src="/assets/contact-hero.webp"
              alt="Ryan Lloyd Genturo"
              className="h-full w-full object-cover"
            />
            <div className="absolute inset-0 bg-brand-primary/10 mix-blend-multiply pointer-events-none" />
          </div>
        </div>
      </section>

      {/* SECTION 2: CONTACT SPLIT */}
      <section className="border-b border-brand-primary/50">
        <div className="grid grid-cols-4 md:grid-cols-12">
          <div className="col-span-4 md:col-span-10 md:col-start-2 border-x border-brand-primary/50">
            <div className="grid grid-cols-4 md:grid-cols-10">
              {/* Left Column: Direct Info & Socials */}
              <div className="col-span-4 md:col-span-4 border-r border-brand-primary/50 p-4 md:p-8 flex flex-col justify-between gap-12 py-12 md:py-16 border-b md:border-b-0">
                <div>
                  <p className="text-[0.7rem] font-bold tracking-[0.18em] uppercase opacity-75 mb-3">
                    direct transmission
                  </p>
                  <h2 className="text-3xl md:text-4xl font-bold tracking-[-0.04em] mb-6">
                    Let's collaborate.
                  </h2>
                  <p className="text-base leading-relaxed opacity-85 mb-8">
                    Available for software engineering roles, hardware/firmware integration, low-level systems projects, and technology research inquiries.
                  </p>

                  {/* Copy Email Button */}
                  <div className="mb-8">
                    <p className="text-[0.65rem] tracking-[0.18em] uppercase font-mono opacity-60 mb-2">
                      electronic mail
                    </p>
                    <button
                      type="button"
                      onClick={handleCopyEmail}
                      className="group/roll inline-flex items-center gap-3 border border-brand-primary/50 px-4 py-2.5 text-sm font-mono transition-colors hover:bg-brand-primary hover:text-brand-cream cursor-pointer"
                    >
                      <span>{personal.contact.email}</span>
                      <span className="text-xs opacity-70">
                        {copied ? '[copied!]' : '[click to copy]'}
                      </span>
                    </button>
                  </div>

                  {/* Status Indicator */}
                  <div className="flex items-center gap-3 font-mono text-xs opacity-80">
                    <span className="relative flex h-2.5 w-2.5">
                      <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-brand-primary opacity-75"></span>
                      <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-brand-primary"></span>
                    </span>
                    <span>STATUS: CURRENTLY ACTIVE</span>
                  </div>
                </div>

                {/* Social Networks List */}
                <div className="border-t border-brand-primary/30 pt-6">
                  <p className="text-[0.65rem] tracking-[0.18em] uppercase font-mono opacity-60 mb-3">
                    networks
                  </p>
                    <ul className="flex flex-col gap-2">
                      <li>
                        <a
                          href={personal.contact.github}
                          target="_blank"
                          rel="noreferrer noopener"
                          className="group/roll inline-flex items-center gap-2 text-base uppercase tracking-wider hover:opacity-75 transition-opacity"
                        >
                          <RollText text="github" />
                          <span>↗</span>
                        </a>
                      </li>
                      <li>
                        <a
                          href={personal.contact.facebook}
                          target="_blank"
                          rel="noreferrer noopener"
                          className="group/roll inline-flex items-center gap-2 text-base uppercase tracking-wider hover:opacity-75 transition-opacity"
                        >
                          <RollText text="facebook" />
                          <span>↗</span>
                        </a>
                      </li>
                      <li>
                        <a
                          href={personal.contact.instagram}
                          target="_blank"
                          rel="noreferrer noopener"
                          className="group/roll inline-flex items-center gap-2 text-base uppercase tracking-wider hover:opacity-75 transition-opacity"
                        >
                          <RollText text="instagram" />
                          <span>↗</span>
                        </a>
                      </li>
                    </ul>
                </div>
              </div>

              {/* Right Column: Interactive Contact Form */}
              <div className="col-span-4 md:col-span-6 p-4 md:p-8 py-12 md:py-16">
                <p className="text-[0.7rem] font-bold tracking-[0.18em] uppercase opacity-75 mb-3">
                  message dispatch
                </p>
                <h3 className="text-3xl md:text-4xl font-bold tracking-[-0.04em] mb-8">
                  Send a Message
                </h3>

                {formSubmitted ? (
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="border border-brand-primary/50 p-6 md:p-8 bg-brand-primary/5 text-left"
                  >
                    <div className="flex items-center gap-3 font-mono text-xs opacity-75 mb-3">
                      <span className="relative flex h-2 w-2">
                        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-brand-primary opacity-75"></span>
                        <span className="relative inline-flex rounded-full h-2 w-2 bg-brand-primary"></span>
                      </span>
                      <span>// DISPATCH STATUS: PROCESSED</span>
                    </div>

                    <h4 className="text-2xl md:text-3xl font-bold tracking-tight mb-2">
                      Transmission Dispatched
                    </h4>
                    <p className="text-base leading-relaxed opacity-85 mb-6">
                      Thank you for reaching out, <span className="font-semibold">{formData.name || 'there'}</span>. Your message has been queued for dispatch to <span className="font-mono text-sm underline">{personal.contact.email}</span>.
                    </p>

                    {/* Transmission Metadata Log */}
                    <div className="border border-brand-primary/30 bg-brand-primary/[0.03] p-4 font-mono text-xs mb-6 space-y-1.5 opacity-90 overflow-x-auto">
                      <div className="flex justify-between border-b border-brand-primary/20 pb-1 text-[0.65rem] tracking-wider uppercase opacity-60">
                        <span>Transmission Manifest</span>
                        <span>Direct Channel</span>
                      </div>
                      <p><span className="opacity-50">RECIPIENT:</span> {personal.contact.email}</p>
                      <p><span className="opacity-50">SENDER:   </span> {formData.name} &lt;{formData.email}&gt;</p>
                      <p><span className="opacity-50">SUBJECT:  </span> {formData.subject || '(None provided)'}</p>
                    </div>

                    {/* Dual Action Options */}
                    <div className="flex flex-col sm:flex-row gap-3 mb-6">
                      <a
                        href={getMailtoUrl()}
                        className="inline-flex items-center justify-center gap-2 border border-brand-primary bg-brand-primary text-brand-cream px-4 py-2.5 font-mono text-xs uppercase tracking-wider hover:opacity-90 transition-opacity text-center cursor-pointer"
                      >
                        <span>Open in Email Client</span>
                        <span>↗</span>
                      </a>
                      <button
                        type="button"
                        onClick={handleCopyTransmission}
                        className="inline-flex items-center justify-center gap-2 border border-brand-primary/50 px-4 py-2.5 font-mono text-xs uppercase tracking-wider hover:bg-brand-primary hover:text-brand-cream transition-colors text-center cursor-pointer"
                      >
                        <span>{copiedTransmission ? 'Transmission Copied!' : 'Copy Formatted Text'}</span>
                      </button>
                    </div>

                    <button
                      type="button"
                      onClick={() => {
                        setFormSubmitted(false);
                        setFormData({ name: '', email: '', subject: '', message: '' });
                      }}
                      className="font-mono text-xs uppercase opacity-70 hover:opacity-100 underline transition-opacity cursor-pointer"
                    >
                      ← Send another transmission
                    </button>
                  </motion.div>
                ) : (
                  <form onSubmit={handleSubmit} className="flex flex-col gap-6">
                    <div>
                      <label className="block text-[0.65rem] tracking-[0.18em] uppercase font-mono opacity-70 mb-2">
                        Your Name *
                      </label>
                      <input
                        type="text"
                        required
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        placeholder="e.g. Alex Morgan"
                        className="w-full bg-transparent border border-brand-primary/50 p-3 text-base text-brand-primary focus:outline-none focus:border-brand-primary focus:ring-1 focus:ring-brand-primary transition-colors"
                      />
                    </div>

                    <div>
                      <label className="block text-[0.65rem] tracking-[0.18em] uppercase font-mono opacity-70 mb-2">
                        Email Address *
                      </label>
                      <input
                        type="email"
                        required
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        placeholder="e.g. alex@example.com"
                        className="w-full bg-transparent border border-brand-primary/50 p-3 text-base text-brand-primary focus:outline-none focus:border-brand-primary focus:ring-1 focus:ring-brand-primary transition-colors"
                      />
                    </div>

                    <div>
                      <label className="block text-[0.65rem] tracking-[0.18em] uppercase font-mono opacity-70 mb-2">
                        Subject / Domain *
                      </label>
                      <input
                        type="text"
                        required
                        value={formData.subject}
                        onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                        placeholder="e.g. Software Development Opportunity / Systems Project"
                        className="w-full bg-transparent border border-brand-primary/50 p-3 text-base text-brand-primary focus:outline-none focus:border-brand-primary focus:ring-1 focus:ring-brand-primary transition-colors"
                      />
                    </div>

                    <div>
                      <label className="block text-[0.65rem] tracking-[0.18em] uppercase font-mono opacity-70 mb-2">
                        Message *
                      </label>
                      <textarea
                        rows={5}
                        required
                        value={formData.message}
                        onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                        placeholder="Describe the opportunity or engineering problem..."
                        className="w-full bg-transparent border border-brand-primary/50 p-3 text-base text-brand-primary focus:outline-none focus:border-brand-primary focus:ring-1 focus:ring-brand-primary transition-colors resize-none"
                      />
                    </div>

                    <div className="flex flex-col gap-4">
                      <button
                        type="submit"
                        disabled={isSubmitting}
                        className="group/cta relative inline-block overflow-hidden border border-brand-primary/50 px-6 py-3.5 text-lg leading-[1.3] tracking-[0.06em] uppercase transition-colors hover:bg-brand-primary hover:text-brand-cream cursor-pointer self-start disabled:opacity-50 disabled:cursor-wait"
                      >
                        {isSubmitting ? (
                          <span className="flex items-center gap-2 font-mono text-sm tracking-widest">
                            <span className="inline-block h-2 w-2 rounded-full bg-brand-primary animate-ping" />
                            TRANSMITTING...
                          </span>
                        ) : (
                          <>
                            <span className="block transition-transform duration-[450ms] ease-[cubic-bezier(0.65,0,0.35,1)] group-hover/cta:-translate-y-[200%]">
                              transmit message
                            </span>
                            <span
                              className="absolute inset-0 flex translate-y-full items-center justify-center transition-transform duration-[450ms] ease-[cubic-bezier(0.65,0,0.35,1)] group-hover/cta:translate-y-0"
                              aria-hidden="true"
                            >
                              transmit message
                            </span>
                          </>
                        )}
                      </button>

                      {/* Direct Fallback Link */}
                      <div className="pt-3 border-t border-brand-primary/20 text-xs font-mono opacity-70 flex flex-col sm:flex-row sm:items-center justify-between gap-2">
                        <span>// DIRECT DISPATCH CHANNEL</span>
                        <a
                          href={`mailto:${personal.contact.email}?subject=Direct%20Inquiry%20via%20Portfolio`}
                          className="underline hover:opacity-100 transition-opacity"
                        >
                          Send directly via {personal.contact.email} ↗
                        </a>
                      </div>
                    </div>
                  </form>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
