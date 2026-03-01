import { useRef } from 'react';

export default function Hero() {
  const beamsRef = useRef<HTMLDivElement>(null);

  const scrollToSection = (id: string) => {
    document.querySelector(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-djblack">
      {/* Animated Stage Lighting Beams */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none" ref={beamsRef}>
        {/* Radial glow at bottom */}
        <div
          className="absolute bottom-0 left-1/2 -translate-x-1/2 w-full h-1/2"
          style={{
            background: 'radial-gradient(ellipse at bottom center, rgba(57,255,20,0.08) 0%, transparent 70%)',
          }}
        />
        {/* Beam 1 */}
        <div
          className="absolute bottom-0 left-1/4 w-px h-3/4 origin-bottom animate-beam-sway"
          style={{
            background: 'linear-gradient(to top, rgba(57,255,20,0.5), transparent)',
            animationDelay: '0s',
          }}
        />
        {/* Beam 2 */}
        <div
          className="absolute bottom-0 left-1/3 w-px h-2/3 origin-bottom animate-beam-sway-reverse"
          style={{
            background: 'linear-gradient(to top, rgba(57,255,20,0.35), transparent)',
            animationDelay: '0.5s',
          }}
        />
        {/* Beam 3 */}
        <div
          className="absolute bottom-0 left-1/2 w-px h-4/5 origin-bottom animate-beam-sway"
          style={{
            background: 'linear-gradient(to top, rgba(57,255,20,0.6), transparent)',
            animationDelay: '1s',
          }}
        />
        {/* Beam 4 */}
        <div
          className="absolute bottom-0 left-2/3 w-px h-2/3 origin-bottom animate-beam-sway-reverse"
          style={{
            background: 'linear-gradient(to top, rgba(57,255,20,0.35), transparent)',
            animationDelay: '1.5s',
          }}
        />
        {/* Beam 5 */}
        <div
          className="absolute bottom-0 left-3/4 w-px h-3/4 origin-bottom animate-beam-sway"
          style={{
            background: 'linear-gradient(to top, rgba(57,255,20,0.5), transparent)',
            animationDelay: '2s',
          }}
        />
        {/* Wide beam center */}
        <div
          className="absolute bottom-0 left-1/2 -translate-x-1/2 w-1 h-full origin-bottom animate-beam-sway-reverse"
          style={{
            background: 'linear-gradient(to top, rgba(57,255,20,0.3), transparent)',
            animationDelay: '0.8s',
            filter: 'blur(2px)',
          }}
        />
        {/* Subtle grid overlay */}
        <div
          className="absolute inset-0 opacity-5"
          style={{
            backgroundImage: 'linear-gradient(rgba(57,255,20,0.3) 1px, transparent 1px), linear-gradient(90deg, rgba(57,255,20,0.3) 1px, transparent 1px)',
            backgroundSize: '60px 60px',
          }}
        />
      </div>

      {/* Content */}
      <div className="relative z-10 text-center px-4 max-w-5xl mx-auto pt-20">
        {/* Logo */}
        <div className="mb-8 animate-fade-in-up bg-transparent">
          <img
            src="/assets/0E4EB4A7-858B-4D8C-9F78-10EFB5808419.png"
            alt="DJ Fizz"
            className="h-40 md:h-56 w-auto mx-auto object-contain"
            style={{
              filter: 'drop-shadow(0 0 30px rgba(57,255,20,0.5))',
              mixBlendMode: 'screen',
              background: 'transparent',
            }}
          />
        </div>

        {/* Headline */}
        <h1
          className="font-display text-6xl md:text-8xl lg:text-9xl text-white mb-4 animate-fade-in-up-delay-1 tracking-wider"
          style={{ textShadow: '0 0 40px rgba(57,255,20,0.3)' }}
        >
          ELEVATING EVERY EVENT.
        </h1>

        {/* Subheadline */}
        <p className="text-lg md:text-xl text-white/70 max-w-2xl mx-auto mb-10 animate-fade-in-up-delay-2 leading-relaxed">
          DJ Fizz delivers a premium DJ experience for weddings, corporate events, school dances, and private parties across{' '}
          <span className="text-neon-green font-semibold">Raleigh, NC</span>.
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-in-up-delay-3">
          <button
            onClick={() => scrollToSection('#booking')}
            className="px-8 py-4 bg-neon-green text-djblack font-bold text-sm tracking-widest uppercase rounded-sm hover:bg-neon-green-dim transition-all duration-300 shadow-neon hover:shadow-neon-lg animate-pulse-glow"
          >
            Check Availability
          </button>
          <button
            onClick={() => scrollToSection('#services')}
            className="px-8 py-4 bg-transparent text-neon-green font-bold text-sm tracking-widest uppercase rounded-sm border border-neon-green/60 hover:border-neon-green hover:bg-neon-green/10 transition-all duration-300 hover:shadow-neon-sm"
          >
            View Packages
          </button>
        </div>

        {/* Scroll indicator */}
        <div className="mt-16 animate-bounce">
          <div className="w-px h-12 bg-gradient-to-b from-neon-green/60 to-transparent mx-auto" />
        </div>
      </div>
    </section>
  );
}
