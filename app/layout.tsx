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
  title: "My Blog - Next.js",
  description: "A modern blog built with Next.js and TypeScript",
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
