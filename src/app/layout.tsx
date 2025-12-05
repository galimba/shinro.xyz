import type { Metadata } from "next";
import { Inter, JetBrains_Mono } from "next/font/google";
import Script from "next/script";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

const jetbrainsMono = JetBrains_Mono({
  variable: "--font-jetbrains-mono",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://shinro.xyz"),
  title: "Shinro - Spatial Intelligence for Autonomous Systems",
  description:
    "Dense volumetric foundation that autonomous systems use to navigate complex, unstructured environments with absolute certainty.",
  keywords: [
    "spatial intelligence",
    "autonomous systems",
    "SLAM",
    "robotics",
    "navigation",
    "dense mapping",
    "volumetric",
  ],
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-snippet": -1,
      "max-image-preview": "large",
      "max-video-preview": -1,
    },
  },
  alternates: {
    canonical: "https://shinro.xyz",
  },
  icons: {
    icon: [
      { url: "/favicon.png", sizes: "32x32", type: "image/png" },
      { url: "/icon-192.png", sizes: "192x192", type: "image/png" },
      { url: "/icon-512.png", sizes: "512x512", type: "image/png" },
    ],
    apple: [
      { url: "/apple-touch-icon.png", sizes: "180x180", type: "image/png" },
    ],
  },
  openGraph: {
    title: "Shinro - Spatial Intelligence Infrastructure",
    description: "Dense volumetric foundation for autonomous navigation.",
    url: "https://shinro.xyz",
    siteName: "Shinro",
    type: "website",
    locale: "en_US",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Shinro - Spatial Intelligence for Autonomous Systems",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Shinro - Spatial Intelligence Infrastructure",
    description: "Dense volumetric foundation for autonomous navigation.",
    images: ["/og-image.png"],
  },
};

const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "Shinro",
  url: "https://shinro.xyz",
  logo: "https://shinro.xyz/images/logo-alpha-730x730.png",
  description: "Volumetric Spatial Intelligence Infrastructure",
  sameAs: ["https://github.com/shinro-xyz"],
  contactPoint: {
    "@type": "ContactPoint",
    contactType: "sales",
    email: "contact@shinro.xyz",
  },
};

const websiteSchema = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  name: "Shinro",
  url: "https://shinro.xyz",
  description: "Dense volumetric foundation for autonomous systems navigation",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} ${jetbrainsMono.variable}`}>
      <head>
        <link rel="dns-prefetch" href="https://www.googletagmanager.com" />
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-6DGH08LSBE"
          strategy="afterInteractive"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-6DGH08LSBE');
          `}
        </Script>
        <Script
          id="organization-schema"
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
        />
        <Script
          id="website-schema"
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteSchema) }}
        />
      </head>
      <body className="font-sans antialiased">{children}</body>
    </html>
  );
}
