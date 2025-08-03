'use client';
import { useState } from 'react';
import styles from './Valores.module.css';

const valoresData = [
  {
    id: 1,
    titulo: "Honestidad",
    icono: "🤝",
    imagen: "/assets/valores/honestidad.jpg",
    descripcion: "La transparencia y honestidad son la base de todas nuestras relaciones comerciales. Creemos en comunicar de manera clara los beneficios, limitaciones y costos reales de nuestras soluciones. Nuestros clientes confían en nosotros porque siempre decimos la verdad, incluso cuando no es la respuesta que esperan escuchar.",
    color: "#4CAF50"
  },
  {
    id: 2,
    titulo: "Soporte al Cliente",
    icono: "🎧",
    imagen: "/assets/valores/soporte.jpg", 
    descripcion: "Nuestro compromiso va más allá de la venta. Ofrecemos soporte técnico 24/7 con especialistas certificados que entienden tu negocio. Cada cliente tiene acceso directo a nuestro equipo de expertos, garantizando respuestas rápidas y soluciones efectivas que minimizan el tiempo de inactividad y maximizan la productividad.",
    color: "#2196F3"
  },
  {
    id: 3,
    titulo: "Seguridad",
    icono: "🔒",
    imagen: "/assets/valores/seguridad.jpg",
    descripcion: "La seguridad de tus datos y sistemas es nuestra máxima prioridad. Implementamos los más altos estándares de ciberseguridad, desde firewalls empresariales hasta protocolos de encriptación avanzados. Realizamos auditorías regulares y mantenemos certificaciones internacionales para proteger tu información crítica.",
    color: "#FF9800"
  },
  {
    id: 4,
    titulo: "Compromiso",
    icono: "⚡",
    imagen: "/assets/valores/compromiso.jpg",
    descripcion: "Nos comprometemos con el éxito a largo plazo de tu empresa. Esto significa entender tus objetivos específicos, adaptar nuestras soluciones a tus necesidades reales y acompañarte en cada etapa de crecimiento. Tu éxito es nuestro éxito, y trabajamos incansablemente para superarnos día a día.",
    color: "#9C27B0"
  }
];

export default function Valores() {
  const [tarjetaExpandida, setTarjetaExpandida] = useState(null);

  return (
    <section className={styles.seccion}>
      <div className={styles.contenedor}>
        <header className={styles.header}>
          <h2 className={styles.titulo}>Nuestros Valores</h2>
          <p className={styles.subtitulo}>
            Los principios que guían cada decisión y acción en GOHA Networks
          </p>
        </header>

        <div className={styles.valoresGrid}>
          {valoresData.map((valor) => (
            <div
              key={valor.id}
              className={`${styles.tarjeta} ${
                tarjetaExpandida === valor.id ? styles.expandida : ''
              }`}
              onMouseEnter={() => setTarjetaExpandida(valor.id)}
              onMouseLeave={() => setTarjetaExpandida(null)}
              style={{ '--color-tema': valor.color }}
            >
              {/* Imagen de fondo */}
              {/* <div className={styles.imagenFondo}>
                <img
                  src={valor.imagen}
                  alt={valor.titulo}
                  className={styles.imagen}
                />
                <div className={styles.overlay}></div>
              </div> */}

              {/* Contenido de la tarjeta */}
              <div className={styles.contenido}>
                {/* Estado contraído */}
                <div className={styles.estadoContraido}>
                  <div className={styles.iconoWrapper}>
                    <span className={styles.icono}>{valor.icono}</span>
                  </div>
                  <h3 className={styles.tituloValor}>{valor.titulo}</h3>
                </div>

                {/* Estado expandido */}
                <div className={styles.estadoExpandido}>
                  <div className={styles.headerExpandido}>
                    <span className={styles.iconoExpandido}>{valor.icono}</span>
                    <h3 className={styles.tituloExpandido}>{valor.titulo}</h3>
                  </div>
                  <div className={styles.separadorExpandido}></div>
                  <p className={styles.descripcionExpandida}>
                    {valor.descripcion}
                  </p>
                  <div className={styles.decoracionExpandida}>
                    <div className={styles.puntoDecorativo}></div>
                    <div className={styles.lineaDecorativa}></div>
                  </div>
                </div>
              </div>

              {/* Indicador de hover */}
              <div className={styles.indicadorHover}>
                <span>Conoce más</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}