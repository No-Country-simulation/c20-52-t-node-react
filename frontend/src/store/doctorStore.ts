// src/store/doctorStore.ts
import { create } from 'zustand';
import { getDoctors, deleteDoctor as deleteDoctorApi, updateDoctor as updateDoctorApi } from '../services/doctor.service';
import { Doctor } from '../types/doctor';

interface DoctorState {
  doctors: Doctor[];
  loading: boolean;
  error: string | null;
  fetchDoctors: () => Promise<void>;
  deleteDoctor: (id: string) => Promise<void>;
  updateDoctor: (id: string, doctorData: Partial<Doctor>) => Promise<void>;
}

export const useDoctorStore = create<DoctorState>((set) => ({
  doctors: [],
  loading: false,
  error: null,

  fetchDoctors: async () => {
    set({ loading: true });
    try {
      const doctors = await getDoctors();
      set({ doctors });
    } catch (error) {
      set({ error: 'Failed to fetch doctors' });
    } finally {
      set({ loading: false });
    }
  },

  deleteDoctor: async (id: string) => {
    set({ loading: true });
    try {
      await deleteDoctorApi(id);
      const doctors = await getDoctors(); // Refrescar la lista de doctores
      set({ doctors });
    } catch (error) {
      set({ error: 'Failed to delete doctor' });
    } finally {
      set({ loading: false });
    }
  },

  // La función updateDoctor
  updateDoctor: async (id: string, doctorData: Partial<Doctor>) => {
    set({ loading: true });
    try {
      await updateDoctorApi(id, doctorData); // Llamando al servicio correctamente
      const doctors = await getDoctors(); // Refresca la lista de doctores después de actualizar
      set({ doctors });
    } catch (error) {
      set({ error: 'Failed to update doctor' });
    } finally {
      set({ loading: false });
    }
  },
}));