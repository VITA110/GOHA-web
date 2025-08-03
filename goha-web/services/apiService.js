// Configuración de la API
const API_BASE_URL = process.env.NODE_ENV === 'production' 
  ? 'https://tu-backend.vercel.app/api' 
  : 'http://localhost:3001/api';

// Función auxiliar para hacer peticiones
const apiRequest = async (endpoint, options = {}) => {
  try {
    const response = await fetch(`${API_BASE_URL}${endpoint}`, {
      headers: {
        'Content-Type': 'application/json',
        ...options.headers
      },
      ...options
    });

    const data = await response.json();

    if (!response.ok) {
      throw new Error(data.message || data.error || 'Error en la petición');
    }

    return data;
  } catch (error) {
    console.error('Error en API request:', error);
    throw error;
  }
};

// Servicios para cada formulario
export const contactService = {
  // Enviar formulario de contacto
  submit: async (formData) => {
    return await apiRequest('/contact', {
      method: 'POST',
      body: JSON.stringify(formData)
    });
  },

  // Probar endpoint de contacto
  test: async () => {
    return await apiRequest('/test/contact');
  }
};

export const supportService = {
  // Enviar formulario de soporte
  submit: async (formData) => {
    return await apiRequest('/support', {
      method: 'POST',
      body: JSON.stringify(formData)
    });
  },

  // Probar endpoint de soporte
  test: async () => {
    return await apiRequest('/test/support');
  }
};

export const equipmentService = {
  // Enviar formulario de equipo
  submit: async (formData) => {
    return await apiRequest('/equipment', {
      method: 'POST',
      body: JSON.stringify(formData)
    });
  },

  // Probar endpoint de equipo
  test: async () => {
    return await apiRequest('/test/equipment');
  }
};

// Servicio general de la API
export const apiService = {
  // Verificar salud de la API
  health: async () => {
    return await apiRequest('/health');
  },

  // Obtener información de todos los endpoints
  getEndpoints: async () => {
    return await apiRequest('');
  }
};

// Hook personalizado para React (opcional)
export const useApiSubmit = (service) => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [success, setSuccess] = useState(false);

  const submit = async (formData) => {
    setLoading(true);
    setError(null);
    setSuccess(false);

    try {
      const result = await service.submit(formData);
      setSuccess(true);
      return result;
    } catch (err) {
      setError(err.message);
      throw err;
    } finally {
      setLoading(false);
    }
  };

  return { submit, loading, error, success };
};

// Funciones de utilidad para integrar con los formularios existentes
export const createSubmitHandler = (service, onSuccess, onError) => {
  return async (formData) => {
    try {
      console.log('Enviando datos:', formData);
      const result = await service.submit(formData);
      console.log('Respuesta exitosa:', result);
      
      if (onSuccess) {
        onSuccess(result);
      }
      
      return result;
    } catch (error) {
      console.error('Error al enviar:', error);
      
      if (onError) {
        onError(error);
      }
      
      throw error;
    }
  };
};

// Exportar servicios individuales para fácil importación
export default {
  contact: contactService,
  support: supportService,
  equipment: equipmentService,
  api: apiService,
  createSubmitHandler,
  useApiSubmit
};