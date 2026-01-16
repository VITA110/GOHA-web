'use client';
import { useState } from 'react';
import styles from './Valores.module.css';

const valoresData = [
  {
    id: 1,
    titulo: "Honestidad",
    icono: "🤲🏻",
    imagen: "/assets/valores/honestidad.jpg",
    descripcion: "La transparencia y honestidad son la base de todas nuestras relaciones comerciales. Creemos en comunicar de manera clara los beneficios, limitaciones y costos reales de nuestras soluciones. Nuestros clientes confían en nosotros porque siempre decimos la verdad, incluso cuando no es la respuesta que esperan escuchar.",
    color: "#ff7070ff"
  },
  {
    id: 2,
    titulo: "Colaboración",
    icono: "🤝",
    imagen: "/assets/valores/soporte.jpg", 
    descripcion: "Fomentamos el trabajo en equipo y la comunicación entre todas las áreas de la empresa para ofrecer soluciones eficientes y completas. La colaboración nos permite compartir conocimientos, optimizar procesos y brindar un mejor servicio al cliente.",
    color: "#ff4747ff"
  },
  {
    id: 3,
    titulo: "Profesionalismo",
    icono: "🌟",
    imagen: "/assets/valores/seguridad.jpg",
    descripcion: "Actuamos con responsabilidad, ética y compromiso en cada servicio que ofrecemos. Cumplimos estándares técnicos y de atención, cuidando cada equipo y atendiendo a nuestros clientes con respeto, puntualidad y calidad en cada etapa del proceso.",
    color: "#ff3030ff"
  },
  {
    id: 4,
    titulo: "Compromiso",
    icono: "⚡",
    imagen: "/assets/valores/compromiso.jpg",
    descripcion: "Nos comprometemos con el éxito a largo plazo de tu empresa. Esto significa entender tus objetivos específicos, adaptar nuestras soluciones a tus necesidades reales y acompañarte en cada etapa de crecimiento. Tu éxito es nuestro éxito, y trabajamos incansablemente para superarnos día a día.",
    color: "#ff0000ff"
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