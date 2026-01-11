// components/Lideres.jsx
import styles from './Lideres.module.css';
import Image from 'next/image';

const empresas = [
  { nombre: 'Jabil', logo: '/logos/lideres/JabilL.svg' },
  { nombre: 'Lutron', logo: '/logos/lideres/HoneywellL.svg' },
  { nombre: 'Foxconn', logo: '/logos/lideres/FoxconnL.svg' },
  { nombre: 'Interceramic', logo: '/logos/lideres/InterceramicL.svg' },
  { nombre: 'Intermex', logo: '/logos/lideres/ZFL.svg' },
  { nombre: 'Wistron', logo: '/logos/lideres/WistronL.svg' },
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
