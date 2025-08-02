'use client';
import { useState, useEffect, useRef } from 'react';
import styles from './DetalleProductosServicios.module.css';
import Image from 'next/image';

const productos = [
  {
    titulo: 'Hardware empresarial',
    descripcion: 'Ofrecemos equipos robustos y confiables para entornos corporativos, incluyendo servidores, estaciones de trabajo, laptops y redes. Soluciones que mejoran la productividad y garantizan el rendimiento continuo de las operaciones empresariales más exigentes.',
    imagen: '/imagenes/hardware-ejemplo.jpg',
    icono: '/iconsPS/hardware.svg',
  },
  {
    titulo: 'Software especializado',
    descripcion: 'Distribuimos y configuramos software profesional adaptado a diversas industrias. Desde licencias comerciales hasta soluciones personalizadas, aseguramos compatibilidad, soporte técnico y funcionalidad óptima para cada necesidad operativa o administrativa.',
    imagen: '/imagenes/software-ejemplo.jpg',
    icono: '/iconsPS/software.svg',
  },
  {
    titulo: 'Impresión/consumibles',
    descripcion: 'Proveemos impresoras de alto rendimiento junto con suministros originales como cartuchos, tóner y papel especializado. Garantizamos calidad de impresión, durabilidad y abastecimiento constante para mantener la continuidad de tus procesos.',
    imagen: '/imagenes/impresion-ejemplo.jpg',
    icono: '/iconsPS/impresoras.svg',
  },
  {
    titulo: 'Accesorios/componentes',
    descripcion: 'Contamos con una amplia gama de accesorios tecnológicos y refacciones: teclados, mouse, fuentes de poder, memorias RAM, discos duros, entre otros. Ideales para mantenimiento, ampliación o mejora de equipos existentes.',
    imagen: '/imagenes/componentes-ejemplo.jpg',
    icono: '/iconsPS/accesorios.svg',
  },
  {
    titulo: 'Proveeduría MRO',
    descripcion: 'Suministramos productos para el mantenimiento, reparación y operación (MRO) de entornos industriales y corporativos. Desde herramientas hasta insumos técnicos, apoyamos la continuidad operativa y la eficiencia en planta o oficina.',
    imagen: '/imagenes/proveeduria-ejemplo.jpg',
    icono: '/iconsPS/proveeduria.svg',
  },
  {
    titulo: 'Impresoras y equipos de cómputo',
    descripcion: 'Ofrecemos soluciones integrales de cómputo e impresión para cualquier escala. Equipos configurados según tus necesidades, con asesoría técnica, instalación y soporte postventa para garantizar funcionalidad desde el primer día.',
    imagen: '/imagenes/impresora-ejemplo.jpg',
    icono: '/iconsPS/impresion.svg',
  },
  {
    titulo: 'Soluciones de código de barras',
    descripcion: 'Integramos sistemas de identificación y trazabilidad mediante escáneres, impresoras de etiquetas, lectores industriales y software especializado. Facilitamos el control logístico, inventarios y automatización de procesos en distintas industrias.',
    imagen: '/imagenes/codigo-ejemplo.jpg',
    icono: '/iconsPS/codigo.svg',
  },
  {
    titulo: 'Señalización digital',
    descripcion: 'Diseñamos e implementamos soluciones de cartelería digital con pantallas profesionales, reproductores multimedia y software de gestión. Ideal para comunicación visual, publicidad dinámica e información en tiempo real en espacios comerciales o corporativos.',
    imagen: '/imagenes/senalizacion-ejemplo.jpg',
    icono: '/iconsPS/senalizacion.svg',
  },
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