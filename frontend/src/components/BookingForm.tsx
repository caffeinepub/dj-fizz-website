import { useState } from 'react';
import { CheckCircle, Loader2, AlertCircle } from 'lucide-react';
import { useSubmitForm } from '../hooks/useQueries';

const eventTypes = [
  'Wedding',
  'Corporate Event',
  'School Dance / Prom',
  'Private Party',
  'Birthday Celebration',
  'Anniversary',
  'Other',
];

export default function BookingForm() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    eventType: '',
    eventDate: '',
    venue: '',
    guestCount: '',
    additionalDetails: '',
  });

  const { mutate, isPending, isSuccess, isError, error } = useSubmitForm();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    mutate({
      name: formData.name,
      email: formData.email,
      phone: formData.phone,
      eventType: formData.eventType,
      eventDate: formData.eventDate,
      venue: formData.venue,
      guestCount: parseInt(formData.guestCount) || 0,
      additionalDetails: formData.additionalDetails,
    });
  };

  const inputClass =
    'w-full bg-djblack-mid border border-neon-green/20 text-white placeholder-white/30 rounded-sm px-4 py-3 text-sm focus:outline-none focus:border-neon-green/60 focus:shadow-neon-sm transition-all duration-200';
  const labelClass = 'block text-white/60 text-xs font-semibold tracking-widest uppercase mb-2';

  if (isSuccess) {
    return (
      <section id="booking" className="py-24 bg-djblack-light relative">
        <div className="max-w-2xl mx-auto px-4 text-center">
          <div className="glass-card rounded-sm p-16">
            <CheckCircle size={64} className="text-neon-green mx-auto mb-6" style={{ filter: 'drop-shadow(0 0 15px rgba(57,255,20,0.6))' }} />
            <h2 className="font-display text-4xl text-white tracking-wider mb-4">
              MESSAGE RECEIVED!
            </h2>
            <p className="text-white/70 text-lg mb-6">
              Thank you for reaching out. DJ Fizz will review your event details and respond within 24 hours.
            </p>
            <p className="text-neon-green text-sm font-semibold tracking-widest uppercase">
              Let's make your event unforgettable.
            </p>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section id="booking" className="py-24 bg-djblack-light relative overflow-hidden">
      {/* Background glow */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background: 'radial-gradient(ellipse at bottom center, rgba(57,255,20,0.06) 0%, transparent 60%)',
        }}
      />

      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-12">
          <p className="text-neon-green text-sm font-semibold tracking-widest uppercase mb-4">
            Get In Touch
          </p>
          <h2 className="font-display text-5xl md:text-6xl text-white tracking-wider mb-4">
            LET'S MAKE YOUR EVENT UNFORGETTABLE.
          </h2>
          <p className="text-white/60 text-lg">
            Tell me about your event and I'll build a custom experience just for you.
          </p>
        </div>

        <form onSubmit={handleSubmit} className="glass-card rounded-sm p-8 md:p-12 space-y-6">
          {/* Row 1: Name + Email */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label className={labelClass}>Name *</label>
              <input
                type="text"
                name="name"
                required
                value={formData.name}
                onChange={handleChange}
                placeholder="Your full name"
                className={inputClass}
              />
            </div>
            <div>
              <label className={labelClass}>Email *</label>
              <input
                type="email"
                name="email"
                required
                value={formData.email}
                onChange={handleChange}
                placeholder="your@email.com"
                className={inputClass}
              />
            </div>
          </div>

          {/* Row 2: Phone + Event Type */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label className={labelClass}>Phone *</label>
              <input
                type="tel"
                name="phone"
                required
                value={formData.phone}
                onChange={handleChange}
                placeholder="(555) 000-0000"
                className={inputClass}
              />
            </div>
            <div>
              <label className={labelClass}>Event Type *</label>
              <select
                name="eventType"
                required
                value={formData.eventType}
                onChange={handleChange}
                className={`${inputClass} cursor-pointer`}
              >
                <option value="" disabled>Select event type</option>
                {eventTypes.map((type) => (
                  <option key={type} value={type} className="bg-djblack-mid">
                    {type}
                  </option>
                ))}
              </select>
            </div>
          </div>

          {/* Row 3: Event Date + Venue */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label className={labelClass}>Event Date *</label>
              <input
                type="date"
                name="eventDate"
                required
                value={formData.eventDate}
                onChange={handleChange}
                className={`${inputClass} [color-scheme:dark]`}
              />
            </div>
            <div>
              <label className={labelClass}>Venue</label>
              <input
                type="text"
                name="venue"
                value={formData.venue}
                onChange={handleChange}
                placeholder="Venue name or location"
                className={inputClass}
              />
            </div>
          </div>

          {/* Row 4: Guest Count */}
          <div>
            <label className={labelClass}>Estimated Guest Count</label>
            <input
              type="number"
              name="guestCount"
              min="1"
              value={formData.guestCount}
              onChange={handleChange}
              placeholder="e.g. 150"
              className={inputClass}
            />
          </div>

          {/* Row 5: Additional Details */}
          <div>
            <label className={labelClass}>Additional Details</label>
            <textarea
              name="additionalDetails"
              rows={4}
              value={formData.additionalDetails}
              onChange={handleChange}
              placeholder="Tell me about your vision, special requests, or anything else I should know..."
              className={`${inputClass} resize-none`}
            />
          </div>

          {/* Error */}
          {isError && (
            <div className="flex items-center gap-3 p-4 rounded-sm bg-red-900/20 border border-red-500/30">
              <AlertCircle size={16} className="text-red-400 flex-shrink-0" />
              <p className="text-red-400 text-sm">
                Something went wrong. Please try again or contact directly.
              </p>
            </div>
          )}

          {/* Submit */}
          <div className="pt-2">
            <button
              type="submit"
              disabled={isPending}
              className="w-full py-4 bg-neon-green text-djblack font-bold text-sm tracking-widest uppercase rounded-sm hover:bg-neon-green-dim transition-all duration-300 shadow-neon hover:shadow-neon-lg disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-3"
            >
              {isPending ? (
                <>
                  <Loader2 size={18} className="animate-spin" />
                  Sending...
                </>
              ) : (
                'Send My Inquiry'
              )}
            </button>
          </div>

          {/* Trust statement */}
          <p className="text-center text-white/40 text-xs tracking-wide">
            ✓ All inquiries receive a response within 24 hours.
          </p>
        </form>
      </div>
    </section>
  );
}
