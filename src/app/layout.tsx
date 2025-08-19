import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  icons: {
    icon: "/favicon.ico", // default favicon
    apple: "/card.png", // for iOS homescreen
  },
  title: "Cryption Verse | Software Solutions & Digital Innovation",
  description:
    "Cryption Verse is a forward-thinking software company delivering cutting-edge web, mobile, and blockchain solutions. We help businesses innovate, scale, and succeed in the digital era.",
  keywords: [
    "Cryption Verse",
    "software company",
    "web development",
    "mobile apps",
    "blockchain solutions",
    "digital transformation",
    "custom software",
  ],
  openGraph: {
    title: "Cryption Verse | Software Solutions & Digital Innovation",
    description:
      "Partner with Cryption Verse to build powerful, scalable, and secure software solutions tailored to your business.",
    url: "https://cryptionverse.com",
    siteName: "Cryption Verse",
    images: [
      {
        url: "/og-image.jpg", // update with your own image path
        width: 1200,
        height: 630,
        alt: "Cryption Verse - Software Company",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Cryption Verse | Software Solutions & Digital Innovation",
    description:
      "We design and develop software that empowers businesses for the future.",
    images: ["/og-image.jpg"],
    creator: "@CryptionVerse", // replace with your handle if available
  },
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
        {children}
      </body>
    </html>
  );
}
