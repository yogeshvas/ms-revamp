/** @format */

import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { Header } from "@/components/header";
import FooterSection from "@/components/footer";
import Script from "next/script";

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
    default:
      "Mamastops - Logistics Solutions | Border Clearance, GPS Tracking & Fleet Management",
    template: "%s | Mamastops",
  },
  description:
    "Transform your logistics operations with Mamastops' comprehensive solutions. Cashless border clearance, real-time GPS tracking, and advanced fleet management for modern logistics companies.",
  keywords: [
    "logistics solutions",
    "border clearance",
    "GPS tracking",
    "fleet management",
    "cashless payments",
    "logistics technology",
    "supply chain management",
    "truck tracking",
    "fleet optimization",
    "border crossing",
    "logistics software",
    "fleet monitoring",
  ],
  authors: [{ name: "Mamastops" }],
  creator: "Mamastops",
  publisher: "Mamastops",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL("https://mamastops.com"),
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://mamastops.com",
    title:
      "Mamastops - Logistics Solutions | Border Clearance, GPS Tracking & Fleet Management",
    description:
      "Transform your logistics operations with Mamastops' comprehensive solutions. Cashless border clearance, real-time GPS tracking, and advanced fleet management for modern logistics companies.",
    siteName: "Mamastops",
    images: [
      {
        url: "/logo-white.png",
        width: 1200,
        height: 630,
        alt: "Mamastops - Logistics Solutions",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title:
      "Mamastops - Logistics Solutions | Border Clearance, GPS Tracking & Fleet Management",
    description:
      "Transform your logistics operations with Mamastops' comprehensive solutions. Cashless border clearance, real-time GPS tracking, and advanced fleet management.",
    images: ["/logo-white.png"],
    creator: "@mamastops",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  verification: {
    google: "your-google-verification-code",
    yandex: "your-yandex-verification-code",
    yahoo: "your-yahoo-verification-code",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "Mamastops",
    url: "https://mamastops.com",
    logo: "https://mamastops.com/logo-white.png",
    description:
      "Leading provider of logistics solutions including border clearance, GPS tracking, and fleet management services.",
    foundingDate: "2020",
    industry: "Logistics Technology",
    address: {
      "@type": "PostalAddress",
      addressCountry: "IN",
      addressLocality: "India",
    },
    contactPoint: {
      "@type": "ContactPoint",
      telephone: "+1-555-123-4567",
      contactType: "customer service",
      email: "hello@mamastops.com",
    },
    sameAs: [
      "https://www.linkedin.com/company/mamastops",
      "https://twitter.com/mamastops",
      "https://www.facebook.com/mamastops",
    ],
    offers: [
      {
        "@type": "Service",
        name: "Border Clearance Service",
        description:
          "Seamless, cashless cross-border movement with digital payments and streamlined clearance processes.",
      },
      {
        "@type": "Service",
        name: "GPS Tracking Solution",
        description:
          "Real-time fleet tracking and monitoring with advanced analytics and reporting capabilities.",
      },
      {
        "@type": "Service",
        name: "Fleet Management",
        description:
          "Comprehensive fleet management platform with ERP integration and operational optimization tools.",
      },
    ],
  };

  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/favicon.ico" />
        <link rel="apple-touch-icon" href="/logo-white.png" />
        <link rel="manifest" href="/manifest.json" />
        <meta name="theme-color" content="#dc2626" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="robots" content="index, follow" />
        <meta name="googlebot" content="index, follow" />
        <meta name="bingbot" content="index, follow" />

        {/* Preconnect to external domains for performance */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />

        {/* Structured Data */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(structuredData),
          }}
        />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <Header />
        {children}
        <Script
          src="https://cdn.klain.in/widget/68e74ee200530941283bab63_1759989545870/embed.js"
          strategy="afterInteractive"
        />
        <FooterSection />
      </body>
    </html>
  );
}
