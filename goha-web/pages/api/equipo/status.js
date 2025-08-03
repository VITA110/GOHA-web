import equipoController from '../../../backend/controllers/equipo.controller';

export default function handler(req, res) {
  // Solo permitir método GET
  if (req.method !== 'GET') {
    return res.status(405).json({
      success: false,
      message: 'Método no permitido. Use GET.'
    });
  }

  res.status(200).json({
    service: 'Solicitud de Equipo',
    status: 'Activo',
    timestamp: new Date().toISOString(),
    framework: 'Next.js API Routes',
    endpoints: {
      enviar: '/api/equipo/enviar',
      test: '/api/equipo/test',
      status: '/api/equipo/status'
    },
    tiposDisponibles: equipoController.getTiposEquipo(),
    environment: process.env.NODE_ENV || 'development'
  });
}