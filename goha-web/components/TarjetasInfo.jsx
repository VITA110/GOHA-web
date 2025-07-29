import styles from './TarjetasInfo.module.css';
import Image from 'next/image';

const tarjetas = [
  {
    icono: '/icons/software.svg',
    titulo: 'Software especializado',
    descripcion: 'Equipos confiables y de alto rendimiento para entornos de trabajo exigentes.',
    enlace: '/servicios/software',
  },
  {
    icono: '/icons/ubicaciones.svg',
    titulo: 'Ubicaciones',
    descripcion: 'Equipos confiables y de alto rendimiento para entornos de trabajo exigentes.',
    enlace: '/contacto/ubicaciones',
  },
  {
    icono: '/icons/fluctuacion.svg',
    titulo: 'Fluctiación radioactiva',
    descripcion: 'Equipos confiables y de alto rendimiento para entornos de trabajo exigentes.',
    enlace: '/servicios/fluctuacion',
  },
];

export default function TarjetasInfo() {
  return (
    <div className={styles.contenedor}>
      {tarjetas.map((tarjeta, index) => (
        <div key={index} className={styles.tarjeta}>
          <Image src={tarjeta.icono} alt={tarjeta.titulo} width={50} height={50} />
          <h3>{tarjeta.titulo}</h3>
          <p>{tarjeta.descripcion}</p>
          <a href={tarjeta.enlace} className={styles.boton}>
            Ver más <span className={styles.flecha}>↦</span>
          </a>
        </div>
      ))}
    </div>
  );
}
