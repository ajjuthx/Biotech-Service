# Urvi's Biomedical Services — Website

A professional B2B healthcare services website built with Next.js 16, TypeScript, Tailwind CSS v4, and PostgreSQL (Prisma ORM).

## Quick Start

```bash
npm install
cp .env.example .env          # fill in DATABASE_URL + JWT_SECRET
npx prisma migrate dev --name init
npx tsx prisma/seed.ts        # creates admin + demo services
npm run dev                   # http://localhost:3000
```

**Default admin:** `admin@uvibiomedical.com` / `Admin@1234`

## Before Launch — Checklist

### Content (replace ALL placeholders)
- [ ] Phone number — update in Navbar, Footer, Contact page, WhatsApp button (`src/components/marketing/whatsapp-float.tsx`)
- [ ] Email — replace `info@uvibiomedical.com` throughout
- [ ] Address — update in Footer and Contact page
- [ ] Service area / cities covered — FAQ and About page
- [ ] Working hours — Navbar info bar, Footer, Contact page
- [ ] Team profiles — About page
- [ ] Testimonials — `src/components/marketing/testimonials-section.tsx`
- [ ] Knowledge base articles — Resources page
- [ ] Domain — replace `www.uvibiomedical.com` in `sitemap.ts` + `robots.ts`

### Technical
- [ ] Strong `JWT_SECRET` in production `.env`
- [ ] Change admin password after first login
- [ ] Production `DATABASE_URL` (Supabase / Neon / Railway / self-hosted)
- [ ] Run `npx prisma migrate deploy` in production
- [ ] Wire email notifications — set `EMAIL_NOTIFICATIONS_ENABLED=true` in `.env` and implement `src/lib/notifications/index.ts`
- [ ] WhatsApp number — update `910000000000` in `whatsapp-float.tsx`
- [ ] Activate Google Fonts — uncomment lines in `src/app/layout.tsx`

## Key Pages

| Route | Description |
|---|---|
| `/` | Homepage |
| `/services` | Service listing with search + filter |
| `/services/[slug]` | Service detail pages |
| `/icu-equipment` | ICU Equipment service page |
| `/ot-equipment` | OT Equipment service page |
| `/amc-cmc` | AMC/CMC dedicated page |
| `/service-request` | Breakdown/service request form |
| `/about` | About page |
| `/contact` | Contact with emergency breakdown notice |
| `/faq` | FAQ |
| `/resources` | Knowledge base |
| `/admin/*` | Admin panel (JWT-protected) |

## Design Tokens (src/app/globals.css)

| Token | Value | Use |
|---|---|---|
| `--color-primary` | `#1a4f8a` | Medical trust blue |
| `--color-secondary` | `#0e8c7e` | Medical teal |
| `--color-accent` | `#e05c1a` | Emergency/breakdown CTAs |

## Tech Stack

Next.js 16 • TypeScript • Tailwind CSS v4 • Prisma 6 • PostgreSQL • bcryptjs • jose (JWT) • Zod • Lucide React
