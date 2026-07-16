---
name: Coastal Executive
colors:
  surface: '#fbf9f8'
  surface-dim: '#dbd9d9'
  surface-bright: '#fbf9f8'
  surface-container-lowest: '#ffffff'
  surface-container-low: '#f5f3f3'
  surface-container: '#f0eded'
  surface-container-high: '#eae8e7'
  surface-container-highest: '#e4e2e2'
  on-surface: '#1b1c1c'
  on-surface-variant: '#42474c'
  inverse-surface: '#303030'
  inverse-on-surface: '#f2f0f0'
  outline: '#72787c'
  outline-variant: '#c2c7cc'
  surface-tint: '#446275'
  primary: '#446275'
  on-primary: '#ffffff'
  primary-container: '#9cbbd0'
  on-primary-container: '#2d4b5d'
  inverse-primary: '#abcbe0'
  secondary: '#615f50'
  on-secondary: '#ffffff'
  secondary-container: '#e7e3d0'
  on-secondary-container: '#676556'
  tertiary: '#4c626b'
  on-tertiary: '#ffffff'
  tertiary-container: '#a3bac4'
  on-tertiary-container: '#354b53'
  error: '#ba1a1a'
  on-error: '#ffffff'
  error-container: '#ffdad6'
  on-error-container: '#93000a'
  primary-fixed: '#c7e7fd'
  primary-fixed-dim: '#abcbe0'
  on-primary-fixed: '#001e2d'
  on-primary-fixed-variant: '#2c4a5c'
  secondary-fixed: '#e7e3d0'
  secondary-fixed-dim: '#cbc7b5'
  on-secondary-fixed: '#1d1c11'
  on-secondary-fixed-variant: '#49473a'
  tertiary-fixed: '#cfe6f1'
  tertiary-fixed-dim: '#b3cad4'
  on-tertiary-fixed: '#071e26'
  on-tertiary-fixed-variant: '#344a52'
  background: '#fbf9f8'
  on-background: '#1b1c1c'
  surface-variant: '#e4e2e2'
typography:
  display:
    fontFamily: Inter
    fontSize: 48px
    fontWeight: '700'
    lineHeight: 56px
    letterSpacing: -0.02em
  headline-lg:
    fontFamily: Inter
    fontSize: 32px
    fontWeight: '600'
    lineHeight: 40px
    letterSpacing: -0.01em
  headline-lg-mobile:
    fontFamily: Inter
    fontSize: 24px
    fontWeight: '600'
    lineHeight: 32px
  headline-md:
    fontFamily: Inter
    fontSize: 24px
    fontWeight: '600'
    lineHeight: 32px
  body-lg:
    fontFamily: Inter
    fontSize: 18px
    fontWeight: '400'
    lineHeight: 28px
  body-md:
    fontFamily: Inter
    fontSize: 16px
    fontWeight: '400'
    lineHeight: 24px
  label-md:
    fontFamily: Inter
    fontSize: 14px
    fontWeight: '500'
    lineHeight: 20px
    letterSpacing: 0.01em
  label-sm:
    fontFamily: Inter
    fontSize: 12px
    fontWeight: '600'
    lineHeight: 16px
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
  margin-mobile: 16px
  margin-desktop: 64px
---

## Brand & Style

This design system embodies a "Coastal Executive" aesthetic—a synthesis of high-end professional reliability and serene, airy spaciousness. It targets executive-level SaaS, premium real estate, or high-finance platforms where clarity and calm are paramount.

The design style is **Corporate Modern** with a **Minimalist** influence. It relies on generous whitespace, a sophisticated use of tonal layers, and a restrained color palette to create an environment that feels expensive, intentional, and trustworthy. The interface should feel like a well-lit architectural space: open, structured, and tranquil.

## Colors

The palette is derived from soft maritime tones and warm coastal neutrals. 

- **Primary (#9cbbd0):** A muted, serene blue used for focus states, primary actions, and subtle brand accents.
- **Secondary (#fdf8e5):** A warm, cream-white used for large surface areas and containers to avoid the sterile feel of pure white.
- **Tertiary (#536972):** A deep slate-blue used for high-contrast elements, iconography, and secondary buttons to maintain executive gravity.
- **Neutral (#464646):** A soft charcoal used for primary text and borders, ensuring high legibility without the harshness of pure black.

Backgrounds should primarily use the secondary cream or very light tints of the primary blue to maintain the "airy" feel.

## Typography

The typography system uses **Inter** exclusively to project a modern, systematic, and highly legible corporate character. 

The hierarchy emphasizes clarity through weight and letter-spacing. Display and headline styles use tighter tracking to feel "tight" and professional, while labels use slightly increased tracking for better scanability. For mobile, headlines scale down to ensure content remains the primary focus without excessive scrolling.

## Layout & Spacing

This design system employs a **Fluid Grid** model based on a 12-column layout for desktop and a 4-column layout for mobile. 

The spacing rhythm is built on an 8px baseline, favoring "breathable" margins to support the airy aesthetic. 
- **Desktop:** 64px outer margins with 24px gutters. Use the `lg` (48px) and `xl` (80px) units for vertical section spacing to maintain an executive sense of scale.
- **Mobile:** 16px margins with 16px gutters. Padding within cards should be reduced to `md` (24px) to maximize screen real estate while retaining the system's softness.

## Elevation & Depth

Visual hierarchy is established through **Tonal Layers** and **Ambient Shadows**. 

Instead of heavy borders, surfaces use subtle value shifts between the secondary cream (#fdf8e5) and pure white (#ffffff). Shadows should be extremely diffused and low-opacity (3-5%), tinted with a touch of the primary blue (#9cbbd0) to create a natural, "cloud-like" lift. 

Floating elements like modals or dropdowns use a "Medium" elevation with a soft 16px blur radius. Static cards remain flat or use a "Low" elevation (4px blur) to stay grounded within the executive structure.

## Shapes

The shape language is defined by the **Rounded (Level 2)** setting, which translates to a base corner radius of **8px**. 

This specific radius is the signature of the system, providing enough softness to feel approachable and modern, while remaining sharp enough to feel professional and orderly. 
- **Small components** (checkboxes, tags): 4px (Soft)
- **Standard components** (buttons, inputs, cards): 8px (Rounded)
- **Large containers** (modals, hero sections): 16px (Rounded-lg)

## Components

- **Buttons:** Primary buttons use the Tertiary Slate (#536972) with white text for maximum authority. Secondary buttons use an outline of the Primary Blue (#9cbbd0) or a ghost style. 
- **Input Fields:** Use a subtle 1px border in a lightened Neutral tone. On focus, the border transitions to Primary Blue with a soft 2px outer glow in the same hue.
- **Cards:** Cards should have no border, instead relying on the secondary background color (#fdf8e5) and a very soft ambient shadow.
- **Chips/Tags:** Use a "soft" 4px radius. Backgrounds should be a 10% opacity version of the Primary Blue with deep blue text.
- **Navigation:** Top navigation should be persistent with a backdrop blur effect (Glassmorphism) over the secondary background to maintain the airy feel during scroll.
- **Data Tables:** Use horizontal dividers only; avoid vertical lines to keep the "light" aesthetic. Header rows should be in the Tertiary Slate with white text.