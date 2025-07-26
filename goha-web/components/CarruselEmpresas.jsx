import styles from './CarruselEmpresas.module.css';
import Image from 'next/image';

const logos = [
  'logos/Microsoft.svg',
  'logos/HP.svg',
  'logos/Adobe.svg',
  'logos/Zebra.svg',
  'logos/Intel.svg',
  'logos/Cisco.svg',
];

export default function CarruselEmpresas() {
  return (
    <section className={styles.carruselWrapper}>
      <h2 className={styles.titulo}>En colaboración con reconocidas empresas</h2>

      {/* Primer carril */}
      <div className={styles.carrilContainer}>
        <div className={styles.filtro + ' ' + styles.izquierda}></div>
        <div className={styles.filtro + ' ' + styles.derecha}></div>
        <div className={styles.carril}>
          {logos.concat(logos).map((src, i) => (
            <Image key={`fila1-${i}`} src={src} alt="logo" width={100} height={60} className={styles.logo} />
          ))}
        </div>
      </div>

      {/* Segundo carril (inverso) */}
      <div className={styles.carrilContainer}>
        <div className={styles.filtro + ' ' + styles.izquierda}></div>
        <div className={styles.filtro + ' ' + styles.derecha}></div>
        <div className={`${styles.carril} ${styles.carrilInverso}`}>
          {logos.concat(logos).map((src, i) => (
            <Image key={`fila2-${i}`} src={src} alt="logo" width={100} height={60} className={styles.logo} />
          ))}
        </div>
      </div>
    </section>
  );
}
