import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import classes from "./layout.module.css";
import MainNavigation from "../components/layout/main-navigation";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    default: "My Blog - Next.js",
    template: "%s | My Blog"
  },
  description: "A modern blog built with Next.js and TypeScript featuring amazing articles about web development, JavaScript, and more.",
  keywords: ["blog", "nextjs", "react", "javascript", "typescript", "web development"],
  authors: [{ name: "Your Name" }],
  creator: "Your Name",
  publisher: "Your Name",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL || 'http://localhost:3000'),
  alternates: {
    canonical: '/',
  },
  openGraph: {
    title: "My Blog - Next.js",
    description: "A modern blog built with Next.js and TypeScript featuring amazing articles about web development.",
    siteName: "My Blog",
    locale: "en_US",
    type: "website",
    images: [
      {
        url: "/images/site/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "My Blog - Next.js",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "My Blog - Next.js",
    description: "A modern blog built with Next.js and TypeScript featuring amazing articles about web development.",
    images: ["/images/site/twitter-image.jpg"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  icons: {
    icon: "/images/site/favicon.ico",
    shortcut: "/images/site/favicon.ico",
    apple: "/images/site/apple-touch-icon.png", // You'll need to add this
  },
  manifest: "/manifest.json", // You'll need to create this
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <div className={classes.wrapper}>
          <div className={classes.container}>
            <MainNavigation />
            <main className={classes.main}>{children}</main>
          </div>
        </div>
      </body>
    </html>
  );
}
