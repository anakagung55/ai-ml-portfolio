import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Spotlight from "./Spotlight";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Anak Kusuma | Data Enthusiast & ML Engineer",
  description: "Portfolio of Anak Kusuma...",
  icons: {
    icon: "/icon.png",
  },
  // Memastikan preview terlihat bagus di LinkedIn/WhatsApp
  openGraph: {
    title: "Anak Kusuma | Portfolio",
    description: "Transforming raw data into meaningful insights.",
    type: "website",
    images: ["/icon.png"],
    locale: "en_US",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${inter.className} bg-navy-dark text-slate-400 antialiased`}>
        
        {/* 2. Tambahkan komponen Spotlight di sini */}
        <Spotlight />
        
        {children}
      </body>
    </html>
  );
}