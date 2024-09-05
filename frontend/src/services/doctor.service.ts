// src/services/doctorService.ts
import apiClient from './apiClient';
import { Doctor } from '../types/doctor';


export const getDoctors = async (): Promise<Doctor[]> => {
    const response = await apiClient.get<Doctor[]>('/doctor');
    return response.data;
  };


export const getDoctorById = async (id: string): Promise<Doctor> => {
  const response = await apiClient.get<Doctor>(`/doctors/${id}`);
  return response.data;
};

// Crear un nuevo doctor
export const createDoctor = async (doctorData: Partial<Doctor>): Promise<Doctor> => {
  const response = await apiClient.post<Doctor>('/doctors', doctorData);
  return response.data;
};

// Actualizar un doctor existente
export const updateDoctor = async (id: string, doctorData: Partial<Doctor>): Promise<Doctor> => {
  const response = await apiClient.put<Doctor>(`/doctors/${id}`, doctorData);
  return response.data;
};

// Eliminar un doctor
export const deleteDoctor = async (id: string): Promise<void> => {
  await apiClient.delete(`/doctors/${id}`);
};
