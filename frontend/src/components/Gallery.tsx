const galleryItems = [
  {
    label: 'Wedding Reception',
    sublabel: 'Uplighting & Dance Floor',
    gradient: 'from-green-900/40 to-black',
    emoji: '💍',
    bg: 'bg-gradient-to-br from-djblack-mid to-djblack',
    accent: 'rgba(57,255,20,0.15)',
  },
  {
    label: 'Corporate Ballroom',
    sublabel: 'Professional Sound Setup',
    gradient: 'from-emerald-900/30 to-black',
    emoji: '🎤',
    bg: 'bg-gradient-to-br from-djblack-card to-djblack-light',
    accent: 'rgba(57,255,20,0.1)',
  },
  {
    label: 'School Dance',
    sublabel: 'Packed Dance Floor Energy',
    gradient: 'from-green-800/30 to-black',
    emoji: '🎓',
    bg: 'bg-gradient-to-br from-djblack-mid to-djblack',
    accent: 'rgba(57,255,20,0.2)',
  },
  {
    label: 'DJ Booth',
    sublabel: 'Professional Lighting Rig',
    gradient: 'from-lime-900/40 to-black',
    emoji: '🎧',
    bg: 'bg-gradient-to-br from-djblack-card to-djblack',
    accent: 'rgba(57,255,20,0.25)',
  },
  {
    label: 'Private Party',
    sublabel: 'Custom Atmosphere',
    gradient: 'from-green-900/30 to-black',
    emoji: '🎉',
    bg: 'bg-gradient-to-br from-djblack-light to-djblack',
    accent: 'rgba(57,255,20,0.12)',
  },
  {
    label: 'Monogram Projection',
    sublabel: 'Custom Name Lighting',
    gradient: 'from-emerald-900/40 to-black',
    emoji: '✨',
    bg: 'bg-gradient-to-br from-djblack-mid to-djblack-card',
    accent: 'rgba(57,255,20,0.18)',
  },
];

export default function Gallery() {
  return (
    <section id="gallery" className="py-24 bg-djblack-light relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <p className="text-neon-green text-sm font-semibold tracking-widest uppercase mb-4">
            The Experience
          </p>
          <h2 className="font-display text-5xl md:text-6xl text-white tracking-wider">
            EVENT GALLERY
          </h2>
          <div className="w-24 h-px mx-auto mt-6" style={{ background: 'linear-gradient(to right, transparent, #39ff14, transparent)' }} />
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
          {galleryItems.map((item, i) => (
            <div
              key={item.label}
              className={`relative overflow-hidden rounded-sm cursor-pointer group ${i === 0 ? 'row-span-2' : ''}`}
              style={{ minHeight: i === 0 ? '400px' : '180px' }}
            >
              {/* Background */}
              <div
                className={`absolute inset-0 ${item.bg} transition-all duration-500 group-hover:scale-105`}
                style={{
                  background: `radial-gradient(ellipse at center, ${item.accent} 0%, rgba(8,8,8,0.95) 70%)`,
                }}
              />
              {/* Border */}
              <div
                className="absolute inset-0 rounded-sm transition-all duration-300 group-hover:opacity-100 opacity-0"
                style={{ border: '1px solid rgba(57,255,20,0.4)', boxShadow: 'inset 0 0 20px rgba(57,255,20,0.1)' }}
              />
              <div className="absolute inset-0 rounded-sm" style={{ border: '1px solid rgba(57,255,20,0.1)' }} />

              {/* Content */}
              <div className="absolute inset-0 flex flex-col items-center justify-center p-6 text-center">
                <div
                  className="text-4xl md:text-5xl mb-4 transition-transform duration-300 group-hover:scale-110"
                  style={{ filter: 'drop-shadow(0 0 10px rgba(57,255,20,0.5))' }}
                >
                  {item.emoji}
                </div>
                <h3 className="font-display text-xl md:text-2xl text-white tracking-wider group-hover:text-neon-green transition-colors duration-300">
                  {item.label.toUpperCase()}
                </h3>
                <p className="text-white/40 text-xs tracking-wide mt-2 group-hover:text-white/70 transition-colors duration-300">
                  {item.sublabel}
                </p>
              </div>

              {/* Hover overlay */}
              <div
                className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"
                style={{
                  background: 'linear-gradient(135deg, rgba(57,255,20,0.05) 0%, transparent 100%)',
                }}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
