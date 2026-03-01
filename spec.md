# Specification

## Summary
**Goal:** Remove the authentication gate from the Admin page so booking submissions are accessible without any login or identity verification.

**Planned changes:**
- Remove the authentication check and any conditional rendering that shows an "admin access required" or "please log in" message in `frontend/src/pages/AdminPage.tsx`
- Ensure booking submissions are fetched and displayed immediately on page load without requiring authentication

**User-visible outcome:** Navigating to `/admin` immediately shows all booking submissions without any login prompt or error message, while retaining the existing black and neon green styling.
