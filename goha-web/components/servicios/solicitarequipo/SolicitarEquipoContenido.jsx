import React from 'react';
import SeccionImagenEquipo from './SeccionImagenEquipo';
import FormularioSoporteEquipo from './FormularioSolicitarEquipo';
import NotaInformativaEquipo from './NotaInformativaEquipo';
import styles from './SolicitarEquipoContenido.module.css';
import Image from 'next/image';

export default function SolicitarEquipoContenido() {
  // Imágenes para la galería de equipos
  const images = [
    '/imagenes/equipo-ejemplo1.jpg', // img1
    '/imagenes/equipo-ejemplo2.jpg', // img2
    '/imagenes/equipo-ejemplo3.jpg', // img3
    '/imagenes/equipo-ejemplo4.jpg', // img4
    '/imagenes/equipo-ejemplo5.jpg', // img5
    '/imagenes/equipo-ejemplo6.jpg'  // img6
  ];

  // Función para manejar el envío del formulario
  const handleFormSubmit = (formData) => {
    console.log('Solicitud de equipo enviada:', formData);
    // Aquí puedes agregar la lógica para enviar el formulario
    // Por ejemplo: enviar a una API, mostrar mensaje de éxito, etc.
  };

  return (
    <div className={styles.soporteEquipoContenido}>
      <div className={styles.contenidoContainer}>

        {/* <div className={styles.contenidoGrid}> */}
          {/* Galería de Imágenes de Equipos */}
          {/* <div className={styles.contenidoImagenes}>
            <SeccionImagenEquipo 
              images={images}
            />
          </div> */}

          {/* Formulario de Solicitud de Equipo */}
          <div className={styles.contenidoFormulario}>
            <FormularioSoporteEquipo 
              titulo=""
              icono="?"
              onSubmit={handleFormSubmit}
            />
          </div>
        {/* </div> */}

        {/* Nota informativa centrada debajo de todo */}
        <NotaInformativaEquipo />

      </div>
    </div>
  );
}