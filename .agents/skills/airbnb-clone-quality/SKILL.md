---
name: airbnb-clone-quality
description: Quality assurance, pixel parity guidelines, and accessibility checklist for the Airbnb Clone application.
---

# Airbnb Clone Quality Assurance & Development Skill

This skill enforces pixel-perfection, behavioural parity, accessibility, and architectural best practices for the Airbnb listing clone.

## 1. Visual Parity Checklist
- **Hero Grid Ratio**: Exact 50% left hero cell and 2x2 right grid with 12px outer corner radii.
- **Brand Colors**: Primary `#FF385C`, text `#222222`, secondary `#717171`, border `#dddddd`.
- **Floating Buttons**: "Show all photos" floating pill located bottom-right inside the hero grid.
- **Typography**: Apple system / Circular font stack with accurate heading line heights.

## 2. Interaction & Modal Behavior
- **Sticky Sub-navigation**:
  - Triggers smoothly at `window.scrollY > 540px`.
  - Reflects active section based on viewport intersection.
  - Clicking tabs smoothly scrolls to targeted section (`#photos`, `#amenities`, `#reviews`, `#location`).
- **View 2: Photo Tour**:
  - Full-screen modal overlay with sticky header.
  - Body scroll lock (`document.body.classList.add('modal-open')`).
  - Closes with `Escape` key or Back `←` button.
  - Clicking any room photo launches View 3 (Lightbox) at that photo index.
- **View 3: Lightbox Viewer**:
  - Full-screen `#000000` backdrop.
  - Displays dynamic photo counter (`n / total`).
  - Keyboard listeners: `ArrowLeft` (prev), `ArrowRight` (next), `Escape` (close).
  - Caption displaying room name.
- **Reservation Widget**:
  - Dynamic price calculation based on selected nights.
  - Interactive guest dropdown (Adults, Children, Infants, Pets).

## 3. Accessibility Standards (a11y)
- All interactive buttons must have descriptive `aria-label`s.
- Dialog modals must carry `role="dialog"` and `aria-modal="true"`.
- Keyboard navigation must support `Tab`, `Enter`, `Escape`, and arrow keys without trapping focus.
