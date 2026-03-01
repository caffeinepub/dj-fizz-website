import { Clock, Users, Headphones, Shuffle } from 'lucide-react';

const pillars = [
  {
    icon: Clock,
    title: 'Timeline Management',
    description: 'DJ Fizz works with your event timeline to ensure every moment flows perfectly — from cocktail hour to last dance.',
  },
  {
    icon: Users,
    title: 'Crowd Reading',
    description: 'Years of experience reading energy levels and adjusting in real-time to keep every guest engaged and on the floor.',
  },
  {
    icon: Headphones,
    title: 'Planner Coordination',
    description: 'Seamless communication with your wedding planner, venue coordinator, and vendors for a stress-free event.',
  },
  {
    icon: Shuffle,
    title: 'Seamless Transitions',
    description: 'Every mix, every transition, every moment is intentional — creating a continuous, immersive experience.',
  },
];

export default function MoreThanMusic() {
  return (
    <section className="py-24 bg-djblack relative overflow-hidden">
      {/* Background */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background: 'radial-gradient(ellipse at top left, rgba(57,255,20,0.06) 0%, transparent 60%)',
        }}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="section-divider mb-16" />

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div>
            <p className="text-neon-green text-sm font-semibold tracking-widest uppercase mb-4">
              The Full Picture
            </p>
            <h2 className="font-display text-5xl md:text-6xl text-white tracking-wider leading-tight mb-6">
              MORE THAN JUST MUSIC.
            </h2>
            <div
              className="w-16 h-1 mb-8"
              style={{ background: 'linear-gradient(to right, #39ff14, transparent)' }}
            />
            <p className="text-white/70 text-lg leading-relaxed mb-6">
              DJ Fizz isn't just a DJ — he's an event professional. From managing timelines and coordinating with planners to reading the crowd and creating seamless transitions, every detail is handled with precision.
            </p>
            <p className="text-white/70 text-lg leading-relaxed">
              When you book DJ Fizz, you're not just getting someone to play songs. You're getting a partner who is invested in making your event extraordinary from start to finish.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {pillars.map((pillar) => {
              const Icon = pillar.icon;
              return (
                <div key={pillar.title} className="glass-card rounded-sm p-6">
                  <div
                    className="w-10 h-10 rounded-sm flex items-center justify-center mb-4"
                    style={{
                      background: 'rgba(57,255,20,0.1)',
                      border: '1px solid rgba(57,255,20,0.25)',
                    }}
                  >
                    <Icon size={18} className="text-neon-green" />
                  </div>
                  <h3 className="font-semibold text-white text-sm mb-2">{pillar.title}</h3>
                  <p className="text-white/55 text-xs leading-relaxed">{pillar.description}</p>
                </div>
              );
            })}
          </div>
        </div>

        <div className="section-divider mt-16" />
      </div>
    </section>
  );
}
