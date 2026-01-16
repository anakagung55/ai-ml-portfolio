import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  // Teks ini akan muncul di Tab Browser dan Preview Chat
  title: "Anak Kusuma | Data Enthusiast & ML Engineer",
  
  // Deskripsi ini muncul di bawah link saat dibagikan
  description: "Portfolio of Anak Kusuma, a passionate Data Professional and Machine Learning Engineer specializing in building intelligent systems and automation.",
  
  // Memastikan preview terlihat bagus di LinkedIn/WhatsApp
  openGraph: {
    title: "Anak Kusuma | Portfolio",
    description: "Transforming raw data into meaningful insights.",
    type: "website",
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
      <body className={`${inter.className} bg-[#030712] text-slate-400 antialiased`}>
        {children}
      </body>
    </html>
  );
}