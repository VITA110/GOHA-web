import React, { useState } from 'react';
import styles from './BotonAdapt.module.css';
// Importa tus componentes de formularios aquí
import SoporteTecnicoContenido from '@/components/servicios/soportetecnico/SoporteTecnicoContenido';
import SolicitarEquipoContenido from '@/components/servicios/solicitarequipo/SolicitarEquipoContenido';

export default function BotonAdapt() {
  const [selectedOption, setSelectedOption] = useState(null);

  const handleOptionSelect = (option) => {
    setSelectedOption(option);
  };

  const handleReset = () => {
    setSelectedOption(null);
  };

  return (
    <div className={styles.BotonAdapt}>
      <div className={styles.container}>
        {!selectedOption ? (
          <div className={styles.optionsContainer}>
            <h2 className={styles.mainTitle}>
              ¿Qué deseas <span className={styles.titleAccent}>hacer?</span>
            </h2>
            <p className={styles.subtitle}>
              Selecciona una opción para continuar
            </p>
            
            <div className={styles.optionsGrid}>
              <button
                className={styles.optionCard}
                onClick={() => handleOptionSelect('opcion1')}
              >
                <div className={styles.optionIcon}>
                  <svg fill="none" stroke="currentColor" viewBox="0 0 24 24" width="48" height="48">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                  </svg>
                </div>
                <h3 className={styles.optionTitle}>Opción 1</h3>
                <p className={styles.optionDescription}>
                  Descripción de la primera opción
                </p>
              </button>

              <button
                className={styles.optionCard}
                onClick={() => handleOptionSelect('opcion2')}
              >
                <div className={styles.optionIcon}>
                  <svg fill="none" stroke="currentColor" viewBox="0 0 24 24" width="48" height="48">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" />
                  </svg>
                </div>
                <h3 className={styles.optionTitle}>Opción 2</h3>
                <p className={styles.optionDescription}>
                  Descripción de la segunda opción
                </p>
              </button>
            </div>
          </div>
        ) : (
          <div className={styles.formContainer}>
            <button className={styles.backButton} onClick={handleReset}>
              <svg fill="none" stroke="currentColor" viewBox="0 0 24 24" width="20" height="20">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
              </svg>
              Volver a opciones
            </button>

            <div className={styles.formContent}>
              {selectedOption === 'opcion1' && (
                <div>
                  <h3 className={styles.formTitle}>Formulario Opción 1</h3>
                  {<SoporteTecnicoContenido />}
                  {/* <p className={styles.placeholder}>Aquí va tu FormularioA</p> */}
                </div>
              )}

              {selectedOption === 'opcion2' && (
                <div>
                  <h3 className={styles.formTitle}>Formulario Opción 2</h3>
                  {<SolicitarEquipoContenido />}
                  {/* <p className={styles.placeholder}>Aquí va tu FormularioB</p> */}
                </div>
              )}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}