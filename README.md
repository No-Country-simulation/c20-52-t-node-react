# eDoctor Telemedicina

eDoctor es una plataforma de telemedicina diseñada para ofrecer atención médica virtual a través de consultas en línea con profesionales de la salud. El objetivo es proporcionar acceso conveniente y rápido a servicios médicos, incluyendo atención urgente, salud mental, y consultas regulares.

## Tabla de Contenidos

- [Descripción](#descripción)
- [Características](#características)
- [Instalación](#instalación)
- [Uso](#uso)
- [Tecnologías Utilizadas](#tecnologías-utilizadas)
- [Contribuciones](#contribuciones)
- [Licencia](#licencia)

## Descripción

La plataforma eDoctor permite a los usuarios conectarse con médicos en línea disponibles las 24 horas del día, los 7 días de la semana. Los usuarios pueden agendar citas, realizar consultas urgentes, recibir atención en salud mental, y mucho más, todo desde la comodidad de su hogar.

## Características

- **Consultas en Línea:** Acceso a consultas médicas virtuales.
- **Atención Urgente:** Servicios de atención urgente disponibles 24/7.
- **Salud Mental:** Acceso a servicios de terapia y psiquiatría en línea.
- **Gestión de Citas:** Agendar, cancelar o reprogramar citas fácilmente.
- **Recetas Médicas:** Renovación y solicitud de recetas en línea.
- **Panel de Administración:** Panel para gestionar usuarios, médicos y citas.

## Instalación

Para instalar y correr el proyecto localmente, sigue los siguientes pasos:

1. **Clona el repositorio:**

    ```bash
    git clone https://github.com/No-Country-simulation/c20-52-t-node-react.git
    ```

2. **Navega al directorio del proyecto:**

    ```bash
    cd api/frontend
    ```

3. **Instala las dependencias:**

    ```bash
    npm install(backend) yarn install(frontend) 
    ```

4. **Configura las variables de entorno:**

   Crea un archivo `.env` en la raíz del proyecto y configura las variables necesarias, como la URL de la base de datos y las claves de API.

5. **Ejecuta la aplicación en modo desarrollo:**

    ```bash
    yarn dev
    ```

6. **Construir la aplicación para producción:**

    ```bash
    yarn build
    ```

7. **Iniciar la aplicación:**

    ```bash
    yarn start
    ```

## Uso

Una vez ejecutada la aplicación, puedes acceder a la plataforma desde tu navegador en `http://localhost:3000`. Regístrate como usuario o inicia sesión para explorar las funcionalidades de la plataforma.

## Tecnologías Utilizadas

- **Frontend:** Next.js, React, Tailwind CSS, Zustand, Material UI
- **Backend:** Nestjs, Express,Ts,Prisma
- **Base de Datos:** Postrgres
- **Autenticación:** NextAuth
- **Despliegue:** Vercel(front) Render(backend)

## Contribuciones

¡Las contribuciones son bienvenidas! Para contribuir, por favor sigue estos pasos:

1. Haz un fork del repositorio.
2. Crea una nueva rama (`git checkout -b feature/nueva-caracteristica`).
3. Realiza los cambios necesarios y haz commit (`git commit -m 'feat: nueva característica'`).
4. Envía los cambios a tu repositorio (`git push origin feature/nueva-caracteristica`).
5. Abre un Pull Request.

## Licencia

Este proyecto está bajo la Licencia MIT - consulta el archivo [LICENSE](LICENSE) para más detalles.
