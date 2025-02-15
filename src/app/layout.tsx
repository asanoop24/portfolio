import type { Metadata } from "next";
import { Inter, JetBrains_Mono } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-jetbrains",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL('https://me.anoopsh.dev'),
  title: "Anoop Sharma | Staff ML Engineer",
  description: "Staff ML Engineer specializing in production-grade solutions in Natural Language Processing and Computer Vision, with expertise in LLMs and enterprise applications.",
  keywords: "Machine Learning, AI, NLP, Computer Vision, LLM, MLOps, Python, PyTorch, TensorFlow",
  authors: [{ name: "Anoop Sharma" }],
  creator: "Anoop Sharma",
  publisher: "Anoop Sharma",
  robots: "index, follow",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://me.anoopsh.dev",
    siteName: "Anoop Sharma",
    title: "Anoop Sharma | Staff ML Engineer",
    description: "Staff ML Engineer specializing in production-grade solutions in Natural Language Processing and Computer Vision.",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Anoop Sharma - Staff ML Engineer",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Anoop Sharma | Staff ML Engineer",
    description: "Staff ML Engineer specializing in production-grade solutions in Natural Language Processing and Computer Vision.",
    creator: "@asanoop24",
    images: ["/og-image.png"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <link rel="icon" href="/favicon.ico" />
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
        <link rel="manifest" href="/site.webmanifest" />
        <meta name="theme-color" content="#0a0a0a" />
        <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=5" />
      </head>
      <body 
        className={`${inter.variable} ${jetbrainsMono.variable} font-sans bg-black text-gray-900 dark:text-gray-100`}
      >
        {children}
      </body>
    </html>
  );
}
