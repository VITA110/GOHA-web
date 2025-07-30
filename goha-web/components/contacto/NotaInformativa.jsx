import React from 'react';
import styles from './NotaInformativa.module.css';

export default function NotaInformativa({ 
  titulo = "Nota:", 
  descripcion = "Este formulario está diseñado para solicitar soporte técnico profesional.",
  seguimiento = "La información enviada será verificada y se dará seguimiento mediante correo electrónico o llamada telefónica.",
  recomendacion = "Se recomienda usar este medio con responsabilidad para garantizar una atención adecuada.",
  className = ""
}) {
  return (
    <div className={`${styles.notaInformativa} ${className}`}>
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