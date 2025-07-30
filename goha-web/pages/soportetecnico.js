import React, { useEffect, useRef, useState } from 'react';
import SoporteTecnicoContenido from '@/components/servicios/soportetecnico/SoporteTecnicoContenido';
import Navbar from '@/components/Navbar';
import styles from './SoporteTecnico.module.css';
import Footer from '@/components/Footer';

export default function SoporteTecnico() {
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
    <div className={styles.soporteTecnicoPage}>
      <Navbar visible={true} />
      <main className={styles.soporteTecnicoMain}>
        <SoporteTecnicoContenido />
        <Footer />
      </main>
    </div>
  );
}