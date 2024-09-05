// pages/doctor/index.tsx
import React from 'react';
import { Container, Typography } from '@mui/material';
import DoctorList from '../../components/doctorList';

const DoctorPage: React.FC = () => {
  return (
    <Container>
      <Typography variant="h4" gutterBottom>
        Lista de Doctores
      </Typography>
      <DoctorList />
    </Container>
  );
};

export default DoctorPage;
