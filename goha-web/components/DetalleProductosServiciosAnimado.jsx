import styles from './DetalleProductosServiciosAnimado.module.css';
import Image from 'next/image';

const productos = [
  {
    titulo: 'Hardware empresarial',
    descripcion: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
    imagen: '/imagenes/hardware-ejemplo.jpg',
    icono: '/iconsPS/hardware.svg',
  },
  {
    titulo: 'Software especializado',
    descripcion: 'Sed ut perspiciatis unde omnis iste natus error.',
    imagen: '/imagenes/software-ejemplo.jpg',
    icono: '/iconsPS/software.svg',
  },
  {
    titulo: 'Impresión y consumibles',
    descripcion: 'Nemo enim ipsam voluptatem quia voluptas sit aspernatur.',
    imagen: '/imagenes/impresion-ejemplo.jpg',
    icono: '/iconsPS/impresoras.svg',
  },
  {
    titulo: 'Accesorios y componentes',
    descripcion: 'Ut enim ad minima veniam, quis nostrum exercitationem.',
    imagen: '/imagenes/componentes-ejemplo.jpg',
    icono: '/iconsPS/accesorios.svg',
  },
  {
    titulo: 'Proveeduría MRO',
    descripcion: 'Ut enim ad minima veniam, quis nostrum exercitationem.',
    imagen: '/imagenes/proveeduria-ejemplo.jpg',
    icono: '/iconsPS/proveeduria.svg',
  },
  {
    titulo: 'Impresoras y equipos de cómputo',
    descripcion: 'Ut enim ad minima veniam, quis nostrum exercitationem.',
    imagen: '/imagenes/impresora-ejemplo.jpg',
    icono: '/iconsPS/impresion.svg',
  },
  {
    titulo: 'Soluciones de código de barras',
    descripcion: 'Ut enim ad minima veniam, quis nostrum exercitationem.',
    imagen: '/imagenes/codigo-ejemplo.jpg',
    icono: '/iconsPS/codigo.svg',
  },
  {
    titulo: 'Señalización digital',
    descripcion: 'Ut enim ad minima veniam, quis nostrum exercitationem.',
    imagen: '/imagenes/senalizacion-ejemplo.jpg',
    icono: '/iconsPS/senalizacion.svg',
  },
  // ... más objetos si lo deseas
];


export default function DetalleProductosServiciosAnimado() {
  return (
    <div className={styles.wrapper}>
      <div className={styles.textos}>
        {productos.map((producto) => (
          <a key={producto.id} href={`#${producto.id}`} className={styles.link}>
            <div className={styles.itemTexto}>
              <Image
                src={producto.icono}
                alt={producto.titulo}
                width={28}
                height={28}
              />
              <div>
                <h3>{producto.titulo}</h3>
                <p>{producto.descripcion}</p>
              </div>
            </div>
          </a>
        ))}
      </div>

      <div className={styles.imagenes}>
        {productos.map((producto) => (
          <div id={producto.id} key={producto.id} className={styles.itemImagen}>
            <Image
              src={producto.imagen}
              alt={producto.titulo}
              width={700}
              height={400}
              className={styles.imagen}
            />
          </div>
        ))}
      </div>
    </div>
  );
}
