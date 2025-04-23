import type { Metadata, Viewport } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { Mrs_Sheppards } from "next/font/google";
import "./globals.css";

import { Providers } from "./providers";
import { generateMetadata } from "@/lib/metadata";

const geistSans = Geist({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-geist-sans",
});

const geistMono = Geist_Mono({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-geist-mono",
});

const mrsSheppards = Mrs_Sheppards({
  weight: ["400"],
  subsets: ["latin"],
  variable: "--font-mrs-sheppards",
  display: "swap",
});

// Base metadata values that apply across the site
export const metadata: Metadata = {
  // This will be merged with page-specific metadata
  metadataBase: new URL("https://tippsy.me"),
  
  // Basic site-wide settings
  applicationName: "Tippsy",
  keywords: "social app, bar finder, drink deals, matchmaking, social networking, nightlife",
  robots: "index, follow",
  generator: "Next.js",
  referrer: "origin-when-cross-origin",
  authors: [{ name: "Tippsy Team" }],
  creator: "Tippsy",
  publisher: "Tippsy",
  category: "Social Networking",
  
  // App linking
  appleWebApp: {
    title: "Tippsy",
    statusBarStyle: "black-translucent",
    capable: true,
  },
  
  appLinks: {
    ios: {
      url: "/app",
      app_store_id: "123456789",
    },
    android: {
      package: "com.tippsy.me",
      app_name: "Tippsy",
    },
    web: {
      url: "/",
      should_fallback: true,
    },
  },
  
  // Verification
  verification: {
    google: "google-site-verification=your-verification-code",
    yandex: "yandex-verification-code",
  },
  
  // Icons are typically handled by favicon.ico in the app directory
  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon.ico",
    apple: "/apple-touch-icon.png",
    other: {
      rel: "apple-touch-icon-precomposed",
      url: "/apple-touch-icon-precomposed.png",
    },
  },
};

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 5,
  userScalable: true,
  viewportFit: 'cover',
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#ff007F" },
    { media: "(prefers-color-scheme: dark)", color: "#ff007F" },
  ],
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning className="dark">
      <head />
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${mrsSheppards.variable} antialiased`}
      >
        <Providers>
          {children}
        </Providers>
      </body>
    </html>
  );
}
