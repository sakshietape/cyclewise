-- 1. Create tables
create table if not exists public.guideline_drafts (
  id uuid primary key default gen_random_uuid(),
  title text not null,
  summary text not null,
  source_name text not null,
  source_url text not null,
  source_published_at date,
  status text not null default 'draft' check (status in ('draft', 'approved', 'rejected')),
  created_at timestamptz not null default now(),
  reviewed_at timestamptz
);

create table if not exists public.page_content (
  slug text primary key,
  title text not null,
  body jsonb not null default '{}'::jsonb,
  updated_at timestamptz not null default now(),
  updated_by uuid references auth.users(id)
);

-- 2. Grant permissions to roles so PostgREST schema cache exposes the tables
grant usage on schema public to anon, authenticated, service_role;
grant all on table public.guideline_drafts to anon, authenticated, service_role;
grant all on table public.page_content to anon, authenticated, service_role;

-- 3. Enable Row Level Security
alter table public.guideline_drafts enable row level security;
alter table public.page_content enable row level security;

-- 4. RLS policies for guideline_drafts
drop policy if exists "published drafts are public" on public.guideline_drafts;
create policy "published drafts are public" on public.guideline_drafts
  for select using (status = 'approved' or auth.role() in ('authenticated', 'service_role'));

drop policy if exists "admins manage drafts" on public.guideline_drafts;
create policy "admins manage drafts" on public.guideline_drafts
  for all using (auth.role() in ('authenticated', 'service_role'))
  with check (auth.role() in ('authenticated', 'service_role'));

-- 5. RLS policies for page_content
drop policy if exists "published pages are public" on public.page_content;
create policy "published pages are public" on public.page_content
  for select using (true);

drop policy if exists "admins manage pages" on public.page_content;
create policy "admins manage pages" on public.page_content
  for all using (auth.role() in ('authenticated', 'service_role'))
  with check (auth.role() in ('authenticated', 'service_role'));

-- 6. Reload PostgREST schema cache
notify pgrst, 'reload schema';

-- 7. Seed initial draft and page content if not present
insert into public.guideline_drafts (title, summary, source_name, source_url, status)
values (
  '2023 guideline: PCOS care should be personal, not one-size-fits-all.',
  'Experts recommend shared decision-making: your goals, preferences, symptoms, and overall health should shape your care. Lifestyle support is helpful for everyone, whatever their body size.',
  'Monash University PCOS Guideline',
  'https://www.monash.edu/medicine/mchri/pcos/guideline',
  'draft'
) on conflict do nothing;

insert into public.page_content (slug, title, body)
values (
  'home',
  'Home',
  '{"introduction": "Polycystic ovary syndrome can look different for everyone. Find clear, kind information to help you feel more informed and ready for your next conversation with a doctor."}'::jsonb
) on conflict (slug) do nothing;

