// pages/nosotros.jsx
import Head from 'next/head';
import Image from 'next/image';
import styles from '../components/Nosotros.module.css';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import Valores from '@/components/Valores';

const contenidoSecciones = [
  {
    id: 1,
    titulo: "Nuestra Historia",
    texto: "GOHA NETWORKS S. DE R.L. DE C.V. es una empresa mexicana especializada en ofrecer soluciones tecnológicas integrales para la industria y los negocios. Nos enfocamos en proporcionar productos y servicios que optimizan los procesos operativos de nuestros clientes, ayudándoles a aumentar su productividad, reducir costos y adaptarse a los desafíos tecnológicos del entorno actual. Con una sólida trayectoria en el sector, trabajamos principalmente con empresas del ámbito industrial y maquilador, brindando soporte confiable y soluciones personalizadas en hardware, software, impresión, redes, señalización digital y más.",
    imagen: "/assets/nosotros/historia.jpg",
    posicion: "derecha" // imagen a la derecha, texto a la izquierda
  },
  {
    id: 2,
    titulo: "Nuestra Misión",
    texto: "Empoderar a las empresas mexicanas con soluciones tecnológicas integrales que impulsen su crecimiento y competitividad. Nos especializamos en hardware empresarial, software especializado, y servicios de consultoría que transforman los desafíos tecnológicos en oportunidades de negocio. Creemos que la tecnología debe ser accesible, confiable y orientada a resultados tangibles.",
    imagen: "/assets/nosotros/mision.jpg",
    posicion: "izquierda" // imagen a la izquierda, texto a la derecha
  },
  {
    id: 3,
    titulo: "Nuestro Compromiso",
    texto: "Nos comprometemos a ser más que un proveedor: somos su aliado estratégico en la transformación digital. Con más de 500 empresas atendidas y un equipo de especialistas certificados, garantizamos soporte técnico 24/7, capacitación continua y acompañamiento personalizado. Nuestro objetivo es que cada cliente vea en la tecnología una ventaja competitiva real y medible en su industria.",
    imagen: "/assets/nosotros/compromiso.jpg",
    posicion: "derecha"
  }
];

export default function Nosotros() {
  return (
    <>
      <Head>
        <title>Sobre nosotros - GOHA Networks</title>
        <meta name="description" content="Conoce más sobre GOHA Networks, nuestra historia, misión, visión y valores. Líder en soluciones tecnológicas empresariales en Chihuahua." />
      </Head>
      <Navbar visible={true} />

      {/* Banner decorativo */}
      <div className={styles.bannerWrapper}>
        <img
          src="/assets/barra.svg"
          alt="Decoración superior"
          className={styles.bannerSVG}
        />
      </div>

      <main className={styles.mainContainer}>
        {/* Encabezado de la página */}
        <header className={styles.headerSection}>
          <h1 className={styles.pageTitle}>Sobre Nosotros</h1>
          <p className={styles.pageSubtitle}>
            Conoce la historia y valores que nos impulsan a ser líderes en soluciones tecnológicas
          </p>
        </header>

        {/* Secciones alternadas */}
        <div className={styles.contenidoWrapper}>
          {contenidoSecciones.map((seccion, index) => (
            <section
              key={seccion.id}
              className={`${styles.seccionContenido} ${seccion.posicion === 'izquierda' ? styles.imagenIzquierda : styles.imagenDerecha
                }`}
            >
              {/* Columna de imagen */}
              <div className={styles.columnaImagen}>
                <div className={styles.imagenContainer}>
                  <Image
                    src={seccion.imagen}
                    alt={seccion.titulo}
                    width={600}
                    height={400}
                    className={styles.imagen}
                  />
                  <div className={styles.imagenOverlay}></div>
                </div>
              </div>

              {/* Columna de texto */}
              <div className={styles.columnaTexto}>
                <div className={styles.textoContainer}>
                  <h2 className={styles.tituloSeccion}>{seccion.titulo}</h2>
                  <div className={styles.separador}></div>
                  <p className={styles.textoSeccion}>{seccion.texto}</p>

                  {/* Decoración adicional */}
                  <div className={styles.numeroSeccion}>
                    {String(index + 1).padStart(2, '0')}
                  </div>
                </div>
              </div>
            </section>
          ))}
        </div>

        {/* Sección de estadísticas */}
        <section className={styles.estadisticasSection}>
          <div className={styles.estadisticasGrid}>
            <div className={styles.estadistica}>
              <span className={styles.numero}>500+</span>
              <span className={styles.label}>Empresas Atendidas</span>
            </div>
            <div className={styles.estadistica}>
              <span className={styles.numero}>9</span>
              <span className={styles.label}>Años de Experiencia</span>
            </div>
            <div className={styles.estadistica}>
              <span className={styles.numero}>24/7</span>
              <span className={styles.label}>Soporte Técnico</span>
            </div>
            <div className={styles.estadistica}>
              <span className={styles.numero}>3</span>
              <span className={styles.label}>Sucursales</span>
            </div>
          </div>
        </section>
      </main>
          <Valores  />
        <div style={{ height: '25vh', background: '#ffffffff' }} />

      <Footer />
    </>
  );
}