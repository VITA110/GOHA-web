import React from 'react';
import styles from './NotaInformativaEquipo.module.css';

export default function NotaInformativaEquipo({ 
  titulo = "Nota:", 
  descripcion = "Este formulario está diseñado para solicitar equipos tecnológicos profesionales.",
  seguimiento = "La información enviada será verificada y se dará seguimiento mediante correo electrónico o llamada telefónica.",
  recomendacion = "Se recomienda usar este medio con responsabilidad para garantizar una atención adecuada.",
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