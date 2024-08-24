import React from 'react';
import Link from 'next/link';
import Image from 'next/image';

const Header = () => {
  return (
    <header className="bg-white shadow-md">
      <div className="container mx-auto flex flex-wrap items-center justify-between p-4">
        {/* Logotipo */}
        <div className="flex items-center space-x-2">
          <Image
            src="/logo.png" // Reemplaza con la ruta de tu logo
            alt="Logo"
            width={40}
            height={40}
          />
          <span className="text-xl font-bold text-gray-800">On Demand</span>
        </div>

        {/* Menú de navegación */}
        <nav className="hidden md:flex space-x-6">
          <div className="relative group">
            <button className="text-gray-600 font-medium">
              Atención Urgente <span>&#x25BC;</span>
            </button>
            <div className="absolute hidden group-hover:block bg-white shadow-md mt-2 p-2 space-y-2">
              <Link href="/urgent-care" className="block text-gray-700">
                Opción 1
              </Link>
              <Link href="/urgent-care" className="block text-gray-700">
                Opción 2
              </Link>
            </div>
          </div>
          <div className="relative group">
            <button className="text-gray-600 font-medium">
              Salud Mental <span>&#x25BC;</span>
            </button>
            <div className="absolute hidden group-hover:block bg-white shadow-md mt-2 p-2 space-y-2">
              <Link href="/mental-health" className="block text-gray-700">
                Opción 1
              </Link>
              <Link href="/mental-health" className="block text-gray-700">
                Opción 2
              </Link>
            </div>
          </div>
          <div className="relative group">
            <button className="text-gray-600 font-medium">
              Nosotros Tratamos <span>&#x25BC;</span>
            </button>
            <div className="absolute hidden group-hover:block bg-white shadow-md mt-2 p-2 space-y-2">
              <Link href="/services" className="block text-gray-700">
                Opción 1
              </Link>
              <Link href="/services" className="block text-gray-700">
                Opción 2
              </Link>
            </div>
          </div>
        </nav>

        {/* Botones de Iniciar sesión y Registrarse */}
        <div className="flex items-center space-x-4 mt-4 md:mt-0">
          <Link href="/login" className="text-gray-600 font-medium">
            Iniciar sesión
          </Link>
          <Link href="/register" className="bg-blue-700 text-white py-2 px-4 rounded hover:bg-blue-800">
            Registrarse
          </Link>
        </div>

        {/* Menú hamburguesa para móviles */}
        <button className="block md:hidden text-gray-600 focus:outline-none">
          <span className="sr-only">Abrir menú</span>
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path>
          </svg>
        </button>
      </div>
    </header>
  );
};

export default Header;
