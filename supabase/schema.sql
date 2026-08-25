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

alter table public.guideline_drafts enable row level security;
alter table public.page_content enable row level security;

create policy "published drafts are public" on public.guideline_drafts
  for select using (status = 'approved');
create policy "admins manage drafts" on public.guideline_drafts
  for all using (auth.role() = 'authenticated') with check (auth.role() = 'authenticated');
create policy "published pages are public" on public.page_content
  for select using (true);
create policy "admins manage pages" on public.page_content
  for all using (auth.role() = 'authenticated') with check (auth.role() = 'authenticated');
