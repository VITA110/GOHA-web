import styles from './FraseAccion.module.css';

export default function FraseAccion() {
  return (
    <div className={styles.container}>
      <p className={styles.texto}>
        Impulsamos operaciones con tecnologías adaptadas a las exigencias de tu industria.
      </p>
      <div className={styles.botones}>
        <button className={styles.botonClaro}>Conoce nuestras<br />soluciones</button>
        <button className={styles.botonOscuro}>Visitar</button>
      </div>
    </div>
  );
}
