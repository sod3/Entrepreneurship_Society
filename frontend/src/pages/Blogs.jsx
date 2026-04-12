import { useState } from 'react';
import { motion } from 'framer-motion';
import NotifyModal from '../components/NotifyModal';

const categories = ['All', 'Growth', 'Product', 'Marketing', 'Tech', 'Mindset'];

const blogs = [
  { thumb: 'from-blue-100 to-blue-50', icon: '📈', cat: 'Growth', title: 'How We Got Our First 100 Users Without Spending a Rupee', excerpt: 'A step-by-step breakdown of the guerrilla growth tactics that actually worked on a zero budget.', author: 'Ahmad Khan', initials: 'AK', read: '5 min read' },
  { thumb: 'from-amber-100 to-amber-50', icon: '🎯', cat: 'Product', title: 'The Only Validation Framework You will Ever Need', excerpt: 'Stop building in the dark. Here is how to validate your idea before writing a single line of code.', author: 'Sara Farooq', initials: 'SF', read: '7 min read' },
  { thumb: 'from-emerald-100 to-emerald-50', icon: '🤝', cat: 'Mindset', title: 'Finding Co-Founders: What I Wish Someone Told Me', excerpt: 'The co-founder search is brutal. Here is a framework for finding the right person and avoiding costly mistakes.', author: 'Maha Raza', initials: 'MR', read: '6 min read' },
  { thumb: 'from-violet-100 to-violet-50', icon: '🤖', cat: 'Tech', title: 'Building Your First AI Product as a Non-Technical Founder', excerpt: 'You don not need to code. Here is how to build an AI-powered product using no-code tools and smart prompting.', author: 'Zain Ahmed', initials: 'ZA', read: '8 min read' },
  { thumb: 'from-rose-100 to-rose-50', icon: '💸', cat: 'Marketing', title: 'Social Media That Actually Converts — A Student Founder Playbook', excerpt: 'Forget vanity metrics. This is how we built an audience that actually buys.', author: 'Hira Ali', initials: 'HA', read: '4 min read' },
  { thumb: 'from-teal-100 to-teal-50', icon: '🏗️', cat: 'Product', title: 'Ship in 7 Days: The Minimal Viable Launch Framework', excerpt: 'Perfectionism kills startups. Ship your product in one week and start learning from real users.', author: 'Omar Usman', initials: 'OU', read: '6 min read' },
];

export default function Blogs() {
  const [activeCat, setActiveCat]       = useState('All');
  const [modalOpen, setModalOpen]       = useState(false);
  const [blogNotified, setBlogNotified] = useState(false);

  const filtered = activeCat === 'All' ? blogs : blogs.filter(b => b.cat === activeCat);

  const handleBlogModalClose = () => {
    setModalOpen(false);
    setBlogNotified(true);
  };

  return (
    <div style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}>

      {/* ── HERO ── */}
      <section className="relative overflow-hidden" style={{ background: 'linear-gradient(135deg,#0A0F1E 0%,#1a1f3a 45%,#0c1a3a 100%)', padding: '68px 28px 84px' }}>
        <div className="absolute top-0 right-0 pointer-events-none rounded-full"
          style={{ width: 500, height: 500, background: 'radial-gradient(circle,rgba(37,99,235,0.2) 0%,transparent 70%)', transform: 'translate(30%,-30%)' }} />
        <div className="absolute inset-0 pointer-events-none"
          style={{ backgroundImage: 'radial-gradient(rgba(255,255,255,0.055) 1px,transparent 1px)', backgroundSize: '28px 28px' }} />
        <div className="max-w-5xl mx-auto relative z-10">
          <div className="inline-flex items-center gap-1.5 px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-widest mb-5"
            style={{ background: 'rgba(255,255,255,0.1)', border: '1px solid rgba(255,255,255,0.15)', color: 'rgba(255,255,255,0.75)' }}>
            ✍️ Blogs
          </div>
          <h1 className="mb-4" style={{ fontFamily: "'Clash Display', sans-serif", fontSize: 'clamp(2.2rem,5vw,3.4rem)', fontWeight: 700, lineHeight: 1.1, letterSpacing: '-.03em', color: '#fff' }}>
            Learn from builders<br />who've done it.
          </h1>
          <p style={{ fontSize: 16, color: 'rgba(255,255,255,0.5)', maxWidth: 460, lineHeight: 1.78 }}>
            Real playbooks, honest case studies, and growth strategies — written by founders, for founders.
          </p>
        </div>
      </section>

      {/* ── BODY ── */}
      <div className="max-w-5xl mx-auto px-7 py-14">

        {/* ── BLOG NOTIFY STRIP ── */}
        <div className="flex items-center gap-5 rounded-2xl px-6 py-5 mb-10 flex-wrap"
          style={{ background: 'linear-gradient(135deg,#EFF6FF,#DBEAFE)', border: '1px solid #BFDBFE' }}>
          <div className="w-12 h-12 bg-white rounded-[14px] flex items-center justify-center text-2xl flex-shrink-0 shadow-sm">✍️</div>
          <div className="flex-1 min-w-0">
            <strong className="block text-sm font-bold text-blue-900" style={{ fontFamily: "'Clash Display', sans-serif" }}>
              Get notified when new blogs drop
            </strong>
            <span className="text-xs text-blue-600">Be the first to read our next playbook, case study, or founder story.</span>
          </div>
          {blogNotified ? (
            <div className="px-5 py-2.5 rounded-full text-sm font-semibold"
              style={{ background: '#ECFDF5', color: '#065F46', border: '1.5px solid #6EE7B7' }}>
              ✓ You're subscribed!
            </div>
          ) : (
            <motion.button
              onClick={() => setModalOpen(true)}
              className="px-5 py-2.5 rounded-full text-sm font-bold text-white transition-all flex-shrink-0"
              style={{ background: 'linear-gradient(135deg,#2563EB,#1D4ED8)', fontFamily: "'Clash Display', sans-serif", boxShadow: '0 4px 14px rgba(37,99,235,0.3)' }}
              whileHover={{ y: -1, boxShadow: '0 8px 24px rgba(37,99,235,0.4)' }}
              whileTap={{ scale: 0.97 }}>
              🔔 Notify Me
            </motion.button>
          )}
        </div>

        {/* ── CATEGORY FILTER ── */}
        <div className="flex gap-2 flex-wrap mb-10">
          {categories.map(cat => (
            <button key={cat} onClick={() => setActiveCat(cat)}
              className="px-5 py-2 rounded-full text-sm font-semibold border transition-all duration-200"
              style={activeCat === cat
                ? { background: '#2563EB', color: '#fff', borderColor: '#2563EB' }
                : { background: '#fff', color: '#3D4A6B', borderColor: '#E4E9F5' }
              }>
              {cat}
            </button>
          ))}
        </div>

        {/* ── BLOG GRID ── */}
        <div className="grid gap-5" style={{ gridTemplateColumns: 'repeat(auto-fill,minmax(300px,1fr))' }}>
          {filtered.map(({ thumb, icon, cat, title, excerpt, author, initials, read }, i) => (
            <motion.div key={title}
              className="bg-white rounded-[22px] border border-slate-200 overflow-hidden cursor-pointer transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:border-blue-200"
              initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: i * 0.05, duration: 0.4 }}>
              {/* Thumbnail */}
              <div className={`h-40 flex items-center justify-center relative bg-gradient-to-br ${thumb}`}>
                <span style={{ fontSize: 52 }}>{icon}</span>
                <span className="absolute top-3 right-3 text-[10px] font-bold uppercase tracking-wider px-3 py-1.5 rounded-full text-white"
                  style={{ background: 'rgba(0,0,0,0.45)', backdropFilter: 'blur(4px)' }}>
                  Coming Soon
                </span>
              </div>
              {/* Content */}
              <div className="p-5">
                <div className="text-[10px] font-bold uppercase tracking-wider text-blue-600 mb-2">{cat}</div>
                <h3 className="mb-2 leading-snug" style={{ fontFamily: "'Clash Display', sans-serif", fontSize: 15, fontWeight: 600, color: '#0A0F1E' }}>{title}</h3>
                <p className="text-slate-500 text-xs leading-relaxed mb-4">{excerpt}</p>
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <div className="w-7 h-7 rounded-full flex items-center justify-center text-xs font-bold text-white"
                      style={{ background: 'linear-gradient(135deg,#2563EB,#60A5FA)' }}>{initials}</div>
                    <span className="text-xs text-slate-500 font-medium">{author}</span>
                  </div>
                  <span className="text-xs text-slate-400">{read}</span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {filtered.length === 0 && (
          <div className="text-center py-16 text-slate-400 text-sm">No posts in this category yet — check back soon!</div>
        )}
      </div>

      {/* ── BLOG NOTIFY MODAL ── */}
      <NotifyModal
        open={modalOpen}
        onClose={handleBlogModalClose}
        title="Get notified on new blogs"
        subtitle="Drop your email and we'll ping you the moment a new post goes live — no spam, ever."
        icon="✍️"
        iconBg="bg-blue-50"
        endpoint="/api/notify/blog"
        extra={{}}
      />
    </div>
  );
}
