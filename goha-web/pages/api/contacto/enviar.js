import { validationResult } from 'express-validator';
import contactoController from '../../../backend/controllers/contacto.controller';
import { validateContactoData } from '../../../backend/middleware/validation';

export default async function handler(req, res) {
  // Solo permitir método POST
  if (req.method !== 'POST') {
    return res.status(405).json({
      success: false,
      message: 'Método no permitido. Use POST.'
    });
  }

  try {
    // Validar datos manualmente (Next.js no usa express-validator directamente)
    const { nombreEmpresa, correo, telefono, motivoContacto, descripcion } = req.body;

    // Validaciones básicas
    if (!nombreEmpresa || !correo || !telefono || !motivoContacto || !descripcion) {
      return res.status(400).json({
        success: false,
        message: 'Todos los campos son requeridos',
        camposFaltantes: {
          nombreEmpresa: !nombreEmpresa,
          correo: !correo,
          telefono: !telefono,
          motivoContacto: !motivoContacto,
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

    // Procesar formulario
    const result = await contactoController.procesarFormulario(req.body);
    
    res.status(200).json({
      success: true,
      message: 'Formulario de contacto enviado exitosamente',
      data: result
    });

  } catch (error) {
    console.error('Error en API /api/contacto/enviar:', error);
    
    res.status(500).json({
      success: false,
      message: 'Error interno del servidor',
      error: process.env.NODE_ENV !== 'production' ? error.message : undefined
    });
  }
}