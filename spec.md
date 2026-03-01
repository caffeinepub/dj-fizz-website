# Specification

## Summary
**Goal:** Replace the existing DJ Fizz hero logo with the newly uploaded PNG featuring neon green graffiti text, DJ turntable, and headphones.

**Planned changes:**
- Save the uploaded image (`0E4EB4A7-858B-4D8C-9F78-10EFB5808419.png`) as the new logo asset at `frontend/public/assets/generated/dj-fizz-logo.png`, overwriting the previous file.
- Update the `<img>` element in `Hero.tsx` to reference the new logo path `/assets/generated/dj-fizz-logo.png`.
- Remove any light background classes (e.g. `bg-white`, `bg-gray`) from the logo container and parent wrappers so the transparent PNG renders cleanly against the dark hero background.

**User-visible outcome:** The Hero section displays the new neon green DJ Fizz logo without any checkerboard or white background artifact.
