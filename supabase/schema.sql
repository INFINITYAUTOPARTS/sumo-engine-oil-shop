create extension if not exists pgcrypto;

insert into storage.buckets (id, name, public)
values ('product-images', 'product-images', true)
on conflict (id) do update set public = true;

create table if not exists public.admin_users (
  user_id uuid primary key references auth.users(id) on delete cascade,
  full_name text,
  created_at timestamptz not null default now()
);

create table if not exists public.products (
  id uuid primary key default gen_random_uuid(),
  name text not null,
  slug text not null unique,
  short_description text not null,
  description text not null,
  viscosity text not null,
  category text not null,
  volume text not null,
  price numeric(12, 2) check (price is null or price >= 0),
  stock integer not null default 0 check (stock >= 0),
  image_url text,
  is_active boolean not null default true,
  featured boolean not null default false,
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now()
);

create table if not exists public.orders (
  id uuid primary key default gen_random_uuid(),
  customer_name text not null,
  phone text not null,
  delivery_address text not null,
  notes text,
  status text not null default 'new' check (status in ('new', 'confirmed', 'packed', 'delivered', 'cancelled')),
  total_amount numeric(12, 2) not null default 0 check (total_amount >= 0),
  whatsapp_message text not null,
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now()
);

create table if not exists public.order_items (
  id uuid primary key default gen_random_uuid(),
  order_id uuid not null references public.orders(id) on delete cascade,
  product_id uuid references public.products(id) on delete set null,
  product_name text not null,
  quantity integer not null check (quantity > 0),
  unit_price numeric(12, 2) check (unit_price is null or unit_price >= 0),
  line_total numeric(12, 2) check (line_total is null or line_total >= 0)
);

create or replace function public.is_admin()
returns boolean
language sql
stable
security definer
set search_path = public
as $$
  select exists (
    select 1 from public.admin_users where user_id = auth.uid()
  );
$$;

create or replace function public.set_updated_at()
returns trigger
language plpgsql
as $$
begin
  new.updated_at = now();
  return new;
end;
$$;

drop trigger if exists products_set_updated_at on public.products;
create trigger products_set_updated_at
before update on public.products
for each row execute function public.set_updated_at();

drop trigger if exists orders_set_updated_at on public.orders;
create trigger orders_set_updated_at
before update on public.orders
for each row execute function public.set_updated_at();

alter table public.admin_users enable row level security;
alter table public.products enable row level security;
alter table public.orders enable row level security;
alter table public.order_items enable row level security;

create policy "Admins can read admin users" on public.admin_users
for select to authenticated
using (public.is_admin());

create policy "Public can read active products" on public.products
for select to anon, authenticated
using (is_active = true or public.is_admin());

create policy "Admins can manage products" on public.products
for all to authenticated
using (public.is_admin())
with check (public.is_admin());

create policy "Admins can manage orders" on public.orders
for all to authenticated
using (public.is_admin())
with check (public.is_admin());

create policy "Admins can manage order items" on public.order_items
for all to authenticated
using (public.is_admin())
with check (public.is_admin());

create policy "Public can read product images" on storage.objects
for select to anon, authenticated
using (bucket_id = 'product-images');

create policy "Admins can upload product images" on storage.objects
for insert to authenticated
with check (bucket_id = 'product-images' and public.is_admin());

create policy "Admins can update product images" on storage.objects
for update to authenticated
using (bucket_id = 'product-images' and public.is_admin())
with check (bucket_id = 'product-images' and public.is_admin());

create policy "Admins can delete product images" on storage.objects
for delete to authenticated
using (bucket_id = 'product-images' and public.is_admin());

insert into public.products (name, slug, short_description, description, viscosity, category, volume, price, stock, image_url, featured) values
('SUMO 5W30 R4 Semi Synthetic Engine Oil', 'sumo-5w30-r4-semi-synthetic-engine-oil', 'Suitable for daily passenger cars with good fuel economy and engine protection.', 'SUMO 5W30 R4 Semi Synthetic Engine Oil is suitable for daily passenger cars. It is formulated for good fuel economy, smooth daily driving, and dependable engine protection.', '5W-30', 'Semi Synthetic', '4L', 139.00, 24, '/product-images/sumo-r4.png', true),
('SUMO 10W40 R3 Semi Synthetic Engine Oil', 'sumo-10w40-r3-semi-synthetic-engine-oil', 'Suitable for daily driving and high mileage vehicles.', 'SUMO 10W40 R3 Semi Synthetic Engine Oil is suitable for daily driving and high mileage vehicles that need reliable protection for regular service intervals.', '10W-40', 'Semi Synthetic', '4L', 139.00, 18, '/product-images/sumo-r3.png', true),
('SUMO 5W40 R1 Fully Synthetic Engine Oil', 'sumo-5w40-r1-fully-synthetic-engine-oil', 'Premium engine protection for modern petrol engines.', 'SUMO 5W40 R1 Fully Synthetic Engine Oil delivers premium engine protection and is suitable for modern petrol engines used in Malaysian driving conditions.', '5W-40', 'Fully Synthetic', '4L', 198.00, 36, '/product-images/sumo-r1.png', true),
('SUMO 10W40 M2 Ultra Performance Engine Oil', 'sumo-10w40-m2-ultra-performance-engine-oil', 'Suitable for workshop and fleet customers.', 'SUMO 10W40 M2 Ultra Performance Engine Oil is designed for workshop and fleet customers who need practical, reliable engine oil supply.', '10W-40', 'Performance Series', '4L', 110.00, 36, '/product-images/sumo-m2.png', false),
('SUMO 20W50 M3 M-Power Engine Oil', 'sumo-20w50-m3-m-power-engine-oil', 'Suitable for older and high mileage engines.', 'SUMO 20W50 M3 M-Power Engine Oil is suitable for older and high mileage engines that need thicker oil support and dependable protection.', '20W-50', 'M-Power Series', '4L', 108.00, 30, '/product-images/sumo-m3.png', false),
('SUMO 4X4 15W50 Diesel Engine Oil', 'sumo-4x4-15w50-diesel-engine-oil', 'Suitable for pickup trucks, 4x4 and diesel vehicles.', 'SUMO 4X4 15W50 Diesel Engine Oil is suitable for pickup trucks, 4x4 vehicles, and diesel engine applications.', '15W-50', 'Diesel Engine Oil', '6L', 190.00, 20, '/product-images/sumo-4x4.jpg', false)
on conflict (slug) do nothing;
