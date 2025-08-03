const { body } = require('express-validator');

/**
 * Validaciones para el formulario de contacto
 */
const validateContactoForm = [
  body('nombreEmpresa')
    .notEmpty()
    .withMessage('El nombre de la empresa es requerido')
    .isLength({ min: 2, max: 100 })
    .withMessage('El nombre de la empresa debe tener entre 2 y 100 caracteres')
    .trim()
    .escape(),

  body('correo')
    .notEmpty()
    .withMessage('El correo electrónico es requerido')
    .isEmail()
    .withMessage('Debe proporcionar un correo electrónico válido')
    .normalizeEmail()
    .isLength({ max: 100 })
    .withMessage('El correo no puede exceder 100 caracteres'),

  body('telefono')
    .notEmpty()
    .withMessage('El teléfono es requerido')
    .matches(/^[\d\s\-\+\(\)]{7,20}$/)
    .withMessage('El teléfono debe contener entre 7 y 20 dígitos y puede incluir espacios, guiones y paréntesis')
    .trim(),

  body('motivoContacto')
    .notEmpty()
    .withMessage('El motivo del contacto es requerido')
    .isLength({ min: 5, max: 200 })
    .withMessage('El motivo del contacto debe tener entre 5 y 200 caracteres')
    .trim()
    .escape(),

  body('descripcion')
    .notEmpty()
    .withMessage('La descripción del problema es requerida')
    .isLength({ min: 10, max: 1000 })
    .withMessage('La descripción debe tener entre 10 y 1000 caracteres')
    .trim()
    .escape()
];

/**
 * Middleware para validar headers de contenido
 */
const validateContentType = (req, res, next) => {
  if (!req.is('application/json')) {
    return res.status(400).json({
      success: false,
      message: 'Content-Type debe ser application/json'
    });
  }
  next();
};

/**
 * Middleware para sanitizar datos de entrada
 */
const sanitizeInput = (req, res, next) => {
  if (req.body) {
    // Eliminar campos vacíos o solo con espacios
    Object.keys(req.body).forEach(key => {
      if (typeof req.body[key] === 'string') {
        req.body[key] = req.body[key].trim();
        if (req.body[key] === '') {
          delete req.body[key];
        }
      }
    });

    // Limitar el tamaño del objeto
    const maxFields = 10;
    if (Object.keys(req.body).length > maxFields) {
      return res.status(400).json({
        success: false,
        message: `Demasiados campos en el formulario. Máximo permitido: ${maxFields}`
      });
    }
  }
  next();
};

/**
 * Middleware de rate limiting simple (para producción usar redis)
 */
const rateLimiter = (() => {
  const requests = new Map();
  const windowMs = 15 * 60 * 1000; // 15 minutos
  const maxRequests = 5; // máximo 5 requests por IP en 15 minutos

  return (req, res, next) => {
    const ip = req.ip || req.connection.remoteAddress;
    const now = Date.now();
    
    if (!requests.has(ip)) {
      requests.set(ip, []);
    }

    const userRequests = requests.get(ip);
    
    // Limpiar requests antiguos
    const validRequests = userRequests.filter(time => now - time < windowMs);
    requests.set(ip, validRequests);

    if (validRequests.length >= maxRequests) {
      return res.status(429).json({
        success: false,
        message: 'Demasiadas solicitudes. Intenta nuevamente en unos minutos.',
        retryAfter: Math.ceil(windowMs / 1000)
      });
    }

    validRequests.push(now);
    requests.set(ip, validRequests);
    
    next();
  };
})();

/**
 * Middleware para logging de requests
 */
const logRequest = (req, res, next) => {
  const timestamp = new Date().toISOString();
  const ip = req.ip || req.connection.remoteAddress;
  
  console.log(`📝 [${timestamp}] ${req.method} ${req.originalUrl} - IP: ${ip}`);
  
  if (req.body && Object.keys(req.body).length > 0) {
    console.log('📋 Datos recibidos:', {
      nombreEmpresa: req.body.nombreEmpresa || 'N/A',
      correo: req.body.correo || 'N/A',
      motivoContacto: req.body.motivoContacto || 'N/A'
    });
  }
  
  next();
};

module.exports = {
  validateContactoForm,
  validateContentType,
  sanitizeInput,
  rateLimiter,
  logRequest
};