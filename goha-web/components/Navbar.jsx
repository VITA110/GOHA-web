import Link from 'next/link';
import Image from 'next/image';
import styles from './Navbar.module.css';

export default function Navbar({ visible }) {
  return (
    <header className={`${styles.wrapper} ${visible ? styles.visible : styles.hidden}`}>
      <nav className={styles.menu}>

        <Link href="/nosotros" className={styles.button}>
          Nosotros
        </Link>

        <Link href="/#servis" className={styles.button}>
          Servicios
        </Link>

        <Link href="/">
          <Image
            src="/assets/LogoB.svg"
            alt="GOHA logo"
            width={20}
            height={20}
            className={styles.logo}
          />
        </Link>

        <Link href="/ubicaciones" className={styles.button}>
          Ubicaciones
        </Link>

        <Link href="/contacto" className={styles.button}>
          Contáctanos
        </Link>

      </nav>
    </header>
  );
}
