```markdown
# The Design System: Editorial Hospitality

## 1. Overview & Creative North Star
The Creative North Star for this design system is **"The Modern Maître D'."** 

In a world of cluttered, utility-first restaurant apps, this system moves toward a high-end editorial experience. We are moving away from the "grid of boxes" and toward a "curated menu" feel. The goal is to evoke the tactile warmth of a physical linen menu and the sophistication of a Michelin-star interior. 

We achieve this through **Intentional Asymmetry** (overlapping high-quality food photography over container edges), **Tonal Depth** (layering creams and beiges instead of drawing lines), and **Typographic Authority** (using dramatic scale shifts between display and body text).

---

## 2. Colors & Surface Philosophy
The palette is rooted in the earth (Terracotta) and the hearth (Cream). It is designed to feel appetizing and high-end.

### The "No-Line" Rule
**Strict Mandate:** Designers are prohibited from using 1px solid borders for sectioning. 
Structure must be defined by background color shifts. To separate a "Recommended" section from the main feed, transition from `surface` (#fcf5ed) to `surface-container-low` (#f7f0e7). This creates a "soft-seam" look that feels integrated rather than partitioned.

### Surface Hierarchy & Nesting
Treat the UI as a series of stacked, fine-paper sheets. 
- **Base Level:** `surface` (#fcf5ed)
- **Primary Content Areas:** `surface-container` (#eee7de)
- **Nested Detail Cards:** `surface-container-lowest` (#ffffff) to provide a "pop" of clean white against the cream.

### The "Glass & Gradient" Rule
To avoid a flat, "Bootstrap" appearance:
- **Hero CTAs:** Use a subtle linear gradient from `primary` (#a63300) to `primary_container` (#ff7949) at a 135° angle.
- **Floating Navigation:** Use `surface_container_lowest` at 80% opacity with a `24px` backdrop blur. This allows the vibrant food imagery to bleed through the navigation, grounding the UI in the content.

---

## 3. Typography: The Editorial Voice
We use a dual-font strategy to balance character with readability.

*   **Display & Headlines (Plus Jakarta Sans):** Our "Brand Voice." Use `display-lg` (3.5rem) for hero moments. The generous x-height and modern geometric curves of Jakarta Sans feel friendly yet premium.
*   **Body & Titles (Be Vietnam Pro):** Our "Information Layer." This typeface offers exceptional legibility at small sizes (`body-md`) while maintaining a clean, contemporary aesthetic that doesn't compete with the headlines.

**Hierarchy Tip:** Always lean into high contrast. Pair a `headline-lg` title with a `body-sm` description. This "Editorial Gap" creates a professional, magazine-style layout.

---

## 4. Elevation & Depth
Depth is not a shadow; depth is a relationship between layers.

*   **The Layering Principle:** Place a `surface-container-lowest` card (Pure White) on a `surface-container` (Beige) background. The contrast in lightness creates an organic lift.
*   **Ambient Shadows:** When a shadow is necessary (e.g., a floating "Add to Cart" button), use the `on-surface` color (#312e29) at 6% opacity with a `32px` blur and `8px` Y-offset. It should look like a soft glow, not a dark smudge.
*   **The "Ghost Border" Fallback:** If a container must sit on an identical color background, use the `outline-variant` (#b2aca5) at **15% opacity**. It should be felt, not seen.

---

## 5. Signature Components

### Buttons
- **Primary:** `primary` (#a63300) fill with `on_primary` (#ffefeb) text. 
- **Shape:** Use the `xl` (3rem) corner radius for a pill-shaped, friendly feel.
- **Interaction:** On hover, shift to `primary_dim` (#922c00). No heavy shadows.

### The "Gourmet" Card
- **Styling:** Forbid dividers. Use a `1.4rem` (`spacing-4`) vertical gap between the title and the price.
- **Image Treatment:** Use `lg` (2rem) corner radius. Images should never be full-bleed; they should sit within the container with a `spacing-3` inset to feel like a framed photograph.

### Selection Chips
- **Filter Chips:** Use `surface-container-high` (#e9e1d8) with `on-surface-variant` text.
- **Selected State:** Transition to `primary_container` (#ff7949) with `on_primary_container` (#451000) text.

### Inputs & Search
- **Visuals:** Use `surface-container-highest` (#e3dcd2) for the field background. 
- **Focus State:** Instead of a thick border, use a `2px` "Ghost Border" of `primary` at 40% opacity and a subtle `surface-tint` glow.

### Additional Component: The "Chef’s Choice" Badge
A small, floating tag using `tertiary_container` (#ef9dff) with `on_tertiary_container` (#5e1470) text. Use this sparingly to highlight signature dishes, adding a splash of sophisticated plum/purple to the warm palette.

---

## 6. Do’s and Don’ts

### Do:
- **Do** use `spacing-12` (4rem) or more for section padding. Negative space is a luxury.
- **Do** overlap images. Let a dish photo bleed over the edge of a `surface-container` to break the "boxed-in" feel.
- **Do** use `on-surface-variant` (#5f5b55) for secondary metadata to maintain a soft visual hierarchy.

### Don’t:
- **Don’t** use 100% black (#000000). Always use `on-surface` (#312e29) for text to keep the "Cream and Charcoal" warmth.
- **Don’t** use the `none` or `sm` corner radius. Everything in this system should feel approachable; sharp corners are forbidden.
- **Don’t** use dividers (`<hr>`). If you feel the need for a line, increase the `spacing` token by one level instead. Use white space to signify the end of a thought.

---

## 7. Spacing & Rhythm
Rhythm is achieved through the strict 0.35rem base (3.5px equivalent).
- **Component Padding:** `spacing-4` (1.4rem)
- **Section Gaps:** `spacing-10` (3.5rem)
- **Page Margins:** `spacing-6` (2rem) on mobile, `spacing-16` (5.5rem) on desktop.

By adhering to these oversized spacing tokens, the app will feel "Breezy" and "Expensive"—the digital equivalent of a spacious, well-lit dining room.```