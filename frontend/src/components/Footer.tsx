import { Instagram, Facebook } from 'lucide-react';
import { SiInstagram, SiFacebook } from 'react-icons/si';

export default function Footer() {
  const year = new Date().getFullYear();
  const hostname = typeof window !== 'undefined' ? window.location.hostname : 'dj-fizz';
  const appId = encodeURIComponent(hostname);

  const scrollToSection = (id: string) => {
    document.querySelector(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <footer className="bg-djblack border-t border-neon-green/10 py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">
          {/* Brand */}
          <div>
            <img
              src="/assets/IMG_0756.png"
              alt="DJ Fizz"
              className="h-20 w-auto object-contain mb-4"
              style={{ filter: 'drop-shadow(0 0 10px rgba(57,255,20,0.3))' }}
            />
            <p className="text-white/50 text-sm leading-relaxed">
              Premium DJ entertainment for weddings, corporate events, school dances, and private parties across Raleigh, NC.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-display text-lg text-neon-green tracking-widest mb-6">QUICK LINKS</h4>
            <ul className="space-y-3">
              {[
                { label: 'About', href: '#about' },
                { label: 'Services', href: '#services' },
                { label: 'Add-Ons', href: '#addons' },
                { label: 'Gallery', href: '#gallery' },
                { label: 'Book Now', href: '#booking' },
              ].map((link) => (
                <li key={link.label}>
                  <button
                    onClick={() => scrollToSection(link.href)}
                    className="text-white/50 hover:text-neon-green text-sm transition-colors tracking-wide"
                  >
                    {link.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-display text-lg text-neon-green tracking-widest mb-6">CONTACT</h4>
            <div className="space-y-3 text-white/50 text-sm">
              <p>Raleigh, NC & Triangle Area</p>
              <p>Available for events statewide</p>
              <button
                onClick={() => scrollToSection('#booking')}
                className="mt-4 px-6 py-2 border border-neon-green/40 text-neon-green text-xs font-semibold tracking-widest uppercase rounded-sm hover:bg-neon-green/10 hover:border-neon-green transition-all duration-200"
              >
                Book DJ Fizz
              </button>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="section-divider mb-8" />

        {/* Bottom */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-4 text-white/30 text-xs">
          <p>© {year} DJ Fizz. All rights reserved. Professional DJ in Raleigh, NC.</p>
          <p>
            Built with{' '}
            <span className="text-neon-green">♥</span>{' '}
            using{' '}
            <a
              href={`https://caffeine.ai/?utm_source=Caffeine-footer&utm_medium=referral&utm_content=${appId}`}
              target="_blank"
              rel="noopener noreferrer"
              className="text-neon-green/70 hover:text-neon-green transition-colors"
            >
              caffeine.ai
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
}
