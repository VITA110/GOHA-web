'use client';
import { useState } from 'react';
import Navbar from '@/components/Navbar';
import styles from './Ubicaciones.module.css';

const sucursales = [
    {
        id: 1,
        nombre: 'Chihuahua, Chih.',
        direccion: 'Blvrd Antonio Ortiz Mena 3400, Lomas del Santuario I Etapa, Campestre-Lomas, 31206 Chihuahua, Chih.',
        telefono: '+52 614 412 1803',
        horario: 'Lun - Vie: 8:00 - 18:00',
        coordenadas: { lat: 28.62856753650124, lng: -106.0982277733702 }, // Coordenadas de Chihuahua Centro
        embedUrl: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3502.046297701739!2d-106.10088852479748!3d28.628374484269994!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x86ea43e7ec71c311%3A0x5890047b594b4b0b!2sGOHA%20-%20International%20Operating%20Solutions%20S.A.%20de%20C.V.!5e0!3m2!1ses!2smx!4v1754178545295!5m2!1ses!2smx'
    },
    {
        id: 2,
        nombre: 'El paso, Texas.',
        direccion: '11450 James Watt Dr a5, El Paso, TX 79936, Estados Unidos.',
        telefono: '+1 915 234 9147',
        horario: 'Lun - Vie: 9:00 - 16:00',
        coordenadas: { lat: 31.740884630255582, lng: -106.31465460785937 },
        embedUrl: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d125432.56691289724!2d-106.48500340887921!3d31.751327386059305!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x86e7432d281fd8a3%3A0x8f291d386375a182!2sGOHA%20Solutions%20Inc.!5e0!3m2!1ses!2smx!4v1754178186044!5m2!1ses!2smx'
    },
    
];

export default function Ubicaciones() {
    const [sucursalActiva, setSucursalActiva] = useState(sucursales[0]);

    return (
      <>  
            <Navbar visible={true} />
        <section className={styles.seccion}>
            <div className={styles.contenedor}>
                <h2 className={styles.titulo}>Nuestras Ubicaciones</h2>
                <p className={styles.subtitulo}>
                    Visítanos en cualquiera de nuestras sucursales en Chihuahua
                </p>

                <div className={styles.recuadro}>
                    {/* Pestañas superiores */}
                    <div className={styles.pestanas}>
                        {sucursales.map((sucursal) => (
                            <button
                                key={sucursal.id}
                                className={`${styles.pestana} ${sucursalActiva.id === sucursal.id ? styles.pestanaActiva : ''
                                    }`}
                                onClick={() => setSucursalActiva(sucursal)}
                            >
                                {sucursal.nombre}
                            </button>
                        ))}
                    </div>

                    {/* Contenido de la sucursal activa */}
                    <div className={styles.contenido}>
                        {/* Información de la sucursal */}
                        <div className={styles.info}>
                            <h3 className={styles.nombreSucursal}>{sucursalActiva.nombre}</h3>

                            <div className={styles.detalles}>
                                <div className={styles.detalle}>
                                    <span className={styles.icono}>📍</span>
                                    <span className={styles.texto}>{sucursalActiva.direccion}</span>
                                </div>

                                <div className={styles.detalle}>
                                    <span className={styles.icono}>📞</span>
                                    <span className={styles.texto}>{sucursalActiva.telefono}</span>
                                </div>

                                <div className={styles.detalle}>
                                    <span className={styles.icono}>🕒</span>
                                    <span className={styles.texto}>{sucursalActiva.horario}</span>
                                </div>
                            </div>

                            {/* Botones de acción */}
                            <div className={styles.acciones}>
                                <a
                                    href={`https://www.google.com/maps/dir/?api=1&destination=${sucursalActiva.coordenadas.lat},${sucursalActiva.coordenadas.lng}`}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className={styles.botonAccion}
                                >
                                    Cómo llegar
                                </a>
                            </div>
                        </div>

                        {/* Mapa de Google */}
                        <div className={styles.mapaContainer}>
                            <iframe
                                src={sucursalActiva.embedUrl}
                                className={styles.mapa}
                                allowFullScreen=""
                                loading="lazy"
                                referrerPolicy="no-referrer-when-downgrade"
                                title={`Mapa de ${sucursalActiva.nombre}`}
                            ></iframe>
                        </div>
                    </div>
                </div>
                </div>
            </section>
          </>
    );
}