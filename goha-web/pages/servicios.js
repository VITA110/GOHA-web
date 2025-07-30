// /goha-web/pages/servicios/index.jsx
import React from 'react';
import ServiceCards from '@/components/servicios/ServiceCards';
import Navbar from '@/components/Navbar';
import styles from './Servicios.module.css';

export default function Servicios() {
  return (
    <div>
      <div className={styles.serviciosPage}>
        <Navbar visible={true} />
        <main className={styles.serviciosMain}>
          <ServiceCards />
        </main>
      </div>
    </div>
  );
}