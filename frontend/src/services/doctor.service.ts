// src/services/doctorService.ts
import apiClient from './apiClient';
import { Doctor } from '../types/doctor';


export const getDoctors = async (): Promise<Doctor[]> => {
    const response = await apiClient.get<Doctor[]>('/doctor');
    return response.data;
  };


export const getDoctorById = async (id: string): Promise<Doctor> => {
  const response = await apiClient.get<Doctor>(`/doctor/${id}`);
  return response.data;
};


export const createDoctor = async (doctorData: Partial<Doctor>): Promise<Doctor> => {
  const response = await apiClient.post<Doctor>('/doctor', doctorData);
  return response.data;
};


export const updateDoctor = async (id: string, doctorData: Partial<Doctor>): Promise<Doctor> => {
  const response = await apiClient.patch<Doctor>(`/doctor/${id}`, doctorData);
  return response.data;
};


export const deleteDoctor = async (id: string): Promise<void> => {
  await apiClient.delete(`/doctor/${id}`);
};
