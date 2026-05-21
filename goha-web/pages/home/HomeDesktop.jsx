"use client";

import { useEffect, useRef, useState } from 'react';
import Navbar from '@/components/Navbar';
import CarruselVertical from '@/components/CarruselVertical';
import CarruselEmpresas from '@/components/CarruselEmpresas';
import ProductosServicios from '@/components/ProductosServicios';
import Lideres from '@/components/Lideres';
import FraseFinal from '@/components/FraseFinal';
import Footer from '@/components/Footer';

export default function HomeDesktop() {
  const sloganRef = useRef(null);
  const [showNavbar, setShowNavbar] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setShowNavbar(!entry.isIntersecting);
      },
      { threshold: 0.1 }
    );

    if (sloganRef.current) observer.observe(sloganRef.current);

    return () => {
      if (sloganRef.current) observer.unobserve(sloganRef.current);
    };
  }, []);

  return (
    <>
      <Navbar visible={showNavbar} />

      <main>
        <div ref={sloganRef}>
          <CarruselVertical />
        </div>

        <CarruselEmpresas />
        <ProductosServicios />
        <Lideres />
        <FraseFinal />
        <Footer />
      </main>
    </>
  );
}
