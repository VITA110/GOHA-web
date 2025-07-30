// components/Footer.jsx
import styles from './Footer.module.css';
import Image from 'next/image';

export default function Footer() {
  return (
    <footer className={styles.footer}>
      {/* SVG decorativo como fondo */}
      <div className={styles.fondoSvgWrapper}>
        <Image
          src="./assets/FooterGOHA.svg"
          alt="Decoración del footer"
          width={1920}
          height={400}
          className={styles.fondoSvg}
          priority
        />
      </div>

      {/* Logo centrado sobre el SVG */}
      <div className={styles.logoWrapper}>
        <Image
          src="./assets/logoColor.svg"
          alt="Logo GOHA"
          width={160}
          height={160}
          className={styles.logo}
        />
      </div>

      {/* Contenido en 3 columnas */}
      <div className={styles.contenidoWrapper}>
        {/* Columna Izquierda - Más contenido */}
        <div className={styles.columna}>
          <h3 className={styles.tituloColumna}>Servicios</h3>
          <ul className={styles.listaColumna}>
            <li>Hardware empresarial</li>
            <li>Software especializado</li>
            <li>Impresión y consumibles</li>
          </ul>
        </div>

        {/* Columna Centro - Contenido normal */}
        <div className={styles.columna}>
          <h3 className={styles.tituloColumna}>Ubicaciones</h3>
          <ul className={styles.listaColumna}>
            <li>Chihuahua, México</li>
            <li>Lun - Vie: 9:00 - 18:00</li>
          </ul>
        </div>

        {/* Columna Derecha - Más contenido */}
        <div className={styles.columna}>
          <h3 className={styles.tituloColumna}>Síguenos</h3>
          <ul className={styles.listaColumna}>
            <li>Facebook</li>
            <li>LinkedIn</li>
            <li>Instagram</li>
            <li>YouTube</li>
          </ul>
        </div>
      </div>

      {/* Copyright */}
      <div className={styles.copyrightWrapper}>
        <p className={styles.copyright}>
          © 2025 GOHA NETWORKS S. DE R.L. DE C.V. Todos los derechos reservados.
        </p>
      </div>
    </footer>
  );
}