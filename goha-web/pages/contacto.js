import React, { useEffect, useRef, useState } from 'react';
import ContactoContenido from '@/components/contacto/ContactoContenido';
import Navbar from '@/components/Navbar';
import styles from './Contacto.module.css';
import Footer from '@/components/Footer';

export default function Contacto() {
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
    <div>
      <div className={styles.contactoPage}>
        <Navbar visible={true} />
        <main className={styles.contactoMain}>
          <ContactoContenido />
          <Footer />
        </main>

      </div>
    </div>
  );
}
