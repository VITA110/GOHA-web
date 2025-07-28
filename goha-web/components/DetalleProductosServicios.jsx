'use client';
import { useState, useEffect, useRef } from 'react';
import styles from './DetalleProductosServicios.module.css';
import Image from 'next/image';

const productos = [
  {
    titulo: 'Hardware empresarial',
    descripcion: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
    imagen: '/imagenes/hardware-ejemplo.jpg',
    icono: '/iconsPS/hardware.svg',
  },
  {
    titulo: 'Software especializado',
    descripcion: 'Sed ut perspiciatis unde omnis iste natus error.',
    imagen: '/imagenes/software-ejemplo.jpg',
    icono: '/iconsPS/software.svg',
  },
  {
    titulo: 'Impresión y consumibles',
    descripcion: 'Nemo enim ipsam voluptatem quia voluptas sit aspernatur.',
    imagen: '/imagenes/impresion-ejemplo.jpg',
    icono: '/iconsPS/impresoras.svg',
  },
  {
    titulo: 'Accesorios y componentes',
    descripcion: 'Ut enim ad minima veniam, quis nostrum exercitationem.',
    imagen: '/imagenes/componentes-ejemplo.jpg',
    icono: '/iconsPS/accesorios.svg',
  },
  {
    titulo: 'Proveeduría MRO',
    descripcion: 'Ut enim ad minima veniam, quis nostrum exercitationem.',
    imagen: '/imagenes/proveeduria-ejemplo.jpg',
    icono: '/iconsPS/proveeduria.svg',
  },
  {
    titulo: 'Impresoras y equipos de cómputo',
    descripcion: 'Ut enim ad minima veniam, quis nostrum exercitationem.',
    imagen: '/imagenes/impresora-ejemplo.jpg',
    icono: '/iconsPS/impresion.svg',
  },
  {
    titulo: 'Soluciones de código de barras',
    descripcion: 'Ut enim ad minima veniam, quis nostrum exercitationem.',
    imagen: '/imagenes/codigo-ejemplo.jpg',
    icono: '/iconsPS/codigo.svg',
  },
  {
    titulo: 'Señalización digital',
    descripcion: 'Ut enim ad minima veniam, quis nostrum exercitationem.',
    imagen: '/imagenes/senalizacion-ejemplo.jpg',
    icono: '/iconsPS/senalizacion.svg',
  },
  // ... más objetos si lo deseas{{{{{{{{{{sssss
  // }}}}}}}}}}
];

export default function DetalleProductosServicios() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [itemVisibility, setItemVisibility] = useState(
    productos.map(() => ({ ratio: 0, blur: 1 }))
  );
  const itemRefs = useRef([]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const newVisibility = [...itemVisibility];
        let mostVisible = null;
        let maxRatio = 0;
        
        entries.forEach((entry) => {
          const index = Number(entry.target.dataset.index);
          const ratio = entry.intersectionRatio;
          
          // Calcular blur basado en qué tan visible está el elemento
          // Valores: 0 = completamente borroso, 1 = completamente nítido
          let blurAmount;
          if (ratio > 0.6) {
            blurAmount = 0; // Completamente nítido
          } else if (ratio > 0.3) {
            blurAmount = (0.6 - ratio) * 10; // Blur gradual
          } else {
            blurAmount = 3; // Máximo blur
          }
          
          newVisibility[index] = { ratio, blur: blurAmount };
          
          if (entry.isIntersecting && ratio > maxRatio) {
            maxRatio = ratio;
            mostVisible = entry;
          }
        });

        setItemVisibility(newVisibility);

        if (mostVisible) {
          const newIndex = Number(mostVisible.target.dataset.index);
          setActiveIndex(newIndex);
        }
      },
      { 
        threshold: [0, 0.1, 0.2, 0.3, 0.4, 0.5, 0.6, 0.7, 0.8, 0.9, 1],
        rootMargin: '-10% 0px -10% 0px'
      }
    );

    // Asegurar que todas las referencias estén disponibles
    const currentRefs = itemRefs.current.filter(ref => ref !== null);
    
    currentRefs.forEach((ref) => {
      observer.observe(ref);
    });

    return () => {
      currentRefs.forEach((ref) => {
        observer.unobserve(ref);
      });
    };
  }, [itemVisibility]);

  return (
    <div className={styles.wrapper}>
      <div className={styles.columnaTexto}>
        {productos.map((producto, index) => (
          <div
            key={`${producto.titulo}-${index}`}
            className={styles.itemTexto}
            data-index={index}
            ref={(el) => {
              itemRefs.current[index] = el;
            }}
            style={{
              filter: `blur(${itemVisibility[index]?.blur || 0}px)`,
              opacity: itemVisibility[index]?.blur > 2 ? 0.6 : 1,
              transform: `scale(${itemVisibility[index]?.blur > 2 ? 0.98 : 1})`,
            }}
          >
            <div className={styles.iconoTitulo}>
              <Image 
                src={producto.icono} 
                alt="" 
                width={40} 
                height={40}
                style={{ flexShrink: 0 }}
              />
              <h3>{producto.titulo}</h3>
            </div>
            <p>{producto.descripcion}</p>
          </div>
        ))}
      </div>

      <div className={styles.columnaImagen}>
        <div className={styles.imagenesContainer}>
          {productos.map((producto, index) => (
            <Image
              key={`imagen-${producto.titulo}-${index}`}
              src={producto.imagen}
              alt={producto.titulo}
              width={500}
              height={300}
              className={`${styles.imagen} ${
                index === activeIndex ? styles.visible : styles.oculta
              }`}
              style={{
                objectFit: 'cover'
              }}
            />
          ))}
        </div>
      </div>
    </div>
  );
}