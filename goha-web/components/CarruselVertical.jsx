import React, { useState, useEffect } from 'react';
import styles from './CarruselVertical.module.css';
import SloganSection from './SloganSection';
import Image from 'next/image';

export default function CarruselVertical({ children }) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [showSeal, setShowSeal] = useState(true);

  // Array de imágenes - reemplaza con tus propias rutas
  const images = [
    './imagenes/imagenfondo1.png',
    './imagenes/imagenfondo2.png',
    './imagenes/imagenfondo3.png',
    './imagenes/soporte-ejemplo4.jpg',
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      // Ocultar el sello antes de cambiar la imagen
      setShowSeal(false);
      
      // Cambiar la imagen después de un pequeño delay
      setTimeout(() => {
        setCurrentIndex((prevIndex) => 
          prevIndex === images.length - 1 ? 0 : prevIndex + 1
        );
        
        // Mostrar el sello nuevamente
        setTimeout(() => {
          setShowSeal(true);
        }, 300);
      }, 300);
      
    }, 5000); // Cambia cada 5 segundos

    return () => clearInterval(interval);
  }, [images.length]);

  const goToSlide = (index) => {
    setShowSeal(false);
    setTimeout(() => {
      setCurrentIndex(index);
      setTimeout(() => {
        setShowSeal(true);
      }, 300);
    }, 300);
  };

  return (
    <div className={styles.carouselContainer}>
      {/* Sello de colaboración */}
      <div className={styles.sealWrapper}>
  <div className={styles.seal}>
    <Image
      src="./imagenes/ZebraCertif.svg"
      alt="Colaboración empresarial"
      width={520}
      height={520}
      className={styles.sealImage}
    />
  </div>
</div>

      {/* Carrusel de imágenes con blur */}
      <div className={styles.carouselWrapper}>
        {images.map((image, index) => (
          <div
            key={index}
            className={`${styles.slide} ${
              index === currentIndex ? styles.active : ''
            }`}
            style={{ backgroundImage: `url(${image})` }}
          />
        ))}
        
        {/* Overlay oscuro y blur */}
        <div className={styles.overlay}></div>
      </div>

      {/* Contenido superpuesto (tu slogan) */}
      <div className={styles.contentOverlay}>
        {<SloganSection />}
      </div>

      {/* Indicadores de navegación */}
      <div className={styles.indicators}>
        {images.map((_, index) => (
          <button
            key={index}
            className={`${styles.indicator} ${
              index === currentIndex ? styles.indicatorActive : ''
            }`}
            onClick={() => goToSlide(index)}
            aria-label={`Ir a imagen ${index + 1}`}
          />
        ))}
      </div>
    </div>
  );
}