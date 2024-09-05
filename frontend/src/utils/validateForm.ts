import { FormErrors, UserForm } from "@/interfaces/formRegister.interface";

export const validateForm = (user: UserForm): FormErrors => {
  const errors: FormErrors = {};

  if (!user.firstName) {
    errors.firstName = "El nombre es obligatorio";
  } else if (user.firstName.length < 3) {
    errors.firstName = "El nombre debe tener al menos 3 caracteres";
  }

  if (!user.lastName) {
    errors.lastName = "El apellido es obligatorio";
  } else if (user.lastName.length < 3) {
    errors.firstName = "El apellido debe tener al menos 3 caracteres";
  }

  if (!user.age) {
    errors.age = "La edad es obligatoria";
  } else if (isNaN(Number(user.age)) || Number(user.age) <= 0) {
    errors.age = "La edad debe ser un número positivo";
  }

  if (!user.birthday) {
    errors.birthday = "La fecha de nacimiento es obligatoria";
  }

  if (!user.gender) {
    errors.gender = "El género es obligatorio";
  }

  if (!user.email) {
    errors.email = "El correo electrónico es obligatorio";
  } else if (!/\S+@\S+\.\S+/.test(user.email)) {
    errors.email = "El correo electrónico no es válido";
  }

  if (!user.password) {
    errors.password = "La contraseña es obligatoria";
  } else if (user.password.length < 6) {
    errors.password = "La contraseña debe tener al menos 6 caracteres";
  }

  if (user.password !== user.confirmPassword) {
    errors.confirmPassword = "Las contraseñas no coinciden";
  }

  return errors;
};
