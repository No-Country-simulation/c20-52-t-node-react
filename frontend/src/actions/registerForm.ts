import { UserForm } from "@/interfaces/formRegister.interface";

export const registerForm = async (
  user: UserForm
): Promise<{ success: boolean; message: string }> => {
  try {
    const response = await fetch("/api/register", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(user),
    });

    if (response.ok) {
      return { success: true, message: "Registro exitoso" };
    } else {
      const errorData = await response.json();
      return {
        success: false,
        message: errorData.message || "Error en el registro. Intente de nuevo.",
      };
    }
  } catch (error) {
    console.error("Error en el registro:", error);
    return {
      success: false,
      message: "Error en el registro. Intente de nuevo.",
    };
  }
};
