delete from public.products
where slug not in (
  'sumo-5w30-r4-semi-synthetic-engine-oil',
  'sumo-10w40-r3-semi-synthetic-engine-oil',
  'sumo-5w40-r1-fully-synthetic-engine-oil',
  'sumo-10w40-m2-ultra-performance-engine-oil',
  'sumo-20w50-m3-m-power-engine-oil',
  'sumo-4x4-15w50-diesel-engine-oil'
);

insert into public.products (name, slug, short_description, description, viscosity, category, volume, price, stock, image_url, featured) values
('SUMO 5W30 R4 Semi Synthetic Engine Oil', 'sumo-5w30-r4-semi-synthetic-engine-oil', 'Suitable for daily passenger cars with good fuel economy and engine protection.', 'SUMO 5W30 R4 Semi Synthetic Engine Oil is suitable for daily passenger cars. It is formulated for good fuel economy, smooth daily driving, and dependable engine protection.', '5W-30', 'Semi Synthetic', '4L', 139.00, 24, '/product-images/sumo-r4.png', true),
('SUMO 10W40 R3 Semi Synthetic Engine Oil', 'sumo-10w40-r3-semi-synthetic-engine-oil', 'Suitable for daily driving and high mileage vehicles.', 'SUMO 10W40 R3 Semi Synthetic Engine Oil is suitable for daily driving and high mileage vehicles that need reliable protection for regular service intervals.', '10W-40', 'Semi Synthetic', '4L', 139.00, 18, '/product-images/sumo-r3.png', true),
('SUMO 5W40 R1 Fully Synthetic Engine Oil', 'sumo-5w40-r1-fully-synthetic-engine-oil', 'Premium engine protection for modern petrol engines.', 'SUMO 5W40 R1 Fully Synthetic Engine Oil delivers premium engine protection and is suitable for modern petrol engines used in Malaysian driving conditions.', '5W-40', 'Fully Synthetic', '4L', 198.00, 36, '/product-images/sumo-r1.png', true),
('SUMO 10W40 M2 Ultra Performance Engine Oil', 'sumo-10w40-m2-ultra-performance-engine-oil', 'Suitable for workshop and fleet customers.', 'SUMO 10W40 M2 Ultra Performance Engine Oil is designed for workshop and fleet customers who need practical, reliable engine oil supply.', '10W-40', 'Performance Series', '4L', 110.00, 36, '/product-images/sumo-m2.png', false),
('SUMO 20W50 M3 M-Power Engine Oil', 'sumo-20w50-m3-m-power-engine-oil', 'Suitable for older and high mileage engines.', 'SUMO 20W50 M3 M-Power Engine Oil is suitable for older and high mileage engines that need thicker oil support and dependable protection.', '20W-50', 'M-Power Series', '4L', 108.00, 30, '/product-images/sumo-m3.png', false),
('SUMO 4X4 15W50 Diesel Engine Oil', 'sumo-4x4-15w50-diesel-engine-oil', 'Suitable for pickup trucks, 4x4 and diesel vehicles.', 'SUMO 4X4 15W50 Diesel Engine Oil is suitable for pickup trucks, 4x4 vehicles, and diesel engine applications.', '15W-50', 'Diesel Engine Oil', '6L', 190.00, 20, '/product-images/sumo-4x4.jpg', false)
on conflict (slug) do update set
  name = excluded.name,
  short_description = excluded.short_description,
  description = excluded.description,
  viscosity = excluded.viscosity,
  category = excluded.category,
  volume = excluded.volume,
  price = excluded.price,
  stock = excluded.stock,
  image_url = excluded.image_url,
  featured = excluded.featured,
  is_active = true;
