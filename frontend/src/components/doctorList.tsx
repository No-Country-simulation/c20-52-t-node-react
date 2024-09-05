import React, { useEffect, useState } from 'react';
import {
  Table, TableBody, TableCell, TableContainer,
  TableHead, TableRow, Paper, IconButton, Fab
} from '@mui/material';
import { Edit, Delete } from '@mui/icons-material';
import AddIcon from '@mui/icons-material/Add';
import { useDoctorStore } from '../store/doctorStore';
import DoctorEditModal from './editModalDoctor';
import { Doctor } from '@/types/doctor';

const DoctorList: React.FC = () => {
  const { doctors, loading, error, fetchDoctors, deleteDoctor, updateDoctor } = useDoctorStore();
  const [open, setOpen] = useState(false);
  const [currentDoctor, setCurrentDoctor] = useState<Doctor | null>(null);

  useEffect(() => {
    fetchDoctors();
  }, [fetchDoctors]);

  const handleEditClick = (doctor: Doctor) => {
    setCurrentDoctor(doctor);
    setOpen(true);
  };

  const handleAddClick = () => {
    setCurrentDoctor(null);  
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
    setCurrentDoctor(null);
  };

  const handleSave = async (updatedDoctor: Partial<Doctor>) => {
    if (currentDoctor) {
      try {
        await updateDoctor(currentDoctor.id, updatedDoctor);
        handleClose();
      } catch (error) {
        console.error('Error updating doctor:', error);
      }
    } else {
      
      handleClose();
    }
  };

  const handleDelete = async (id: string) => {
    try {
      await deleteDoctor(id);
    } catch (error) {
      console.error('Error deleting doctor:', error);
    }
  };

  return (
    <>
      <TableContainer component={Paper}>
        <Table aria-label="Doctor List Table">
          <TableHead>
            <TableRow>
              <TableCell>Nombre</TableCell>
              <TableCell>Apellido</TableCell>
              <TableCell>Especialidad</TableCell>
              <TableCell>Correo Electrónico</TableCell>
              <TableCell>Teléfono</TableCell>
              <TableCell>Estado</TableCell>
              <TableCell>Inicio</TableCell>
              <TableCell>Acciones</TableCell>
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
                <TableCell>
                  <IconButton onClick={() => handleEditClick(doctor)}>
                    <Edit />
                  </IconButton>
                  <IconButton onClick={() => handleDelete(doctor.id)}>
                    <Delete />
                  </IconButton>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>

      {/* Botón flotante para agregar doctor */}
      <Fab
        color="primary"
        aria-label="add"
        onClick={handleAddClick}
        style={{ position: 'fixed', bottom: 16, right: 16 }} 
      >
        <AddIcon />
      </Fab>

      {/* Modal para agregar/editar doctor */}
      <DoctorEditModal
        open={open}
        onClose={handleClose}
        doctor={currentDoctor}
        onSave={handleSave}
      />
    </>
  );
};

export default DoctorList;