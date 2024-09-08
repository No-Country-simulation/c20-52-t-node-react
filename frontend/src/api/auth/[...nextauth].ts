import NextAuth from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";

export default NextAuth({
  providers: [
    CredentialsProvider({
      name: "Credentials",
      credentials: {
        username: { label: "Username", type: "text" },
        password: { label: "Password", type: "password" },
      },
      async authorize(credentials) {
        // Lógica de autenticación
        const user = { id: "1", name: "Admin", email: "admin@example.com" };

        if (
          credentials?.username === "admin" &&
          credentials?.password === "password"
        ) {
          return user; 
        }

        return null; 
      },
    }),
  ],
  pages: {
    signIn: "/auth/signin", 
  },
  callbacks: {
    async session({ session, token }) {
     
      if (session.user) {
        session.user.id = token.id as string;
      }
      return session;
    },
    async jwt({ token, user }) {
      if (user) {
        token.id = user.id;
      }
      return token;
    },
  },
  secret: process.env.NEXTAUTH_SECRET,
  session: {
    strategy: "jwt",
  },
});
