---
name: Coastal Executive
colors:
  surface: '#fef9e6'
  surface-dim: '#dfdac8'
  surface-bright: '#fef9e6'
  surface-container-lowest: '#ffffff'
  surface-container-low: '#f9f4e1'
  surface-container: '#f3eedb'
  surface-container-high: '#ede8d6'
  surface-container-highest: '#e7e3d0'
  on-surface: '#1d1c11'
  on-surface-variant: '#42474c'
  inverse-surface: '#323124'
  inverse-on-surface: '#f6f1de'
  outline: '#72787c'
  outline-variant: '#c2c7cc'
  surface-tint: '#446275'
  primary: '#446275'
  on-primary: '#ffffff'
  primary-container: '#9cbbd0'
  on-primary-container: '#2d4b5d'
  inverse-primary: '#abcbe0'
  secondary: '#53634b'
  on-secondary: '#ffffff'
  secondary-container: '#d3e5c6'
  on-secondary-container: '#57674f'
  tertiary: '#6b5c4c'
  on-tertiary: '#ffffff'
  tertiary-container: '#c7b4a1'
  on-tertiary-container: '#534637'
  error: '#ba1a1a'
  on-error: '#ffffff'
  error-container: '#ffdad6'
  on-error-container: '#93000a'
  primary-fixed: '#c7e7fd'
  primary-fixed-dim: '#abcbe0'
  on-primary-fixed: '#001e2d'
  on-primary-fixed-variant: '#2c4a5c'
  secondary-fixed: '#d6e8c9'
  secondary-fixed-dim: '#baccae'
  on-secondary-fixed: '#111f0c'
  on-secondary-fixed-variant: '#3b4b34'
  tertiary-fixed: '#f4dfcb'
  tertiary-fixed-dim: '#d7c3b0'
  on-tertiary-fixed: '#241a0e'
  on-tertiary-fixed-variant: '#524436'
  background: '#fef9e6'
  on-background: '#1d1c11'
  surface-variant: '#e7e3d0'
typography:
  display-lg:
    fontFamily: Inter
    fontSize: 56px
    fontWeight: '600'
    lineHeight: '1.1'
    letterSpacing: -0.02em
  display-lg-mobile:
    fontFamily: Inter
    fontSize: 40px
    fontWeight: '600'
    lineHeight: '1.2'
    letterSpacing: -0.02em
  headline-lg:
    fontFamily: Inter
    fontSize: 32px
    fontWeight: '500'
    lineHeight: '1.3'
    letterSpacing: -0.01em
  headline-md:
    fontFamily: Inter
    fontSize: 24px
    fontWeight: '500'
    lineHeight: '1.4'
  body-lg:
    fontFamily: Inter
    fontSize: 18px
    fontWeight: '400'
    lineHeight: '1.6'
  body-md:
    fontFamily: Inter
    fontSize: 16px
    fontWeight: '400'
    lineHeight: '1.6'
  label-md:
    fontFamily: Inter
    fontSize: 14px
    fontWeight: '600'
    lineHeight: '1.2'
    letterSpacing: 0.05em
rounded:
  sm: 0.25rem
  DEFAULT: 0.5rem
  md: 0.75rem
  lg: 1rem
  xl: 1.5rem
  full: 9999px
spacing:
  base: 8px
  xs: 4px
  sm: 12px
  md: 24px
  lg: 48px
  xl: 80px
  gutter: 24px
  margin-desktop: 64px
  margin-mobile: 20px
---

## Brand & Style
The design system is engineered for high-performance mental wellness, targeting executives and professionals who require a sanctuary for clarity and focus. The brand personality is poised, serene, and authoritative—blending the restorative qualities of a coastal retreat with the structured precision of an executive suite.

The visual style is **Corporate Modern with Glassmorphic accents**. It utilizes heavy whitespace to create "room to breathe," ensuring users never feel overwhelmed. The aesthetic relies on translucent layers and soft background blurs to simulate the depth and light of a coastal environment, while maintaining a rigorous underlying grid for professional reliability.

## Colors
The palette is rooted in the natural transition between the sea and the shore. 

- **Primary (#9cbbd0):** A blissful, serene blue used for primary actions, focus states, and high-level brand moments.
- **Secondary (#6b7c62):** A muted, earthy green that provides a grounded, sophisticated contrast for success states or specialized sections.
- **Tertiary (#d9c5b2):** A warm sand tone used for subtle accents and decorative elements.
- **Neutral (#fdf8e5):** A warm, off-white foundation that replaces harsh pure whites to reduce eye strain and enhance the premium, organic feel.

Color application should follow a 60-30-10 distribution, with the neutral cream dominating the background to maintain an airy atmosphere.

## Typography
This design system uses **Inter** exclusively to achieve a clean, systematic, and highly legible interface. The typographic hierarchy is intentionally spacious.

- **Headlines:** Use tighter letter-spacing and medium weights to appear authoritative and modern.
- **Body Text:** Set with generous line height (1.6) to ensure effortless readability during long sessions.
- **Labels:** Utilize all-caps and increased letter-spacing for a sophisticated, "architectural" feel on buttons and metadata.
- **Scaling:** For mobile devices, display sizes are reduced significantly to maintain vertical rhythm without overwhelming the viewport.

## Layout & Spacing
The layout follows a **Fluid Grid** model with high-margin "breathing room." 

- **Desktop:** A 12-column grid with 64px side margins. Elements often span the center 8 columns to prevent horizontal eye fatigue.
- **Mobile:** A 4-column grid with 20px margins.
- **Philosophy:** Spacing is used as a functional tool to group information. Use `lg` and `xl` spacing tokens between major sections to emphasize the "Airy" brand value. Gutters are kept wide (24px) to maintain the sense of luxury and separation.

## Elevation & Depth
Depth in this design system is achieved through **Glassmorphism** and **Ambient Shadows** rather than traditional stacking.

1.  **Surfaces:** Use `glass_surface` (semi-transparent white) with a `20px` backdrop blur for floating cards and navigation bars.
2.  **Outlines:** Every glass element must have a 1px solid border at 20% opacity of the primary blue to define its edges against the cream background.
3.  **Shadows:** Use extra-diffused shadows with a slight blue tint (`rgba(156, 187, 208, 0.15)`) and high blur radius (30px+) to create a soft "glow" rather than a hard drop shadow. This simulates sunlight passing through water or haze.

## Shapes
The shape language is **Rounded**, utilizing a 0.5rem (8px) base radius. This strikes a balance between the friendliness of organic forms and the discipline of professional software. 

- Large containers (cards) should use `rounded-xl` (24px) to feel soft and approachable.
- Interactive elements like buttons and inputs use the base `rounded` (8px) to maintain a crisp, functional appearance.

## Components
- **Buttons:** Primary buttons use a solid `#9cbbd0` fill with white text. Secondary buttons use a ghost style with a 1px border and the secondary green text. All buttons use the `label-md` typographic style.
- **Glass Cards:** The signature component. These must have a `backdrop-filter: blur(20px)`, a soft blue-tinted shadow, and a 1px translucent border. 
- **Input Fields:** Minimalist design with a bottom-only border in Tertiary sand, shifting to a full Primary blue border on focus.
- **Chips:** Small, pill-shaped elements with a secondary green background at 10% opacity, used for categorization and status.
- **Lists:** Clean, borderless rows with generous vertical padding (16px) and subtle dividers at 5% opacity.
- **Progress Indicators:** Soft, fluid bars using a gradient transition from Sand to Blue, representing the journey of wellness.