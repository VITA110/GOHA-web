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
        message: 'Todos los campos son requeridos para la prueba',
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

    // Validar tipo de soporte
    const tiposValidos = soporteController.getTiposSoporte().map(tipo => tipo.value);
    if (!tiposValidos.includes(tipoSoporte)) {
      return res.status(400).json({
        success: false,
        message: 'Tipo de soporte no válido para prueba',
        tiposValidos: soporteController.getTiposSoporte()
      });
    }

    // Procesar en modo test
    const result = await soporteController.procesarFormularioTest(req.body);
    
    res.status(200).json({
      success: true,
      message: 'Prueba de solicitud de soporte exitosa (no se envió email)',
      data: result,
      test: true
    });

  } catch (error) {
    console.error('Error en API /api/soporte/test:', error);
    
    res.status(500).json({
      success: false,
      message: 'Error en prueba de soporte',
      error: process.env.NODE_ENV !== 'production' ? error.message : undefined
    });
  }
}