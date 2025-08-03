const nodemailer = require('nodemailer');

class EmailService {
  constructor() {
    this.transporter = null;
    this.inicializarTransporter();
  }

  /**
   * Inicializar configuración de Nodemailer
   */
  inicializarTransporter() {
    try {
      this.transporter = nodemailer.createTransport({
        service: process.env.EMAIL_SERVICE || 'gmail',
        auth: {
          user: process.env.EMAIL_USER,
          pass: process.env.EMAIL_PASSWORD
        },
        secure: true,
        tls: {
          rejectUnauthorized: false
        }
      });

      console.log('✅ Transporter de email inicializado correctamente');
    } catch (error) {
      console.error('❌ Error al inicializar transporter:', error);
    }
  }

  /**
   * Verificar conexión con el servicio de email
   */
  async verificarConexion() {
    try {
      if (!this.transporter) {
        throw new Error('Transporter no inicializado');
      }

      await this.transporter.verify();
      console.log('✅ Conexión con servicio de email verificada');
      return true;
    } catch (error) {
      console.error('❌ Error de conexión con servicio de email:', error);
      return false;
    }
  }

  /**
   * Enviar email de notificación al administrador - CONTACTO
   */
  async enviarEmailAdmin(datosFormulario) {
    try {
      const { nombreEmpresa, correo, telefono, motivoContacto, descripcion, fechaEnvio } = datosFormulario;

      const htmlContent = `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <div style="background-color: #f8f9fa; padding: 20px; border-radius: 8px;">
            <h2 style="color: #2c3e50; margin-bottom: 20px;">
              🏢 Nuevo Formulario de Contacto Recibido
            </h2>
            
            <div style="background-color: white; padding: 20px; border-radius: 6px; margin-bottom: 15px;">
              <h3 style="color: #34495e; margin-top: 0;">Información de la Empresa</h3>
              <p><strong>Empresa:</strong> ${nombreEmpresa}</p>
              <p><strong>Email:</strong> ${correo}</p>
              <p><strong>Teléfono:</strong> ${telefono}</p>
            </div>

            <div style="background-color: white; padding: 20px; border-radius: 6px; margin-bottom: 15px;">
              <h3 style="color: #34495e; margin-top: 0;">Detalles del Contacto</h3>
              <p><strong>Motivo:</strong> ${motivoContacto}</p>
              <p><strong>Descripción:</strong></p>
              <div style="background-color: #f8f9fa; padding: 15px; border-radius: 4px; border-left: 4px solid #3498db;">
                ${descripcion}
              </div>
            </div>

            <div style="background-color: #e8f4f8; padding: 15px; border-radius: 6px;">
              <p style="margin: 0; color: #2c3e50; font-size: 14px;">
                <strong>Fecha de envío:</strong> ${new Date(fechaEnvio).toLocaleString('es-ES')}
              </p>
            </div>
          </div>
        </div>
      `;

      const mailOptions = {
        from: process.env.EMAIL_USER,
        to: process.env.ADMIN_EMAIL,
        subject: `[CONTACTO] Nuevo mensaje de ${nombreEmpresa}`,
        html: htmlContent,
        replyTo: correo
      };

      const result = await this.transporter.sendMail(mailOptions);
      
      console.log('📧 Email enviado al administrador:', result.messageId);
      
      return {
        enviado: true,
        messageId: result.messageId,
        destinatario: process.env.ADMIN_EMAIL,
        timestamp: new Date().toISOString()
      };

    } catch (error) {
      console.error('❌ Error al enviar email al administrador:', error);
      throw error;
    }
  }

  /**
   * Enviar email de confirmación al cliente - CONTACTO
   */
  async enviarEmailConfirmacion(datosFormulario) {
    try {
      const { nombreEmpresa, correo } = datosFormulario;

      const htmlContent = `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <div style="background-color: #f8f9fa; padding: 20px; border-radius: 8px;">
            <div style="text-align: center; margin-bottom: 30px;">
              <h1 style="color: #2c3e50; margin-bottom: 10px;">GOHA</h1>
              <p style="color: #7f8c8d; margin: 0;">Soluciones Tecnológicas</p>
            </div>
            
            <div style="background-color: white; padding: 25px; border-radius: 6px;">
              <h2 style="color: #27ae60; margin-top: 0;">
                ✅ ¡Hemos recibido tu mensaje!
              </h2>
              
              <p style="color: #2c3e50; font-size: 16px;">
                Estimado equipo de <strong>${nombreEmpresa}</strong>,
              </p>
              
              <p style="color: #34495e; line-height: 1.6;">
                Gracias por contactarnos. Hemos recibido tu solicitud y nuestro equipo la está revisando. 
                Te responderemos lo antes posible para ayudarte con tus necesidades tecnológicas.
              </p>

              <div style="background-color: #e8f6f3; padding: 20px; border-radius: 6px; margin: 20px 0;">
                <p style="margin: 0; color: #27ae60; font-weight: bold;">
                  📞 Tiempo de respuesta estimado: 24-48 horas
                </p>
              </div>

              <p style="color: #34495e; line-height: 1.6;">
                Si tienes alguna pregunta urgente, no dudes en contactarnos directamente.
              </p>

              <div style="margin-top: 30px; padding-top: 20px; border-top: 1px solid #ecf0f1;">
                <p style="margin: 0; color: #7f8c8d; font-size: 14px;">
                  Este es un email automático, por favor no respondas a este mensaje.
                </p>
              </div>
            </div>
          </div>
        </div>
      `;

      const mailOptions = {
        from: process.env.EMAIL_USER,
        to: correo,
        subject: 'Confirmación de contacto - GOHA',
        html: htmlContent
      };

      const result = await this.transporter.sendMail(mailOptions);
      
      console.log('📧 Email de confirmación enviado al cliente:', result.messageId);
      
      return {
        enviado: true,
        messageId: result.messageId,
        destinatario: correo,
        timestamp: new Date().toISOString()
      };

    } catch (error) {
      console.error('❌ Error al enviar email de confirmación:', error);
      throw error;
    }
  }

  /**
   * Enviar email de notificación al administrador - SOPORTE
   */
  async enviarEmailAdminSoporte(datosFormulario) {
    try {
      const { nombreEmpresa, correo, telefono, tipoSoporte, ubicacion, descripcion, fechaEnvio } = datosFormulario;

      // Mapear tipo de soporte a texto legible
      const tiposSoporte = {
        'instalacion-software': 'Instalación de Software',
        'configuracion-equipos': 'Configuración de Equipos',
        'mantenimiento-preventivo': 'Mantenimiento Preventivo',
        'reparacion-hardware': 'Reparación de Hardware',
        'soporte-remoto': 'Soporte Remoto',
        'consultoria-tecnica': 'Consultoría Técnica',
        'capacitacion': 'Capacitación',
        'otro': 'Otro'
      };

      const tipoSoporteTexto = tiposSoporte[tipoSoporte] || tipoSoporte;

      const htmlContent = `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <div style="background-color: #f8f9fa; padding: 20px; border-radius: 8px;">
            <h2 style="color: #2c3e50; margin-bottom: 20px;">
              🔧 Nueva Solicitud de Soporte Técnico
            </h2>
            
            <div style="background-color: white; padding: 20px; border-radius: 6px; margin-bottom: 15px;">
              <h3 style="color: #34495e; margin-top: 0;">Información de la Empresa</h3>
              <p><strong>Empresa:</strong> ${nombreEmpresa}</p>
              <p><strong>Email:</strong> ${correo}</p>
              <p><strong>Teléfono:</strong> ${telefono}</p>
            </div>

            <div style="background-color: white; padding: 20px; border-radius: 6px; margin-bottom: 15px;">
              <h3 style="color: #34495e; margin-top: 0;">Detalles del Soporte</h3>
              <p><strong>Tipo de Soporte:</strong> ${tipoSoporteTexto}</p>
              <p><strong>Ubicación:</strong> ${ubicacion}</p>
              <p><strong>Descripción del Problema:</strong></p>
              <div style="background-color: #f8f9fa; padding: 15px; border-radius: 4px; border-left: 4px solid #e74c3c;">
                ${descripcion}
              </div>
            </div>

            <div style="background-color: #fdf2e9; padding: 15px; border-radius: 6px;">
              <p style="margin: 0; color: #2c3e50; font-size: 14px;">
                <strong>Fecha de solicitud:</strong> ${new Date(fechaEnvio).toLocaleString('es-ES')}
              </p>
            </div>
          </div>
        </div>
      `;

      const mailOptions = {
        from: process.env.EMAIL_USER,
        to: process.env.ADMIN_EMAIL,
        subject: `[SOPORTE] Nueva solicitud de ${nombreEmpresa}`,
        html: htmlContent,
        replyTo: correo
      };

      const result = await this.transporter.sendMail(mailOptions);
      
      console.log('📧 Email de soporte enviado al administrador:', result.messageId);
      
      return {
        enviado: true,
        messageId: result.messageId,
        destinatario: process.env.ADMIN_EMAIL,
        timestamp: new Date().toISOString()
      };

    } catch (error) {
      console.error('❌ Error al enviar email de soporte al administrador:', error);
      throw error;
    }
  }

  /**
   * Enviar email de confirmación al cliente - SOPORTE
   */
  async enviarEmailConfirmacionSoporte(datosFormulario) {
    try {
      const { nombreEmpresa, correo, tipoSoporte } = datosFormulario;

      const tiposSoporte = {
        'instalacion-software': 'Instalación de Software',
        'configuracion-equipos': 'Configuración de Equipos',
        'mantenimiento-preventivo': 'Mantenimiento Preventivo',
        'reparacion-hardware': 'Reparación de Hardware',
        'soporte-remoto': 'Soporte Remoto',
        'consultoria-tecnica': 'Consultoría Técnica',
        'capacitacion': 'Capacitación',
        'otro': 'Otro'
      };

      const tipoSoporteTexto = tiposSoporte[tipoSoporte] || tipoSoporte;

      const htmlContent = `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <div style="background-color: #f8f9fa; padding: 20px; border-radius: 8px;">
            <div style="text-align: center; margin-bottom: 30px;">
              <h1 style="color: #2c3e50; margin-bottom: 10px;">GOHA</h1>
              <p style="color: #7f8c8d; margin: 0;">Soporte Técnico Especializado</p>
            </div>
            
            <div style="background-color: white; padding: 25px; border-radius: 6px;">
              <h2 style="color: #e74c3c; margin-top: 0;">
                🔧 ¡Solicitud de Soporte Recibida!
              </h2>
              
              <p style="color: #2c3e50; font-size: 16px;">
                Estimado equipo de <strong>${nombreEmpresa}</strong>,
              </p>
              
              <p style="color: #34495e; line-height: 1.6;">
                Hemos recibido tu solicitud de <strong>${tipoSoporteTexto}</strong> y nuestro equipo técnico 
                la está revisando. Nos pondremos en contacto contigo pronto para coordinar la asistencia.
              </p>

              <div style="background-color: #fdf2e9; padding: 20px; border-radius: 6px; margin: 20px 0;">
                <p style="margin: 0; color: #e74c3c; font-weight: bold;">
                  ⏰ Tiempo de respuesta: 2-4 horas hábiles
                </p>
              </div>

              <p style="color: #34495e; line-height: 1.6;">
                Nuestro equipo de soporte técnico se especializa en brindar soluciones rápidas y efectivas. 
                Mantén tu equipo disponible para cuando nuestros técnicos se comuniquen contigo.
              </p>

              <div style="margin-top: 30px; padding-top: 20px; border-top: 1px solid #ecf0f1;">
                <p style="margin: 0; color: #7f8c8d; font-size: 14px;">
                  Este es un email automático, por favor no respondas a este mensaje.
                </p>
              </div>
            </div>
          </div>
        </div>
      `;

      const mailOptions = {
        from: process.env.EMAIL_USER,
        to: correo,
        subject: 'Confirmación de solicitud de soporte - GOHA',
        html: htmlContent
      };

      const result = await this.transporter.sendMail(mailOptions);
      
      console.log('📧 Email de confirmación de soporte enviado al cliente:', result.messageId);
      
      return {
        enviado: true,
        messageId: result.messageId,
        destinatario: correo,
        timestamp: new Date().toISOString()
      };

    } catch (error) {
      console.error('❌ Error al enviar email de confirmación de soporte:', error);
      throw error;
    }
  }

  /**
   * Enviar email de notificación al administrador - EQUIPO
   */
  async enviarEmailAdminEquipo(datosFormulario) {
    try {
      const { nombreEmpresa, correo, telefono, tipoEquipo, ubicacion, descripcion, fechaEnvio } = datosFormulario;

      // Mapear tipo de equipo a texto legible
      const tiposEquipo = {
        'computadora-escritorio': 'Computadora de Escritorio',
        'laptop': 'Laptop',
        'tablet': 'Tablet',
        'smartphone': 'Smartphone',
        'impresora': 'Impresora',
        'monitor': 'Monitor',
        'accesorio': 'Accesorio',
        'otro': 'Otro'
      };

      const tipoEquipoTexto = tiposEquipo[tipoEquipo] || tipoEquipo;

      const htmlContent = `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <div style="background-color: #f8f9fa; padding: 20px; border-radius: 8px;">
            <h2 style="color: #2c3e50; margin-bottom: 20px;">
              💻 Nueva Solicitud de Equipo
            </h2>
            
            <div style="background-color: white; padding: 20px; border-radius: 6px; margin-bottom: 15px;">
              <h3 style="color: #34495e; margin-top: 0;">Información de la Empresa</h3>
              <p><strong>Empresa:</strong> ${nombreEmpresa}</p>
              <p><strong>Email:</strong> ${correo}</p>
              <p><strong>Teléfono:</strong> ${telefono}</p>
            </div>

            <div style="background-color: white; padding: 20px; border-radius: 6px; margin-bottom: 15px;">
              <h3 style="color: #34495e; margin-top: 0;">Detalles del Equipo</h3>
              <p><strong>Tipo de Equipo:</strong> ${tipoEquipoTexto}</p>
              <p><strong>Ubicación:</strong> ${ubicacion}</p>
              <p><strong>Especificaciones Requeridas:</strong></p>
              <div style="background-color: #f8f9fa; padding: 15px; border-radius: 4px; border-left: 4px solid #3498db;">
                ${descripcion}
              </div>
            </div>

            <div style="background-color: #e8f5e8; padding: 15px; border-radius: 6px;">
              <p style="margin: 0; color: #2c3e50; font-size: 14px;">
                <strong>Fecha de solicitud:</strong> ${new Date(fechaEnvio).toLocaleString('es-ES')}
              </p>
            </div>
          </div>
        </div>
      `;

      const mailOptions = {
        from: process.env.EMAIL_USER,
        to: process.env.ADMIN_EMAIL,
        subject: `[EQUIPO] Nueva solicitud de ${nombreEmpresa}`,
        html: htmlContent,
        replyTo: correo
      };

      const result = await this.transporter.sendMail(mailOptions);
      
      console.log('📧 Email de equipo enviado al administrador:', result.messageId);
      
      return {
        enviado: true,
        messageId: result.messageId,
        destinatario: process.env.ADMIN_EMAIL,
        timestamp: new Date().toISOString()
      };

    } catch (error) {
      console.error('❌ Error al enviar email de equipo al administrador:', error);
      throw error;
    }
  }

  /**
   * Enviar email de confirmación al cliente - EQUIPO
   */
  async enviarEmailConfirmacionEquipo(datosFormulario) {
    try {
      const { nombreEmpresa, correo, tipoEquipo } = datosFormulario;

      const tiposEquipo = {
        'computadora-escritorio': 'Computadora de Escritorio',
        'laptop': 'Laptop',
        'tablet': 'Tablet',
        'smartphone': 'Smartphone',
        'impresora': 'Impresora',
        'monitor': 'Monitor',
        'accesorio': 'Accesorio',
        'otro': 'Otro'
      };

      const tipoEquipoTexto = tiposEquipo[tipoEquipo] || tipoEquipo;

      const htmlContent = `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <div style="background-color: #f8f9fa; padding: 20px; border-radius: 8px;">
            <div style="text-align: center; margin-bottom: 30px;">
              <h1 style="color: #2c3e50; margin-bottom: 10px;">GOHA</h1>
              <p style="color: #7f8c8d; margin: 0;">Equipos Tecnológicos</p>
            </div>
            
            <div style="background-color: white; padding: 25px; border-radius: 6px;">
              <h2 style="color: #3498db; margin-top: 0;">
                💻 ¡Solicitud de Equipo Recibida!
              </h2>
              
              <p style="color: #2c3e50; font-size: 16px;">
                Estimado equipo de <strong>${nombreEmpresa}</strong>,
              </p>
              
              <p style="color: #34495e; line-height: 1.6;">
                Hemos recibido tu solicitud de <strong>${tipoEquipoTexto}</strong> y nuestro equipo comercial 
                la está evaluando. Nos pondremos en contacto contigo pronto para coordinar la cotización y entrega.
              </p>

              <div style="background-color: #e8f5e8; padding: 20px; border-radius: 6px; margin: 20px 0;">
                <p style="margin: 0; color: #3498db; font-weight: bold;">
                  ⏰ Tiempo de respuesta: 24-48 horas hábiles
                </p>
              </div>

              <p style="color: #34495e; line-height: 1.6;">
                Nuestro equipo comercial te contactará para proporcionarte una cotización detallada 
                con las mejores opciones disponibles según tus especificaciones.
              </p>

              <div style="margin-top: 30px; padding-top: 20px; border-top: 1px solid #ecf0f1;">
                <p style="margin: 0; color: #7f8c8d; font-size: 14px;">
                  Este es un email automático, por favor no respondas a este mensaje.
                </p>
              </div>
            </div>
          </div>
        </div>
      `;

      const mailOptions = {
        from: process.env.EMAIL_USER,
        to: correo,
        subject: 'Confirmación de solicitud de equipo - GOHA',
        html: htmlContent
      };

      const result = await this.transporter.sendMail(mailOptions);
      
      console.log('📧 Email de confirmación de equipo enviado al cliente:', result.messageId);
      
      return {
        enviado: true,
        messageId: result.messageId,
        destinatario: correo,
        timestamp: new Date().toISOString()
      };

    } catch (error) {
      console.error('❌ Error al enviar email de confirmación de equipo:', error);
      throw error;
    }
  }
}

module.exports = new EmailService();