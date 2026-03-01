import { useState, useEffect } from 'react';
import { useNavigate, useLocation } from '@tanstack/react-router';
import { Menu, X } from 'lucide-react';

const navLinks = [
  { label: 'About', href: '#about' },
  { label: 'Services', href: '#services' },
  { label: 'Add-Ons', href: '#addons' },
  { label: 'Gallery', href: '#gallery' },
  { label: 'Testimonials', href: '#testimonials' },
  { label: 'Book Now', href: '#booking' },
];

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();
  const isAdmin = location.pathname === '/admin';

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = (href: string) => {
    setMobileOpen(false);
    if (isAdmin) {
      navigate({ to: '/' });
      setTimeout(() => {
        const el = document.querySelector(href);
        el?.scrollIntoView({ behavior: 'smooth' });
      }, 100);
    } else {
      const el = document.querySelector(href);
      el?.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? 'bg-djblack/95 backdrop-blur-md border-b border-neon-green/20 shadow-neon-sm' : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* Logo */}
          <button
            onClick={() => navigate({ to: '/' })}
            className="flex items-center gap-2 focus:outline-none"
          >
            <img
              src="/assets/IMG_0756.png"
              alt="DJ Fizz Logo"
              className="h-12 md:h-16 w-auto object-contain"
            />
          </button>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-6">
            {navLinks.map((link) => (
              <button
                key={link.label}
                onClick={() => handleNavClick(link.href)}
                className="text-sm font-medium tracking-widest uppercase text-white/70 hover:text-neon-green transition-colors duration-200 hover:text-glow-green"
              >
                {link.label}
              </button>
            ))}
            <button
              onClick={() => navigate({ to: '/admin' })}
              className="text-xs font-medium tracking-widest uppercase text-neon-green/50 hover:text-neon-green transition-colors duration-200 border border-neon-green/20 hover:border-neon-green/50 px-3 py-1 rounded"
            >
              Admin
            </button>
          </nav>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-white hover:text-neon-green transition-colors"
            onClick={() => setMobileOpen(!mobileOpen)}
          >
            {mobileOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {mobileOpen && (
        <div className="md:hidden bg-djblack/98 border-t border-neon-green/20 px-4 py-6 space-y-4">
          {navLinks.map((link) => (
            <button
              key={link.label}
              onClick={() => handleNavClick(link.href)}
              className="block w-full text-left text-sm font-medium tracking-widest uppercase text-white/70 hover:text-neon-green transition-colors py-2"
            >
              {link.label}
            </button>
          ))}
          <button
            onClick={() => { setMobileOpen(false); navigate({ to: '/admin' }); }}
            className="block w-full text-left text-xs font-medium tracking-widest uppercase text-neon-green/60 hover:text-neon-green transition-colors py-2"
          >
            Admin
          </button>
        </div>
      )}
    </header>
  );
}
