# INFINITY AUTO PARTS E-Commerce Website

A production-ready Next.js storefront for INFINITY AUTO PARTS selling SUMO Engine Oil Malaysia products. It includes a mobile-first catalog, product detail pages, cart, checkout, WhatsApp ordering, Supabase-backed orders, and protected admin dashboards for products and orders.

## Tech Stack

- Next.js App Router
- Tailwind CSS
- Supabase database and auth
- Supabase row-level security
- LocalStorage cart with server-side checkout submission
- Malaysian Ringgit pricing displayed as RM

## Quick Start

1. Install dependencies:

```bash
npm install
```

2. Create a Supabase project.

3. Run `supabase/schema.sql` in the Supabase SQL editor.

If you already created the database from an earlier version, run `supabase/official-products-migration.sql` to replace old catalog entries with the six official SUMO products.

Run `supabase/product-image-storage.sql` if your existing Supabase project does not yet have the `product-images` storage bucket and policies.

4. Create an admin user in Supabase Auth, copy the user's UUID, then run:

```sql
insert into public.admin_users (user_id, full_name)
values ('USER_UUID_HERE', 'Store Admin');
```

5. Copy `.env.example` to `.env.local` and add your Supabase keys. The WhatsApp number is set to `60169133412`.

6. Start development:

```bash
npm run dev
```

Visit `http://localhost:3000`.

For full admin product management setup, see `ADMIN_SETUP.md`.

For GitHub and Vercel deployment steps, see `VERCEL_DEPLOYMENT.md`.

Admin pages are disabled automatically when Supabase environment variables are missing, so the public website can deploy without Supabase.

## Admin Access

- Login: `/admin/login`
- Product management: `/admin/products`
- Order management: `/admin/orders`

Admin pages require a Supabase Auth account whose `user_id` exists in `public.admin_users`.

## Quote Request Flow

The website keeps cart functionality but does not use online checkout. Customers request distributor/workshop quotes through WhatsApp from the cart.

WhatsApp ordering uses:

```text
https://wa.me/60169133412?text=
```

The site includes a floating WhatsApp button, product-level WhatsApp order buttons, and a cart quote request button.

No Stripe, PayPal, FPX, Shopee, Lazada, or marketplace checkout is integrated.

## Brand Logo

Place the uploaded Infinity Auto Parts logo at:

```text
public/brand/infinity-auto-parts-logo.png
```

The header renders the logo at 50-60px desktop height with aspect ratio preserved, and the footer reuses the same optimized Next.js image. Generate `public/favicon.ico` from the same logo for browser tabs.

## Production Notes

- Keep `SUPABASE_SERVICE_ROLE_KEY` server-only.
- Set `NEXT_PUBLIC_SITE_URL` to your real domain before deployment.
- Configure Supabase Auth redirect URLs for your deployed site.
- Product images load from `public/product-images` using the Next.js `Image` component, keeping `/products` reserved for product detail pages.
- `/product-images/[filename]` also has a route-handler fallback that reads from `public/product-images` and falls back to `public/products` during migration.
- Product prices are official RM prices in the seed data and can be edited manually in the admin dashboard.
- Company contact: WhatsApp `016-913 3412`, email `jupiterconsultantservices@gmail.com`, address `No38, Jalan SM 3, Taman Sunway Batu Caves, 68100 Batu Caves, Selangor`.
- Review shipping, payment, tax, and warranty copy before going live.
