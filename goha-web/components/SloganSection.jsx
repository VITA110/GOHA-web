import Image from 'next/image';
import styles from './SloganSection.module.css';

export default function SloganSection() {
  return (
    <section className={styles.container}>
      <div className={styles.logo}>
        <Image
          src="/assets/logoColor.svg"
          alt="Logo GOHA"
          width={200}
          height={200}
        />
      </div>

      <div className={styles.texto}>
        <span className={styles.frase}>Soluciones que *Conectan*</span>
        {/* Aquí irá el texto animado después */}
      </div>
    </section>
  );
}
