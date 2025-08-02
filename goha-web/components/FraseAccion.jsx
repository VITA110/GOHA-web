import styles from './FraseAccion.module.css';

export default function FraseAccion() {
  return (
    <div className={styles.container}>
      <p className={styles.texto}>
        Impulsamos operaciones con tecnologías adaptadas a las exigencias de tu industria.
      </p>
      <div className={styles.botones}>
        <div className={styles.botones}>
          <a href="/servicios" className={styles.botonClaro}>
            Conoce nuestras<br />soluciones
          </a><a href="#ubi" className={styles.botonOscuro}>
            Visitar
          </a>
        </div>
      </div>
    </div>
  );
}
