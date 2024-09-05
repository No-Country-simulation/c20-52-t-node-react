import React, { useEffect, useState } from 'react';
import {
  Table, TableBody, TableCell, TableContainer,
  TableHead, TableRow, Paper
} from '@mui/material';
import { getDoctors } from '../services/doctor.service';
import { Doctor } from '../types/doctor';

const DoctorList: React.FC = () => {
  const [doctors, setDoctors] = useState<Doctor[]>([]);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    const fetchDoctors = async () => {
      try {
        const data = await getDoctors();
        console.log('Received doctors data:', data);  // Verifica los datos aquí
        setDoctors(data);
      } catch (error) {
        console.error('Error fetching doctors:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchDoctors();
  }, []);

  if (loading) {
    return <p>Loading...</p>;
  }

  if (!Array.isArray(doctors) || doctors.length === 0) {
    return <p>No data found</p>;
  }

  return (
    <TableContainer component={Paper}>
      <Table aria-label="Doctor List Table">
        <TableHead>
          <TableRow>
            <TableCell>First Name</TableCell>
            <TableCell>Last Name</TableCell>
            <TableCell>Speciality</TableCell>
            <TableCell>Email</TableCell>
            <TableCell>Phone</TableCell>
            <TableCell>Status</TableCell>
            <TableCell>Created At</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {doctors.map((doctor) => (
            <TableRow key={doctor.id}>
              <TableCell>{doctor.firstName}</TableCell>
              <TableCell>{doctor.lastName}</TableCell>
              <TableCell>{doctor.speciality}</TableCell>
              <TableCell>{doctor.email}</TableCell>
              <TableCell>{doctor.phone}</TableCell>
              <TableCell>{doctor.status}</TableCell>
              <TableCell>{new Date(doctor.createdAt).toLocaleDateString()}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default DoctorList;
