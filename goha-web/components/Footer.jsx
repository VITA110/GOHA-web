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
          <h3 className={styles.tituloColumna}>Accesos rápidos</h3>
          <ul className={styles.listaColumna}>
            <li>
              <a href="/#servis" className={styles.linkColumna}>
                <svg 
                  className={styles.iconoLink} 
                  width="20" 
                  height="20" 
                  viewBox="0 0 24 24" 
                  fill="none" 
                  stroke="currentColor" 
                  strokeWidth="2"
                >
                  <rect x="2" y="3" width="20" height="14" rx="2" />
                  <line x1="8" y1="21" x2="16" y2="21" />
                  <line x1="12" y1="17" x2="12" y2="21" />
                </svg>
                Servicios y productos
              </a>
            </li>
            <li>
              <a href="/nosotros" className={styles.linkColumna}>
                <svg 
                  className={styles.iconoLink} 
                  width="20" 
                  height="20" 
                  viewBox="0 0 24 24" 
                  fill="none" 
                  stroke="currentColor" 
                  strokeWidth="2"
                >
                  <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
                  <circle cx="9" cy="7" r="4" />
                  <path d="M23 21v-2a4 4 0 0 0-3-3.87" />
                  <path d="M16 3.13a4 4 0 0 1 0 7.75" />
                </svg>
                Conoce más de nosotros
              </a>
            </li>
            <li>
              <a href="/contacto" className={styles.linkColumna}>
                <svg 
                  className={styles.iconoLink} 
                  width="20" 
                  height="20" 
                  viewBox="0 0 24 24" 
                  fill="none" 
                  stroke="currentColor" 
                  strokeWidth="2"
                >
                  <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
                  <line x1="9" y1="10" x2="15" y2="10" />
                  <line x1="9" y1="14" x2="13" y2="14" />
                </svg>
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
                <Image src="/assets/Facebook.svg" alt="Facebook" width={44} height={44} />
              </a>
            </li>
            <li>
              <a
                href="https://www.instagram.com/goha.ios"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
                className={styles.iconoRed}
              >
                <Image src="/assets/Instagram.svg" alt="Instagram" width={44} height={44} />
              </a>
            </li>
          </ul>
        </div>
      </div>

      {/* Copyright */}
      <div className={styles.copyrightWrapper}>
        <p className={styles.copyright}>
          © 2025 GOHA - International Operating Solutions S.A. de C.V.
        </p>
      </div>
    </footer>
  );
}