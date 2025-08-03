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
        <div className={styles.columna}>
          <h3 className={styles.tituloColumna}>Accesos rapidos</h3>
          <ul className={styles.listaColumna}>
            <li>
              <a href="/#SerPro" className={styles.linkColumna}>
                Servicios y productos
              </a>
            </li>
            <li>
              <a href="/nosotros" className={styles.linkColumna}>
                Conoce más de nosotros
              </a>
            </li>
            <li>
              <a href="/impresion-consumibles" className={styles.linkColumna}>
                Solicita algunos de nuestros Servicios
              </a>
            </li>
          </ul>
        </div>
        <div className={styles.columna}>
          <h3 className={styles.tituloColumna}>Distribuidores autorizados</h3>
          <ul className={styles.listaColumna}>

            </ul>
            {/* Imagen de Zebra */}
            <div className={styles.imagenDistribuidor}>
              <Image
                src="/assets/zebraC.png"
                alt="Distribuidor Zebra"
                width={250}
                height={80}
              />
            </div>
          </div>

          {/* Columna Derecha - Más contenido */}
        <div className={styles.columna}>
          <h3 className={styles.tituloColumna}>Síguenos</h3>
          <ul className={styles.listaColumna}>
            <li>
              <a
                href="https://www.facebook.com/Goha.IOS"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Facebook"
                className={styles.iconoRed}
              >
                <Image src="/assets/facebook.svg" alt="Facebook" width={44} height={44} />
              </a>

            </li>
            <li>
              <a
                href="https://www.instagram.com/goha.ios"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Facebook"
                className={styles.iconoRed}
              >
                <Image src="/assets/Instagram.svg" alt="Facebook" width={44} height={44} />
              </a>

            </li>
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