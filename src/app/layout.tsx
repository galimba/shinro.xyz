import type { Metadata } from "next";
import { Inter, JetBrains_Mono } from "next/font/google";
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
    description:
      "Dense volumetric foundation for autonomous navigation.",
    url: "https://shinro.xyz",
    siteName: "Shinro",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Shinro - Spatial Intelligence Infrastructure",
    description:
      "Dense volumetric foundation for autonomous navigation.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} ${jetbrainsMono.variable}`}>
      <body className="font-sans antialiased">{children}</body>
    </html>
  );
}
