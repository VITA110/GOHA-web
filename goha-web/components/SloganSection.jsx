// SloganSection.jsx
import Image from 'next/image';
import styles from './SloganSection.module.css';
import PalabraAnimada from './PalabraAnimada';

export default function SloganSection() {
  return (
    <section className={styles.container}>
      <div className={styles.logo}>
        <Image
          src="/assets/logoColor.svg"
          alt="Logo GOHA"
          width={130}
          height={130}
        />
      </div>

      <div className={styles.texto}>
        <h1 className={styles.frase}>
          Soluciones que <PalabraAnimada />
        </h1>
      </div>
    </section>
  );
}