import { useEffect, useRef, useState } from 'react';
import BarrasDecorativas from '@/components/BarrasDecorativas';
import Navbar from '@/components/Navbar';
import SloganSection from '@/components/SloganSection';
import FraseAccion from '@/components/FraseAccion';
import CarruselImagenes from '@/components/CarruselImagenes';
import CarruselEmpresas from '@/components/CarruselEmpresas';
import ProductosServicios from '@/components/ProductosServicios';
import Lideres from '@/components/Lideres';
import FraseFinal from '@/components/FraseFinal';
import Footer from '@/components/Footer';
import Ubicaciones from '@/components/Ubicaciones';
import UbiActua from '@/components/UbiActua';


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
        {/* Hero Section con Carrusel y Slogan lado a lado */}
        <section ref={sloganRef} style={{ 
          position: 'relative', 
          width: '100%', 
          minHeight: '100vh', 
          background: '#ffffff', 
          overflow: 'hidden' 
        }}>
          <div style={{ 
            display: 'flex', 
            flexDirection: 'row', 
            height: '100vh', 
            width: '100%',
            position: 'relative'
          }}>
            {/* Carrusel Izquierdo */}
            <div style={{ 
              width: '52%', 
              position: 'relative',
              clipPath: 'polygon(0 0, 100% 0, 95% 100%, 0 100%)'
            }}>
              <CarruselImagenes />
            </div>
            
            {/* Contenido Derecho - Slogan y Frase */}
            <div style={{ 
              width: '48%', 
              display: 'flex', 
              flexDirection: 'column', 
              alignItems: 'center', 
              justifyContent: 'center',
              padding: '2rem',
              background: '#ffffff',
              marginLeft: '-2%'
            }}>
              <SloganSection />
              <FraseAccion />
            </div>
          </div>
        </section>
        
        <CarruselEmpresas />
        <section id="SerPro">
          <ProductosServicios />
        </section>
        <div style={{ height: '25vh', background: '#ffffffff' }} />
        <Lideres />
        <div style={{ height: '25vh', background: '#ffffffff' }} />
        <section id="ubi">
          <Ubicaciones />
        </section>

        <FraseFinal />
        <Footer />
      </main>
    </>
  );
}