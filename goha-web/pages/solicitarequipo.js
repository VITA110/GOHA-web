import React, { useEffect, useRef, useState } from 'react';
import SolicitarEquipoContenido from '@/components/servicios/solicitarequipo/SolicitarEquipoContenido';
import Navbar from '@/components/Navbar';
import styles from './SolicitarEquipo.module.css';
import Footer from '@/components/Footer';

export default function SolicitarEquipo() {
  const sloganRef = useRef(null);
  const [showNavbar, setShowNavbar] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setShowNavbar(!entry.isIntersecting);
      },
      { threshold: 0.1 }
    );

    if (sloganRef.current) {
      observer.observe(sloganRef.current);
    }

    return () => {
      if (sloganRef.current) {
        observer.unobserve(sloganRef.current);
      }
    };
  }, []);

  return (
    <div className={styles.solicitarEquipoPage}>
      <Navbar visible={true} />
      <main className={styles.solicitarEquipoMain}>
        <SolicitarEquipoContenido />
        <Footer />
      </main>
    </div>
  );
}
