'use client';

import { useState } from 'react';
import styles from './ProductosServicios.module.css';
import Image from 'next/image';
import BotonAdapt from './BotonAdapt';

const servicios = [
    {
        icono: 'iconsPS/hardware.svg',
        texto: 'Hardware empresarial',
        imagen: '/imagenes/hardware-ejemplo.jpg',
        descripcion: 'Equipos de alto rendimiento para empresas',
        caracteristicas: [
            'Servidores empresariales',
            'Estaciones de trabajo',
            'Equipos certificados',
            'Soporte técnico 24/7'
        ]
    },
    {
        icono: 'iconsPS/software.svg',
        texto: 'Software especializado',
        imagen: '/imagenes/software-ejemplo.jpg',
        descripcion: 'Soluciones de software para tu negocio',
        caracteristicas: [
            'Licencias corporativas',
            'Software de gestión',
            'Herramientas de productividad',
            'Actualizaciones incluidas'
        ]
    },
    {
        icono: 'iconsPS/impresion.svg',
        texto: 'Impresión y consumibles',
        imagen: '/imagenes/impresion-ejemplo.jpg',
        descripcion: 'Suministros de impresión de calidad',
        caracteristicas: [
            'Tintas y toners originales',
            'Papel especializado',
            'Consumibles compatibles',
            'Entrega programada'
        ]
    },
    {
        icono: 'iconsPS/accesorios.svg',
        texto: 'Accesorios y componentes',
        imagen: '/imagenes/componentes-ejemplo.jpg',
        descripcion: 'Complementos para tus equipos',
        caracteristicas: [
            'Periféricos de calidad',
            'Componentes de reemplazo',
            'Cables y conectores',
            'Garantía extendida'
        ]
    },
    {
        icono: 'iconsPS/proveeduria.svg',
        texto: 'Proveeduría MRO',
        imagen: '/imagenes/proveeduria-ejemplo.jpg',
        descripcion: 'Mantenimiento, Reparación y Operaciones',
        caracteristicas: [
            'Suministros industriales',
            'Herramientas especializadas',
            'Equipo de seguridad',
            'Inventario gestionado'
        ]
    },
    {
        icono: 'iconsPS/impresoras.svg',
        texto: 'Impresoras y equipos de cómputo',
        imagen: '/imagenes/impresora-ejemplo.jpg',
        descripcion: 'Equipos de impresión profesional',
        caracteristicas: [
            'Impresoras multifuncionales',
            'Equipos de alta velocidad',
            'Computadoras empresariales',
            'Servicio de instalación'
        ]
    },
    {
        icono: 'iconsPS/codigo.svg',
        texto: 'Soluciones de código de barras',
        imagen: '/imagenes/codigo-ejemplo.jpg',
        descripcion: 'Automatización y control de inventario',
        caracteristicas: [
            'Lectores de código de barras',
            'Impresoras de etiquetas',
            'Software de gestión',
            'Integración con ERP'
        ]
    },
    {
        icono: 'iconsPS/senalizacion.svg',
        texto: 'Señalización digital',
        imagen: '/imagenes/senalizacion-ejemplo.jpg',
        descripcion: 'Pantallas y contenido dinámico',
        caracteristicas: [
            'Pantallas profesionales',
            'Software de gestión',
            'Contenido personalizado',
            'Soporte técnico'
        ]
    },
];

export default function ProductosServicios() {
    const [hoveredIndex, setHoveredIndex] = useState(null);

    return (
        <section className={styles.seccion}>
            <div className={styles.fondoWrapper}></div>

            <div className={styles.contenido}>
                <h2 className={styles.titulo}>
                    TODO LO QUE TU EMPRESA NECESITA, INTEGRADO EN UN SOLO LUGAR.
                </h2>

                <div className={styles.grid}>
                    {servicios.map((servicio, i) => (
                        <div
                            key={i}
                            className={styles.itemWrapper}
                            onMouseEnter={() => setHoveredIndex(i)}
                            onMouseLeave={() => setHoveredIndex(null)}
                        >
                            <div className={styles.item}>
                                <Image
                                    src={`/${servicio.icono}`}
                                    alt={servicio.texto}
                                    width={32}
                                    height={32}
                                />
                                <span>{servicio.texto}</span>
                            </div>

                            {/* Tarjeta de detalle al hacer hover */}
                            {hoveredIndex === i && (
                                <div className={styles.card}>
                                    <div className={styles.cardImageWrapper}>
                                        <Image
                                            src={servicio.imagen}
                                            alt={servicio.texto}
                                            width={320}
                                            height={160}
                                            className={styles.cardImage}
                                        />
                                    </div>
                                    <div className={styles.cardContent}>
                                        <h3 className={styles.cardTitulo}>{servicio.texto}</h3>
                                        <p className={styles.cardDescripcion}>{servicio.descripcion}</p>
                                        <ul className={styles.cardLista}>
                                            {servicio.caracteristicas.map((caracteristica, idx) => (
                                                <li key={idx} className={styles.cardListaItem}>
                                                    ✓ {caracteristica}
                                                </li>
                                            ))}
                                        </ul>
                                    </div>
                                </div>
                            )}
                        </div>
                    ))}
                </div>
                <section id="servis">

                    <BotonAdapt />
                </section >

                    <div className={styles.divisionWrapper}>
                        <Image
                            src="/DivisionS.svg"
                            alt="División decorativa"
                            fill
                            className={styles.divisionImage}
                        />
                    </div>
            </div>
        </section>
    );
}