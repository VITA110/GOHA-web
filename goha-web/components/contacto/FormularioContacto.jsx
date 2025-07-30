import React, { useState } from 'react';
import styles from './FormularioContacto.module.css';

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
      if (onSubmit) {
        await onSubmit(formData);
      } else {
        console.log('Formulario enviado:', formData);
      }
      
      // Resetear formulario después del envío exitoso
      setFormData({
        nombreEmpresa: '',
        correo: '',
        telefono: '',
        motivoContacto: '',
        descripcion: ''
      });
    } catch (error) {
      console.error('Error al enviar formulario:', error);
    } finally {
      setIsSubmitting(false);
    }
  };

  const toggleTooltip = () => {
    setShowTooltip(!showTooltip);
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
              
              {/* Cuadro de texto flotante */}
              {showTooltip && (
                <div className={styles.tooltipContainer}>
                  <div className={styles.tooltip}>
                    <div className={styles.tooltipHeader}>
                      <h3>¿Necesitas ayuda?</h3>
                      <button 
                        type="button"
                        className={styles.tooltipCloseBtn}
                        onClick={toggleTooltip}
                        aria-label="Cerrar ayuda"
                      >
                        ×
                      </button>
                    </div>
                    <div className={styles.tooltipContent}>
                      <p>Completa este formulario para contactarnos. Te responderemos lo antes posible.</p>
                      <ul>
                        <li><strong>Nombre de empresa:</strong> Ingresa el nombre de tu compañía</li>
                        <li><strong>Correo:</strong> Tu email de contacto</li>
                        <li><strong>Teléfono:</strong> Número donde podemos contactarte</li>
                        <li><strong>Motivo:</strong> Razón de tu consulta</li>
                        <li><strong>Descripción:</strong> Detalla tu problema o consulta</li>
                      </ul>
                    </div>
                  </div>
                </div>
              )}
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
    </div>
  );
}