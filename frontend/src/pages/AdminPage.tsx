import { useGetAllSubmissions } from '../hooks/useQueries';
import {
  Loader2,
  Inbox,
  Calendar,
  Users,
  MapPin,
  Mail,
  Phone,
  FileText,
  Clock,
  RefreshCw,
} from 'lucide-react';
import type { BookingSubmission } from '../backend';

function formatTimestamp(ts: bigint): string {
  // Motoko Time.now() returns nanoseconds
  const ms = Number(ts / BigInt(1_000_000));
  return new Date(ms).toLocaleString('en-US', {
    year: 'numeric',
    month: 'short',
    day: 'numeric',
    hour: '2-digit',
    minute: '2-digit',
  });
}

function SubmissionCard({ submission }: { submission: BookingSubmission }) {
  const { booking, id, timestamp } = submission;

  return (
    <div className="glass-card rounded-sm p-6 hover:border-neon-green/30 transition-all duration-200">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-3 mb-5">
        <div>
          <div className="flex items-center gap-3 mb-1">
            <span className="text-white/30 text-xs font-mono">#{id.toString()}</span>
            <h3 className="font-display text-2xl text-white tracking-wider">{booking.name.toUpperCase()}</h3>
          </div>
          <span
            className="inline-block mt-1 px-3 py-1 text-xs font-semibold tracking-widest uppercase rounded-sm"
            style={{
              background: 'rgba(57,255,20,0.1)',
              border: '1px solid rgba(57,255,20,0.3)',
              color: '#39ff14',
            }}
          >
            {booking.eventType}
          </span>
        </div>
        <div className="flex items-center gap-2 text-white/40 text-xs">
          <Clock size={12} />
          <span>{formatTimestamp(timestamp)}</span>
        </div>
      </div>

      {/* Details grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mb-4">
        <div className="flex items-center gap-3">
          <Mail size={14} className="text-neon-green/60 flex-shrink-0" />
          <div>
            <p className="text-white/30 text-xs uppercase tracking-wider">Email</p>
            <p className="text-white/80 text-sm">{booking.email}</p>
          </div>
        </div>
        <div className="flex items-center gap-3">
          <Phone size={14} className="text-neon-green/60 flex-shrink-0" />
          <div>
            <p className="text-white/30 text-xs uppercase tracking-wider">Phone</p>
            <p className="text-white/80 text-sm">{booking.phone}</p>
          </div>
        </div>
        <div className="flex items-center gap-3">
          <Calendar size={14} className="text-neon-green/60 flex-shrink-0" />
          <div>
            <p className="text-white/30 text-xs uppercase tracking-wider">Event Date</p>
            <p className="text-white/80 text-sm">{booking.eventDate || '—'}</p>
          </div>
        </div>
        <div className="flex items-center gap-3">
          <MapPin size={14} className="text-neon-green/60 flex-shrink-0" />
          <div>
            <p className="text-white/30 text-xs uppercase tracking-wider">Venue</p>
            <p className="text-white/80 text-sm">{booking.venue || '—'}</p>
          </div>
        </div>
        <div className="flex items-center gap-3">
          <Users size={14} className="text-neon-green/60 flex-shrink-0" />
          <div>
            <p className="text-white/30 text-xs uppercase tracking-wider">Guest Count</p>
            <p className="text-white/80 text-sm">{booking.guestCount.toString()}</p>
          </div>
        </div>
        <div className="flex items-center gap-3">
          <Clock size={14} className="text-neon-green/60 flex-shrink-0" />
          <div>
            <p className="text-white/30 text-xs uppercase tracking-wider">Submitted At</p>
            <p className="text-white/80 text-sm">{formatTimestamp(booking.submittedAt)}</p>
          </div>
        </div>
      </div>

      {/* Additional details */}
      {booking.additionalDetails && (
        <div className="border-t border-neon-green/10 pt-4 mt-4">
          <div className="flex items-start gap-3">
            <FileText size={14} className="text-neon-green/60 flex-shrink-0 mt-0.5" />
            <div>
              <p className="text-white/30 text-xs uppercase tracking-wider mb-1">Additional Details</p>
              <p className="text-white/65 text-sm leading-relaxed">{booking.additionalDetails}</p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default function AdminPage() {
  const { data: submissions, isLoading, isError, error, refetch, isFetching } = useGetAllSubmissions();

  return (
    <main className="min-h-screen bg-djblack pt-24 pb-16">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="mb-12">
          <div className="section-divider mb-8" />
          <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4">
            <div>
              <p className="text-neon-green text-sm font-semibold tracking-widest uppercase mb-2">
                Dashboard
              </p>
              <h1 className="font-display text-5xl md:text-6xl text-white tracking-wider">
                BOOKING SUBMISSIONS
              </h1>
            </div>
            <div className="flex items-center gap-4">
              {submissions && submissions.length > 0 && (
                <div
                  className="px-6 py-3 rounded-sm text-center"
                  style={{
                    background: 'rgba(57,255,20,0.08)',
                    border: '1px solid rgba(57,255,20,0.25)',
                  }}
                >
                  <p className="font-display text-3xl text-neon-green text-glow-green">
                    {submissions.length}
                  </p>
                  <p className="text-white/40 text-xs tracking-widest uppercase">Total</p>
                </div>
              )}
              <button
                onClick={() => refetch()}
                disabled={isFetching}
                className="flex items-center gap-2 px-4 py-2 rounded-sm text-white/50 hover:text-white/80 text-xs tracking-widest uppercase transition-colors disabled:opacity-40"
                style={{ border: '1px solid rgba(255,255,255,0.1)' }}
                title="Refresh submissions"
              >
                <RefreshCw size={14} className={isFetching ? 'animate-spin' : ''} />
                Refresh
              </button>
            </div>
          </div>
          <div className="section-divider mt-8" />
        </div>

        {/* Loading submissions */}
        {isLoading && (
          <div className="flex flex-col items-center justify-center py-24 gap-4">
            <Loader2 size={40} className="text-neon-green animate-spin" />
            <p className="text-white/40 text-sm tracking-widest uppercase">Loading submissions...</p>
          </div>
        )}

        {/* Error state */}
        {!isLoading && isError && (
          <div
            className="rounded-sm p-8 text-center"
            style={{
              background: 'rgba(255,50,50,0.05)',
              border: '1px solid rgba(255,50,50,0.2)',
            }}
          >
            <p className="text-red-400 font-semibold mb-2">Unable to load submissions</p>
            <p className="text-white/40 text-sm mb-4">
              {error instanceof Error ? error.message : 'There was an error fetching the booking submissions. Please try again.'}
            </p>
            <button
              onClick={() => refetch()}
              className="inline-flex items-center gap-2 px-6 py-2 rounded-sm text-xs tracking-widest uppercase transition-colors"
              style={{
                background: 'rgba(255,50,50,0.1)',
                border: '1px solid rgba(255,50,50,0.3)',
                color: 'rgb(248,113,113)',
              }}
            >
              <RefreshCw size={14} />
              Try Again
            </button>
          </div>
        )}

        {/* Empty state */}
        {!isLoading && !isError && submissions && submissions.length === 0 && (
          <div className="flex flex-col items-center justify-center py-24 gap-6">
            <div
              className="w-20 h-20 rounded-sm flex items-center justify-center"
              style={{
                background: 'rgba(57,255,20,0.05)',
                border: '1px solid rgba(57,255,20,0.15)',
              }}
            >
              <Inbox size={36} className="text-neon-green/40" />
            </div>
            <div className="text-center">
              <p className="text-white/60 font-semibold text-lg mb-2">No booking submissions yet</p>
              <p className="text-white/30 text-sm">
                Submissions from the booking form will appear here.
              </p>
            </div>
          </div>
        )}

        {/* Submissions list */}
        {!isLoading && !isError && submissions && submissions.length > 0 && (
          <div className="space-y-6">
            {[...submissions].reverse().map((submission) => (
              <SubmissionCard key={submission.id.toString()} submission={submission} />
            ))}
          </div>
        )}
      </div>
    </main>
  );
}
