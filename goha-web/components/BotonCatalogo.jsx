"use client";

import styles from "./BotonCatalogo.module.css";

export default function BotonCatalogo() {
  return (
    <section className={styles.container}>
      <a
        href="/catalogos/catalogo-goha.pdf"
        target="_blank"
        rel="noopener noreferrer"
        className={styles.boton}
      >
        Ver catálogo aquí
      </a>
    </section>
  );
}