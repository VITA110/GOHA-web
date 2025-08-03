import soporteController from '../../../backend/controllers/soporte.controller';

export default function handler(req, res) {
  // Solo permitir método GET
  if (req.method !== 'GET') {
    return res.status(405).json({
      success: false,
      message: 'Método no permitido. Use GET.'
    });
  }

  res.status(200).json({
    service: 'Soporte Técnico',
    status: 'Activo',
    timestamp: new Date().toISOString(),
    framework: 'Next.js API Routes',
    endpoints: {
      enviar: '/api/soporte/enviar',
      test: '/api/soporte/test',
      status: '/api/soporte/status'
    },
    tiposDisponibles: soporteController.getTiposSoporte(),
    environment: process.env.NODE_ENV || 'development'
  });
}