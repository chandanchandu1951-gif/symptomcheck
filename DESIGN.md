# Design Brief

## Direction

HealthFlow — A reassuring, human-centered medical assessment tool that guides users through symptom evaluation with clarity and trust.

## Tone

Refined minimalism with warm accents. Medical credibility without clinical coldness — inviting, not intimidating.

## Differentiation

Progressive disclosure interview flow with clear visual zones per step, plus color-coded triage recommendations (self-care → ER) visible immediately in results.

## Color Palette

| Token      | OKLCH           | Role                                  |
| ---------- | --------------- | ------------------------------------- |
| background | 0.98 0.005 90   | Warm cream, approachable              |
| foreground | 0.18 0.02 90    | Deep warm grey, readable              |
| card       | 1.0 0.0 0       | Pure white, section separation        |
| primary    | 0.45 0.18 165   | Teal, trust & action (CTAs, progress) |
| accent     | 0.5 0.12 160    | Sage, secondary context & support     |
| muted      | 0.92 0.01 90    | Light grey, disabled/inactive states  |
| destructive| 0.55 0.22 25    | Red, critical warnings only           |

## Typography

- Display: Space Grotesk — modern, geometric clarity for headings
- Body: General Sans — neutral, readable body and UI labels
- Scale: hero `text-5xl md:text-7xl font-bold`, h2 `text-3xl font-semibold`, label `text-sm font-semibold`, body `text-base`

## Elevation & Depth

Cards used for interview sections with subtle shadows (shadow-card for context, shadow-elevated for actions). White cards on warm background create distinct visual zones without visual clutter.

## Structural Zones

| Zone    | Background        | Border              | Notes                                      |
| ------- | ----------------- | ------------------- | ------------------------------------------ |
| Header  | card (white)      | none                | Title + app name; clean entry              |
| Content | background (warm) | border (light)      | Interview steps as stacked cards           |
| Results | background (warm) | border (light)      | Each condition card with triage badge      |
| Footer  | muted (light)     | border-t (light)    | Disclaimers, links, minimal UI             |

## Spacing & Rhythm

Spacious layout (section gaps: 24–32px, card padding: 24px, micro-spacing: 8–12px). Breathing room reinforces trust and readability. No cramped UI.

## Component Patterns

- Buttons: primary (teal bg, white text), secondary (muted bg, foreground text), destructive (red only for ER actions); border-radius 6px
- Cards: white with shadow-card, 6px radius, 24px padding, clear content hierarchy
- Badges: triage colors (green #50b98b for self-care, yellow #ffa500 for telehealth, orange #e87722 for urgent, red #ef4444 for ER)
- Progress bar: teal primary color, rounded ends

## Motion

- Entrance: fade-in on step reveal (200ms ease-out)
- Hover: subtle shadow lift on interactive cards (300ms smooth)
- Transitions: all interactive elements use transition-smooth (0.3s cubic-bezier)

## Constraints

- No gradients or decorative elements
- Radii fixed at 6px (professional, not playful)
- Shadows subtle; never neon or glow effects
- Dark mode uses same warm undertones (cream neutrals, teal primary) for consistency

## Signature Detail

Color-coded triage severity badges embedded in results—users grasp urgency immediately through visual hierarchy, reducing cognitive load and increasing confidence in next steps.

