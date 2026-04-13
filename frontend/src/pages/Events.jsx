import { useState } from 'react';
import { motion } from 'framer-motion';
import NotifyModal from '../components/NotifyModal';

const events = [
  {
    icon: '💡', iconBg: 'bg-orange-50', badgeBg: 'bg-orange-50', badgeText: 'text-orange-700',
    badgeLabel: 'Thursday, 16th April', // Custom badge text for this event
    title: 'How to Identify Real Startup Problems (That People Will Pay For)',
    desc: 'Learn how to identify real-world problems people actually face and validate ideas that can turn into profitable startups.',
    tags: ['90 Minutes', 'Hands-on', 'Free'],
    modalIcon: '💡', modalIconBg: 'bg-orange-50',
  },
  {
    icon: '🔍', iconBg: 'bg-blue-50', badgeBg: 'bg-blue-50', badgeText: 'text-blue-700',
    badgeLabel: 'Coming Soon', // Custom badge text for this event
    title: 'Problem Validation Bootcamp',
    desc: 'Validate your startup idea through real user interviews, market research, and feedback to ensure people will actually pay for your solution.',
    tags: ['2 Hours', 'Interactive', 'Beginner Friendly'],
    modalIcon: '🔍', modalIconBg: 'bg-blue-50',
  },
  {
    icon: '🧠', iconBg: 'bg-purple-50', badgeBg: 'bg-purple-50', badgeText: 'text-purple-700',
    badgeLabel: 'Coming Soon', // Custom badge text for this event
    title: 'MVP Building Workshop',
    desc: 'Turn your ideas into reality by building a Minimum Viable Product using no-code tools or modern development stacks.',
    tags: ['3 Hours', 'Practical', 'Build Session'],
    modalIcon: '🧠', modalIconBg: 'bg-purple-50',
  },
  {
    icon: '⚡', iconBg: 'bg-yellow-50', badgeBg: 'bg-yellow-50', badgeText: 'text-yellow-700',
    badgeLabel: 'Coming Soon', // You can also keep "Coming Soon" for some
    title: 'Startup Hackathon',
    desc: 'Collaborate in teams to build innovative solutions to real-world problems within a limited time and compete for exciting prizes.',
    tags: ['24-48 Hours', 'Team Event', 'Competition'],
    modalIcon: '⚡', modalIconBg: 'bg-yellow-50',
  },
  {
    icon: '🎤',
    iconBg: 'bg-pink-50',
    badgeBg: 'bg-pink-50',
    badgeText: 'text-pink-700',
    badgeLabel: 'Coming Soon', // Custom badge text for this event
    title: 'Startup Pitch Day',
    desc: 'Present your startup idea to industry experts, get valuable feedback, and compete to win recognition and rewards.',
    tags: ['Pitching', 'Judged Event', 'Networking'],
    modalIcon: '🎤',
    modalIconBg: 'bg-pink-50',
  },
  {
    icon: '💸',
    iconBg: 'bg-green-50',
    badgeBg: 'bg-green-50',
    badgeText: 'text-green-700',
    badgeLabel: 'Coming Soon', // Custom badge text for this event
    title: 'First Users & Revenue Workshop',
    desc: 'Learn growth strategies, user acquisition techniques, and how to generate your first revenue without heavy investment.',
    tags: ['Growth', 'Marketing', 'Monetization'],
    modalIcon: '💸',
    modalIconBg: 'bg-green-50',
  },
  {
    icon: '🎯',
    iconBg: 'bg-indigo-50',
    badgeBg: 'bg-indigo-50',
    badgeText: 'text-indigo-700',
    badgeLabel: 'Coming Soon', // Custom badge text for this event
    title: 'Startup vs Career Session',
    desc: 'Understand the best path for your future-startup, freelancing, or job-and how to make the right decision based on your goals.',
    tags: ['Career', 'Guidance', 'Interactive'],
    modalIcon: '🎯',
    modalIconBg: 'bg-indigo-50',
  },
  {
    icon: '🤝',
    iconBg: 'bg-gray-50',
    badgeBg: 'bg-gray-50',
    badgeText: 'text-gray-700',
    badgeLabel: 'Coming Soon', // Custom badge text for this event
    title: 'Founder Networking Night',
    desc: 'Connect with like-minded individuals, find co-founders, share ideas, and build meaningful relationships in a relaxed environment.',
    tags: ['Networking', 'Community', 'Fun'],
    modalIcon: '🤝',
    modalIconBg: 'bg-gray-50',
  },
];

export default function Events() {
  const [notified, setNotified]       = useState({});
  const [modalOpen, setModalOpen]     = useState(false);
  const [activeEvent, setActiveEvent] = useState(null);

  const openNotify = (event) => {
    setActiveEvent(event);
    setModalOpen(true);
  };

  const handleModalClose = () => {
    setModalOpen(false);
    if (activeEvent) {
      setNotified(prev => ({ ...prev, [activeEvent.title]: true }));
    }
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
            📅 Events
          </div>
          <h1 className="mb-4" style={{ fontFamily: "'Clash Display', sans-serif", fontSize: 'clamp(2.2rem,5vw,3.4rem)', fontWeight: 700, lineHeight: 1.1, letterSpacing: '-.03em', color: '#fff' }}>
            Where builders<br />come together.
          </h1>
          <p style={{ fontSize: 16, color: 'rgba(255,255,255,0.5)', maxWidth: 460, lineHeight: 1.78 }}>
            Hackathons, bootcamps, demo days, and founder talks - all designed to push you further, faster.
          </p>
        </div>
      </section>

      {/* ── BODY ── */}
      <div className="max-w-5xl mx-auto px-7 py-14">

        {/* Banner */}
        <div className="flex items-center gap-4 rounded-2xl px-6 py-4 mb-10"
          style={{ background: 'linear-gradient(135deg,#FFFBEB,#FEF3C7)', border: '1px solid #FDE68A' }}>
          <span className="text-2xl">⏳</span>
          <div>
            <strong className="block text-sm font-bold text-amber-900" style={{ fontFamily: "'Clash Display', sans-serif" }}>
              Events launching very soon!
            </strong>
            <span className="text-xs text-amber-700">
              Click "Notify Me" on any event - we'll send you details the moment it's confirmed.
            </span>
          </div>
        </div>

        {/* Grid */}
        <div className="grid gap-5" style={{ gridTemplateColumns: 'repeat(auto-fit,minmax(280px,1fr))' }}>
          {events.map((ev, i) => (
            <motion.div key={ev.title}
              className="bg-white rounded-[22px] border border-slate-200 overflow-hidden transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:border-blue-200"
              initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: i * 0.07, duration: 0.4 }}>

              {/* Card header */}
              <div className="flex items-start justify-between px-6 pt-6 pb-0 gap-3">
                <div className={`w-14 h-14 rounded-[16px] ${ev.iconBg} flex items-center justify-center flex-shrink-0`} style={{ fontSize: 26 }}>
                  {ev.icon}
                </div>
                <span className={`text-[10px] font-bold uppercase tracking-wider px-3 py-1.5 rounded-full ${ev.badgeBg} ${ev.badgeText}`}>
                  {ev.badgeLabel || 'Coming Soon'} {/* Display custom badge text or fallback to "Coming Soon" */}
                </span>
              </div>

              {/* Card body */}
              <div className="px-6 py-5">
                <h3 className="mb-2" style={{ fontFamily: "'Clash Display', sans-serif", fontSize: 18, fontWeight: 600, color: '#0A0F1E' }}>
                  {ev.title}
                </h3>
                <p className="text-slate-500 text-sm leading-relaxed mb-4">{ev.desc}</p>
                <div className="flex gap-2 flex-wrap mb-4">
                  {ev.tags.map(t => (
                    <span key={t} className="text-[11px] font-semibold px-3 py-1 rounded-full bg-slate-100 text-slate-600">{t}</span>
                  ))}
                </div>

                {/* Notify button */}
                {notified[ev.title] ? (
                  <div className="w-full py-2.5 rounded-xl text-sm font-semibold text-center"
                    style={{ background: '#ECFDF5', color: '#065F46', border: '1.5px solid #6EE7B7' }}>
                    ✓ You'll be notified!
                  </div>
                ) : (
                  <motion.button
                    onClick={() => openNotify(ev)}
                    className="w-full py-2.5 rounded-xl text-sm font-semibold border border-slate-200 text-blue-600 transition-all duration-200 hover:bg-blue-600 hover:text-white hover:border-blue-600"
                    whileTap={{ scale: 0.98 }}>
                    🔔 Notify Me
                  </motion.button>
                )}
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* ── MODAL ── */}
      {activeEvent && (
        <NotifyModal
          open={modalOpen}
          onClose={handleModalClose}
          title={`Notify me for ${activeEvent.title}`}
          subtitle={`Leave your email and we'll send you all the details the moment ${activeEvent.title} is confirmed.`}
          icon={activeEvent.modalIcon}
          iconBg={activeEvent.modalIconBg}
          endpoint="/api/notify/event"
          extra={{ eventName: activeEvent.title }}
        />
      )}
    </div>
  );
}