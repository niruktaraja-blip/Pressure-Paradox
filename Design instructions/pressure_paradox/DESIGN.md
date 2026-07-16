---
name: Pressure Paradox
colors:
  surface: '#101415'
  surface-dim: '#101415'
  surface-bright: '#363a3b'
  surface-container-lowest: '#0b0f10'
  surface-container-low: '#191c1e'
  surface-container: '#1d2022'
  surface-container-high: '#272a2c'
  surface-container-highest: '#323537'
  on-surface: '#e0e3e5'
  on-surface-variant: '#c5c6cf'
  inverse-surface: '#e0e3e5'
  inverse-on-surface: '#2d3133'
  outline: '#8f9098'
  outline-variant: '#44474e'
  surface-tint: '#b6c6ee'
  primary: '#b6c6ee'
  on-primary: '#1f3050'
  primary-container: '#081b3a'
  on-primary-container: '#7484a9'
  inverse-primary: '#4e5e81'
  secondary: '#d2bbff'
  on-secondary: '#3f008e'
  secondary-container: '#6001d1'
  on-secondary-container: '#c9aeff'
  tertiary: '#adc6ff'
  on-tertiary: '#002e6a'
  tertiary-container: '#001a42'
  on-tertiary-container: '#3980f4'
  error: '#ffb4ab'
  on-error: '#690005'
  error-container: '#93000a'
  on-error-container: '#ffdad6'
  primary-fixed: '#d8e2ff'
  primary-fixed-dim: '#b6c6ee'
  on-primary-fixed: '#081b3a'
  on-primary-fixed-variant: '#364768'
  secondary-fixed: '#eaddff'
  secondary-fixed-dim: '#d2bbff'
  on-secondary-fixed: '#25005a'
  on-secondary-fixed-variant: '#5a00c6'
  tertiary-fixed: '#d8e2ff'
  tertiary-fixed-dim: '#adc6ff'
  on-tertiary-fixed: '#001a42'
  on-tertiary-fixed-variant: '#004395'
  background: '#101415'
  on-background: '#e0e3e5'
  surface-variant: '#323537'
typography:
  headline-display:
    fontFamily: Inter
    fontSize: 72px
    fontWeight: '800'
    lineHeight: '1.1'
    letterSpacing: -0.04em
  headline-lg:
    fontFamily: Inter
    fontSize: 48px
    fontWeight: '700'
    lineHeight: '1.2'
    letterSpacing: -0.03em
  headline-lg-mobile:
    fontFamily: Inter
    fontSize: 36px
    fontWeight: '700'
    lineHeight: '1.2'
    letterSpacing: -0.02em
  headline-md:
    fontFamily: Inter
    fontSize: 30px
    fontWeight: '600'
    lineHeight: '1.3'
    letterSpacing: -0.02em
  body-lg:
    fontFamily: Inter
    fontSize: 18px
    fontWeight: '400'
    lineHeight: '1.7'
    letterSpacing: 0em
  body-md:
    fontFamily: Inter
    fontSize: 16px
    fontWeight: '400'
    lineHeight: '1.6'
    letterSpacing: 0em
  label-sm:
    fontFamily: Geist
    fontSize: 12px
    fontWeight: '500'
    lineHeight: '1'
    letterSpacing: 0.05em
rounded:
  sm: 0.25rem
  DEFAULT: 0.5rem
  md: 0.75rem
  lg: 1rem
  xl: 1.5rem
  full: 9999px
spacing:
  container-max: 1280px
  gutter: 24px
  margin-x: 32px
  section-gap: 120px
  stack-sm: 8px
  stack-md: 16px
  stack-lg: 32px
---

## Brand & Style
The design system is engineered for a premium, tech-forward experience that balances professional authority with empathetic storytelling. It targets a high-end audience through a cinematic aesthetic that feels both expansive and intimate. 

The visual style is a hybrid of **Modern Corporate** and **Glassmorphism**, leveraging the precision of high-growth SaaS platforms with the atmospheric depth of premium hardware interfaces. The UI should evoke a sense of calm under pressure, utilizing deep canvas depths, radiant light leaks, and sophisticated transparency to guide the user's emotional journey. High-quality whitespace is not just a layout choice but a functional tool to reduce cognitive load and emphasize focus.

## Colors
The palette is anchored by a **Deep Dark Navy (#081B3A)** which serves as the infinite canvas. This base provides the necessary contrast for cinematic light effects. 

- **Primary Background:** The core canvas. Use subtle radial gradients (Deep Blue to Soft Purple) in the corners of large sections to create environmental depth.
- **Accents:** **Soft Violet (#7C3AED)** and **Electric Blue (#3B82F6)** are used sparingly for interactive states, progress indicators, and high-impact storytelling elements.
- **Glassmorphic Surfaces:** Use semi-transparent layers with a background blur (minimum 20px) and a subtle 1px white border at 8% opacity to simulate physical glass.
- **Text:** Pure White is reserved for high-contrast headlines. Use reduced opacity whites (70-80%) for secondary body text to maintain visual hierarchy.

## Typography
The typography system relies on **Inter** for its versatile, systematic clarity. For high-end display moments, we utilize tight tracking (letter-spacing) to create a "locked-in," professional feel similar to premium editorial design.

- **Display & Headlines:** Use heavy weights (700-800) with negative letter-spacing. On mobile, headlines should scale aggressively to ensure they remain impactful within the viewport.
- **Body Text:** Focus on legibility with generous line heights (1.6x - 1.7x). Ensure secondary body text uses a slightly desaturated white to prevent visual vibration on the dark background.
- **Labels:** Use **Geist** for technical or utility labels to introduce a precise, developer-tool aesthetic that aligns with the tech-forward brand personality.

## Layout & Spacing
The layout follows a **Fluid Grid** model with an emphasis on "negative space as a feature." Content should never feel cramped; instead, it should feel positioned within a larger cinematic frame.

- **Desktop:** 12-column grid with a 1280px max-width. Use large vertical gaps (120px+) between major narrative sections to allow the user to breathe.
- **Mobile:** 4-column grid with 16px or 24px side margins. Maintain vertical spacing to preserve the "premium" feel even on small screens.
- **Alignment:** Use asymmetrical layouts for storytelling sections—text blocks should often occupy only 6-8 columns to create a focal point, leaving the rest of the grid for visual atmosphere or "glowing" background elements.

## Elevation & Depth
Elevation is achieved through a combination of **Tonal Layering** and **Atmospheric Glows**.

1.  **Base Layer:** The deep navy background.
2.  **Middle Layer:** Glassmorphic cards with a `backdrop-filter: blur(20px)` and a subtle `0.5` opacity background.
3.  **Top Layer:** Active elements (modals, tooltips) with a secondary glow. Use "Ambient Shadows"—soft, diffused shadows that take on the color of the element (e.g., a violet button casts a soft violet shadow).
4.  **Light Effects:** Use large, low-opacity radial gradients (blobs) behind cards to simulate light passing through the glass. These should be colored in Electric Blue and Soft Violet.

## Shapes
The shape language is consistently **Rounded**, reflecting the approachable and empathetic nature of the brand.

- **Standard Elements:** Buttons and input fields use a 0.5rem (8px) radius.
- **Container Elements:** Glass cards and large sections use a `rounded-xl` (1.5rem / 24px) radius to feel modern and "soft" despite the dark color palette.
- **Interactive States:** When hovered, interactive elements may subtly increase their "glow" rather than changing shape, maintaining a stable structural feel.

## Components
- **Buttons:** Primary buttons use the `gradient_accent`. They feature a subtle "inner glow" (1px top border at 20% opacity) to look tactile. Secondary buttons are ghost-styled with a `glass_stroke`.
- **Glass Cards:** The signature component. Background color at `rgba(255, 255, 255, 0.03)`, blur at `24px`, and a subtle `1px` stroke. No heavy shadows; use a 1px white border to define the edge.
- **Input Fields:** Darker than the background or glass-styled. On focus, the border should glow with the `tertiary_color` (Electric Blue).
- **Chips/Labels:** Small, high-contrast pills using **Geist** font. Backgrounds should be low-opacity versions of the accent colors (e.g., 10% Violet background with 100% Violet text).
- **Progress Indicators:** Use thin, neon-like lines that utilize the primary-to-secondary gradient to show momentum.
- **Lists:** Clean, borderless lists where items are separated by whitespace or extremely faint 1px separators (5% white).