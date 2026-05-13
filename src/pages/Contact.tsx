import { Mail, MessageCircle, Send } from 'lucide-react';
import { FormEvent, useState } from 'react';
import AnimatedPage from '../components/AnimatedPage';
import SectionHeader from '../components/SectionHeader';

type FormState = {
  name: string;
  email: string;
  subject: string;
  message: string;
};

const initialForm: FormState = { name: '', email: '', subject: '', message: '' };

export default function Contact() {
  const [form, setForm] = useState<FormState>(initialForm);
  const [errors, setErrors] = useState<Partial<FormState>>({});
  const [submitted, setSubmitted] = useState(false);

  const validate = () => {
    const nextErrors: Partial<FormState> = {};
    if (!form.name.trim()) nextErrors.name = 'Name is required.';
    if (!/^\S+@\S+\.\S+$/.test(form.email)) nextErrors.email = 'Enter a valid email address.';
    if (!form.subject.trim()) nextErrors.subject = 'Subject is required.';
    if (form.message.trim().length < 10) nextErrors.message = 'Message should be at least 10 characters.';
    return nextErrors;
  };

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const validationErrors = validate();
    setErrors(validationErrors);

    if (Object.keys(validationErrors).length === 0) {
      setSubmitted(true);
      setForm(initialForm);
    }
  };

  return (
    <AnimatedPage>
      <section className="section-padding bg-slate-50 dark:bg-navy-950">
        <div className="container-page">
          <SectionHeader eyebrow="Contact" title="Have a question about beginner crypto education?" description="Send a message about resources, blog topics, or general spot trading education questions." />
          <div className="grid gap-8 lg:grid-cols-[0.9fr_1.1fr]">
            <div className="grid gap-5">
              <div className="premium-card">
                <Mail className="mb-4 text-blue-600 dark:text-blue-400" size={28} />
                <h3 className="text-xl font-bold text-slate-950 dark:text-white">Education inquiries</h3>
                <p className="mt-3 text-sm leading-6 text-slate-600 dark:text-slate-300">Ask about beginner guides, trading journal structure, risk management basics, or future educational content.</p>
              </div>
              <div className="premium-card">
                <MessageCircle className="mb-4 text-emerald-600 dark:text-emerald-400" size={28} />
                <h3 className="text-xl font-bold text-slate-950 dark:text-white">Professional tone</h3>
                <p className="mt-3 text-sm leading-6 text-slate-600 dark:text-slate-300">This website keeps communication serious, clear, and focused on responsible learning.</p>
              </div>
            </div>

            <form onSubmit={handleSubmit} className="premium-card space-y-5" noValidate>
              {submitted && (
                <div className="rounded-2xl border border-emerald-200 bg-emerald-50 p-4 text-sm font-medium text-emerald-800 dark:border-emerald-400/20 dark:bg-emerald-500/10 dark:text-emerald-200">
                  Message received. This demo form shows success without a backend.
                </div>
              )}

              <div className="grid gap-5 sm:grid-cols-2">
                <label className="grid gap-2 text-sm font-medium text-slate-700 dark:text-slate-200">
                  Name
                  <input className="input-field" value={form.name} onChange={(e) => setForm({ ...form, name: e.target.value })} placeholder="Your name" />
                  {errors.name && <span className="text-xs text-red-500">{errors.name}</span>}
                </label>
                <label className="grid gap-2 text-sm font-medium text-slate-700 dark:text-slate-200">
                  Email
                  <input className="input-field" value={form.email} onChange={(e) => setForm({ ...form, email: e.target.value })} placeholder="you@example.com" />
                  {errors.email && <span className="text-xs text-red-500">{errors.email}</span>}
                </label>
              </div>

              <label className="grid gap-2 text-sm font-medium text-slate-700 dark:text-slate-200">
                Subject
                <input className="input-field" value={form.subject} onChange={(e) => setForm({ ...form, subject: e.target.value })} placeholder="How can we help?" />
                {errors.subject && <span className="text-xs text-red-500">{errors.subject}</span>}
              </label>

              <label className="grid gap-2 text-sm font-medium text-slate-700 dark:text-slate-200">
                Message
                <textarea className="input-field min-h-36 resize-y" value={form.message} onChange={(e) => setForm({ ...form, message: e.target.value })} placeholder="Write your message..." />
                {errors.message && <span className="text-xs text-red-500">{errors.message}</span>}
              </label>

              <button type="submit" className="button-primary w-full sm:w-auto"><Send className="mr-2" size={17} /> Send Message</button>
            </form>
          </div>
        </div>
      </section>
    </AnimatedPage>
  );
}
