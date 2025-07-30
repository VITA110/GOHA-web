import React from 'react';
import styles from './NotaInformativaEquipo.module.css';

export default function NotaInformativaEquipo({ 
  titulo = "Nota:", 
  descripcion = "Este formulario es exclusivo para contacto profesional con nuestra empresa.",
  seguimiento = "Nos comunicaremos por correo electrónico o vía telefónica para dar seguimiento a su mensaje.",
  recomendacion = "Le pedimos usar este canal de manera responsable y clara.",
  className = ""
}) {
  return (
    <div className={`${styles.notaInformativaEquipo} ${className}`}>
      <div className={styles.notaContainer}>
        <p className={styles.notaTitulo}>
          <strong>{titulo}</strong> {descripcion}
        </p>
        <p className={styles.notaTexto}>
          {seguimiento}
        </p>
        <p className={styles.notaRecomendacion}>
          <strong>{recomendacion}</strong>
        </p>
      </div>
    </div>
  );
}