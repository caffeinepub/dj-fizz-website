# Specification

## Summary
**Goal:** Fix the end-to-end booking submission flow so that bookings are reliably stored in the backend and correctly displayed on the admin page.

**Planned changes:**
- Rewrite the Motoko `submitBooking` function in `backend/main.mo` to ensure stable persistence with an auto-incremented ID, and add a `getAllSubmissions` public query function returning all stored submission records
- Rewrite the `useGetAllSubmissions` hook in `frontend/src/hooks/useQueries.ts` to call `getAllSubmissions` via an anonymous actor, running automatically on mount without requiring login
- Update `frontend/src/pages/AdminPage.tsx` to display all submission records as styled cards (name, email, phone, event type, event date, venue, guest count, additional details, timestamp), remove any auth gate, and show loading/error/empty states using the site's black and neon green palette
- Fix `frontend/src/components/BookingForm.tsx` to call `submitBooking` with all 8 fields via an anonymous actor, showing a success message and resetting the form on success, or showing an error without losing form data on failure

**User-visible outcome:** Booking form submissions are reliably stored and immediately visible on the admin page at `/admin` without any login requirement. The admin page shows all bookings as cards with full details, a loading indicator while fetching, an error message on failure, and an empty state when no bookings exist.
