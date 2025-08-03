const emailService = require('../services/emailService');

class SoporteController {
  /**
   * Procesar formulario de soporte técnico y enviar email
   */
  async procesarFormulario(datosFormulario) {
    try {
      const { nombreEmpresa, correo, telefono, tipoSoporte, ubicacion, descripcion } = datosFormulario;

      // Validar que todos los campos requeridos estén presentes
      if (!nombreEmpresa || !correo || !telefono || !tipoSoporte || !ubicacion || !descripcion) {
        throw new Error('Todos los campos son requeridos');
      }

      // Formatear datos para el email
      const datosEmail = {
        tipo: 'soporte',
        nombreEmpresa,
        correo,
        telefono,
        tipoSoporte,
        ubicacion,
        descripcion,
        fechaEnvio: new Date().toISOString()
      };

      // Enviar email de notificación al administrador
      const emailAdmin = await emailService.enviarEmailAdminSoporte(datosEmail);
      
      // Enviar email de confirmación al cliente
      const emailCliente = await emailService.enviarEmailConfirmacionSoporte(datosEmail);

      return {
        formulario: 'soporte',
        datosRecibidos: {
          nombreEmpresa,
          correo,
          telefono,
          tipoSoporte,
          ubicacion,
          descripcion
        },
        emails: {
          admin: emailAdmin,
          cliente: emailCliente
        },
        timestamp: new Date().toISOString()
      };

    } catch (error) {
      console.error('Error en procesarFormulario (soporte):', error);
      throw error;
    }
  }

  /**
   * Procesar formulario en modo test (sin enviar emails)
   */
  async procesarFormularioTest(datosFormulario) {
    try {
      const { nombreEmpresa, correo, telefono, tipoSoporte, ubicacion, descripcion } = datosFormulario;

      // Simular procesamiento
      console.log('🧪 MODO TEST SOPORTE - Datos del formulario recibidos:', {
        nombreEmpresa,
        correo,
        telefono,
        tipoSoporte,
        ubicacion,
        descripcion
      });

      // Simular delay de procesamiento
      await new Promise(resolve => setTimeout(resolve, 500));

      // Retornar datos simulados
      return {
        formulario: 'soporte',
        modo: 'test',
        datosRecibidos: {
          nombreEmpresa,
          correo,
          telefono,
          tipoSoporte,
          ubicacion,
          descripcion
        },
        simulacion: {
          emailAdmin: {
            enviado: true,
            destinatario: process.env.ADMIN_EMAIL || 'admin@example.com',
            asunto: `[SOPORTE] Nueva solicitud de ${nombreEmpresa}`
          },
          emailCliente: {
            enviado: true,
            destinatario: correo,
            asunto: 'Confirmación de solicitud de soporte - GOHA'
          }
        },
        timestamp: new Date().toISOString(),
        nota: 'Esta es una prueba - no se enviaron emails reales'
      };

    } catch (error) {
      console.error('Error en procesarFormularioTest (soporte):', error);
      throw error;
    }
  }

  /**
   * Obtener tipos de soporte disponibles
   */
  getTiposSoporte() {
    return [
      { value: 'instalacion-software', label: 'Instalación de Software' },
      { value: 'configuracion-equipos', label: 'Configuración de Equipos' },
      { value: 'mantenimiento-preventivo', label: 'Mantenimiento Preventivo' },
      { value: 'reparacion-hardware', label: 'Reparación de Hardware' },
      { value: 'soporte-remoto', label: 'Soporte Remoto' },
      { value: 'consultoria-tecnica', label: 'Consultoría Técnica' },
      { value: 'capacitacion', label: 'Capacitación' },
      { value: 'otro', label: 'Otro' }
    ];
  }

  /**
   * Validar estructura de datos del formulario de soporte
   */
  validarDatosSoporte(datos) {
    const camposRequeridos = ['nombreEmpresa', 'correo', 'telefono', 'tipoSoporte', 'ubicacion', 'descripcion'];
    const camposFaltantes = camposRequeridos.filter(campo => !datos[campo]);

    if (camposFaltantes.length > 0) {
      throw new Error(`Campos faltantes: ${camposFaltantes.join(', ')}`);
    }

    // Validar formato de email
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(datos.correo)) {
      throw new Error('Formato de email inválido');
    }

    // Validar tipo de soporte
    const tiposValidos = this.getTiposSoporte().map(tipo => tipo.value);
    if (!tiposValidos.includes(datos.tipoSoporte)) {
      throw new Error('Tipo de soporte no válido');
    }

    return true;
  }
}

module.exports = new SoporteController();