---
title: "Walnus Global Ventures — Phase 1 Homepage Design Specification"
version: "1.0"
status: "Design + implementation specification"
phase: "Phase 1 — Homepage"
brand: "Walnus Global Ventures"
---

# WALNUS GLOBAL VENTURES
## PHASE 1 HOMEPAGE — DETAILED DESIGN SPECIFICATION
### Canva-inspired experience system, implemented as a Walnus-owned design system

> **Design directive:** Reproduce the clarity, polish, component discipline, interaction quality, visual confidence and productivity-oriented feel associated with modern Canva-class web products, while **not copying Canva's proprietary source code, private assets, trademarks, logos, exact illustrations, or protected content**. The resulting system must look unmistakably Walnus.

---

## 1. Purpose

This document consolidates the homepage direction from the recovered Walnus Global blueprint and the previously established Phase 1 homepage requirements.

The homepage is the public front door to a larger ecosystem containing:

- Paint Manufacturing
- Professional Painting Services
- SmartCoat™
- SmartView Pro™
- Mix Master™
- Construction Project Intelligence
- Government & Enterprise Project Solutions
- Training and certification
- Future retail / finishing-product commerce

Phase 1 builds **only the public homepage experience**, but its information architecture, component system and data model must be ready for later modules.

---

# 2. Brand Position

Walnus must not present as an ordinary local paint company.

### Primary positioning

**Walnus Global Ventures is a technology-enabled coatings and construction intelligence company.**

The visual language should communicate:

1. Technology
2. Precision
3. Construction intelligence
4. Manufacturing capability
5. Professional execution
6. African relevance
7. Enterprise credibility
8. Human expertise
9. Modern simplicity
10. Scalable systems thinking

The recovered blueprint positions Walnus around AI-enabled paint production, formulation intelligence, quality, sourcing, production and entrepreneurship. The homepage should translate that architecture into a visually simple public experience rather than exposing the entire internal system.

---

# 3. Experience Principle

## "Simple on the surface. Intelligent underneath."

The user should experience:

**Discover → Understand → Explore → Trust → Engage**

The homepage should never feel like an enterprise software dashboard.

It should feel like a premium technology-company landing page that happens to operate in coatings, manufacturing and construction.

---

# 4. Design Language

## Visual character

- Clean
- Premium
- Minimal
- Spacious
- Editorial
- Product-led
- Confident
- Light-to-dark transitions where useful
- Subtle motion
- High-quality imagery
- Strong typography
- Carefully controlled colour
- Rounded UI surfaces where appropriate
- No visual clutter

## Avoid

- Generic Nigerian paint-company aesthetics
- Overuse of green/yellow national colour clichés
- Clip-art construction imagery
- Excessive gradients
- Excessive glassmorphism
- Decorative icons without semantic purpose
- Cheap-looking stock imagery
- Dense paragraphs above the fold
- Excessive animation
- Fake AI visual effects

---

# 5. Canva-Inspired UI Philosophy

The following qualities should be reproduced as **design principles**, not copied implementation:

### 5.1 Clarity
Every screen region has one obvious purpose.

### 5.2 Component consistency
Buttons, cards, menus, fields, icons and typography behave consistently everywhere.

### 5.3 Progressive disclosure
Show the essential information first. Reveal complexity only when the visitor asks for it.

### 5.4 Strong visual hierarchy
Headline → supporting statement → proof / visual → action.

### 5.5 Low-friction interaction
Hover states, transitions, menus and calls-to-action should feel immediate.

### 5.6 Friendly precision
The interface should feel approachable without becoming playful or childish.

### 5.7 Visual storytelling
Use imagery, motion and product demonstrations to explain capabilities instead of writing large blocks of text.

---

# 6. Homepage Information Architecture

Canonical sequence:

1. Global Navigation
2. Hero
3. Capability / Value Proposition
4. Walnus Ecosystem
5. SmartView Pro™
6. Mix Master™ / Formulation Intelligence
7. Professional Painting / Mix On Site
8. Construction Project Intelligence
9. Site → Data → Estimate → Formulation → Production → Execution → Report
10. Project / Portfolio Showcase
11. AI / Intelligence Layer
12. Trust / Enterprise CTA
13. Footer

The exact number of visual sections may change during implementation, but this logical sequence should remain stable.

---

# 7. Global Navigation

## Desktop

Left:

**WALNUS GLOBAL** wordmark.

Centre/right navigation:

- Solutions
- SmartCoat
- Manufacturing
- Projects
- About

Right-side primary actions:

- Explore
- Contact / Talk to Walnus

Optional utility:

- Menu icon for expanded ecosystem navigation

## Mobile

- Wordmark
- Compact menu trigger
- Optional CTA

### Navigation behaviour

- Sticky after initial scroll
- Transparent / overlay treatment over hero
- Transitions to solid or elevated surface after scroll
- Smooth anchor scrolling
- Active section indication where useful

---

# 8. Wordmark

The wordmark should be text/vector based rather than a bitmap whenever possible.

### Requirements

- Strong horizontal presence
- High legibility
- Works on dark and light backgrounds
- Small-size variant
- Monochrome variant
- Inverted variant

Do not use decorative logo effects that reduce clarity.

---

# 9. Hero Section

## Objective

Immediately communicate that Walnus is larger than paint manufacturing.

### Recommended headline direction

**COATINGS. CONSTRUCTION. INTELLIGENCE.**

Supporting message:

> Technology-enabled coatings, manufacturing and project intelligence for a new generation of construction.

Primary CTA:

**Explore Walnus**

Secondary CTA:

**Talk to Walnus**

### Hero visual

Use a cinematic construction / coating / technology composition.

Possible visual layers:

- Architectural structure
- Painter / professional finishing detail
- Coating texture
- Subtle data overlays
- Building geometry
- Material close-ups
- Controlled atmospheric movement

The visual must remain premium rather than becoming a sci-fi HUD demonstration.

---

# 10. Hero Live Wallpaper System

The homepage architecture should support configurable visual media.

Supported conceptual media types:

- MP4
- WebM
- GIF where performance permits
- Image slideshow
- Parallax image
- Lottie animation
- CSS / procedural motion
- AI-generated motion asset

Admin configuration should eventually support:

- Hero background
- Section wallpaper
- Overlay opacity
- Ambient layer
- Focal position
- Motion intensity
- Mobile asset
- Reduced-motion fallback
- Performance mode

### Rule

Motion is subordinate to content.

Never allow animation to compete with the headline or CTA.

---

# 11. Design Tokens

## Colour architecture

Use semantic tokens rather than hard-coded colours.

```text
--color-background
--color-surface
--color-surface-muted
--color-surface-elevated
--color-text-primary
--color-text-secondary
--color-text-muted
--color-border
--color-accent
--color-accent-hover
--color-success
--color-warning
--color-danger
--color-overlay
```

### Recommended foundation

Primary interface foundation:

- White
- Near-white
- Charcoal
- Near-black
- Neutral grey

Brand accent should be restrained and purposeful.

The homepage may alternate between light editorial sections and darker cinematic sections.

---

# 12. Typography

Typography must feel contemporary and technology-led.

Recommended hierarchy:

```text
Display
H1
H2
H3
Body Large
Body
Body Small
Label
Caption
```

### Display typography

Large, tight, confident headlines.

### Body typography

Readable, neutral, high x-height where possible.

### Numeric typography

Use tabular or semi-tabular numerals for:

- Capacity
- Project metrics
- Material quantities
- Pricing
- Statistics

---

# 13. Spacing System

Use a consistent spacing scale.

Example:

```text
4
8
12
16
24
32
48
64
80
96
128
160
```

Large hero sections should breathe.

Avoid packing sections against one another.

---

# 14. Border Radius

The interface should use a restrained radius system.

```text
radius-sm
radius-md
radius-lg
radius-xl
radius-pill
```

Use:

- Small radius for controls
- Medium radius for cards
- Larger radius for major media panels
- Pill radius for tags / compact controls

Do not round everything.

---

# 15. Elevation

Use very subtle elevation.

```text
shadow-none
shadow-sm
shadow-md
shadow-lg
```

Prefer borders and tonal separation over heavy shadows.

---

# 16. Icon Library

The icon system should be unified across the whole Walnus ecosystem.

## Icon principles

- Outline-first
- Consistent stroke width
- Rounded joins
- Simple silhouettes
- 16 / 20 / 24px standard sizes
- 32px feature size
- No mixed icon families

## Required semantic icon families

### Navigation

- Menu
- Close
- Chevron Down
- Chevron Right
- Arrow Up Right
- Arrow Left
- Arrow Right

### Business

- Building
- Factory
- Briefcase
- Store
- Globe

### Construction

- Hard Hat
- Ruler
- Layers
- Brick / Structure
- Blueprint
- Tools

### Coatings

- Paint bucket
- Droplet
- Roller
- Brush
- Palette
- Colour swatch

### Intelligence

- Spark / intelligence
- Brain / network
- Scan
- Camera
- Cube / 3D
- Data
- Chart

### Project intelligence

- Location pin
- GPS
- Measurement
- Estimate
- Document
- Report
- Checklist

### Communication

- Phone
- Mail
- WhatsApp-style contact action where legally/technically appropriate
- Message

### System

- Search
- Settings
- Filter
- Download
- Share
- Copy
- External link
- Check
- Alert
- Info

---

# 17. Core UI Components

The homepage should be built from a reusable component library.

Required components:

- Header
- Navigation menu
- Mega menu
- Button
- Icon button
- Badge
- Chip
- Tooltip
- Card
- Feature card
- Media card
- Metric card
- Quote / proof card
- Accordion
- Modal
- Drawer
- Tabs
- Carousel
- Gallery
- Image frame
- Video frame
- Section heading
- CTA panel
- Footer

Every component must have defined:

- Default
- Hover
- Focus
- Active
- Disabled
- Loading where applicable
- Mobile behaviour

---

# 18. Button System

### Primary

High-contrast filled button.

### Secondary

Outlined or tonal button.

### Tertiary

Text + directional icon.

### Icon-only

Used only when the icon's purpose is unambiguous.

### Interaction

Buttons should have:

- 120–200ms hover transition
- subtle colour / elevation change
- visible keyboard focus
- touch-safe dimensions

Avoid excessive bouncing or elastic animations.

---

# 19. Section Heading Pattern

Standard pattern:

```text
EYEBROW
Large heading
Short explanatory paragraph
Optional CTA
```

The eyebrow should be small and quiet.

The heading carries the visual weight.

---

# 20. Walnus Ecosystem Section

Introduce the system as interconnected capabilities rather than unrelated services.

Suggested cards:

### SmartCoat™
Digital coatings intelligence.

### SmartView Pro™
Construction measurement and project intelligence.

### Mix Master™
Formulation and production intelligence.

### Professional Painting
Technology-assisted professional execution.

### Manufacturing
Coatings production and supply.

### Project Intelligence
Data-driven construction workflows.

Cards should link to future product pages without requiring those pages to exist in Phase 1.

---

# 21. SmartView Pro™ Section

The recovered product concept positions SmartView Pro as a field survey / construction intelligence tool.

Homepage presentation should simplify that complexity.

### Visual narrative

**SEE → MEASURE → UNDERSTAND → ESTIMATE**

Possible visual:

- Smartphone camera
- Building surface
- 3D geometry
- Measurement overlays
- Material / coating selection
- Estimate output

Do not expose every technical feature on the homepage.

---

# 22. Mix Master™ Section

Position Mix Master as formulation intelligence rather than merely a recipe database.

### Visual narrative

**FORMULATE → CALCULATE → PRODUCE → CONTROL**

Supporting concepts:

- Paint types
- Ingredients
- Process
- Quality control
- Safety
- Equipment
- Supplier / pricing intelligence

The recovered blueprint describes more than 20 formulation categories and a detailed formulation workflow. The homepage should communicate the breadth without becoming a catalogue.

---

# 23. Professional Painting / Mix On Site

The homepage should explain that Walnus can connect:

**MATERIAL → PRODUCTION → PROFESSIONAL EXECUTION**

Key value propositions:

- Supply reliability
- Cost control
- Quality consistency
- Trained painters
- Single-source accountability
- Project-scale execution

The visual should favour real construction work over generic paint advertising.

---

# 24. Construction Project Intelligence

This section establishes the wider construction-technology identity.

Suggested sequence:

```text
SITE
↓
DATA
↓
ESTIMATE
↓
FORMULATION
↓
PRODUCTION
↓
EXECUTION
↓
REPORT
```

Use an animated horizontal or vertical process diagram.

Each node can reveal a short explanation on hover / tap.

---

# 25. Projects / Portfolio

Use a premium editorial grid.

Each project card may contain:

- Hero image
- Project type
- Location
- Scope
- Coating / finishing scope
- Status
- Short outcome

Avoid making the section look like a generic gallery.

Use large image-led storytelling.

---

# 26. AI / Intelligence Section

The AI layer should be represented as infrastructure, not marketing decoration.

Possible capabilities to communicate:

- Formulation intelligence
- Cost intelligence
- Material intelligence
- Project intelligence
- Quality intelligence
- Demand / sourcing intelligence
- Computer vision / site capture roadmap

### Visual rule

Use restrained data visualisation.

No meaningless streams of numbers.

No fake terminal text.

No generic glowing brain graphic.

---

# 27. Trust Layer

Trust should come from evidence rather than exaggerated claims.

Potential proof modules:

- Project experience
- Product / formulation breadth
- Technical capability
- Professional team
- Certification / training system
- Enterprise capability
- Manufacturing capability
- Technology platform

Where numerical claims are used, they must be traceable to an approved source.

---

# 28. Final CTA

The final CTA should serve multiple audiences.

Primary:

**Start a Project**

Secondary:

**Explore the Technology**

Additional:

- Become a Partner
- Talk to Walnus
- Request a Consultation

Use a visually simple, high-confidence closing panel.

---

# 29. Footer

Footer architecture:

### Company

- About
- Contact
- Careers

### Solutions

- SmartCoat
- SmartView Pro
- Manufacturing
- Professional Painting
- Project Intelligence

### Resources

- Insights
- Training
- Documentation

### Contact

- Email
- Phone
- Location

### Legal

- Privacy
- Terms
- Cookies

Include social links only where active and approved.

---

# 30. Responsive Design

## Desktop

Primary experience target:

1440px+

Secondary:

1280px

## Tablet

Approximate range:

768–1199px

## Mobile

Approximate range:

320–767px

### Mobile principles

- Simplify navigation
- Reduce animation
- Replace complex grids with stacked cards
- Preserve large typography but reduce scale
- Maintain comfortable touch targets
- Use mobile-specific hero media where necessary
- Never force desktop interaction patterns onto mobile

---

# 31. Motion System

Motion should be coherent across the site.

### Micro interactions

120–200ms

### Component transitions

200–350ms

### Section transitions

350–700ms

### Cinematic hero motion

Slow and continuous.

Use:

- opacity
- transform
- scale
- blur sparingly
- mask / reveal
- parallax sparingly

Avoid:

- excessive bouncing
- perpetual movement behind readable text
- sudden layout shifts
- animation that blocks navigation

---

# 32. Accessibility

Minimum requirements:

- WCAG-conscious contrast
- Keyboard navigation
- Visible focus states
- Semantic headings
- Alt text
- Reduced-motion mode
- Captions / transcripts for meaningful video
- Touch targets of appropriate size
- No information communicated by colour alone

---

# 33. Technical Architecture

Recommended implementation model:

```text
Frontend
├── Next.js / React
├── TypeScript
├── Tailwind CSS
├── Component library
└── Motion system

Content
├── CMS-ready JSON/content layer
├── Media library
└── Site configuration

Future platform
├── SmartCoat
├── SmartView Pro
├── Mix Master
├── Project Intelligence
└── Admin
```

The exact production stack may change, but the architectural boundary must remain modular.

---

# 34. Component Architecture

Recommended directory model:

```text
app/
  page.tsx
  layout.tsx

components/
  navigation/
  hero/
  sections/
  cards/
  buttons/
  media/
  motion/
  footer/

lib/
  content/
  config/
  analytics/
  utils/

styles/
  globals.css
  tokens.css
```

The homepage should not contain large monolithic components.

---

# 35. Data-Driven Homepage

Homepage content must be separable from presentation.

Example conceptual schema:

```ts
type HomepageSection = {
  id: string
  type: string
  enabled: boolean
  order: number
  eyebrow?: string
  title?: string
  description?: string
  media?: MediaAsset[]
  actions?: CTA[]
  theme?: ThemeVariant
  settings?: Record<string, unknown>
}
```

This allows future admin control without rebuilding the page.

---

# 36. Media Model

```ts
type MediaAsset = {
  id: string
  type: 'image' | 'video' | 'gif' | 'lottie'
  src: string
  mobileSrc?: string
  alt?: string
  poster?: string
  focalPoint?: { x: number; y: number }
  priority?: 'high' | 'normal' | 'low'
}
```

The system must support responsive media and performance-aware loading.

---

# 37. Future Admin Compatibility

The homepage should eventually be controllable through:

**Admin → Appearance**

Possible controls:

- Live Wallpapers
- Hero
- Sections
- Overlay
- Ambient effects
- Performance
- Navigation
- CTA labels
- Featured projects
- Media
- Visibility
- SEO

Do not build the full admin dashboard in Phase 1.

Only build the architectural hooks required for future integration.

---

# 38. Route Architecture

Phase 1 route:

```text
/
```

Future architecture may include:

```text
/smartcoat
/smartview
/mix-master
/manufacturing
/painting
/projects
/training
/investors
/government
/contact
```

Phase 1 should not require these pages to be complete.

---

# 39. Canva-Class Interaction Patterns to Emulate

These patterns should be implemented in Walnus's own visual language:

### Pattern A — Sticky intelligent navigation
Navigation changes subtly with scroll position.

### Pattern B — Large media cards
Large visual areas with concise copy.

### Pattern C — Progressive disclosure
Short summary first; details after interaction.

### Pattern D — Contextual actions
CTAs appear where the user has enough context to act.

### Pattern E — Consistent controls
Same button, card and icon behaviours everywhere.

### Pattern F — Editorial grids
Asymmetric but disciplined image / text composition.

### Pattern G — Smooth transitions
Sections connect naturally rather than snapping abruptly.

### Pattern H — Responsive simplification
Mobile does not merely shrink desktop; it reorganises it.

---

# 40. Homepage Content Tone

Tone:

- Intelligent
- Clear
- Confident
- Human
- Technically credible
- Enterprise-ready
- African but globally legible

Avoid:

- Overclaiming
- Corporate jargon
- Empty AI language
- Excessive motivational copy
- Long mission statements

Prefer short, concrete sentences.

---

# 41. Content Hierarchy Rule

Every section should answer one question.

Examples:

### Hero
**What is Walnus?**

### Ecosystem
**What does Walnus do?**

### SmartView
**How does Walnus understand a project?**

### Mix Master
**How does Walnus understand coatings?**

### Professional execution
**How does Walnus deliver?**

### Project intelligence
**How are all these systems connected?**

### CTA
**What can I do next?**

---

# 42. Performance Requirements

Target:

- Fast first contentful rendering
- Optimised hero media
- Lazy-load below-fold images
- Responsive image formats
- Video poster fallback
- Avoid excessive JavaScript for decorative effects
- Respect reduced-motion preferences
- Avoid layout shift

Heavy hero video must not become a performance liability.

---

# 43. SEO Requirements

Homepage should include:

- One canonical H1
- Descriptive title
- Meta description
- Open Graph image
- Structured internal links
- Semantic HTML
- Organisation metadata where appropriate
- Descriptive image alt text
- Fast loading

Primary conceptual keywords:

- coatings technology
- paint manufacturing Nigeria
- construction technology
- coatings intelligence
- professional painting
- paint formulation
- construction project intelligence

Keyword usage must remain natural.

---

# 44. QA Checklist

## Visual

- [ ] Brand identity is immediately recognisable
- [ ] Homepage does not look like a generic paint company
- [ ] Typography hierarchy is consistent
- [ ] Spacing is consistent
- [ ] Icons come from one family
- [ ] Cards are visually coherent
- [ ] Hero remains readable over media

## Interaction

- [ ] Navigation works on desktop
- [ ] Navigation works on mobile
- [ ] All CTAs work
- [ ] Hover states work
- [ ] Keyboard focus works
- [ ] Scroll animations do not break content
- [ ] Reduced motion works

## Performance

- [ ] Hero asset optimised
- [ ] Images responsive
- [ ] Video compressed
- [ ] Lazy loading implemented
- [ ] No avoidable layout shifts

## Content

- [ ] Claims are verified
- [ ] Product names are consistent
- [ ] SmartCoat / SmartView / Mix Master naming is consistent
- [ ] No placeholder copy remains

---

# 45. Phase 1 Boundary

## Build now

- Premium public homepage
- Responsive navigation
- Hero
- Visual storytelling sections
- SmartCoat positioning
- SmartView positioning
- Manufacturing positioning
- Professional painting positioning
- Project intelligence positioning
- CTA system
- Footer
- Reusable UI components
- Design tokens
- Motion system
- CMS/data-ready content structure

## Do not fully build now

- SmartCoat application
- SmartView Pro application
- Mix Master application
- Full manufacturing management system
- Investor portal
- Government portal
- Admin dashboard
- Full commerce platform
- Full project management platform

These remain future modules.

---

# 46. Design-System Governance

Every new Walnus page must reuse the homepage design system.

No future product page should introduce an unrelated:

- Button style
- Typography system
- Icon family
- Border radius system
- Colour system
- Animation language

The homepage is the **visual source of truth** for the public Walnus digital ecosystem.

---

# 47. Acceptance Criteria

The homepage is considered successful when a first-time visitor can understand within seconds that:

1. Walnus works in coatings and construction.
2. Walnus uses technology and intelligence to improve those activities.
3. Walnus can manufacture / supply coatings.
4. Walnus can support professional project execution.
5. SmartCoat, SmartView Pro and Mix Master form part of a larger technology ecosystem.
6. Walnus is capable of serving serious projects and organisations.
7. There is an obvious next action.

The site should feel:

**premium + intelligent + credible + African + global + technically ambitious.**

---

# 48. Final Creative Direction

The final experience should sit conceptually at the intersection of:

**Canva-like usability**

+

**Apple-like product storytelling**

+

**Stripe-like technical clarity**

+

**Linear-like interface discipline**

+

**Vercel-like technology confidence**

+

**Walnus construction / coatings intelligence**

The references are directional only. The implementation must remain original and Walnus-owned.

---

# 49. One-Sentence Design North Star

> **Walnus should look like the technology company that happens to understand paint, construction and the physical world exceptionally well.**

---

# 50. Source Consolidation Note

This specification consolidates the recovered Walnus Global business blueprint and the established Phase 1 homepage direction. The blueprint identifies Walnus around AI-powered paint production, formulation intelligence, manufacturing, quality, sourcing, entrepreneurship and the broader technology platform; the homepage specification converts those capabilities into a focused public-facing experience.

Canonical blueprint source:

- `Walnus_Global_Blueprint.docx`
- `Walnus_Global_Blueprint(1).docx` — duplicate/recovered copy

Related supporting source:

- `SiteView Pro.pdf`
- `Starter Coure.md`

The design specification deliberately separates **Phase 1 public presentation** from the later application, manufacturing, training, project-intelligence and administration systems.

---

## END OF SPECIFICATION
