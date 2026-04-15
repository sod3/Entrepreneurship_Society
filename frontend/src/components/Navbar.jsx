import React, { useState, useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 12);
    window.addEventListener('scroll', handler);
    return () => window.removeEventListener('scroll', handler);
  }, []);

  const linkClass = ({ isActive }) =>
    `px-4 py-2 rounded-full text-sm font-medium transition-all duration-200 ${
      isActive
        ? 'text-blue-600 bg-blue-50 font-semibold'
        : 'text-slate-600 hover:text-blue-600 hover:bg-blue-50'
    }`;

  const mobileLinkClass = ({ isActive }) =>
    `block px-4 py-3 rounded-xl text-base font-medium transition-all duration-200 ${
      isActive
        ? 'text-blue-600 bg-blue-50 font-semibold'
        : 'text-slate-600 hover:text-blue-600 hover:bg-slate-50'
    }`;

  return (
    <nav
      className="sticky top-0 z-50 transition-all duration-300"
      style={{
        background: scrolled ? 'rgba(255,255,255,0.92)' : 'rgba(255,255,255,0.85)',
        backdropFilter: 'blur(16px)',
        WebkitBackdropFilter: 'blur(16px)',
        borderBottom: '1px solid #E4E9F5',
        boxShadow: scrolled ? '0 4px 24px rgba(10,15,30,0.07)' : 'none',
      }}
    >
      <div className="max-w-5xl mx-auto px-6 h-[68px] flex items-center justify-between">
        {/* Logo */}
        <NavLink
          to="/"
          className="flex items-center gap-2 no-underline z-50"
          style={{ fontFamily: "'Clash Display', sans-serif", fontSize: 20, fontWeight: 700, color: '#0A0F1E', textDecoration: 'none' }}
          onClick={() => setMobileMenuOpen(false)}
        >
          <img src="/logo.png" alt="Logo" className="w-8 h-8" />
          <span className="hidden sm:inline">Entrepreneur Society</span>
          <span className="sm:hidden">Gutech ES</span>
        </NavLink>

        {/* Desktop Links */}
        <div className="hidden md:flex items-center gap-1">
          <NavLink to="/"       className={linkClass}>Home</NavLink>
          <NavLink to="/events" className={linkClass}>Events</NavLink>
          <NavLink to="/blogs"  className={linkClass}>Blogs</NavLink>
          <NavLink
            to="/apply"
            className="ml-3 px-5 py-2.5 rounded-full text-sm font-bold text-white transition-all duration-200 hover:-translate-y-0.5"
            style={{
              background: 'linear-gradient(135deg,#2563EB,#1D4ED8)',
              boxShadow: '0 4px 14px rgba(37,99,235,0.3)',
              textDecoration: 'none',
            }}
          >
            Apply Now →
          </NavLink>
        </div>

        {/* Mobile Toggle Button */}
        <button
          className="md:hidden relative z-50 w-10 h-10 flex flex-col justify-center items-center gap-1.5 rounded-full bg-slate-50 border border-slate-200 text-slate-700"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          <span className={`block w-5 h-0.5 bg-current transition-transform duration-300 ${mobileMenuOpen ? 'rotate-45 translate-y-2' : ''}`} />
          <span className={`block w-5 h-0.5 bg-current transition-opacity duration-300 ${mobileMenuOpen ? 'opacity-0' : ''}`} />
          <span className={`block w-5 h-0.5 bg-current transition-transform duration-300 ${mobileMenuOpen ? '-rotate-45 -translate-y-2' : ''}`} />
        </button>
      </div>

      {/* Mobile Menu Dropdown */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="md:hidden absolute top-[68px] left-0 w-full bg-white border-b border-slate-200 shadow-xl overflow-hidden"
          >
            <div className="px-6 py-4 flex flex-col gap-2">
              <NavLink to="/" className={mobileLinkClass} onClick={() => setMobileMenuOpen(false)}>Home</NavLink>
              <NavLink to="/events" className={mobileLinkClass} onClick={() => setMobileMenuOpen(false)}>Events</NavLink>
              <NavLink to="/blogs" className={mobileLinkClass} onClick={() => setMobileMenuOpen(false)}>Blogs</NavLink>
              <NavLink
                to="/apply"
                onClick={() => setMobileMenuOpen(false)}
                className="mt-2 block w-full text-center px-5 py-3.5 rounded-xl text-base font-bold text-white transition-all duration-200 active:scale-95"
                style={{
                  background: 'linear-gradient(135deg,#2563EB,#1D4ED8)',
                  boxShadow: '0 4px 14px rgba(37,99,235,0.3)',
                  textDecoration: 'none',
                }}
              >
                Apply Now →
              </NavLink>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
