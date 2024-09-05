import React, { useEffect, useState } from 'react';
import {
  Dialog, DialogActions, DialogContent, DialogTitle,
  TextField, Button, MenuItem, Select, FormControl, InputLabel,
  SelectChangeEvent
} from '@mui/material';
import { Doctor } from '../types/doctor';

interface DoctorEditModalProps {
  open: boolean;
  onClose: () => void;
  doctor: Doctor | null;  // Doctor será null cuando estemos agregando un nuevo doctor
  onSave: (updatedDoctor: Partial<Doctor>) => void;
}

const DoctorEditModal: React.FC<DoctorEditModalProps> = ({ open, onClose, doctor, onSave }) => {
  const [editDoctor, setEditDoctor] = useState<Partial<Doctor>>({
    firstName: '',
    lastName: '',
    speciality: '',
    email: '',
    phone: '',
    status: 'inactive',
  });

  // Este useEffect se activa cada vez que se abre el modal o cambia el doctor
  useEffect(() => {
    if (doctor) {
      setEditDoctor({
        firstName: doctor.firstName || '',
        lastName: doctor.lastName || '',
        speciality: doctor.speciality || '',
        email: doctor.email || '',
        phone: doctor.phone || '',
        status: doctor.status || 'inactive',
      });
    } else {
      // Cuando no hay doctor, inicializa los campos vacíos para agregar un nuevo doctor
      setEditDoctor({
        firstName: '',
        lastName: '',
        speciality: '',
        email: '',
        phone: '',
        status: 'inactive',
      });
    }
  }, [doctor]);

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    setEditDoctor({
      ...editDoctor,
      [name]: value,
    });
  };

  const handleStatusChange = (event: SelectChangeEvent) => {
    setEditDoctor({
      ...editDoctor,
      status: event.target.value as 'active' | 'inactive',
    });
  };

  const handleSave = () => {
    onSave(editDoctor);  // Envía los datos del doctor para guardar
  };

  return (
    <Dialog open={open} onClose={onClose}>
      <DialogTitle>{doctor ? 'Editar Doctor' : 'Agregar Doctor'}</DialogTitle>
      <DialogContent>
        <form>
          <TextField
            label="Nombre"
            name="firstName"
            value={editDoctor.firstName || ''}
            onChange={handleChange}
            fullWidth
            margin="normal"
          />
          <TextField
            label="Apellido"
            name="lastName"
            value={editDoctor.lastName || ''}
            onChange={handleChange}
            fullWidth
            margin="normal"
          />
          <TextField
            label="Especialidad"
            name="speciality"
            value={editDoctor.speciality || ''}
            onChange={handleChange}
            fullWidth
            margin="normal"
          />
          <TextField
            label="Correo Electrónico"
            name="email"
            value={editDoctor.email || ''}
            onChange={handleChange}
            fullWidth
            margin="normal"
          />
          <TextField
            label="Teléfono"
            name="phone"
            value={editDoctor.phone || ''}
            onChange={handleChange}
            fullWidth
            margin="normal"
          />
          <FormControl fullWidth margin="normal">
            <InputLabel>Estado</InputLabel>
            <Select
              name="status"
              value={editDoctor.status || 'inactive'}
              onChange={handleStatusChange}
              label="Estado"
            >
              <MenuItem value="active">Activo</MenuItem>
              <MenuItem value="inactive">Inactivo</MenuItem>
            </Select>
          </FormControl>
        </form>
      </DialogContent>
      <DialogActions>
        <Button onClick={onClose} color="primary">
          Cancelar
        </Button>
        <Button onClick={handleSave} color="primary">
          {doctor ? 'Guardar Cambios' : 'Agregar Doctor'}
        </Button>
      </DialogActions>
    </Dialog>
  );
};

export default DoctorEditModal