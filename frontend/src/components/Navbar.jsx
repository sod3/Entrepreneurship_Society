import React, { useState, useEffect } from 'react';
import { NavLink } from 'react-router-dom';

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);

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
          className="flex items-center gap-2 no-underline"
          style={{ fontFamily: "'Clash Display', sans-serif", fontSize: 20, fontWeight: 700, color: '#0A0F1E', textDecoration: 'none' }}
        >
          <img src="/logo.png" alt="Logo" className="w-8 h-8" />
          Entrepreneur Society
        </NavLink>

        {/* Links */}
        <div className="flex items-center gap-1">
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
      </div>
    </nav>
  );
}
