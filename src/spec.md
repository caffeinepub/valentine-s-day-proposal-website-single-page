# Specification

## Summary
**Goal:** Add a playful, mobile-friendly Valentine proposal screen with GIF-driven reactions, an escalating “No” interaction, and a confetti-powered success state.

**Planned changes:**
- Restyle the initial proposal view to a light minimalist white/light-pink background with a top greeting GIF, centered question text exactly “Will you be my Valentine?”, and centered “Yes” (pink/red) + “No” (gray) buttons.
- Implement “No” click state: increment a counter, update the “No” label through an increasingly desperate phrase list (including “Are you sure?”, “Really?”, “Think again!”, “Last chance!”, “Surely not?”, “You're breaking my heart”), grow the “Yes” button dramatically (based on noCount sizing), and shrink the “No” button slightly each click.
- Swap the main GIF based on the “No” click count (cute at noCount=0, switch to sad/crying after a defined threshold).
- Implement “Yes” success flow: replace the proposal UI with a success view showing a celebratory GIF, heading exactly “Knew you would say yes! ❤️”, and trigger a canvas-confetti explosion.
- Add Google Font typography (Pacifico or Quicksand) and ensure mobile-first centered, tappable layout.

**User-visible outcome:** Users see a cute Valentine prompt with GIFs and “Yes/No” buttons; clicking “No” makes the UI increasingly persuasive and changes the GIF, and clicking “Yes” shows a celebratory screen with confetti and the success message.
