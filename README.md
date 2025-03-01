# Tippsy Landing Page

A modern and minimalistic landing page for Tippsy, a social matchmaking and bar-finding app.

## Features

- **Modern Design:** Clean and minimalist UI with a focus on typography and whitespace
- **Dark Mode Support:** Toggle between light and dark themes
- **iOS App Showcase:** Highlighted app screenshot in the hero section
- **Responsive Design:** Fully responsive on all devices
- **Animations:** Smooth animations powered by Framer Motion
- **Brand Identity:** Consistent use of Tippsy's brand color (#ff007f) and font (Mrs Sheppards)

## Tech Stack

- **Next.js** - React framework for building the application
- **Tailwind CSS** - Utility-first CSS framework for styling
- **shadcn/ui** - Reusable UI components built with Radix UI and Tailwind CSS
- **Framer Motion** - Animation library for React
- **Lucide Icons** - Beautiful, consistent icons
- **Google Fonts** - Mrs Sheppards font for the logo

## Getting Started

First, install the dependencies:

```bash
npm install
# or
yarn install
# or
pnpm install
```

Then, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Project Structure

- `src/app` - Next.js app router files
- `src/components` - React components
  - `ui/` - shadcn/ui components
  - Theme components and layout components
- `public/` - Static assets

## Customization

- The color scheme is defined in `src/app/globals.css`
- The main branding color is set to #ff007f
- The accent color for the CTA section is #D0FE1D

## License

MIT
