import React from 'react';
import SeccionImagen from './SeccionImagen';
import FormularioContacto from './FormularioContacto';
import NotaInformativa from './NotaInformativa';
import styles from './ContactoContenido.module.css';
import Image from 'next/image';

export default function ContactoContenido() {
  // Imágenes para la galería
  const images = [
    '/imagenes/soporte-ejemplo1.jpg', // img1
    '/imagenes/soporte-ejemplo2.jpg', // img2
    '/api/placeholder/400/500', // img3
    '/api/placeholder/400/500', // img4
    '/api/placeholder/400/500', // img5
    '/api/placeholder/400/500'  // img6
  ];

  // Función para manejar el envío del formulario
  const handleFormSubmit = (formData) => {
    console.log('Formulario enviado:', formData);
    // Aquí puedes agregar la lógica para enviar el formulario
    // Por ejemplo: enviar a una API, mostrar mensaje de éxito, etc.
  };

  return (
    <div className={styles.contactoContenido}>
      <div className={styles.contenidoContainer}>
          {/* Formulario de Soporte Técnico */}
          <div className={styles.contenidoFormulario}>
            <FormularioContacto 
              titulo="Contactanos"
              icono="?"
              onSubmit={handleFormSubmit}
            />
          </div>

        {/* Nota informativa centrada debajo de todo */}
        <NotaInformativa />
      </div>
    </div>
  );
}