import { MapPin, Award, Music2 } from 'lucide-react';

export default function SEOSection() {
  const scrollToBooking = () => {
    document.querySelector('#booking')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="py-20 bg-djblack-light relative overflow-hidden">
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background: 'radial-gradient(ellipse at center, rgba(57,255,20,0.04) 0%, transparent 70%)',
        }}
      />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
        <div className="flex items-center justify-center gap-2 mb-6">
          <MapPin size={16} className="text-neon-green" />
          <p className="text-neon-green text-sm font-semibold tracking-widest uppercase">
            Serving Raleigh, NC & Surrounding Areas
          </p>
        </div>

        <h2 className="font-display text-4xl md:text-5xl text-white tracking-wider mb-8">
          RALEIGH'S PREMIER DJ EXPERIENCE
        </h2>

        <p className="text-white/65 text-lg leading-relaxed mb-8">
          As a <strong className="text-white">professional DJ in Raleigh, NC</strong>, DJ Fizz has built a reputation for delivering exceptional entertainment across the Triangle. Whether you're searching for a{' '}
          <strong className="text-white">Wedding DJ in Raleigh</strong> who understands the importance of every moment, or a{' '}
          <strong className="text-white">corporate event DJ in North Carolina</strong> who brings polish and professionalism, DJ Fizz delivers every time.
        </p>

        <p className="text-white/65 text-lg leading-relaxed mb-12">
          From intimate gatherings in Cary and Chapel Hill to large-scale events in Durham and beyond, DJ Fizz serves the entire Research Triangle with the same commitment to excellence that has made him one of the most sought-after DJs in the region.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          {[
            { icon: MapPin, label: 'Raleigh, NC & Triangle Area' },
            { icon: Award, label: 'Weddings · Corporate · Private' },
            { icon: Music2, label: 'Professional Sound & Lighting' },
          ].map((item) => {
            const Icon = item.icon;
            return (
              <div
                key={item.label}
                className="flex items-center gap-3 justify-center glass-card rounded-sm px-6 py-4"
              >
                <Icon size={16} className="text-neon-green flex-shrink-0" />
                <span className="text-white/70 text-sm">{item.label}</span>
              </div>
            );
          })}
        </div>

        <button
          onClick={scrollToBooking}
          className="px-10 py-4 bg-neon-green text-djblack font-bold text-sm tracking-widest uppercase rounded-sm hover:bg-neon-green-dim transition-all duration-300 shadow-neon hover:shadow-neon-lg"
        >
          Check Availability
        </button>
      </div>
    </section>
  );
}
