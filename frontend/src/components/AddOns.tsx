import { Zap, Lightbulb, Mic2, Radio, Projector } from 'lucide-react';

const addons = [
  {
    icon: Zap,
    title: 'Intelligent Dance Floor Lighting',
    description: 'Synchronized LED systems that react to the beat, transforming any floor into an immersive light show.',
  },
  {
    icon: Lightbulb,
    title: 'Custom Uplighting',
    description: 'Wash your venue in any color palette to match your event theme and create stunning atmosphere.',
  },
  {
    icon: Mic2,
    title: 'Ceremony Audio Coverage',
    description: 'Crystal-clear sound for your ceremony processional, vows, and recessional — every word heard perfectly.',
  },
  {
    icon: Radio,
    title: 'Wireless Microphones',
    description: 'Professional-grade wireless mics for toasts, speeches, and announcements with zero feedback.',
  },
  {
    icon: Projector,
    title: 'Custom Name / Monogram Projection',
    description: 'Your name or monogram projected in stunning light across the dance floor or venue wall.',
  },
];

export default function AddOns() {
  return (
    <section id="addons" className="py-24 bg-djblack-light relative overflow-hidden">
      {/* Background glow */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background: 'radial-gradient(ellipse at center, rgba(57,255,20,0.04) 0%, transparent 70%)',
        }}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <p className="text-neon-green text-sm font-semibold tracking-widest uppercase mb-4">
            Elevate Your Experience
          </p>
          <h2 className="font-display text-5xl md:text-6xl text-white tracking-wider">
            PREMIUM ADD-ONS
          </h2>
          <div className="w-24 h-px mx-auto mt-6" style={{ background: 'linear-gradient(to right, transparent, #39ff14, transparent)' }} />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {addons.map((addon, index) => {
            const Icon = addon.icon;
            return (
              <div
                key={addon.title}
                className={`relative glass-card glass-card-hover rounded-sm p-8 ${index === 4 ? 'md:col-span-2 lg:col-span-1' : ''}`}
              >
                {/* Glow accent top-left */}
                <div
                  className="absolute top-0 left-0 w-16 h-16 opacity-20 pointer-events-none"
                  style={{
                    background: 'radial-gradient(circle at top left, rgba(57,255,20,0.8), transparent)',
                  }}
                />
                <div className="flex items-start gap-5">
                  <div
                    className="w-12 h-12 rounded-sm flex items-center justify-center flex-shrink-0 mt-1"
                    style={{
                      background: 'rgba(57,255,20,0.08)',
                      border: '1px solid rgba(57,255,20,0.25)',
                      boxShadow: '0 0 15px rgba(57,255,20,0.15)',
                    }}
                  >
                    <Icon size={20} className="text-neon-green" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-white text-base mb-2 leading-tight">
                      {addon.title}
                    </h3>
                    <p className="text-white/55 text-sm leading-relaxed">
                      {addon.description}
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Pricing note */}
        <div className="text-center mt-12">
          <div
            className="inline-block px-8 py-4 rounded-sm"
            style={{
              background: 'rgba(57,255,20,0.05)',
              border: '1px solid rgba(57,255,20,0.2)',
            }}
          >
            <p className="text-neon-green font-display text-xl tracking-wider">
              CUSTOM PACKAGES BUILT AROUND YOUR VISION
            </p>
            <p className="text-white/50 text-sm mt-2">
              Every event is unique. Let's build the perfect experience together.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
