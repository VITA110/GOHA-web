import React, { useState, useEffect } from 'react';
import styles from './SeccionImagenEquipo.module.css';

export default function SeccionImagenEquipo({ 
  images = [], 
  titulo = "Equipos Disponibles", 
  icono = "💻",
  className = "" 
}) {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  // Imágenes por defecto si no se proporcionan
  const defaultImages = [
    '/api/placeholder/400/500',
    '/api/placeholder/400/500',
    '/api/placeholder/400/500',
    '/api/placeholder/400/500',
    '/api/placeholder/400/500',
    '/api/placeholder/400/500'
  ];

  const imageList = images.length > 0 ? images : defaultImages;

  // Cambio automático de imágenes cada 3 segundos
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prev) => (prev + 1) % imageList.length);
    }, 3000); // Cambia cada 3 segundos

    return () => clearInterval(interval);
  }, [imageList.length]);

  return (
  <div className={`${styles.seccionImagenEquipo} ${className}`}>
    <div className={styles.imagenContainer}>
      <div className={styles.imagenGallery}>
        <div className={styles.imagenMain}>
          {imageList.map((image, index) => (
            <img 
              key={index}
              src={image} 
              alt={`Equipo ${index + 1}`}
              className={`${styles.imagenPrincipal} ${
                index === currentImageIndex ? styles.active : styles.inactive
              }`}
            />
          ))}
        </div>
        
        {/* Indicadores de puntos (solo visuales, no interactivos) */}
        <div className={styles.imagenDots}>
          {imageList.map((_, index) => (
            <div
              key={index}
              className={`${styles.dot} ${index === currentImageIndex ? styles.active : ''}`}
            />
          ))}
        </div>
      </div>
    </div>
  </div>
  );
}