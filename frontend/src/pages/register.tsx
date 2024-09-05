// pages/register.tsx
import { registerForm } from "@/actions/registerForm";
import { FormErrors, UserForm } from "@/interfaces/formRegister.interface";
import { validateForm } from "@/utils/validateForm";
import { useState, FormEvent } from "react";

export const metadata = {
  title: "Registrarse",
  description: "Formulario de registro",
};

export default function RegisterPage() {
  const [formErrors, setFormErrors] = useState<FormErrors>({});
  const [formSuccess, setFormSuccess] = useState<string | null>(null);

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const formData = new FormData(event.currentTarget);

    const user: UserForm = {
      firstName: formData.get("firstName") as string,
      lastName: formData.get("lastName") as string,
      age: formData.get("age") as string,
      birthday: formData.get("birthday") as string,
      gender: formData.get("gender") as string,
      email: formData.get("email") as string,
      password: formData.get("password") as string,
      confirmPassword: formData.get("confirmPassword") as string,
    };

    const errors = validateForm(user);
    setFormErrors(errors);

    if (Object.keys(errors).length > 0) {
      return;
    }

    const result = await registerForm(user);
    setFormSuccess(result.message);
  };

  return (
    <div>
      <h1>Registrarse</h1>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="firstName">Nombre:</label>
          <input type="text" id="firstName" name="firstName" />
          {formErrors.firstName && (
            <p style={{ color: "red" }}>{formErrors.firstName}</p>
          )}
        </div>

        <div>
          <label htmlFor="lastName">Apellido:</label>
          <input type="text" id="lastName" name="lastName" />
          {formErrors.lastName && (
            <p style={{ color: "red" }}>{formErrors.lastName}</p>
          )}
        </div>

        <div>
          <label htmlFor="age">Edad:</label>
          <input type="text" id="age" name="age" />
          {formErrors.age && <p style={{ color: "red" }}>{formErrors.age}</p>}
        </div>

        <div>
          <label htmlFor="birthday">Fecha de Nacimiento:</label>
          <input type="date" id="birthday" name="birthday" />
          {formErrors.birthday && (
            <p style={{ color: "red" }}>{formErrors.birthday}</p>
          )}
        </div>

        <div>
          <label htmlFor="gender">Género:</label>
          <select id="gender" name="gender">
            <option value="">Seleccione</option>
            <option value="male">Masculino</option>
            <option value="female">Femenino</option>
            <option value="other">Otro</option>
          </select>
          {formErrors.gender && (
            <p style={{ color: "red" }}>{formErrors.gender}</p>
          )}
        </div>

        <div>
          <label htmlFor="email">Correo Electrónico:</label>
          <input type="email" id="email" name="email" />
          {formErrors.email && (
            <p style={{ color: "red" }}>{formErrors.email}</p>
          )}
        </div>

        <div>
          <label htmlFor="password">Contraseña:</label>
          <input type="password" id="password" name="password" />
          {formErrors.password && (
            <p style={{ color: "red" }}>{formErrors.password}</p>
          )}
        </div>

        <div>
          <label htmlFor="confirmPassword">Confirmar Contraseña:</label>
          <input type="password" id="confirmPassword" name="confirmPassword" />
          {formErrors.confirmPassword && (
            <p style={{ color: "red" }}>{formErrors.confirmPassword}</p>
          )}
        </div>

        <button type="submit">Registrarse</button>
      </form>
      {formSuccess && (
        <p style={{ color: formSuccess.includes("exitoso") ? "green" : "red" }}>
          {formSuccess}
        </p>
      )}
    </div>
  );
}
