import React, { useEffect, useRef, useState } from "react";
import styles from "./CuadroFlotanteEquipo.module.css";

export default function CuadroFlotanteEquipo({ isVisible, onClose }) {
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
      if (event.key === "Escape") {
        handleClose();
      }
    };

    if (isVisible) {
      document.addEventListener("mousedown", handleClickOutside);
      document.addEventListener("keydown", handleEscapeKey);
      document.body.style.overflow = "hidden";
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
      document.removeEventListener("keydown", handleEscapeKey);
      document.body.style.overflow = "unset";
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
      imageAlt: "Ícono de empresa",
    },
    {
      number: 2,
      title: "Escribe tu correo.",
      imageSrc: "/images/correo-icon.png", // Cambia por tu ruta de imagen
      imageAlt: "Ícono de correo",
    },
    {
      number: 3,
      title: "Escribe tu teléfono.",
      imageSrc: "/images/telefono-icon.png", // Cambia por tu ruta de imagen
      imageAlt: "Ícono de teléfono",
    },
    {
      number: 4,
      title: "Selecciona el tipo de equipo.",
      imageSrc: "/images/equipo-tipo-icon.png", // Cambia por tu ruta de imagen
      imageAlt: "Ícono de tipo de equipo",
    },
    {
      number: 5,
      title: "Dinos dónde se necesita.",
      imageSrc: "/images/ubicacion-icon.png", // Cambia por tu ruta de imagen
      imageAlt: "Ícono de ubicación",
    },
    {
      number: 6,
      title: "Describe las especificaciones.",
      imageSrc: "/images/especificaciones-icon.png", // Cambia por tu ruta de imagen
      imageAlt: "Ícono de especificaciones",
    },
    {
      number: 7,
      title: 'Da clic en "Solicitar Equipo".',
      imageSrc: "/images/solicitar-equipo-icon.png", // Cambia por tu ruta de imagen
      imageAlt: "Ícono de solicitar equipo",
    },
  ];

  return (
    <div
      className={`${styles.overlay} ${isClosing ? styles.closing : ""}`}
      ref={overlayRef}
    >
      <div
        className={`${styles.modal} ${isClosing ? styles.closing : ""}`}
        ref={modalRef}
      >
        {/* Header */}
        <div className={styles.header}>
          <h2 className={styles.title}>Instrucciones para solicitar equipo</h2>
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
          {/* Primera fila - Pasos 1 a 4 */}
          <div className={styles.stepsRowFirst}>
            {instructionSteps.slice(0, 4).map((step, index) => (
              <div
                key={index}
                className={styles.stepCard}
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className={styles.stepNumber}>{step.number}</div>
                <div className={styles.stepIconContainer}>
                  <img
                    src={step.imageSrc}
                    alt={step.imageAlt}
                    className={styles.stepIcon}
                    onError={(e) => {
                      e.target.style.display = "none";
                      e.target.nextSibling.style.display = "flex";
                    }}
                  />
                  <div
                    className={styles.fallbackIcon}
                    style={{ display: "none" }}
                  >
                    {step.number === 1 && "🏢"}
                    {step.number === 2 && "📧"}
                    {step.number === 3 && "📞"}
                    {step.number === 4 && "💻"}
                  </div>
                </div>
                <div className={styles.stepContent}>
                  <h3 className={styles.stepTitle}>{step.title}</h3>
                </div>
                <div className={styles.stepArrow}>
                  {index < 3 && <span>▶</span>}
                </div>
              </div>
            ))}
          </div>

          {/* Segunda fila - Pasos 5 a 7 (centrados) */}
          <div className={styles.stepsRowSecond}>
            {instructionSteps.slice(4, 7).map((step, index) => (
              <div
                key={index + 4}
                className={styles.stepCard}
                style={{ animationDelay: `${(index + 4) * 0.1}s` }}
              >
                <div className={styles.stepNumber}>{step.number}</div>
                <div className={styles.stepIconContainer}>
                  <img
                    src={step.imageSrc}
                    alt={step.imageAlt}
                    className={styles.stepIcon}
                    onError={(e) => {
                      e.target.style.display = "none";
                      e.target.nextSibling.style.display = "flex";
                    }}
                  />
                  <div
                    className={styles.fallbackIcon}
                    style={{ display: "none" }}
                  >
                    {step.number === 5 && "📍"}
                    {step.number === 6 && "⚙️"}
                    {step.number === 7 && "🎯"}
                  </div>
                </div>
                <div className={styles.stepContent}>
                  <h3 className={styles.stepTitle}>{step.title}</h3>
                </div>
                <div className={styles.stepArrow}>
                  {index < 2 && <span>▶</span>}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}