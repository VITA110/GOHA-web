'use client';
import { useState } from 'react';
import styles from './Ubicaciones.module.css';

const sucursales = [
    {
        id: 1,
        nombre: 'Sucursal Centro',
        direccion: 'Av. Independencia 1234, Centro, Chihuahua, Chih.',
        telefono: '+52 (614) 123-4567',
        horario: 'Lun - Vie: 9:00 - 18:00, Sáb: 9:00 - 14:00',
        coordenadas: { lat: 28.6329957, lng: -106.0691004 }, // Coordenadas de Chihuahua Centro
        embedUrl: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3653.234567890123!2d-106.0691004!3d28.6329957!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMjjCsDM3JzU4LjgiTiAxMDbCsDA0JzA4LjgiVw!5e0!3m2!1ses!2smx!4v1234567890123!5m2!1ses!2smx'
    },
    {
        id: 2,
        nombre: 'Sucursal Norte',
        direccion: 'Blvd. Antonio Ortiz Mena 5678, San Felipe, Chihuahua, Chih.',
        telefono: '+52 (614) 234-5678',
        horario: 'Lun - Vie: 8:30 - 17:30, Sáb: 9:00 - 13:00',
        coordenadas: { lat: 28.7329957, lng: -106.1191004 },
        embedUrl: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3653.134567890123!2d-106.1191004!3d28.7329957!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMjjCsDQzJzU4LjgiTiAxMDbCsDA3JzA4LjgiVw!5e0!3m2!1ses!2smx!4v1234567890124!5m2!1ses!2smx'
    },
    {
        id: 3,
        nombre: 'Sucursal Sur',
        direccion: 'Av. Tecnológico 9101, Granjas, Chihuahua, Chih.',
        telefono: '+52 (614) 345-6789',
        horario: 'Lun - Vie: 9:00 - 18:00, Sáb: 10:00 - 15:00',
        coordenadas: { lat: 28.5829957, lng: -106.0291004 },
        embedUrl: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3653.334567890123!2d-106.0291004!3d28.5829957!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMjjCsDM0JzU4LjgiTiAxMDbCsDAxJzA4LjgiVw!5e0!3m2!1ses!2smx!4v1234567890125!5m2!1ses!2smx'
    }
];

export default function Ubicaciones() {
    const [sucursalActiva, setSucursalActiva] = useState(sucursales[0]);

    return (
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
    );
}