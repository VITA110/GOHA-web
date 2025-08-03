export default function handler(req, res) {
  // Solo permitir método GET
  if (req.method !== 'GET') {
    return res.status(405).json({
      success: false,
      message: 'Método no permitido. Use GET.'
    });
  }

  res.status(200).json({
    status: 'OK',
    timestamp: new Date().toISOString(),
    service: 'GOHA Web - Next.js API',
    version: '1.0.0',
    uptime: process.uptime(),
    environment: process.env.NODE_ENV || 'development',
    apis: {
      contacto: '/api/contacto/*',
      health: '/api/health'
    }
  });
}