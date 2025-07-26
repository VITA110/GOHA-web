// components/DetalleProductosServicios.jsx
import styles from './DetalleProductosServicios.module.css';
import Image from 'next/image';

export default function DetalleProductosServicios() {
  return (
    <div className={styles.container}>
      <div className={styles.columnaTexto}>
        <h3 className={styles.titulo}>Hardware empresarial</h3>
        <p className={styles.descripcion}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent
          efficitur tellus nec feugiat cursus. Suspendisse at dui non urna
          porttitor.
        </p>
      </div>
      <div className={styles.columnaImagen}>
        <Image
          src="/imagenes/hardware-ejemplo.png"
          alt="Imagen ilustrativa"
          width={400}
          height={300}
          className={styles.imagen}
        />
      </div>
    </div>
  );
}
