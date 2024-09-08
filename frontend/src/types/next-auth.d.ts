// next-auth.d.ts
import NextAuth from "next-auth";

declare module "next-auth" {
  interface Session {
    user: {
      id: string; // Agrega aquí las propiedades adicionales que necesitas
      name?: string | null;
      email?: string | null;
      image?: string | null;
    };
  }
  
  interface User {
    id: string; // Asegura que el ID esté presente en el usuario
  }
}
