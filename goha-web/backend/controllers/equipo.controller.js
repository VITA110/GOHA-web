const emailService = require('../services/emailService');

class EquipoController {
  /**
   * Procesar formulario de solicitud de equipo y enviar email
   */
  async procesarFormulario(datosFormulario) {
    try {
      const { nombreEmpresa, correo, telefono, tipoEquipo, ubicacion, descripcion } = datosFormulario;

      // Validar que todos los campos requeridos estén presentes
      if (!nombreEmpresa || !correo || !telefono || !tipoEquipo || !ubicacion || !descripcion) {
        throw new Error('Todos los campos son requeridos');
      }

      // Formatear datos para el email
      const datosEmail = {
        tipo: 'equipo',
        nombreEmpresa,
        correo,
        telefono,
        tipoEquipo,
        ubicacion,
        descripcion,
        fechaEnvio: new Date().toISOString()
      };

      // Enviar email de notificación al administrador
      const emailAdmin = await emailService.enviarEmailAdminEquipo(datosEmail);
      
      // Enviar email de confirmación al cliente
      const emailCliente = await emailService.enviarEmailConfirmacionEquipo(datosEmail);

      return {
        formulario: 'equipo',
        datosRecibidos: {
          nombreEmpresa,
          correo,
          telefono,
          tipoEquipo,
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
      console.error('Error en procesarFormulario (equipo):', error);
      throw error;
    }
  }

  /**
   * Procesar formulario en modo test (sin enviar emails)
   */
  async procesarFormularioTest(datosFormulario) {
    try {
      const { nombreEmpresa, correo, telefono, tipoEquipo, ubicacion, descripcion } = datosFormulario;

      // Simular procesamiento
      console.log('🧪 MODO TEST EQUIPO - Datos del formulario recibidos:', {
        nombreEmpresa,
        correo,
        telefono,
        tipoEquipo,
        ubicacion,
        descripcion
      });

      // Simular delay de procesamiento
      await new Promise(resolve => setTimeout(resolve, 500));

      // Retornar datos simulados
      return {
        formulario: 'equipo',
        modo: 'test',
        datosRecibidos: {
          nombreEmpresa,
          correo,
          telefono,
          tipoEquipo,
          ubicacion,
          descripcion
        },
        simulacion: {
          emailAdmin: {
            enviado: true,
            destinatario: process.env.ADMIN_EMAIL || 'admin@example.com',
            asunto: `[EQUIPO] Nueva solicitud de ${nombreEmpresa}`
          },
          emailCliente: {
            enviado: true,
            destinatario: correo,
            asunto: 'Confirmación de solicitud de equipo - GOHA'
          }
        },
        timestamp: new Date().toISOString(),
        nota: 'Esta es una prueba - no se enviaron emails reales'
      };

    } catch (error) {
      console.error('Error en procesarFormularioTest (equipo):', error);
      throw error;
    }
  }

  /**
   * Obtener tipos de equipo disponibles
   */
  getTiposEquipo() {
    return [
      { value: 'computadora-escritorio', label: 'Computadora de Escritorio' },
      { value: 'laptop', label: 'Laptop' },
      { value: 'tablet', label: 'Tablet' },
      { value: 'smartphone', label: 'Smartphone' },
      { value: 'impresora', label: 'Impresora' },
      { value: 'monitor', label: 'Monitor' },
      { value: 'accesorio', label: 'Accesorio' },
      { value: 'otro', label: 'Otro' }
    ];
  }

  /**
   * Validar estructura de datos del formulario de equipo
   */
  validarDatosEquipo(datos) {
    const camposRequeridos = ['nombreEmpresa', 'correo', 'telefono', 'tipoEquipo', 'ubicacion', 'descripcion'];
    const camposFaltantes = camposRequeridos.filter(campo => !datos[campo]);

    if (camposFaltantes.length > 0) {
      throw new Error(`Campos faltantes: ${camposFaltantes.join(', ')}`);
    }

    // Validar formato de email
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(datos.correo)) {
      throw new Error('Formato de email inválido');
    }

    // Validar tipo de equipo
    const tiposValidos = this.getTiposEquipo().map(tipo => tipo.value);
    if (!tiposValidos.includes(datos.tipoEquipo)) {
      throw new Error('Tipo de equipo no válido');
    }

    return true;
  }
}

module.exports = new EquipoController();