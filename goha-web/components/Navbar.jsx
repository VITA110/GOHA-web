import Link from 'next/link';
import Image from 'next/image';
import styles from './Navbar.module.css';

export default function Navbar({ visible }) {
  return (
    <header className={`${styles.wrapper} ${visible ? styles.visible : styles.hidden}`}>


      <nav className={styles.menu}>
        <Link href="/nosotros" legacyBehavior>
          <a className={styles.button}>Nosotros</a>
        </Link>
        <Link href="#servis" legacyBehavior>
          <a className={styles.button}>Sevicios</a>
        </Link>
        <Link href="/">
          <Image
            src="/assets/LogoColorAJUS.svg"
            alt="GOHA logo"
            width={40}
            height={40}
            className={styles.logo}
          />
        </Link>
        <Link href="/ubicaciones" legacyBehavior>
          <a className={styles.button}>Ubicaciones</a>
        </Link>


        <Link href="/contacto" legacyBehavior>
          <a className={styles.button}>Contáctanos</a>
        </Link>
      </nav>
    </header>
  );
}
