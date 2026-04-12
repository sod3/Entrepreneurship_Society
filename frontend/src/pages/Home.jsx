import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

const features = [
  { icon: '🚀', bg: 'bg-blue-50', title: 'Launch Programs', desc: 'Structured cohorts to take your idea from sketch to live product with real users.', accent: 'from-blue-600 to-blue-400' },
  { icon: '🤝', bg: 'bg-amber-50', title: 'Team Matching', desc: 'Can not code? Need a designer? We connect builders with complementary skills so no idea dies alone.', accent: 'from-amber-500 to-amber-300' },
  { icon: '🎙️', bg: 'bg-emerald-50', title: 'Founder Talks', desc: 'fireside chats with founders, VCs, and operators. Real stories, zero corporate fluff.', accent: 'from-emerald-600 to-emerald-400' },
  { icon: '💡', bg: 'bg-violet-50', title: 'Idea Lab', desc: 'Monthly ideation sprints and hackathons where you get real-time feedback from peers and mentors.', accent: 'from-violet-600 to-violet-400' },
];

const steps = [
  { num: '01', icon: '📚', title: 'Learn', desc: 'Absorb frameworks, talk to mentors, find your problem space. Zero experience required.', tag: 'Learner', tagClass: 'bg-blue-500/20 text-blue-300 border-blue-500/35' },
  { num: '02', icon: '🏗️', title: 'Build', desc: 'Prototype, ship, and iterate with your team. Real feedback from real users - on campus.', tag: 'Builder', tagClass: 'bg-amber-500/20 text-amber-300 border-amber-500/35' },
  { num: '03', icon: '🚀', title: 'Launch', desc: 'Demo Day, funding connections, and a network that opens doors far beyond graduation.', tag: 'Founder', tagClass: 'bg-emerald-500/20 text-emerald-300 border-emerald-500/35' },
];

export default function Home() {
  return (
    <div style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}>

      {/* ── HERO ── */}
      <section
        className="relative overflow-hidden text-center"
        style={{
          background: 'linear-gradient(135deg,#0A0F1E 0%,#1a1f3a 45%,#0c1a3a 100%)',
          padding: '88px 28px 104px',
        }}
      >
        {/* glows */}
        <div className="absolute top-0 right-0 pointer-events-none rounded-full"
          style={{ width: 600, height: 600, background: 'radial-gradient(circle,rgba(37,99,235,0.22) 0%,transparent 70%)', transform: 'translate(30%,-30%)' }} />
        <div className="absolute bottom-0 left-0 pointer-events-none rounded-full"
          style={{ width: 400, height: 400, background: 'radial-gradient(circle,rgba(245,158,11,0.1) 0%,transparent 70%)', transform: 'translate(-30%,30%)' }} />
        {/* dot grid */}
        <div className="absolute inset-0 pointer-events-none"
          style={{ backgroundImage: 'radial-gradient(rgba(255,255,255,0.055) 1px,transparent 1px)', backgroundSize: '28px 28px' }} />

        <div className="relative z-10 max-w-3xl mx-auto">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
            {/* badge */}
            <div className="inline-flex items-center gap-2 px-5 py-2 rounded-full mb-7"
              style={{ background: 'rgba(255,255,255,0.07)', border: '1px solid rgba(255,255,255,0.14)' }}>
              <span className="w-2 h-2 rounded-full bg-amber-400 animate-pulse" style={{ boxShadow: '0 0 8px #F59E0B' }} />
              <span className="text-xs font-medium" style={{ color: 'rgba(255,255,255,0.82)', letterSpacing: '.04em' }}>
                Gutech Entrepreneurship Society
              </span>
            </div>

            <h1
              className="mb-5"
              style={{
                fontFamily: "'Clash Display', sans-serif",
                fontSize: 'clamp(2.6rem,6vw,4.2rem)',
                fontWeight: 700,
                lineHeight: 1.07,
                letterSpacing: '-.03em',
                color: '#fff',
              }}
            >
              Build the{' '}
              <span style={{ background: 'linear-gradient(90deg,#60A5FA,#93C5FD)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text' }}>
                next big thing
              </span>
              <br />from campus.
            </h1>

            <p className="mb-10 mx-auto" style={{ fontSize: 17, color: 'rgba(255,255,255,0.52)', lineHeight: 1.78, maxWidth: 500 }}>
              Join the premier community of student builders, innovators, and creators.
              We're shaping the next generation of founders - right here on campus.
            </p>

            <div className="flex gap-4 justify-center flex-wrap mb-14">
              <Link to="/apply"
                className="inline-block no-underline font-bold rounded-[14px] transition-all duration-250 hover:-translate-y-0.5"
                style={{
                  fontFamily: "'Clash Display', sans-serif", fontSize: 15,
                  padding: '14px 34px',
                  background: 'linear-gradient(135deg,#2563EB,#1D4ED8)',
                  color: '#fff',
                  boxShadow: '0 4px 20px rgba(37,99,235,0.38)',
                }}>
                Apply Now →
              </Link>
              <Link to="/events"
                className="inline-block no-underline font-bold rounded-[14px] transition-all duration-250 hover:-translate-y-0.5 hover:bg-white/20"
                style={{
                  fontFamily: "'Clash Display', sans-serif", fontSize: 15,
                  padding: '14px 34px',
                  background: 'rgba(255,255,255,0.08)',
                  color: '#fff',
                  border: '1px solid rgba(255,255,255,0.16)',
                  backdropFilter: 'blur(8px)',
                }}>
                See Events
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ── FEATURES ── */}
      <section className="max-w-5xl mx-auto px-7 py-20">
        <div className="inline-flex items-center gap-1.5 px-4 py-1.5 rounded-full bg-blue-50 text-blue-600 text-xs font-bold uppercase tracking-widest mb-4">
          ✦ What We Do
        </div>
        <h2 className="mb-3" style={{ fontFamily: "'Clash Display', sans-serif", fontSize: 'clamp(1.9rem,3.5vw,2.7rem)', fontWeight: 700, color: '#0A0F1E', letterSpacing: '-.025em', lineHeight: 1.2 }}>
          Everything you need<br />to go from idea → startup.
        </h2>
        <p className="mb-12 text-slate-400 text-[15px] leading-relaxed max-w-lg">We're not a club. We're a full operating system for student entrepreneurs.</p>
        <div className="grid gap-5" style={{ gridTemplateColumns: 'repeat(auto-fit,minmax(260px,1fr))' }}>
          {features.map(({ icon, bg, title, desc, accent }) => (
            <motion.div key={title}
              className={`${bg} relative overflow-hidden rounded-[22px] border border-slate-200 p-7 group transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:border-blue-200 cursor-pointer`}
              whileHover={{ y: -4 }}>
              <div className={`absolute top-0 left-0 right-0 h-[3px] rounded-t-[22px] bg-gradient-to-r ${accent} opacity-0 group-hover:opacity-100 transition-opacity duration-300`} />
              <div className="w-12 h-12 rounded-[14px] bg-white flex items-center justify-center mb-4 shadow-sm" style={{ fontSize: 22 }}>{icon}</div>
              <h3 style={{ fontFamily: "'Clash Display', sans-serif", fontSize: 17, fontWeight: 600, color: '#0A0F1E', marginBottom: 8 }}>{title}</h3>
              <p className="text-slate-500 text-sm leading-relaxed">{desc}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* ── JOURNEY BAND ── */}
      <section
        className="relative overflow-hidden py-20 px-7"
        style={{ background: 'linear-gradient(145deg,#060B18 0%,#0F1B3D 50%,#091428 100%)' }}
      >
        <div className="absolute inset-0 pointer-events-none"
          style={{ backgroundImage: 'linear-gradient(rgba(255,255,255,0.03) 1px,transparent 1px),linear-gradient(90deg,rgba(255,255,255,0.03) 1px,transparent 1px)', backgroundSize: '40px 40px' }} />
        <div className="max-w-5xl mx-auto relative z-10">
          <div className="inline-flex items-center gap-1.5 px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-widest mb-4"
            style={{ background: 'rgba(245,158,11,0.15)', border: '1px solid rgba(245,158,11,0.3)', color: '#FCD34D' }}>
            ★ The Journey
          </div>
          <h2 className="mb-3" style={{ fontFamily: "'Clash Display', sans-serif", fontSize: 'clamp(1.9rem,3.5vw,2.7rem)', fontWeight: 700, color: '#fff', letterSpacing: '-.025em', lineHeight: 1.2 }}>
            Your path from zero<br />to founder.
          </h2>
          <p className="mb-12 text-sm leading-relaxed max-w-lg" style={{ color: 'rgba(255,255,255,0.42)' }}>
            Every founder starts somewhere. Here's how we take you from curious student to company builder.
          </p>
          <div className="grid gap-5" style={{ gridTemplateColumns: 'repeat(auto-fit,minmax(240px,1fr))' }}>
            {steps.map(({ num, icon, title, desc, tag, tagClass }) => (
              <div key={title} className="relative rounded-[20px] p-7 text-center"
                style={{ background: 'rgba(255,255,255,0.05)', border: '1px solid rgba(255,255,255,0.08)' }}>
                <span className="absolute top-4 right-5 font-bold opacity-[0.07] text-white leading-none"
                  style={{ fontFamily: "'Clash Display', sans-serif", fontSize: 52 }}>{num}</span>
                <div className="text-[30px] mb-4">{icon}</div>
                <h3 className="mb-2" style={{ fontFamily: "'Clash Display', sans-serif", fontSize: 18, fontWeight: 600, color: '#fff' }}>{title}</h3>
                <p className="text-xs leading-relaxed mb-4" style={{ color: 'rgba(255,255,255,0.42)' }}>{desc}</p>
                <span className={`inline-block px-4 py-1.5 rounded-full text-xs font-bold border ${tagClass}`}
                  style={{ fontFamily: "'Clash Display', sans-serif" }}>{tag}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA ── */}
      <section className="max-w-5xl mx-auto px-7 py-20">
        <div className="relative overflow-hidden rounded-[28px] p-16 text-center"
          style={{ background: 'linear-gradient(135deg,#EFF6FF,#DBEAFE)', border: '1px solid #BFDBFE' }}>
          <div className="absolute top-0 right-0 pointer-events-none rounded-full"
            style={{ width: 300, height: 300, background: 'radial-gradient(circle,rgba(37,99,235,0.15) 0%,transparent 70%)', transform: 'translate(20%,-30%)' }} />
          <div className="relative z-10">
            <div className="inline-flex items-center gap-1.5 px-4 py-1.5 rounded-full bg-blue-100 text-blue-700 text-xs font-bold uppercase tracking-widest mb-5">
              🎯 Limited Spots
            </div>
            <h2 className="mb-3" style={{ fontFamily: "'Clash Display', sans-serif", fontSize: 'clamp(1.8rem,3vw,2.4rem)', fontWeight: 700, color: '#0A0F1E', letterSpacing: '-.025em' }}>
              Ready to start building?
            </h2>
            <p className="text-slate-500 text-sm leading-relaxed max-w-sm mx-auto mb-8">
              Applications are open. Few spots remaining apply before spots fill up.
            </p>
            <Link to="/apply"
              className="inline-block no-underline font-bold rounded-[14px] transition-all duration-250 hover:-translate-y-0.5"
              style={{
                fontFamily: "'Clash Display', sans-serif", fontSize: 15,
                padding: '14px 36px',
                background: 'linear-gradient(135deg,#2563EB,#1D4ED8)',
                color: '#fff',
                boxShadow: '0 8px 28px rgba(37,99,235,0.35)',
              }}>
              Apply Now - It's Free →
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
