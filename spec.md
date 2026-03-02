# Specification

## Summary
**Goal:** Remove all authentication gates from the admin page so it is accessible without login.

**Planned changes:**
- In `AdminPage.tsx`, remove all authentication checks, login gates, and conditional rendering based on auth state so the page renders immediately on load
- Remove all references to `useInternetIdentity`, `isAuthenticated`, or any auth state that blocks content display
- In `useGetAllSubmissions` hook, replace any authenticated actor with a fully anonymous `HttpAgent`-based actor so submissions are fetched automatically on mount without requiring a logged-in identity
- Ensure the hook correctly unpacks both empty and populated arrays of submission records

**User-visible outcome:** Navigating to `/admin` in a fresh browser session (not logged in) immediately shows the admin page with all booking submissions, a loading indicator while fetching, an empty-state message when there are no submissions, and an error message if the query fails.
