
import { registerForm } from "@/actions/registerForm";
import RegisterForm from "@/components/usuario/RegisterForm";
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
      <RegisterForm/>
    </div>
  );
}
