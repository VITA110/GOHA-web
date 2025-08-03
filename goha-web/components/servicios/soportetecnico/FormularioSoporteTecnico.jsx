import React, { useState } from 'react';
import styles from './FormularioSoporteTecnico.module.css';
import CuadroFlotanteSoporte from './CuadroFlotanteSoporte';

export default function FormularioSoporteTecnico({ 
  titulo = "Soporte Técnico", 
  icono = "?",
  onSubmit,
  className = ""
}) {
  const [formData, setFormData] = useState({
    nombreEmpresa: '',
    correo: '',
    telefono: '',
    tipoSoporte: '',
    ubicacion: '',
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
    const response = await fetch('/api/soporte/enviar', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(formData)
    });

    const result = await response.json();

    if (result.success) {
      // Mensaje de éxito
      alert('¡Solicitud de soporte técnico enviada exitosamente! Nuestro equipo se contactará contigo pronto.');
      
      // Resetear formulario después del envío exitoso
      setFormData({
        nombreEmpresa: '',
        correo: '',
        telefono: '',
        tipoSoporte: '',
        ubicacion: '',
        descripcion: ''
      });
      
      console.log('Solicitud de soporte enviada:', result.data);
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
    <div className={`${styles.formularioSoporteTecnico} ${className}`}>
      <div className={styles.formularioContainer}>
        <div className={styles.formularioHeader}>
          <h2 className={styles.formularioTitulo}>
            {titulo}
            <div className={styles.tituloIconoContainer}>
              <button 
                type="button"
                className={styles.tituloIcono}
                onClick={toggleTooltip}
                aria-label="Mostrar instrucciones de soporte"
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

          {/* Tipo de soporte */}
          <div className={styles.formGroup}>
            <label className={styles.formLabel}>
              Tipo de soporte a solicitar
            </label>
            <div className={styles.inputWrapper}>
              <select
                name="tipoSoporte"
                value={formData.tipoSoporte}
                onChange={handleInputChange}
                className={styles.formSelect}
                required
              >
                <option value="">Seleccionar tipo de soporte</option>
                <option value="instalacion-software">Instalación de Software</option>
                <option value="configuracion-equipos">Configuración de Equipos</option>
                <option value="mantenimiento-preventivo">Mantenimiento Preventivo</option>
                <option value="reparacion-hardware">Reparación de Hardware</option>
                <option value="soporte-remoto">Soporte Remoto</option>
                <option value="consultoria-tecnica">Consultoría Técnica</option>
                <option value="capacitacion">Capacitación</option>
                <option value="otro">Otro</option>
              </select>
              <div className={styles.inputIcon}>
                <span>▼</span>
              </div>
            </div>
          </div>

          {/* Ubicación */}
          <div className={styles.formGroup}>
            <label className={styles.formLabel}>
              Ubicación donde se necesita el soporte
            </label>
            <div className={styles.inputWrapper}>
              <input
                type="text"
                name="ubicacion"
                value={formData.ubicacion}
                onChange={handleInputChange}
                className={styles.formInput}
                required
              />
              <div className={styles.inputIcon}>
                <span>📍</span>
              </div>
            </div>
          </div>

          {/* Descripción */}
          <div className={styles.formGroup}>
            <label className={styles.formLabel}>
              Descripción del problema y detalles del soporte requerido
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
            {isSubmitting ? 'Enviando...' : 'Solicitar Soporte'}
            <div className={styles.btnArrow}>
              <span>▶</span>
            </div>
          </button>
        </form>
      </div>

      {/* Cuadro flotante separado */}
      <CuadroFlotanteSoporte 
        isVisible={showTooltip}
        onClose={closeTooltip}
      />
    </div>
  );
}