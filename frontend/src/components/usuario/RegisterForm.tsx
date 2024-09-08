
import Image from 'next/image';
import React, { useState } from 'react';
import {
  Box,
  Button,
  Checkbox,
  FormControlLabel,
  IconButton,
  InputAdornment,
  TextField,
  Typography,
} from '@mui/material';
import { Visibility, VisibilityOff } from '@mui/icons-material';

const RegisterForm = () => {
  const [showPassword, setShowPassword] = useState(false);

  const handleClickShowPassword = () => {
    setShowPassword(!showPassword);
  };

  return (
    <Box display="flex" justifyContent="center" alignItems="center" height="100vh" bgcolor="#f3f4f6">
      <Box display="flex" boxShadow={3} bgcolor="white" borderRadius={2} overflow="hidden">
        {/* Sección de Imagen */}
        <Box display={{ xs: 'none', md: 'flex' }} width="50%">
          <Image
            src="/imagen6.png"
            width={500}
            height={500}
            alt="Videollamada en portátil"
            style={{ objectFit: 'cover', height: '100%', width: '100%' }}
          />
        </Box>

        {/* Sección del Formulario */}
        <Box width={{ xs: '100%', md: '50%' }} p={4}>
          <Typography variant="h5" fontWeight="bold" marginBottom={2}>
            Únete a Doctor On Demand
          </Typography>
          <Typography variant="body2" color="textSecondary" marginBottom={3}>
            Obtén acceso a expertos médicos y de salud mental las 24 horas del día, los 365 días del año.
          </Typography>
          <form>
            <TextField
              type="email"
              label="Correo electrónico"
              variant="outlined"
              fullWidth
              margin="normal"
            />
            <TextField
              type="date"
              label="Fecha de nacimiento"
              variant="outlined"
              fullWidth
              margin="normal"
              InputLabelProps={{
                shrink: true,
              }}
            />
            <TextField
              type={showPassword ? 'text' : 'password'}
              label="Contraseña"
              variant="outlined"
              fullWidth
              margin="normal"
              InputProps={{
                endAdornment: (
                  <InputAdornment position="end">
                    <IconButton onClick={handleClickShowPassword} edge="end">
                      {showPassword ? <VisibilityOff /> : <Visibility />}
                    </IconButton>
                  </InputAdornment>
                ),
              }}
            />
            <FormControlLabel
              control={<Checkbox />}
              label="Acepto los términos de membresía de Doctor On Demand"
              sx={{ color: 'text.secondary', marginBottom: 2 }}
            />
            <Button
              variant="contained"
              color="primary"
              fullWidth
              sx={{ paddingY: 1.5 }}
            >
              Crear cuenta
            </Button>
          </form>
          <Typography variant="body2" color="textSecondary" marginTop={2}>
            ¿Ya tienes una cuenta?{' '}
            <a href="#" style={{ color: '#1976d2' }}>
              Inicia sesión
            </a>
          </Typography>
        </Box>
      </Box>
    </Box>
  );
};

export default RegisterForm;
