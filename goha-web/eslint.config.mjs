/** @type {import('next').NextConfig} */
const nextConfig = {
  // Configuración para APIs
  api: {
    bodyParser: {
      sizeLimit: '1mb',
    },
    responseLimit: '8mb',
  },
  
  // Variables de entorno públicas (opcional)
  env: {
    CUSTOM_KEY: process.env.CUSTOM_KEY,
  },
  
  // Headers de seguridad
  async headers() {
    return [
      {
        source: '/api/:path*',
        headers: [
          {
            key: 'Access-Control-Allow-Origin',
            value: '*',
          },
          {
            key: 'Access-Control-Allow-Methods',
            value: 'GET, POST, PUT, DELETE, OPTIONS',
          },
          {
            key: 'Access-Control-Allow-Headers',
            value: 'Content-Type, Authorization',
          },
        ],
      },
    ];
  },
};

export default nextConfig;