# Design System — Venti Primo

## Product Context
- **What this is:** Single-page scroll marketing site with blog for a diversified holding company
- **Who it's for:** Institutional investors, fund managers, corporate clients, HNW individuals, family offices, and corporate clients seeking network/telco solutions
- **Space/industry:** Institutional finance + technology infrastructure, Nigeria/Africa emerging markets
- **Project type:** Marketing site with blog (Next.js App Router, SSG)

## Aesthetic Direction
- **Direction:** Editorial/Magazine meets Industrial/Utilitarian
- **Decoration level:** Intentional — subtle Aso-Oke geometric pattern as section texture (not decorative, structural)
- **Mood:** The site reads like a McKinsey Global Institute report designed by someone who grew up in Lagos. Warm but precise. Institutional but not stiff. Data density signals confidence, restraint signals power.
- **Visual thesis:** "Institutional-grade information architecture rendered in a palette that could only come from West Africa."
- **Reference:** a16z (editorial boldness), Temasek (institutional restraint), Helios (African warmth), Bloomberg Terminal (data-as-luxury)

## Typography

- **Display/Hero:** Instrument Serif — editorial gravitas without stuffiness. Think Financial Times meets contemporary web. Used for all headings, section titles, article titles, pull quotes.
- **Body:** Outfit — clean geometric sans-serif. Not overused like Inter/Poppins. Precise without being cold.
- **Data/Metrics:** IBM Plex Mono — institutional DNA (designed for IBM). Superior tabular numerals. Used for all numbers, deal values, dates, stats, tombstone metrics. The Bloomberg inheritance.
- **Loading:** All self-hosted via `next/font/google`. No FOUT, no layout shift.

### Type Scale
| Role | Size | Line-height | Font |
|------|------|-------------|------|
| Hero | 64–80px | 1.04 | Instrument Serif |
| Section heading | 36–42px | 1.15 | Instrument Serif |
| Sub-heading | 22px | 1.3 | Outfit SemiBold |
| Body | 17px | 1.7 | Outfit Regular |
| Caption | 13px | 1.5 | Outfit Regular |
| Data large | 40–52px | 1.0 | IBM Plex Mono Medium |
| Data small | 11–14px | 1.4 | IBM Plex Mono Regular |

### NEVER use
- Inter, Roboto, Poppins, Montserrat, Space Grotesk as primary type (all overused)
- Do not mix more than 3 fonts

## Color System: "Laterite & Indigo"

Named for Nigerian material culture. Every color has an origin story.

### Dark Mode (Primary — entire site)

| Token | Hex | Name | Origin | Usage |
|-------|-----|------|---------|-------|
| `--color-midnight` | `#0B1121` | Midnight | — | Primary background. Deep navy-black, not flat black. Blue undertone gives depth. |
| `--color-deep-water` | `#141D2F` | Deep Water | — | Cards, elevated sections, form background |
| `--color-dusk` | `#1C2740` | Dusk | — | Hover states, modals, dropdowns |
| `--color-parchment` | `#F0EBE3` | Parchment | Aged paper | Primary text. Warm off-white, never clinical #FFFFFF. |
| `--color-haze` | `#7E8CA0` | Haze | Harmattan sky | Secondary text, captions, body copy |
| `--color-mist` | `#4A5568` | Mist | — | Disabled, placeholders, muted labels |
| `--color-laterite` | `#C4613C` | Laterite | Nigerian soil | **Primary accent.** CTAs, active links, card hover borders, form focus. No other African holdco uses terracotta. |
| `--color-aso-oke` | `#3B6B9C` | Aso-Oke | Yoruba textile | Secondary accent. Section labels, interactive states, diagram borders, data highlights. |
| `--color-gold` | `#D4A853` | Harmattan Gold | Dry-season light | Data numerals exclusively. Deal values, AUM, stats. The Bloomberg terminal inheritance. |
| `--color-success` | `#4A9B6E` | — | — | Muted green. Never neon. |
| `--color-warning` | `#D49A3C` | — | — | Warm amber |
| `--color-error` | `#B84242` | — | — | Muted red |

### Light Mode (Insights/blog pages only)

| Token | Hex | Usage |
|-------|-----|-------|
| `--color-cream` | `#FAFAF5` | Page background |
| `--color-cream-surface` | `#F0EDE6` | Card surfaces |
| `--color-ink` | `#1A1A1A` | Primary text |
| `--color-ink-muted` | `#5A6474` | Secondary text |

Same accent palette (Laterite, Aso-Oke, Gold) applies in both modes. Only backgrounds and text flip.

## Spacing

- **Base unit:** 8px
- **Density:** Dual mode — comfortable (96px section gaps) for marketing, compact for data sections (track record, tombstones)
- **Scale:** 4 / 8 / 16 / 24 / 32 / 48 / 64 / 96 / 128px
- **Section padding:** 96px top/bottom desktop, 64px mobile

## Layout

- **Approach:** Grid-disciplined for structure, gallery pacing for breathing room
- **Grid:** 12 columns, max-width 1280px, gutter 32px desktop / 24px mobile
- **Border radius:** sm: 4px (buttons, inputs), md: 8px (cards), lg: 12px (large cards), full: 9999px (avatar circles)
- **Data components (tombstones, stats):** 4px radius — sharp edges, Bloomberg-grade

## Motion

- **Approach:** Intentional — every animation earns its existence
- **Hero bg:** Slow gradient mesh shift, 24s ease-in-out infinite. Laterite/Indigo/Gold radial gradients. Heat-shimmer effect.
- **Entry reveals:** Fade-up 20px translate, 600ms, ease-out. Staggered 100ms between group items.
- **Stat counters:** Count up from 0 on scroll-in, 2000ms ease-out. IBM Plex Mono + Gold.
- **Card hover:** 2px Y-translate + border-color → `--color-laterite`, 200ms ease-out.

### Easing
```
enter:  cubic-bezier(0, 0, 0.2, 1)
exit:   cubic-bezier(0.4, 0, 1, 1)
move:   cubic-bezier(0.4, 0, 0.2, 1)
```

### Duration Scale
| Name | Duration | Used for |
|------|----------|---------|
| micro | 100ms | Hover states, toggles |
| short | 200ms | Card hover, button press |
| medium | 400ms | Section reveals |
| long | 600ms | Hero animations |

## Signature Design Moves

1. **Living Data Grid:** Hero stats bar in IBM Plex Mono + Harmattan Gold. Numbers animate on entry. Proof first, narrative second.
2. **Dual Density:** Marketing sections breathe at 96px. Data sections (Track Record) compress to Bloomberg-grade density. The contrast IS the brand.
3. **Chromatic Signature:** Aso-Oke weave pattern (diagonal parallelograms, 1px at low opacity) used as section texture. Named color palette with Nigerian origin stories.
4. **Article Template:** Blog articles use Instrument Serif pull quotes, IBM Plex Mono dates, generous whitespace. Elevated presentation for all 4 content categories.

## Anti-patterns (Never Do)

- No purple/violet gradient accents
- No 3-column feature grids with icons in colored circles
- No centered everything with uniform spacing
- No bubbly border-radius on data components
- No stock photography
- No neon greens or generic fintech color schemes
- Never replace `--color-laterite` CTA with any other accent color without design review

## Decisions Log

| Date | Decision | Rationale |
|------|----------|-----------|
| 2026-04-08 | Replaced brief's #00E5A0 green with Laterite #C4613C | Generic fintech green; terracotta is unique in African holdco space |
| 2026-04-08 | Replaced brief's Inter/Space Grotesk with Instrument Serif + Outfit + IBM Plex Mono | Inter is overused; Instrument Serif brings editorial authority; IBM Plex Mono carries institutional data precision |
| 2026-04-08 | Background changed from #0D0D0D to #0B1121 | Blue undertone adds depth, warm accents pop harder against navy-black vs flat black |
| 2026-04-08 | Text changed from #FFFFFF to Parchment #F0EBE3 | Warm off-white reduces eye strain on dark bg; feels premium not clinical |
| 2026-04-08 | Content (copy, services, sectors) follows product brief verbatim | Brief is client source of truth; creative scope is strictly visual/UI layer |
