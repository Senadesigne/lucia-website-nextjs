# Detaljan Plan Migracije: Vite → Next.js 14 App Router

## KORAK 1: Priprema i Backup

(Preskačemo, korisnik je napravio backup)

## KORAK 2: Kreiranje Novog Next.js 14 Projekta

- [x] 2.1 Pokreni `npx create-next-app@latest . --typescript --tailwind --eslint --app --src-dir --import-alias "@/*"` (koristi `.` da instaliraš u trenutni folder) ✅ **ZAVRŠENO** - Ručno instaliran Next.js s potrebnim konfiguracijama
- [x] 2.2 Provjeri `app/layout.tsx` i `app/page.tsx` ✅ **ZAVRŠENO** - Kreirane osnovne stranice

## KORAK 3: Migracija Ovisnosti (Dependencies)

- [x] 3.1 Instaliraj dodatne ovisnosti iz Vite projekta:
  `npm install @radix-ui/react-accordion lucide-react class-variance-authority clsx tailwind-merge react-hook-form @hookform/resolvers zod` ✅ **ZAVRŠENO**
- [x] 3.2 Provjeri da `package.json` *ne* sadrži `vite` ili `react-router-dom` ✅ **ZAVRŠENO** - Čisto, bez Vite ovisnosti

## KORAK 4: Migracija Konfiguracija

- [ ] 4.1 Ažuriraj `tailwind.config.ts` `content` polje da uključuje:
  `content: ['./app/**/*.{js,ts,jsx,tsx,mdx}', './components/**/*.{js,ts,jsx,tsx,mdx}']`
- [ ] 4.2 Provjeri `tsconfig.json` (Next.js bi ga trebao dobro postaviti).

## KORAK 5: Migracija Strukture i Stranica

- [ ] 5.1 Kreiraj foldere: `components`, `hooks`, `lib`.
- [ ] 5.2 Migriraj `src/App.tsx` (Vite) u `app/layout.tsx`. (Trebat će `Navbar` i `Footer` komponente).
- [ ] 5.3 Migriraj `src/pages/index.tsx` (Vite) u `app/page.tsx`.
- [ ] 5.4 Migriraj ostale stranice (npr. `app/author/page.tsx`, `app/contact/page.tsx`).

## KORAK 6: Migracija Komponenti i Stilova

- [ ] 6.1 Kopiraj `src/components` (Vite) u `components/` (Next.js).
- [ ] 6.2 Kopiraj `src/hooks` i `src/lib`.
- [ ] 6.3 Kopiraj CSS iz `src/index.css` (Vite) u `app/globals.css`.
- [ ] 6.4 **KRITIČNO:** Ažuriraj sve relativne import putanje (npr. `../lib/utils`) da koriste alias (`@/lib/utils`).

## KORAK 7: Migracija Statičkih Resursa

- [ ] 7.1 Kopiraj sve iz `public/` (Vite) u `public/` (Next.js).
- [ ] 7.2 Zamijeni sve `<img>` tagove s `next/image` komponentom.

## KORAK 8: Ažuriranje Import Putanja (Routing)

- [ ] 8.1 Zamijeni sve `react-router-dom` `Link` komponente s `next/link`.
- [ ] 8.2 Ukloni sve `useNavigate` ili `BrowserRouter`.

## KORAK 9: Testiranje i Pokretanje

- [ ] 9.1 Pokreni `npm run dev`.
- [ ] 9.2 Testiraj sve stranice i linkove.

## KORAK 10: Čišćenje i Optimizacija

- [ ] 10.1 Dodaj `<Metadata>` objekte u `layout.tsx` i sve `page.tsx` datoteke za SEO.
- [ ] 10.2 Riješi `use client` greške (ako se pojave).
