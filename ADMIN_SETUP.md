# Admin Product Management Setup

This project uses Supabase for admin login, product data, and product image uploads.

## Admin Pages

- `/admin/login`
- `/admin/products`
- `/admin/products/new`
- `/admin/products/[id]/edit`

## Product Fields

- `name`
- `slug`
- `short_description`
- `description`
- `viscosity`
- `category`
- `volume`
- `price`
- `stock`
- `image_url`
- `is_active`
- `featured`

## Supabase Setup

1. Create a Supabase project.
2. Open the Supabase SQL editor.
3. Run:

```sql
supabase/schema.sql
```

4. If the database already exists, also run:

```sql
supabase/product-image-storage.sql
```

5. In Supabase Auth, create an admin user with this email:

```text
jupiterconsultantservices@gmail.com
```

6. Copy the user UUID from Supabase Auth.
7. Add that user to `public.admin_users`:

```sql
insert into public.admin_users (user_id, full_name)
values ('PASTE_AUTH_USER_UUID_HERE', 'Infinity Auto Parts Admin');
```

Only users listed in `public.admin_users` can access admin product management.

## Product Image Upload

The admin form uploads images to the Supabase Storage bucket:

```text
product-images
```

The uploaded image public URL is saved into `products.image_url`.

## Environment Variables

Copy `.env.example` to `.env.local` and set:

```text
NEXT_PUBLIC_SUPABASE_URL=
NEXT_PUBLIC_SUPABASE_ANON_KEY=
SUPABASE_SERVICE_ROLE_KEY=
NEXT_PUBLIC_WHATSAPP_PHONE=60169133412
```

## Fallback Products

If Supabase is not configured, the storefront continues using fallback products from:

```text
src/lib/products.ts
```
