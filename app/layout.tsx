import type { Metadata } from "next";
import { Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";

const plusJakartaSans = Plus_Jakarta_Sans({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-plus-jakarta-sans",
});

export const metadata: Metadata = {
  title: "Mikail — Full Stack Developer",
  description: "Portfolio of Mikail Yuddha Wibowo, a Full Stack Developer building modern, resilient digital experiences.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="id" className={`${plusJakartaSans.variable} antialiased`} style={{ scrollBehavior: 'smooth' }}>
      <body className="min-h-screen relative bg-[#050505] text-zinc-100 overflow-x-hidden selection:bg-emerald-500/30">
        {/* Core Ethereal Background Mesh */}
        <div className="fixed inset-0 z-[-1] pointer-events-none bg-[#050505]">
          <div className="absolute top-[-20%] left-[-10%] w-[60%] h-[60%] rounded-full bg-emerald-900/10 blur-[140px]" />
          <div className="absolute bottom-[-20%] right-[-10%] w-[50%] h-[50%] rounded-full bg-zinc-800/20 blur-[120px]" />
        </div>
        
        {children}
      </body>
    </html>
  );
}
