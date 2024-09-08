// src/services/auth.service.ts
import apiClient from './apiClient';

interface RegisterUserParams {
  username: string;
  email: string;
  password: string;
}

export const registerUser = async (userData: RegisterUserParams) => {
  try {
    const response = await apiClient.post('/auth/register', userData);
    return response.data;
  } catch (error) {
    console.error('Error registering user:', error);
    throw error;
  }
};
