import soporteController from '../../../backend/controllers/soporte.controller';

export default async function handler(req, res) {
  // Solo permitir método POST
  if (req.method !== 'POST') {
    return res.status(405).json({
      success: false,
      message: 'Método no permitido. Use POST.'
    });
  }

  try {
    const { nombreEmpresa, correo, telefono, tipoSoporte, ubicacion, descripcion } = req.body;

    // Validaciones básicas
    if (!nombreEmpresa || !correo || !telefono || !tipoSoporte || !ubicacion || !descripcion) {
      return res.status(400).json({
        success: false,
        message: 'Todos los campos son requeridos',
        camposFaltantes: {
          nombreEmpresa: !nombreEmpresa,
          correo: !correo,
          telefono: !telefono,
          tipoSoporte: !tipoSoporte,
          ubicacion: !ubicacion,
          descripcion: !descripcion
        }
      });
    }

    // Validar formato de email
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(correo)) {
      return res.status(400).json({
        success: false,
        message: 'Formato de email inválido'
      });
    }

    // Validar longitud de campos
    if (nombreEmpresa.length < 2 || nombreEmpresa.length > 100) {
      return res.status(400).json({
        success: false,
        message: 'El nombre de la empresa debe tener entre 2 y 100 caracteres'
      });
    }

    if (descripcion.length < 10 || descripcion.length > 1000) {
      return res.status(400).json({
        success: false,
        message: 'La descripción debe tener entre 10 y 1000 caracteres'
      });
    }

    if (ubicacion.length < 5 || ubicacion.length > 200) {
      return res.status(400).json({
        success: false,
        message: 'La ubicación debe tener entre 5 y 200 caracteres'
      });
    }

    // Validar tipo de soporte
    const tiposValidos = soporteController.getTiposSoporte().map(tipo => tipo.value);
    if (!tiposValidos.includes(tipoSoporte)) {
      return res.status(400).json({
        success: false,
        message: 'Tipo de soporte no válido',
        tiposValidos: soporteController.getTiposSoporte()
      });
    }

    // Procesar formulario
    const result = await soporteController.procesarFormulario(req.body);
    
    res.status(200).json({
      success: true,
      message: 'Solicitud de soporte técnico enviada exitosamente',
      data: result
    });

  } catch (error) {
    console.error('Error en API /api/soporte/enviar:', error);
    
    res.status(500).json({
      success: false,
      message: 'Error interno del servidor',
      error: process.env.NODE_ENV !== 'production' ? error.message : undefined
    });
  }
}