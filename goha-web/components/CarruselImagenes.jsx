import { useEffect, useState } from 'react';

// Componente CarruselImagenes - Solo el carrusel de imágenes
function CarruselImagenes() {
  const [currentImage, setCurrentImage] = useState(0);
  const [nextImage, setNextImage] = useState(1);
  const [isAnimating, setIsAnimating] = useState(false);

  const images = [
    '/imagenes/imagenfondo1.png',
    '/imagenes/imagenfondo2.png',
    '/imagenes/imagenfondo3.png'
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      const next = (currentImage + 1) % images.length;
      setNextImage(next);
      setIsAnimating(true);
      
      setTimeout(() => {
        setCurrentImage(next);
        setIsAnimating(false);
      }, 3000);
    }, 4000);

    return () => clearInterval(interval);
  }, [currentImage]);

  return (
    <div style={{ 
      width: '100%', 
      position: 'relative', 
      height: '100vh', 
      overflow: 'hidden'
    }}>
      {/* Barras Decorativas Izquierda (principales) */}
      <div style={{ 
        position: 'absolute', 
        top: 0, 
        left: 0, 
        width: '1px', 
        height: '100%', 
        pointerEvents: 'none',
        zIndex: 20
      }}>
        <div style={{ 
          position: 'absolute', 
          top: 0, 
          left: '-20px', 
          width: '100px', 
          height: '100%', 
          backgroundColor: '#E31E24', 
          transform: 'skewX(-15deg)', 
          transformOrigin: 'top left',
          opacity: 0.9
        }}></div>
        <div style={{ 
          position: 'absolute', 
          top: 0, 
          left: '50px', 
          width: '50px', 
          height: '100%', 
          backgroundColor: '#8B0000', 
          transform: 'skewX(-15deg)', 
          transformOrigin: 'top left' ,
          opacity: 0.7
        }}></div>
      </div>

      {/* Contenedor de imágenes */}
      <div style={{ position: 'absolute', inset: 0 }}>
        {/* Imagen actual (siempre visible) */}
        <div
          style={{
            position: 'absolute',
            inset: 0,
            backgroundImage: `url(${images[currentImage]})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            zIndex: 1
          }}
        />

        {/* Imagen siguiente (solo durante animación) */}
        {isAnimating && (
          <div
            style={{
              position: 'absolute',
              inset: 0,
              backgroundImage: `url(${images[nextImage]})`,
              backgroundSize: 'cover',
              backgroundPosition: 'center',
              transform: 'translateY(100%)',
              animation: 'slideUp 800ms ease-in-out forwards',
              zIndex: 2
            }}
          />
        )}
      </div>

      {/* Barras Decorativas Derecha - Inclinadas siguiendo la separación */}
      <div style={{ 
        position: 'absolute', 
        top: 0, 
        right: 0, 
        width: '0px', 
        height: '100%', 
        pointerEvents: 'none',
        zIndex: 20
      }}>
        {/* Barra principal roja - más ancha */}
        <div style={{ 
          position: 'absolute', 
          top: 0, 
          right: '1px', 
          width: '50px', 
          height: '100%', 
          background: 'linear-gradient(180deg, #E31E24 0%, #C41E3A 100%)',
          transform: 'skewX(3deg)',
          transformOrigin: 'top right'
        }}></div>

        {/* Barra negra - pegada a la roja */}
        <div style={{ 
          position: 'absolute', 
          top: '0%', 
          right: '45px', 
          width: '45px', 
          height: '100%', 
          backgroundColor: '#1a1a1a', 
          transform: 'skewX(3deg)',
          transformOrigin: 'top right',
          opacity: 0.9
        }}></div>

        {/* Barra roja oscura - pegada a la negra */}
        <div style={{ 
          position: 'absolute', 
          top: '0%', 
          right: '85px', 
          width: '42px', 
          height: '100%', 
          backgroundColor: '#8B0000', 
          transform: 'skewX(3deg)',
          transformOrigin: 'top right',
          opacity: 0.88
        }}></div>
      </div>

      <style jsx>{`
        @keyframes slideUp {
          from {
            transform: translateY(100%);
          }
          to {
            transform: translateY(0);
          }
        }
      `}</style>
    </div>
  );
}

export default CarruselImagenes;