const API_URL = import.meta.env.VITE_API_URL;

export const api = {
  // GET request
  getUsers: async () => {
    try {
      const response = await fetch(`${API_URL}/api/users`);
      if (!response.ok) throw new Error('Failed to fetch users');
      return await response.json();
    } catch (error) {
      console.error('Error:', error);
      throw error;
    }
  },

  // POST request
  createUser: async (userData) => {
    try {
      const response = await fetch(`${API_URL}/api/users`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(userData),
      });
      if (!response.ok) throw new Error('Failed to create user');
      return await response.json();
    } catch (error) {
      console.error('Error:', error);
      throw error;
    }
  },

  // PUT request
  updateUser: async (id, userData) => {
    try {
      const response = await fetch(`${API_URL}/api/users/${id}`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(userData),
      });
      if (!response.ok) throw new Error('Failed to update user');
      return await response.json();
    } catch (error) {
      console.error('Error:', error);
      throw error;
    }
  },

  // DELETE request
  deleteUser: async (id) => {
    try {
      const response = await fetch(`${API_URL}/api/users/${id}`, {
        method: 'DELETE',
      });
      if (!response.ok) throw new Error('Failed to delete user');
      return await response.json();
    } catch (error) {
      console.error('Error:', error);
      throw error;
    }
  },
};