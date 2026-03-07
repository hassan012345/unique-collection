# Unique Collection - Next.js

Pixel-perfect Next.js 14 implementation of the Unique Collection Figma design.

## Tech Stack

- **Next.js 14** (App Router)
- **TypeScript**
- **Tailwind CSS** with custom design tokens from Figma
- **Google Fonts** (Outfit ≈ Neue Montreal, Playfair Display ≈ Perfectly Nineties)

## Project Structure

```
unique-collection/
├── app/
│   ├── globals.css        # Global styles + font imports
│   ├── layout.tsx         # Root layout with metadata
│   └── page.tsx           # Homepage (assembles all sections)
├── components/
│   ├── TopToast.tsx        # Top announcement bar (green)
│   ├── Navbar.tsx          # Sticky nav with mobile hamburger
│   ├── HeroSection.tsx     # Full-width hero with slides + CTAs
│   ├── GenderCategories.tsx # Men's / Women's category cards
│   ├── ClothesSelection.tsx # Scrollable product carousel (Men + Women)
│   ├── CTAMiddle.tsx       # Full-width CTA with background image
│   ├── WhyChoose.tsx       # 4-feature icon section
│   └── Footer.tsx          # Full footer with links + payment icons
├── tailwind.config.ts      # Design tokens from Figma
├── next.config.js          # Image domains config
└── package.json
```

## Getting Started

```bash
# Install dependencies
npm install

# Run development server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

## Design Tokens (from Figma)

### Colors
| Token | Value |
|-------|-------|
| `green-500` (primary) | `#184335` |
| `adjusted-green-500` | `#245749` |
| `green-50` | `#E8ECEB` |
| `orange-300` | `#FFB86A` |
| `orange-200` | `#FFD6A8` |
| `neutral-900` | `#171717` |

### Typography
| Token | Family | Size | Weight |
|-------|--------|------|--------|
| H1 | Perfectly Nineties | 64px | 400 |
| H2 | Perfectly Nineties | 48px | 600 |
| H3 | Perfectly Nineties | 28px | 700 |
| Body | Neue Montreal | 16px | 400 |
| Small | Neue Montreal | 14px | 400 |

## Notes on Fonts
The design uses **Neue Montreal** and **Perfectly Nineties** (commercial fonts). This implementation uses:
- `Outfit` (Google Fonts) → very close match to Neue Montreal
- `Playfair Display` (Google Fonts) → editorial serif match to Perfectly Nineties

To use the exact fonts, add them to `/public/fonts/` and update `globals.css` with `@font-face` declarations.

## Components

### Navbar
- Sticky positioning with `z-50`
- Desktop: Logo + nav links with chevrons + icon buttons (search, user, cart)
- Mobile: Logo + cart + hamburger menu with slide-down drawer

### HeroSection
- Full-width background image with dark overlay
- Animated dot indicators for slide navigation
- Two CTAs: "Customize your Clothing" + "Shop Ready-Made"

### GenderCategories
- Two equal-width cards with image background + gradient overlay
- Hover scale effect on images
- Animated arrow on link hover

### ClothesSelection
- Horizontal scroll carousel with left/right arrow navigation
- Filter pill tabs (New Arrival, Sale, Unstitched, etc.)
- Product cards with badge overlays (Sale/New Arrival)

### CTAMiddle
- Full-bleed background image with overlay
- Centered text + single CTA button

### WhyChoose
- 4-column grid (2-column on mobile)
- Icons from Figma assets
- Green-tinted background (#E8ECEB)

### Footer
- Dark background (#171717)
- 5-column layout: brand + 4 link sections
- Social icons, dividers, payment method logos
