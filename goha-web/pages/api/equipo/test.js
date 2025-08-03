import equipoController from '../../../backend/controllers/equipo.controller';

export default async function handler(req, res) {
  // Solo permitir método POST
  if (req.method !== 'POST') {
    return res.status(405).json({
      success: false,
      message: 'Método no permitido. Use POST.'
    });
  }

  try {
    const { nombreEmpresa, correo, telefono, tipoEquipo, ubicacion, descripcion } = req.body;

    // Validaciones básicas
    if (!nombreEmpresa || !correo || !telefono || !tipoEquipo || !ubicacion || !descripcion) {
      return res.status(400).json({
        success: false,
        message: 'Todos los campos son requeridos para la prueba',
        camposFaltantes: {
          nombreEmpresa: !nombreEmpresa,
          correo: !correo,
          telefono: !telefono,
          tipoEquipo: !tipoEquipo,
          ubicacion: !ubicacion,
          descripcion: !descripcion
        }
      });
    }

    // Validar tipo de equipo
    const tiposValidos = equipoController.getTiposEquipo().map(tipo => tipo.value);
    if (!tiposValidos.includes(tipoEquipo)) {
      return res.status(400).json({
        success: false,
        message: 'Tipo de equipo no válido para prueba',
        tiposValidos: equipoController.getTiposEquipo()
      });
    }

    // Procesar en modo test
    const result = await equipoController.procesarFormularioTest(req.body);
    
    res.status(200).json({
      success: true,
      message: 'Prueba de solicitud de equipo exitosa (no se envió email)',
      data: result,
      test: true
    });

  } catch (error) {
    console.error('Error en API /api/equipo/test:', error);
    
    res.status(500).json({
      success: false,
      message: 'Error en prueba de equipo',
      error: process.env.NODE_ENV !== 'production' ? error.message : undefined
    });
  }
}