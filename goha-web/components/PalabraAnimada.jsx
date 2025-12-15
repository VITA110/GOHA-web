// PalabraAnimada.jsx
import { useState, useEffect } from 'react';
import styles from './PalabraAnimada.module.css';

const palabras = ['Simplifican', 'Escalan', 'Conectan'];

export default function PalabraAnimada() {
  const [indice, setIndice] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndice((prev) => (prev + 1) % palabras.length);
    }, 5000); // 5 segundos

    return () => clearInterval(interval);
  }, []);

  return (
    <span className={styles.palabra} key={palabras[indice]}>
      {palabras[indice]}
    </span>
  );
}
