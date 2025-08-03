import contactoController from '../../../backend/controllers/contacto.controller';

export default async function handler(req, res) {
  // Solo permitir método POST
  if (req.method !== 'POST') {
    return res.status(405).json({
      success: false,
      message: 'Método no permitido. Use POST.'
    });
  }

  try {
    // Validaciones básicas
    const { nombreEmpresa, correo, telefono, motivoContacto, descripcion } = req.body;

    if (!nombreEmpresa || !correo || !telefono || !motivoContacto || !descripcion) {
      return res.status(400).json({
        success: false,
        message: 'Todos los campos son requeridos para la prueba',
        camposFaltantes: {
          nombreEmpresa: !nombreEmpresa,
          correo: !correo,
          telefono: !telefono,
          motivoContacto: !motivoContacto,
          descripcion: !descripcion
        }
      });
    }

    // Procesar en modo test
    const result = await contactoController.procesarFormularioTest(req.body);
    
    res.status(200).json({
      success: true,
      message: 'Prueba de formulario de contacto exitosa (no se envió email)',
      data: result,
      test: true
    });

  } catch (error) {
    console.error('Error en API /api/contacto/test:', error);
    
    res.status(500).json({
      success: false,
      message: 'Error en prueba de formulario',
      error: process.env.NODE_ENV !== 'production' ? error.message : undefined
    });
  }
}