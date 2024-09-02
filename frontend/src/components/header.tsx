import React, { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="bg-white shadow-md">
      <div className="container mx-auto p-4 flex flex-col md:flex-row items-center justify-between">
        {/* Logotipo */}
        <div className="flex items-center space-x-2 mb-4 md:mb-0">
          <Image
            src="/Dr+.png"
            alt="Logo"
            width={40}
            height={40}
            className="rounded-full object-cover"
          />
          <span className="text-xl font-bold text-gray-800">On Demand</span>
        </div>

        
        <button
          className="block md:hidden text-gray-600 focus:outline-none"
          onClick={toggleMenu}
        >
          <span className="sr-only">Abrir menú</span>
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M4 6h16M4 12h16M4 18h16"
            ></path>
          </svg>
        </button>

        
        {isMenuOpen && (
          <div className="fixed inset-0 bg-white z-50 p-6 flex flex-col space-y-4">
            <button
              className="self-end text-blue-700 text-xl"
              onClick={toggleMenu}
            >
              &times;
            </button>
            <p className="mb-4 text-center text-gray-600">
              Para iniciar sesión o registrarse, descargue nuestra aplicación.
            </p>
            <div className="flex flex-col items-start space-y-2 w-full">
              <Link
                href="/register"
                className="bg-blue-700 text-white py-2 px-4 rounded hover:bg-blue-800 w-full text-center"
              >
                Registrarse
              </Link>
              <Link
                href="/login"
                className="bg-blue-700 text-white py-2 px-4 rounded hover:bg-blue-800 w-full text-center"
              >
                Iniciar sesión
              </Link>
            </div>
            <nav className="flex flex-col mt-6 space-y-4">
              <Link href="/urgent-care" className="text-blue-700 flex items-center">
                Atención Urgente <span className="ml-auto">&#8250;</span>
              </Link>
              <Link href="/mental-health" className="text-blue-700 flex items-center">
                Salud Mental <span className="ml-auto">&#8250;</span>
              </Link>
              <Link href="/services" className="text-blue-700 flex items-center">
                Nosotros Tratamos <span className="ml-auto">&#8250;</span>
              </Link>
              <Link href="/about" className="text-blue-700 flex items-center">
                Sobre <span className="ml-auto">&#8250;</span>
              </Link>
            </nav>
          </div>
        )}

        
        <nav className="hidden md:flex flex-col md:flex-row items-center space-y-4 md:space-y-0 md:space-x-6">
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

        <div className="hidden md:flex items-center space-x-4">
          <Link
            href="/login"
            className="bg-blue-700 text-white py-2 px-4 rounded hover:bg-blue-800"
          >
            Iniciar sesión
          </Link>
          <Link
            href="/register"
            className="bg-blue-700 text-white py-2 px-4 rounded hover:bg-blue-800"
          >
            Registrarse
          </Link>
        </div>
      </div>
    </header>
  );
};

export default Header;
