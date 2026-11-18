const API_BASE_URL = import.meta.env.VITE_API_URL || '';

/**
 * Submit contact form message to the Express + MongoDB backend
 * @param {Object} data - { name, email, subject, message }
 * @returns {Promise<Object>}
 */
export async function submitContactForm(data) {
  try {
    const response = await fetch(`${API_BASE_URL}/api/contact`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    });

    const result = await response.json();

    if (!response.ok) {
      // If validation error list is present
      if (result.errors && Array.isArray(result.errors)) {
        const errorDetails = result.errors.map((e) => e.message).join(' ');
        throw new Error(errorDetails || result.message || 'Validation failed');
      }
      throw new Error(result.message || `Server error (${response.status})`);
    }

    return result;
  } catch (error) {
    console.error('Contact submission error:', error);
    throw error;
  }
}

/**
 * Check backend health & database connectivity
 * @returns {Promise<Object>}
 */
export async function checkBackendHealth() {
  try {
    const controller = new AbortController();
    const timeoutId = setTimeout(() => controller.abort(), 4000);

    const response = await fetch(`${API_BASE_URL}/api/health`, {
      method: 'GET',
      signal: controller.signal,
    });
    clearTimeout(timeoutId);

    if (!response.ok) {
      return { online: false, message: `Status code ${response.status}` };
    }

    const data = await response.json();
    return {
      online: true,
      data,
    };
  } catch (error) {
    return {
      online: false,
      message: error.name === 'AbortError' ? 'Connection timed out' : error.message,
    };
  }
}
