// /goha-web/components/servicios/ServiceCards.jsx
import React from 'react';
import Link from 'next/link';
import styles from './ServiceCards.module.css';

const ServiceCards = () => {
  return (
    <div style={{ overflow: 'hidden', width: '100%' }}>
    <div className={styles.container}>
      {/* Elementos decorativos flotantes */}
      <div className={`${styles.floatingShape} ${styles.shape1}`}></div>
      <div className={`${styles.floatingShape} ${styles.shape2}`}></div>
      <div className={`${styles.floatingShape} ${styles.shape3}`}></div>
      <div className={`${styles.floatingShape} ${styles.shape4}`}></div>
      <div className={`${styles.floatingShape} ${styles.shape5}`}></div>

      <div className={styles.cardsWrapper}>
        {/* Tarjeta Soporte Técnico */}
        <div className={styles.card}>
          <div className={styles.cardIcon}>🛠️</div>
          <h3>Soporte Técnico</h3>
          <p>Obtén ayuda especializada para resolver cualquier problema técnico. Nuestro equipo está listo para asistirte de forma rápida y eficiente.</p>
          <Link href="/soportetecnico">
            <button className={styles.cardButton}>
              Obtener Ayuda
            </button>
          </Link>
        </div>

        {/* Tarjeta Solicitar Equipo */}
        <div className={styles.card}>
          <div className={styles.cardIcon}>💻</div>
          <h3>Solicitar Equipo</h3>
          <p>Solicita el equipo tecnológico que necesitas para tu trabajo. Proceso rápido y sencillo con seguimiento en tiempo real.</p>
          <Link href="/solicitarequipo">
            <button className={styles.cardButton}>
              Solicitar Ahora
            </button>
          </Link>
        </div>
      </div>
    </div>
    </div>
  );
};

export default ServiceCards;