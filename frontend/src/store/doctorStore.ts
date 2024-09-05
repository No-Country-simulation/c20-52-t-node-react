import { create } from 'zustand';
import { getDoctors } from '../services/doctor.service';
import { Doctor } from '../types/doctor';

interface DoctorState {
  doctors: Doctor[];
  loading: boolean;
  error: string | null;
  fetchDoctors: () => Promise<void>;
}

export const useDoctorStore = create<DoctorState>((set) => ({
  doctors: [],
  loading: false,
  error: null,
  
  fetchDoctors: async () => {
    set({ loading: true, error: null });
    try {
      const data = await getDoctors();
      set({ doctors: data, loading: false });
    } catch (error: any) {
      set({ error: 'Failed to fetch doctors', loading: false });
    }
  },
}));
