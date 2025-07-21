import Image from 'next/image';
import styles from './BarrasDecorativas.module.css';

export default function BarrasDecorativas() {
  return (
    <div className={styles.wrapper}>
      <Image
        src="/assets/barraSup.svg"
        alt="Barra roja 1"
        width={331}
        height={443}
        className={styles.barraSup}
      />
      <Image
        src="/assets/barraInf.svg"
        alt="Barra roja 2"
        width={355}
        height={505}
        className={styles.barraInf}
      />
    </div>
  );
}
// goha-web/components/barrasDecorativas.jsx
// Este componente muestra dos barras decorativas en la parte superior de la página