import { useState, useEffect } from 'react';
import styles from './PalabraAnimada.module.css';

const palabras = ['Simplifican', 'Escalan', 'Conectan'];

export default function PalabraAnimada() {
  const [indice, setIndice] = useState(0);

  useEffect(() => {
    // Si es la última palabra ("Conectan"), aplicamos un delay mayor
    const delay = palabras[indice] === 'Conectan' ? 10000 : 1500;

    const timeout = setTimeout(() => {
      setIndice((prev) => (prev + 1) % palabras.length);
    }, delay);

    return () => clearTimeout(timeout);
  }, [indice]);

  return (
    <span className={styles.palabra} key={palabras[indice]}>
      {palabras[indice]}
    </span>
  );
}
