import React from 'react';
import SeccionImagenSoporte from './SeccionImagenSoporte';
import FormularioSoporteTecnico from './FormularioSoporteTecnico';
import NotaInformativaSoporte from './NotaInformativaSoporte';
import styles from './SoporteTecnicoContenido.module.css';
import Image from 'next/image';

export default function SoporteTecnicoContenido() {
  // Imágenes para la galería de soporte técnico
  const images = [
    '/imagenes/soporte-ejemplo1.jpg', // img1
    '/imagenes/soporte-ejemplo2.jpg', // img2
    '/imagenes/soporte-ejemplo3.jpg', // img3
    '/imagenes/soporte-ejemplo4.jpg', // img4
    '/imagenes/soporte-ejemplo5.jpg', // img5
    '/imagenes/soporte-ejemplo6.jpg'  // img6
  ];

  // Función para manejar el envío del formulario
  const handleFormSubmit = (formData) => {
    console.log('Solicitud de soporte técnico enviada:', formData);
    // Aquí puedes agregar la lógica para enviar el formulario
    // Por ejemplo: enviar a una API, mostrar mensaje de éxito, etc.
  };

  return (
    <div className={styles.soporteTecnicoContenido}>
      <div className={styles.contenidoContainer}>

        <div className={styles.contenidoGrid}>
          {/* Galería de Imágenes de Soporte Técnico */}
          <div className={styles.contenidoImagenes}>
            <SeccionImagenSoporte 
              images={images}
            />
          </div>

          {/* Formulario de Soporte Técnico */}
          <div className={styles.contenidoFormulario}>
            <FormularioSoporteTecnico 
              titulo="Soporte Técnico"
              icono="?"
              onSubmit={handleFormSubmit}
            />
          </div>
        </div>

        {/* Nota informativa centrada debajo de todo */}
        <NotaInformativaSoporte />

      </div>
    </div>
  );
}