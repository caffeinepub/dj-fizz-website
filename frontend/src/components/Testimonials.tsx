import { Star, Quote } from 'lucide-react';

const testimonials = [
  {
    name: 'Jasmine & Marcus T.',
    event: 'Wedding Reception — Raleigh, NC',
    text: "DJ Fizz absolutely made our wedding. From the ceremony processional to the last song of the night, every transition was flawless. Our guests are still talking about how incredible the energy was. He read the room perfectly — when to slow it down, when to turn it up. Truly a professional in every sense of the word.",
    stars: 5,
  },
  {
    name: 'David R.',
    event: 'Corporate Gala — Durham, NC',
    text: "We hired DJ Fizz for our annual company gala and he exceeded every expectation. The sound quality was pristine — no feedback, no dead air, just clean, crisp audio all night. He kept the energy exactly where we needed it and was incredibly easy to work with during planning. Our team is already requesting him for next year.",
    stars: 5,
  },
  {
    name: 'Principal Angela M.',
    event: 'Senior Prom — Wake County',
    text: "Our students went absolutely wild — in the best way possible. DJ Fizz kept the dance floor packed from the first song to the last. He played clean edits, hyped the crowd between songs, and even took requests seamlessly. The communication leading up to the event was smooth and professional. We'll be booking him every year.",
    stars: 5,
  },
  {
    name: 'Brittany K.',
    event: 'Birthday Celebration — Cary, NC',
    text: "I wanted my 30th birthday to feel like a real event, not just a house party with a playlist. DJ Fizz delivered exactly that. He customized the set to my taste, kept the energy high all night, and even surprised me with a special mix during my entrance. The crowd engagement was unreal. Worth every penny.",
    stars: 5,
  },
  {
    name: 'Thomas & Renee W.',
    event: 'Wedding — Chapel Hill, NC',
    text: "From our first consultation to the final dance, DJ Fizz was organized, responsive, and genuinely invested in making our day perfect. He coordinated seamlessly with our wedding planner and venue staff. The sound was crystal clear, the lighting was stunning, and he kept every age group on the dance floor. We couldn't have asked for more.",
    stars: 5,
  },
];

export default function Testimonials() {
  return (
    <section id="testimonials" className="py-24 bg-djblack relative overflow-hidden">
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background: 'radial-gradient(ellipse at bottom, rgba(57,255,20,0.04) 0%, transparent 60%)',
        }}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <p className="text-neon-green text-sm font-semibold tracking-widest uppercase mb-4">
            What Clients Say
          </p>
          <h2 className="font-display text-5xl md:text-6xl text-white tracking-wider">
            TESTIMONIALS
          </h2>
          <div className="w-24 h-px mx-auto mt-6" style={{ background: 'linear-gradient(to right, transparent, #39ff14, transparent)' }} />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {testimonials.map((t, i) => (
            <div
              key={t.name}
              className={`glass-card rounded-sm p-8 relative ${i === 4 ? 'md:col-span-2 lg:col-span-1' : ''}`}
            >
              <Quote size={24} className="text-neon-green/30 mb-4" />
              <div className="flex gap-1 mb-4">
                {Array.from({ length: t.stars }).map((_, si) => (
                  <Star key={si} size={14} className="text-neon-green fill-neon-green" />
                ))}
              </div>
              <p className="text-white/70 text-sm leading-relaxed mb-6 italic">
                "{t.text}"
              </p>
              <div className="border-t border-neon-green/10 pt-4">
                <p className="text-white font-semibold text-sm">{t.name}</p>
                <p className="text-neon-green/60 text-xs tracking-wide mt-1">{t.event}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
