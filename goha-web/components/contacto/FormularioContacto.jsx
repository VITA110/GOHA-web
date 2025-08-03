import React, { useState } from 'react';
import styles from './FormularioContacto.module.css';
import CuadroFlotanteContacto from './CuadroFlotanteContacto';

export default function FormularioContacto({ 
  titulo = "Contactanos", 
  icono = "?",
  onSubmit,
  className = ""
}) {
  const [formData, setFormData] = useState({
    nombreEmpresa: '',
    correo: '',
    telefono: '',
    motivoContacto: '',
    descripcion: ''
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [showTooltip, setShowTooltip] = useState(false);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
  e.preventDefault();
  setIsSubmitting(true);
  
  try {
    const response = await fetch('/api/contacto/enviar', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(formData)
    });

    const result = await response.json();

    if (result.success) {
      // Mensaje de éxito
      alert('¡Formulario enviado exitosamente! Te contactaremos pronto.');
      
      // Resetear formulario después del envío exitoso
      setFormData({
        nombreEmpresa: '',
        correo: '',
        telefono: '',
        motivoContacto: '',
        descripcion: ''
      });
      
      console.log('Formulario enviado:', result.data);
    } else {
      // Mostrar error específico
      alert(`Error: ${result.message}`);
      console.error('Error del servidor:', result);
    }
  } catch (error) {
    console.error('Error de conexión:', error);
    alert('Error de conexión. Por favor, intenta nuevamente.');
  } finally {
    setIsSubmitting(false);
  }
};

  const toggleTooltip = () => {
    setShowTooltip(!showTooltip);
  };

  const closeTooltip = () => {
    setShowTooltip(false);
  };

  return (
    <div className={`${styles.formularioSoporte} ${className}`}>
      <div className={styles.formularioContainer}>
        <div className={styles.formularioHeader}>
          <h2 className={styles.formularioTitulo}>
            {titulo}
            <div className={styles.tituloIconoContainer}>
              <button 
                type="button"
                className={styles.tituloIcono}
                onClick={toggleTooltip}
                aria-label="Mostrar ayuda"
              >
                <span>{icono}</span>
              </button>
            </div>
          </h2>
        </div>

        <form className={styles.soporteForm} onSubmit={handleSubmit}>
          {/* Nombre de la empresa */}
          <div className={styles.formGroup}>
            <label className={styles.formLabel}>
              Nombre de su empresa
            </label>
            <div className={styles.inputWrapper}>
              <input
                type="text"
                name="nombreEmpresa"
                value={formData.nombreEmpresa}
                onChange={handleInputChange}
                className={styles.formInput}
                required
              />
              <div className={styles.inputIcon}>
                <span>🏢</span>
              </div>
            </div>
          </div>

          <div className={styles.formRow}>
            {/* Correo */}
            <div className={styles.formGroup}>
              <label className={styles.formLabel}>
                Correo
              </label>
              <div className={styles.inputWrapper}>
                <input
                  type="email"
                  name="correo"
                  value={formData.correo}
                  onChange={handleInputChange}
                  className={styles.formInput}
                  required
                />
                <div className={styles.inputIcon}>
                  <span>📧</span>
                </div>
              </div>
            </div>

            {/* Teléfono */}
            <div className={styles.formGroup}>
              <label className={styles.formLabel}>
                Teléfono
              </label>
              <div className={styles.inputWrapper}>
                <input
                  type="tel"
                  name="telefono"
                  value={formData.telefono}
                  onChange={handleInputChange}
                  className={styles.formInput}
                  required
                />
                <div className={styles.inputIcon}>
                  <span>📞</span>
                </div>
              </div>
            </div>
          </div>

          {/* Motivo del contacto */}
          <div className={styles.formGroup}>
            <label className={styles.formLabel}>
              Motivo del contacto
            </label>
            <div className={styles.inputWrapper}>
              <input
                type="text"
                name="motivoContacto"
                value={formData.motivoContacto}
                onChange={handleInputChange}
                className={styles.formInput}
                required
              />
            </div>
          </div>

          {/* Descripción */}
          <div className={styles.formGroup}>
            <label className={styles.formLabel}>
              Descripción del problema a solucionar
            </label>
            <textarea
              name="descripcion"
              value={formData.descripcion}
              onChange={handleInputChange}
              rows={4}
              className={styles.formTextarea}
              required
            />
          </div>

          {/* Botón de envío */}
          <button
            type="submit"
            className={styles.formSubmitBtn}
            disabled={isSubmitting}
          >
            {isSubmitting ? 'Enviando...' : 'Enviar Mensaje'}
            <div className={styles.btnArrow}>
              <span>▶</span>
            </div>
          </button>
        </form>
      </div>

      {/* Cuadro flotante separado */}
      <CuadroFlotanteContacto 
        isVisible={showTooltip}
        onClose={closeTooltip}
      />
    </div>
  );
}