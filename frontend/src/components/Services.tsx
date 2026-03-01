import { Heart, Briefcase, Music, PartyPopper } from 'lucide-react';

const services = [
  {
    icon: Heart,
    title: 'Weddings',
    description:
      'Elegant, organized, stress-free entertainment with seamless transitions from ceremony to reception. Your perfect day deserves a perfect soundtrack.',
  },
  {
    icon: Briefcase,
    title: 'Corporate Events',
    description:
      'Professional sound, clean presentation, and high-energy engagement when needed. Elevate your brand experience with premium audio.',
  },
  {
    icon: Music,
    title: 'School Dances & Proms',
    description:
      'Clean edits, hype energy, and interactive crowd control. Creating memories that last a lifetime for students across the Raleigh area.',
  },
  {
    icon: PartyPopper,
    title: 'Private Parties',
    description:
      'Birthdays, anniversaries, and celebrations customized to your vibe. Every detail tailored to make your event uniquely yours.',
  },
];

export default function Services() {
  const scrollToBooking = () => {
    document.querySelector('#booking')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="services" className="py-24 bg-djblack relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <p className="text-neon-green text-sm font-semibold tracking-widest uppercase mb-4">
            What I Do
          </p>
          <h2 className="font-display text-5xl md:text-6xl text-white tracking-wider">
            SERVICES
          </h2>
          <div className="w-24 h-px mx-auto mt-6" style={{ background: 'linear-gradient(to right, transparent, #39ff14, transparent)' }} />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service) => {
            const Icon = service.icon;
            return (
              <div
                key={service.title}
                className="glass-card glass-card-hover rounded-sm p-8 flex flex-col"
              >
                <div
                  className="w-14 h-14 rounded-sm flex items-center justify-center mb-6"
                  style={{
                    background: 'rgba(57,255,20,0.1)',
                    border: '1px solid rgba(57,255,20,0.3)',
                  }}
                >
                  <Icon size={24} className="text-neon-green" />
                </div>
                <h3 className="font-display text-2xl text-white tracking-wider mb-4">
                  {service.title.toUpperCase()}
                </h3>
                <p className="text-white/60 text-sm leading-relaxed flex-1 mb-6">
                  {service.description}
                </p>
                <button
                  onClick={scrollToBooking}
                  className="text-neon-green text-xs font-semibold tracking-widest uppercase border-b border-neon-green/40 hover:border-neon-green pb-1 transition-colors w-fit"
                >
                  Learn More →
                </button>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
