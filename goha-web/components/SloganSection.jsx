// SloganSection.jsx
import Image from 'next/image';
import styles from './SloganSection.module.css';
import PalabraAnimada from './PalabraAnimada';
import FraseAccion from './FraseAccion';

export default function SloganSection() {
  return (
    <section className={styles.container}>
      <div className={styles.content}>
        <div className={styles.logo}>
          <Image
            src="/assets/LogoB.svg"
            alt="Logo GOHA"
            width={230}
            height={230}
          />
        </div>

        <div className={styles.texto}>
          <h1 className={styles.frase}>
            Soluciones que <PalabraAnimada />
          </h1>

          <p className={styles.descripcion}>
            Impulsamos operaciones con tecnologías adaptadas a las exigencias de tu industria.
          </p>
        </div>
      </div>
    </section>
  );
}