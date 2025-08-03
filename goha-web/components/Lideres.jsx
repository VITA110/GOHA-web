// components/Lideres.jsx
import styles from './Lideres.module.css';
import Image from 'next/image';

const empresas = [
  { nombre: 'Jabil', logo: '/logos/lideres/Jabil.svg' },
  { nombre: 'Jabil', logo: '/logos/lideres/Femsa.svg' },
  { nombre: 'Jabil', logo: '/logos/lideres/Interseramic.svg' },
  { nombre: 'Jabil', logo: '/logos/lideres/Nifco.svg' },
  { nombre: 'Jabil', logo: '/logos/lideres/Cummins.svg' },
  { nombre: 'Jabil', logo: '/logos/lideres/Alt.svg' },
];

export default function Lideres() {
  return (
    <section className={styles.seccion}>
      <div className={styles.grid}>
        {empresas.map((empresa, i) => (
          <div key={i} className={styles.tarjeta}>
            <Image
              src={empresa.logo}
              alt={`Logo de ${empresa.nombre}`}
              width={150}
              height={100}
              className={styles.logo}
            />
          </div>
        ))}
      </div>
    </section>
  );
}
