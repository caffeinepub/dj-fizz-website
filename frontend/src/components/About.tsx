export default function About() {
  return (
    <section id="about" className="py-24 bg-djblack-light relative overflow-hidden">
      {/* Background accent */}
      <div
        className="absolute top-0 right-0 w-1/2 h-full opacity-5 pointer-events-none"
        style={{
          background: 'radial-gradient(ellipse at right center, rgba(57,255,20,0.4) 0%, transparent 70%)',
        }}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="section-divider mb-16" />

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Portrait */}
          <div className="flex justify-center lg:justify-start">
            <div className="relative">
              {/* Outer glow ring */}
              <div
                className="absolute -inset-3 rounded-sm opacity-60"
                style={{
                  background: 'linear-gradient(135deg, rgba(57,255,20,0.4), transparent, rgba(57,255,20,0.2))',
                  filter: 'blur(8px)',
                }}
              />
              {/* Portrait image */}
              <div className="relative neon-border rounded-sm overflow-hidden shadow-neon">
                <img
                  src="/assets/IMG_1534.jpeg"
                  alt="DJ Fizz — Professional DJ in Raleigh, NC"
                  className="w-full max-w-sm md:max-w-md object-cover"
                  style={{ aspectRatio: '3/4', objectPosition: 'top center' }}
                />
                {/* Overlay gradient at bottom */}
                <div
                  className="absolute bottom-0 left-0 right-0 h-1/4"
                  style={{
                    background: 'linear-gradient(to top, rgba(8,8,8,0.8), transparent)',
                  }}
                />
              </div>
              {/* Corner accent */}
              <div className="absolute -bottom-2 -right-2 w-8 h-8 border-b-2 border-r-2 border-neon-green" />
              <div className="absolute -top-2 -left-2 w-8 h-8 border-t-2 border-l-2 border-neon-green" />
            </div>
          </div>

          {/* Content */}
          <div>
            <p className="text-neon-green text-sm font-semibold tracking-widest uppercase mb-4">
              About the Artist
            </p>
            <h2 className="font-display text-5xl md:text-6xl text-white mb-6 tracking-wider leading-tight">
              DJ FIZZ
            </h2>
            <div
              className="w-16 h-1 mb-8"
              style={{ background: 'linear-gradient(to right, #39ff14, transparent)' }}
            />
            <p className="text-white/75 text-lg leading-relaxed mb-6">
              DJ Fizz is known for blending elegance with energy. Whether it's a black-tie wedding reception or a packed-out school dance, every event is curated to match the crowd, the vibe, and the moment.
            </p>
            <p className="text-white/75 text-lg leading-relaxed mb-8">
              With professional sound, dynamic lighting, and a deep understanding of crowd engagement, DJ Fizz doesn't just play music — he creates unforgettable experiences.
            </p>
          </div>
        </div>

        <div className="section-divider mt-16" />
      </div>
    </section>
  );
}
