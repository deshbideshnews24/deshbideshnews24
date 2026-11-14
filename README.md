# DESHBIDESH NEWS 24

Bilingual Bangla/English news portal starter for deployment on Vercel.

## Included
- Responsive news homepage with navy/red/white identity
- Bangla/English display toggle
- News category navigation and search UI
- Ad placement placeholders (not live ad units)
- Supabase SQL starter schema for categories and articles

## Run locally
1. Install Node.js 20 or newer.
2. Run `npm install`.
3. Copy `.env.example` to `.env.local` and fill in your Supabase project URL and anon key if/when you create a Supabase project.
4. Run `npm run dev` and open http://localhost:3000.

## Deploy to Vercel
1. Create a GitHub account/repository and upload this project.
2. Sign in to Vercel with GitHub and import the repository.
3. Deploy using the default Next.js settings.
4. In Vercel Project Settings > Domains, check whether `deshbideshnews24.vercel.app` is available. Vercel assigns the `vercel.app` subdomain when the project is deployed; the exact requested name may already be taken.

## Important before production
This is a front-end starter, not a finished publishing platform. The admin login, article editor, image upload, role enforcement, and live database integration still need to be implemented and tested. Do not use a demo/localStorage password for a real news site. Create your own Supabase project, run `supabase/schema.sql`, configure secure admin-only policies, and keep service-role secrets server-side. Never send passwords or secret keys in chat.

AdSense placeholders are not active ads. AdSense approval, eligibility, and monetization are controlled by Google and are not guaranteed.
