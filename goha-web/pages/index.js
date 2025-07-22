import { useEffect, useRef, useState } from 'react';
import BarrasDecorativas from '@/components/BarrasDecorativas';
import Navbar from '@/components/Navbar';
import SloganSection from '@/components/SloganSection';
import FraseAccion from '@/components/FraseAccion';

export default function Home() {
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
    <>
      <BarrasDecorativas />
      <Navbar visible={showNavbar} />

      <main>
        <div ref={sloganRef}>
          <SloganSection />
        </div>
        <FraseAccion />
        <div style={{ height: '100vh', background: '#bfbfbfff' }} />

      </main>
    </>
  );
}
