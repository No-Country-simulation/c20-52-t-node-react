// src/types/doctor.ts
export interface Doctor {
    id: string;
    firstName: string;
    lastName: string;
    age: number;
    email: string;
    password: string;
    birthday: Date;
    gender: string;
    role: 'doctor';
    speciality: string;
    license: string;
    phone: string;
    status: 'active' | 'inactive';
    createdAt: Date;
    appointments?: any[];      // Puedes definir tipos más específicos
    medicalRecords?: any[];    // según tu modelo de datos
  }
  