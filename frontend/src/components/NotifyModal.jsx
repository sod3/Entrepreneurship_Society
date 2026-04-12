import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

/**
 * NotifyModal — reusable modal for event + blog notification sign-ups.
 *
 * Props:
 *   open       boolean          — controls visibility
 *   onClose    () => void       — called when user dismisses
 *   title      string           — modal headline
 *   subtitle   string           — modal body copy
 *   icon       string           — emoji shown at top
 *   iconBg     string           — tailwind bg class, e.g. "bg-blue-50"
 *   endpoint   string           — POST URL, e.g. "/api/notify/event"
 *   extra      object           — extra fields merged into POST body (e.g. { eventName })
 */
export default function NotifyModal({ open, onClose, title, subtitle, icon, iconBg = 'bg-blue-50', endpoint, extra = {} }) {
  const [email, setEmail]   = useState('');
  const [phone, setPhone]   = useState('');
  const [loading, setLoading] = useState(false);
  const [done, setDone]     = useState(false);
  const [error, setError]   = useState('');

  // Reset state when modal opens
  useEffect(() => {
    if (open) { setEmail(''); setPhone(''); setLoading(false); setDone(false); setError(''); }
  }, [open]);

  // Close on Escape
  useEffect(() => {
    const handler = (e) => { if (e.key === 'Escape') onClose(); };
    window.addEventListener('keydown', handler);
    return () => window.removeEventListener('keydown', handler);
  }, [onClose]);

  const isValid = email.trim().length > 3 && email.includes('@');

  const handleSubmit = async () => {
    if (!isValid || loading) return;
    setLoading(true);
    setError('');
    try {
      const res = await fetch(`http://localhost:4000${endpoint}`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email: email.trim(), phone: phone.trim(), ...extra }),
      });
      
      const data = await res.json().catch(() => null);

      if (!res.ok) throw new Error(data?.error || 'Server error');
      
      if (data?.duplicate) {
        setError('You have already applied. If you want to apply for someone else, enter his email.');
        return;
      }

      setDone(true);
      setTimeout(() => onClose(true), 2800);
    } catch (err) {
      setError(err.message === 'Failed to fetch' ? 'Server is unreachable.' : err.message || 'Something went wrong.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <AnimatePresence>
      {open && (
        <motion.div
          className="fixed inset-0 z-50 flex items-center justify-center p-4"
          style={{ background: 'rgba(10,15,30,0.6)', backdropFilter: 'blur(5px)' }}
          initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
          onClick={(e) => e.target === e.currentTarget && onClose()}
        >
          <motion.div
            className="bg-white rounded-[28px] p-9 w-full max-w-md relative shadow-2xl"
            initial={{ scale: 0.88, y: 24, opacity: 0 }}
            animate={{ scale: 1, y: 0, opacity: 1 }}
            exit={{ scale: 0.92, y: 12, opacity: 0 }}
            transition={{ type: 'spring', bounce: 0.35, duration: 0.45 }}
          >
            {/* Close */}
            <button onClick={onClose}
              className="absolute top-4 right-4 w-8 h-8 rounded-full bg-slate-100 flex items-center justify-center text-slate-400 hover:bg-red-500 hover:text-white transition-all text-sm">
              ✕
            </button>

            <AnimatePresence mode="wait">
              {done ? (
                <motion.div key="done" className="text-center py-3"
                  initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} transition={{ type: 'spring', bounce: 0.4 }}>
                  <motion.div className="text-5xl mb-4" animate={{ scale: [1, 1.2, 1] }} transition={{ delay: 0.2, duration: 0.5 }}>🎉</motion.div>
                  <h3 style={{ fontFamily: "'Clash Display',sans-serif", fontSize: 22, fontWeight: 700, color: '#065F46', marginBottom: 8 }}>
                    You're on the list!
                  </h3>
                  <p className="text-slate-400 text-sm leading-relaxed">
                    We'll reach out as soon as the details are confirmed. Keep an eye on your inbox!
                  </p>
                </motion.div>
              ) : (
                <motion.div key="form" initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
                  {/* Icon */}
                  <div className={`w-14 h-14 ${iconBg} rounded-[18px] flex items-center justify-center text-2xl mb-5`}>{icon}</div>

                  <h2 style={{ fontFamily: "'Clash Display',sans-serif", fontSize: 20, fontWeight: 700, color: '#0A0F1E', marginBottom: 6 }}>
                    {title}
                  </h2>
                  <p className="text-slate-400 text-sm leading-relaxed mb-6">{subtitle}</p>

                  {/* Email */}
                  <div className="mb-4">
                    <label className="block text-xs font-bold text-slate-500 uppercase tracking-widest mb-1.5">
                      Email Address <span className="text-red-400">*</span>
                    </label>
                    <div className="relative">
                      <span className="absolute left-3.5 top-1/2 -translate-y-1/2 pointer-events-none" style={{ fontSize: 15 }}>✉️</span>
                      <input type="email" value={email} onChange={e => setEmail(e.target.value)}
                        onKeyDown={e => e.key === 'Enter' && handleSubmit()}
                        placeholder="you@email.com"
                        className="w-full pl-10 pr-4 py-3 rounded-xl border border-slate-200 bg-slate-50 text-sm text-slate-900 placeholder-slate-400 outline-none focus:border-blue-500 focus:ring-4 focus:ring-blue-50 focus:bg-white transition-all" />
                    </div>
                  </div>

                  {/* Phone */}
                  <div className="mb-6">
                    <label className="block text-xs font-bold text-slate-500 uppercase tracking-widest mb-1.5">
                      WhatsApp Number{' '}
                      <span className="normal-case text-slate-400 font-normal tracking-normal">(optional)</span>
                    </label>
                    <div className="relative">
                      <span className="absolute left-3.5 top-1/2 -translate-y-1/2 pointer-events-none" style={{ fontSize: 15 }}>📱</span>
                      <input type="tel" value={phone} onChange={e => setPhone(e.target.value)}
                        placeholder="+92 300 0000000"
                        className="w-full pl-10 pr-4 py-3 rounded-xl border border-slate-200 bg-slate-50 text-sm text-slate-900 placeholder-slate-400 outline-none focus:border-blue-500 focus:ring-4 focus:ring-blue-50 focus:bg-white transition-all" />
                    </div>
                    <p className="text-xs text-slate-400 mt-1">We'll only message you on WhatsApp if you provide it.</p>
                  </div>

                  {error && <p className="text-xs text-red-500 mb-3">{error}</p>}

                  <motion.button onClick={handleSubmit} disabled={!isValid || loading}
                    className="w-full py-3.5 rounded-xl text-white font-bold text-sm flex items-center justify-center gap-2 transition-all disabled:opacity-40 disabled:cursor-not-allowed"
                    style={{ background: 'linear-gradient(135deg,#2563EB,#1D4ED8)', fontFamily: "'Clash Display',sans-serif" }}
                    whileHover={isValid ? { y: -1, boxShadow: '0 10px 30px rgba(37,99,235,0.38)' } : {}}
                    whileTap={isValid ? { scale: 0.98 } : {}}>
                    {loading
                      ? <><div className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />Submitting...</>
                      : 'Notify Me →'}
                  </motion.button>
                </motion.div>
              )}
            </AnimatePresence>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
