const emailService = require('../services/emailService');

class ContactoController {
  /**
   * Procesar formulario de contacto y enviar email
   */
  async procesarFormulario(datosFormulario) {
    try {
      const { nombreEmpresa, correo, telefono, motivoContacto, descripcion } = datosFormulario;

      // Validar que todos los campos requeridos estén presentes
      if (!nombreEmpresa || !correo || !telefono || !motivoContacto || !descripcion) {
        throw new Error('Todos los campos son requeridos');
      }

      // Formatear datos para el email
      const datosEmail = {
        tipo: 'contacto',
        nombreEmpresa,
        correo,
        telefono,
        motivoContacto,
        descripcion,
        fechaEnvio: new Date().toISOString()
      };

      // Enviar email de notificación al administrador
      const emailAdmin = await emailService.enviarEmailAdmin(datosEmail);
      
      // Enviar email de confirmación al cliente
      const emailCliente = await emailService.enviarEmailConfirmacion(datosEmail);

      return {
        formulario: 'contacto',
        datosRecibidos: {
          nombreEmpresa,
          correo,
          telefono,
          motivoContacto,
          descripcion
        },
        emails: {
          admin: emailAdmin,
          cliente: emailCliente
        },
        timestamp: new Date().toISOString()
      };

    } catch (error) {
      console.error('Error en procesarFormulario:', error);
      throw error;
    }
  }

  /**
   * Procesar formulario en modo test (sin enviar emails)
   */
  async procesarFormularioTest(datosFormulario) {
    try {
      const { nombreEmpresa, correo, telefono, motivoContacto, descripcion } = datosFormulario;

      // Simular procesamiento
      console.log('🧪 MODO TEST - Datos del formulario recibidos:', {
        nombreEmpresa,
        correo,
        telefono,
        motivoContacto,
        descripcion
      });

      // Simular delay de procesamiento
      await new Promise(resolve => setTimeout(resolve, 500));

      // Retornar datos simulados
      return {
        formulario: 'contacto',
        modo: 'test',
        datosRecibidos: {
          nombreEmpresa,
          correo,
          telefono,
          motivoContacto,
          descripcion
        },
        simulacion: {
          emailAdmin: {
            enviado: true,
            destinatario: process.env.ADMIN_EMAIL || 'admin@example.com',
            asunto: `[CONTACTO] Nuevo mensaje de ${nombreEmpresa}`
          },
          emailCliente: {
            enviado: true,
            destinatario: correo,
            asunto: 'Confirmación de contacto - GOHA'
          }
        },
        timestamp: new Date().toISOString(),
        nota: 'Esta es una prueba - no se enviaron emails reales'
      };

    } catch (error) {
      console.error('Error en procesarFormularioTest:', error);
      throw error;
    }
  }

  /**
   * Validar estructura de datos del formulario
   */
  validarDatosContacto(datos) {
    const camposRequeridos = ['nombreEmpresa', 'correo', 'telefono', 'motivoContacto', 'descripcion'];
    const camposFaltantes = camposRequeridos.filter(campo => !datos[campo]);

    if (camposFaltantes.length > 0) {
      throw new Error(`Campos faltantes: ${camposFaltantes.join(', ')}`);
    }

    // Validar formato de email
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(datos.correo)) {
      throw new Error('Formato de email inválido');
    }

    return true;
  }
}

module.exports = new ContactoController();