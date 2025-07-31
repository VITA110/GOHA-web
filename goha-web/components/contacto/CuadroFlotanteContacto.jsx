import React, { useEffect, useRef, useState } from 'react';
import styles from './CuadroFlotanteContacto.module.css';

export default function CuadroFlotanteContacto({ isVisible, onClose }) {
  const modalRef = useRef(null);
  const overlayRef = useRef(null);
  const [isClosing, setIsClosing] = useState(false);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (overlayRef.current && event.target === overlayRef.current) {
        handleClose();
      }
    };

    const handleEscapeKey = (event) => {
      if (event.key === 'Escape') {
        handleClose();
      }
    };

    if (isVisible) {
      document.addEventListener('mousedown', handleClickOutside);
      document.addEventListener('keydown', handleEscapeKey);
      document.body.style.overflow = 'hidden';
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
      document.removeEventListener('keydown', handleEscapeKey);
      document.body.style.overflow = 'unset';
    };
  }, [isVisible]);

  const handleClose = () => {
    setIsClosing(true);
    setTimeout(() => {
      setIsClosing(false);
      onClose();
    }, 300); // Duración de la animación de salida
  };

  if (!isVisible && !isClosing) return null;

  const instructionSteps = [
    {
      number: 1,
      title: "Ingresa el nombre de tu empresa.",
      imageSrc: "/images/empresa-icon.png", // Cambia por tu ruta de imagen
      imageAlt: "Ícono de empresa"
    },
    {
      number: 2,
      title: "Escribe tu correo.",
      imageSrc: "/images/correo-icon.png", // Cambia por tu ruta de imagen
      imageAlt: "Ícono de correo"
    },
    {
      number: 3,
      title: "Escribe tu teléfono.",
      imageSrc: "/images/telefono-icon.png", // Cambia por tu ruta de imagen
      imageAlt: "Ícono de teléfono"
    },
    {
      number: 4,
      title: "Motivo del contacto.",
      imageSrc: "/images/motivo-icon.png", // Cambia por tu ruta de imagen
      imageAlt: "Ícono de motivo"
    },
    {
      number: 5,
      title: "Describe el problema.",
      imageSrc: "/images/problema-icon.png", // Cambia por tu ruta de imagen
      imageAlt: "Ícono de problema"
    },
    {
      number: 6,
      title: "Da clic en \"Solicitar Soporte.",
      imageSrc: "/images/soporte-icon.png", // Cambia por tu ruta de imagen
      imageAlt: "Ícono de soporte"
    }
  ];

  return (
    <div className={`${styles.overlay} ${isClosing ? styles.closing : ''}`} ref={overlayRef}>
      <div className={`${styles.modal} ${isClosing ? styles.closing : ''}`} ref={modalRef}>
        {/* Header */}
        <div className={styles.header}>
          <h2 className={styles.title}>Instrucciones para contactar</h2>
          <button 
            className={styles.closeBtn}
            onClick={handleClose}
            aria-label="Cerrar"
          >
            ×
          </button>
        </div>

        {/* Content */}
        <div className={styles.content}>
          <div className={styles.stepsGrid}>
            {instructionSteps.map((step, index) => (
              <div key={index} className={styles.stepCard} style={{ animationDelay: `${index * 0.1}s` }}>
                <div className={styles.stepNumber}>{step.number}</div>
                <div className={styles.stepIconContainer}>
                  <img 
                    src={step.imageSrc} 
                    alt={step.imageAlt}
                    className={styles.stepIcon}
                    onError={(e) => {
                      // Fallback en caso de que la imagen no cargue
                      e.target.style.display = 'none';
                      e.target.nextSibling.style.display = 'flex';
                    }}
                  />
                  <div className={styles.fallbackIcon} style={{ display: 'none' }}>
                    {step.number === 1 && '🏢'}
                    {step.number === 2 && '📧'}
                    {step.number === 3 && '📞'}
                    {step.number === 4 && '❓'}
                    {step.number === 5 && '👨‍💼'}
                    {step.number === 6 && '🎯'}
                  </div>
                </div>
                <div className={styles.stepContent}>
                  <h3 className={styles.stepTitle}>{step.title}</h3>
                </div>
                <div className={styles.stepArrow}>
                  {index < instructionSteps.length - 1 && <span>▶</span>}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}