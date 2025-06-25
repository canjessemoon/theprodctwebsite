import type { Metadata, Viewport } from "next";
import { Syne, Source_Code_Pro } from "next/font/google";
import "./globals.css";

const syne = Syne({
  subsets: ["latin"],
  weight: ["400", "600"],
  variable: "--font-syne",
});

const sourceCodePro = Source_Code_Pro({
  subsets: ["latin"],
  weight: ["400"],
  variable: "--font-source-code-pro",
});

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
}

export const metadata: Metadata = {
  title: "TheProdct - AI Strategy and Development Partner",
  description: "AI can seem overwhelming with all the noise surrounding it. At The Prodct, we focus on turning complexity into clarity and helping you navigate AI strategy and development.",
  keywords: ["AI Strategy", "AI Development", "AI Upskilling", "AI Consulting", "Machine Learning"],
  authors: [{ name: "TheProdct Team" }],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${syne.variable} ${sourceCodePro.variable} font-sans antialiased`}>
        {children}
      </body>
    </html>
  );
}
