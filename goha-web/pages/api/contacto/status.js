export default function handler(req, res) {
  // Solo permitir método GET
  if (req.method !== 'GET') {
    return res.status(405).json({
      success: false,
      message: 'Método no permitido. Use GET.'
    });
  }

  res.status(200).json({
    service: 'Formulario de Contacto',
    status: 'Activo',
    timestamp: new Date().toISOString(),
    framework: 'Next.js API Routes',
    endpoints: {
      enviar: '/api/contacto/enviar',
      test: '/api/contacto/test',
      status: '/api/contacto/status'
    },
    environment: process.env.NODE_ENV || 'development'
  });
}