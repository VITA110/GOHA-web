import React, { useState } from 'react';
import styles from './FormularioSolicitarEquipo.module.css';
import CuadroFlotanteEquipo from './CuadroFlotanteEquipo';

export default function FormularioSolicitarEquipo({ 
  titulo = "Solicitar Equipo", 
  icono = "?",
  onSubmit,
  className = ""
}) {
  const [formData, setFormData] = useState({
    nombreEmpresa: '',
    correo: '',
    telefono: '',
    tipoEquipo: '',
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
      const response = await fetch('/api/equipo/enviar', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData)
      });

      const result = await response.json();

      if (result.success) {
        // Mensaje de éxito
        alert('¡Solicitud de equipo enviada exitosamente! Nuestro equipo comercial se contactará contigo pronto.');
        
        // Resetear formulario después del envío exitoso
        setFormData({
          nombreEmpresa: '',
          correo: '',
          telefono: '',
          tipoEquipo: '',
          ubicacion: '',
          descripcion: ''
        });
        
        console.log('Solicitud de equipo enviada:', result.data);
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
    <div className={`${styles.formularioSolicitarEquipo} ${className}`}>
      <div className={styles.formularioContainer}>
        <div className={styles.formularioHeader}>
          <h2 className={styles.formularioTitulo}>
            {titulo}
            <div className={styles.tituloIconoContainer}>
              <button 
                type="button"
                className={styles.tituloIcono}
                onClick={toggleTooltip}
                aria-label="Mostrar instrucciones de equipo"
              >
                <span>{icono}</span>
              </button>
            </div>
          </h2>
        </div>

        <form className={styles.equipoForm} onSubmit={handleSubmit}>
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

          {/* Tipo de equipo */}
          <div className={styles.formGroup}>
            <label className={styles.formLabel}>
              Tipo de equipo a solicitar
            </label>
            <div className={styles.inputWrapper}>
              <select
                name="tipoEquipo"
                value={formData.tipoEquipo}
                onChange={handleInputChange}
                className={styles.formSelect}
                required
              >
                <option value="">Seleccionar tipo de equipo</option>
                <option value="computadora-escritorio">Computadora de Escritorio</option>
                <option value="laptop">Laptop</option>
                <option value="tablet">Tablet</option>
                <option value="smartphone">Smartphone</option>
                <option value="impresora">Impresora</option>
                <option value="monitor">Monitor</option>
                <option value="accesorio">Accesorio</option>
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
              Ubicación donde se necesita el equipo
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
              Descripción del equipo y especificaciones requeridas
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
            {isSubmitting ? 'Enviando...' : 'Solicitar Equipo'}
            <div className={styles.btnArrow}>
              <span>▶</span>
            </div>
          </button>
        </form>
      </div>

      {/* Cuadro flotante separado */}
      <CuadroFlotanteEquipo 
        isVisible={showTooltip}
        onClose={closeTooltip}
      />
    </div>
  );
}