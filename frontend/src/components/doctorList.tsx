import React, { useEffect } from 'react';
import {
  Table, TableBody, TableCell, TableContainer,
  TableHead, TableRow, Paper
} from '@mui/material';
import { useDoctorStore } from '../store/doctorStore';

const DoctorList: React.FC = () => {
  const { doctors, loading, error, fetchDoctors } = useDoctorStore();

  useEffect(() => {
    fetchDoctors();
  }, [fetchDoctors]);

  if (loading) {
    return <p>Loading...</p>;
  }

  if (error) {
    return <p>{error}</p>;
  }

  if (!doctors.length) {
    return <p>No doctors found</p>;
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
            <TableCell>Inicio</TableCell>
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
