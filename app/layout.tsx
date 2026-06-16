import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-geist-sans",
});

export const metadata: Metadata = {
  title: "Mikail — Resume",
  description:
    "Resume & Portfolio Mikail — Web Developer yang bersemangat dalam membangun pengalaman digital yang modern dan bermakna.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="id" className={`${inter.variable} antialiased`}>
      <body className="min-h-screen relative">
        {/* Galaxy Background Elements */}
        <div className="stars" />
        <div className="stars2" />
        <div className="nebula-glow nebula-1" />
        <div className="nebula-glow nebula-2" />
        
        {children}
      </body>
    </html>
  );
}
