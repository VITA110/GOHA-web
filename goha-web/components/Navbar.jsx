import Link from 'next/link';
import Image from 'next/image';
import styles from './Navbar.module.css';

export default function Navbar({ visible }) {
  return (
    <header className={`${styles.wrapper} ${visible ? styles.visible : styles.hidden}`}>
      <Link href="/">
        <Image
          src="/logo-goha.svg"
          alt="GOHA logo"
          width={40}
          height={40}
          className={styles.logo}
        />
      </Link>

      <nav className={styles.menu}>
        <Link href="/nosotros">Nosotros</Link>
        <Link href="/servicios">Servicios</Link>
        <Link href="/ubicaciones">Ubicaciones</Link>
        <Link href="/contacto" legacyBehavior>
          <a className={styles.button}>Contáctanos</a>
        </Link>
      </nav>
    </header>
  );
}
