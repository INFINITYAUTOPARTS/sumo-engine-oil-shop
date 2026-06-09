# Vercel Deployment Guide

This website is ready to deploy on Vercel as a Next.js app. The public storefront works without Supabase because product pages use fallback product data from `src/lib/products.ts`.

## Current Public Pages

- `/`
- `/products`
- `/products/[slug]`
- `/cart`
- `/workshop-dealer`
- `/about`
- `/contact`
- `/sitemap.xml`
- `/robots.txt`

Admin code remains in the project, but public admin links are hidden for now.
If Supabase environment variables are not configured, `/admin/*` pages show `Admin disabled for now` and do not require Supabase during build.

## Local Build Check

Run these commands inside the project folder:

```bash
npm install
npm run build
```

Project folder:

```text
outputs/sumo-engine-oil-shop
```

## GitHub Deployment Steps

1. Create a new GitHub repository.
2. Copy or commit the `sumo-engine-oil-shop` project folder to that repository.
3. Push to GitHub:

```bash
git init
git add .
git commit -m "Initial SUMO Engine Oil website"
git branch -M main
git remote add origin YOUR_GITHUB_REPO_URL
git push -u origin main
```

## Vercel Deployment Steps

1. Go to Vercel.
2. Click `Add New Project`.
3. Import the GitHub repository.
4. Framework preset: `Next.js`.
5. Root directory: select the project root if needed.
6. Build command:

```bash
npm run build
```

7. Output directory: leave default.
8. Deploy.

## Environment Variables

For public fallback-product mode, Supabase variables are optional.

Set this for the live domain:

```text
NEXT_PUBLIC_SITE_URL=https://your-domain.com
```

Optional, only when enabling Supabase admin/product management later:

```text
NEXT_PUBLIC_SUPABASE_URL=
NEXT_PUBLIC_SUPABASE_ANON_KEY=
SUPABASE_SERVICE_ROLE_KEY=
NEXT_PUBLIC_WHATSAPP_PHONE=60169133412
```

## Static Assets Required

Place these files before deployment:

```text
public/hero.jpg
public/brand/infinity-auto-parts-logo.png
public/favicon.ico
public/product-images/sumo-r4.png
public/product-images/sumo-r3.png
public/product-images/sumo-r1.png
public/product-images/sumo-m2.png
public/product-images/sumo-m3.png
public/product-images/sumo-4x4.jpg
```

If product images are still in `public/products`, copy them into `public/product-images`.

## Notes

- No Stripe, PayPal or FPX is integrated.
- WhatsApp remains the primary quote/order channel.
- Shopee and TikTok Shop links are external marketplace buttons.
- Admin routes are not linked publicly and are disallowed in `robots.txt`.
