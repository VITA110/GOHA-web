// pages/nosotros.jsx
import Head from 'next/head';
import Image from 'next/image';
import styles from '../components/Nosotros.module.css';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import Valores from '@/components/Valores';
import BarrasDecorativas from '@/components/BarrasDecorativas';

const contenidoSecciones = [
  {
    id: 1,
    titulo: "Nuestra Historia",
    texto: "GOHA - International Operating Solutions S.A. de C.V. es una empresa mexicana especializada en ofrecer soluciones tecnológicas integrales para la industria y los negocios. Nos enfocamos en proporcionar productos y servicios que optimizan los procesos operativos de nuestros clientes, ayudándoles a aumentar su productividad, reducir costos y adaptarse a los desafíos tecnológicos del entorno actual. Con una sólida trayectoria en el sector, trabajamos principalmente con empresas del ámbito industrial y maquilador, brindando soporte confiable y soluciones personalizadas en hardware, software, impresión, redes, señalización digital y más.",
    imagen: "/assets/nosotros/historia.jpg",
    posicion: "derecha"
  },
  {
    id: 2,
    titulo: "Nuestra Misión",
    texto: "Empoderar a las empresas mexicanas con soluciones tecnológicas integrales que impulsen su crecimiento y competitividad. Nos especializamos en hardware empresarial, software especializado, y servicios de consultoría que transforman los desafíos tecnológicos en oportunidades de negocio. Creemos que la tecnología debe ser accesible, confiable y orientada a resultados tangibles.",
    imagen: "/assets/nosotros/mision.jpg",
    posicion: "izquierda"
  },
  {
    id: 3,
    titulo: "Nuestro Compromiso",
    texto: "Nos comprometemos a ser más que un proveedor: somos su aliado estratégico en la transformación digital. Con más de 500 empresas atendidas y un equipo de especialistas certificados, garantizamos soporte técnico 24/7, capacitación continua y acompañamiento personalizado. Nuestro objetivo es que cada cliente vea en la tecnología una ventaja competitiva real y medible en su industria.",
    imagen: "/assets/nosotros/compromiso.jpg",
    posicion: "derecha"
  }
];

const estadisticas = [
  {
    icono: (
      <svg fill="none" stroke="currentColor" viewBox="0 0 24 24" width="64" height="64">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
      </svg>
    ),
    label: "Clientes Satisfechos"
  },
  {
    icono: (
      <svg fill="none" stroke="currentColor" viewBox="0 0 24 24" width="64" height="64">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
      </svg>
    ),
    label: "Experiencia Comprobada"
  },
  {
    icono: (
      <svg fill="none" stroke="currentColor" viewBox="0 0 24 24" width="64" height="64">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M18.364 5.636l-3.536 3.536m0 5.656l3.536 3.536M9.172 9.172L5.636 5.636m3.536 9.192l-3.536 3.536M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-5 0a4 4 0 11-8 0 4 4 0 018 0z" />
      </svg>
    ),
    label: "Soporte Continuo"
  },
  {
    icono: (
      <svg fill="none" stroke="currentColor" viewBox="0 0 24 24" width="64" height="64">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
      </svg>
    ),
    label: "Cobertura Regional"
  }
];

export default function Nosotros() {
  return (
    <>
      <BarrasDecorativas />
      <Head>
        <title>Sobre nosotros - GOHA Networks</title>
        <meta name="description" content="Conoce más sobre GOHA Networks, nuestra historia, misión, visión y valores. Líder en soluciones tecnológicas empresariales en Chihuahua." />
      </Head>
      <Navbar visible={true} />

      <main className={styles.mainContainer}>
        {/* Encabezado de la página */}
        <header className={styles.headerSection}>
          <h1 className={styles.pageTitle}>Sobre Nosotros</h1>
          {/* <p className={styles.pageSubtitle}>
            Conoce la historia y valores que nos impulsan a ser líderes en soluciones tecnológicas
          </p> */}
        </header>

        {/* Secciones alternadas */}
        <div className={styles.contenidoWrapper}>
          {contenidoSecciones.map((seccion, index) => (
            <section
              key={seccion.id}
              className={`${styles.seccionContenido} ${
                seccion.posicion === 'izquierda' ? styles.imagenIzquierda : styles.imagenDerecha
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

        {/* Valores ahora va ANTES de estadísticas */}
        <Valores />

        {/* Sección de estadísticas solo con iconos */}
        <section className={styles.estadisticasSection}>
          <div className={styles.estadisticasGrid}>
            {estadisticas.map((stat, index) => (
              <div key={index} className={styles.estadistica}>
                <div className={styles.iconoWrapper}>
                  {stat.icono}
                </div>
                <span className={styles.label}>{stat.label}</span>
              </div>
            ))}
          </div>
        </section>
      </main>

      {/* Spacer pequeño para que el footer respire (antes era 25vh) */}
      <div style={{ height: '6vh', background: '#ffffffff' }} />

      <Footer />
    </>
  );
}
