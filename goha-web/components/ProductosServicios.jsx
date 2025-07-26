import styles from './ProductosServicios.module.css';
import DetalleProductosServicios from './DetalleProductosServicios';
import Image from 'next/image';

const servicios = [
    { icono: 'iconsPS/hardware.svg', texto: 'Hardware empresarial' },
    { icono: 'iconsPS/software.svg', texto: 'Software especializado' },
    { icono: 'iconsPS/impresion.svg', texto: 'Impresión y consumibles' },
    { icono: 'iconsPS/accesorios.svg', texto: 'Accesorios y componentes' },
    { icono: 'iconsPS/proveeduria.svg', texto: 'Proveeduría MRO' },
    { icono: 'iconsPS/impresoras.svg', texto: 'Impresoras y equipos de cómputo' },
    { icono: 'iconsPS/codigo.svg', texto: 'Soluciones de código de barras' },
    { icono: 'iconsPS/senalizacion.svg', texto: 'Señalización digital' },
];

export default function ProductosServicios() {
    return (
        <section className={styles.seccion}>
            <div className={styles.fondoWrapper}>
                <Image
                    src="/FondoPS.svg"
                    alt="Fondo Productos y Servicios"
                    width={1440}
                    height={1930}
                    className={styles.fondo}
                    priority
                />
            </div>
            <div className={styles.contenido}>
                <h2 className={styles.titulo}>
                    Todo lo que tu empresa <br />
                    necesita, integrado en un <br />
                    solo lugar.
                </h2>

                <div className={styles.grid}>
                    {servicios.map(({ icono, texto }, i) => (
                        <div key={i} className={styles.item}>
                            <Image src={`/${icono}`} alt={texto} width={32} height={32} />
                            <span>{texto}</span>
                        </div>
                    ))}
                </div>
                <DetalleProductosServicios />
                


            
            </div>
            
        </section>
    );
}
