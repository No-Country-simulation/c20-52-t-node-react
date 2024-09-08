// pages/api/auth/register.ts
import type { NextApiRequest, NextApiResponse } from 'next';
import { registerUser } from '../../services/auth.service';

const registerHandler = async (req: NextApiRequest, res: NextApiResponse): Promise<void> => {
  if (req.method !== 'POST') {
    return res.status(405).json({ message: 'Método no permitido' });
  }

  try {
    const { username, email, password } = req.body;
    await registerUser({ username, email, password });
    res.status(201).json({ message: 'Usuario registrado correctamente' });
  } catch (error) {
    res.status(500).json({ message: 'Error al registrar el usuario' });
  }
};

export default registerHandler;
