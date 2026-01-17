"use client";

import React, { useEffect, useRef, useState } from "react";

export default function Spotlight() {
  const divRef = useRef<HTMLDivElement>(null);
  const [isMounted, setIsMounted] = useState(false);
  const [opacity, setOpacity] = useState(0);

  useEffect(() => {
    setIsMounted(true);

    const handleMouseMove = (e: MouseEvent) => {
      if (!divRef.current) return;

      const div = divRef.current;
      const rect = div.getBoundingClientRect();

      // Menghitung posisi mouse relatif terhadap layar
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;

      // Mengirim posisi ke variabel CSS
      div.style.setProperty("--mouse-x", `${x}px`);
      div.style.setProperty("--mouse-y", `${y}px`);

      // Menampilkan cahaya saat mouse pertama kali bergerak
      if (opacity === 0) setOpacity(1);
    };

    window.addEventListener("mousemove", handleMouseMove);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, [opacity]);

  if (!isMounted) return null;

  return (
    <div
      ref={divRef}
      // pointer-events-none penting agar kamu tetap bisa klik tombol/link di bawahnya
      className="pointer-events-none fixed inset-0 z-30 transition-opacity duration-500"
      style={{
        opacity: opacity,
        // Gradien radial mengikuti posisi mouse
        // Menggunakan warna Cyan (34, 211, 238) agar senada dengan tema baru kamu
        background: `radial-gradient(
          600px circle at var(--mouse-x) var(--mouse-y),
          rgba(34, 211, 238, 0.20), 
          transparent 40%
        )`,
      }}
    />
  );
}