// src/components/Footer.tsx
import Image from 'next/image';
import React from 'react';
import { FaInstagram, FaYoutube, FaEnvelope, FaPhone, FaWhatsapp } from 'react-icons/fa';

const Footer: React.FC = () => {
  return (
    <footer className="bg-blue-900 py-6">
      <div className="container mx-auto px-4 text-white">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="flex items-center mb-4 md:mb-0">
            <Image src="/Dr+.png" alt="IAPOS Logo" width={150} height={200} className="h-12 mr-4 rounded-full object-cover" />
            <p>Desarrollado Por On Demand</p>
          </div>
          <div className="flex flex-col md:flex-row md:space-x-8 text-center md:text-left">
            <div className="mb-4 md:mb-0">
              <p className="font-bold">CONSULTAS DE COBERTURAS Y AFILIACIONES</p>
              <p className="mt-2"><FaPhone className="inline mr-2" /> 0800 444 4276 Días hábiles de 8 a 14 HS</p>
              <p className="mt-2"><FaEnvelope className="inline mr-2" />drondemand@app.com</p>
            </div>
            <div>
              <p className="font-bold">CONSULTAS DE MEDICAMENTOS</p>
              <p className="mt-2"><FaPhone className="inline mr-2" /> 0810 222 4276 Días hábiles de 8 a 17 HS</p>
              <p className="mt-2"><FaWhatsapp className="inline mr-2" /> 0342 559 4737</p>
            </div>
          </div>
          <div className="flex space-x-4 mt-4 md:mt-0">
            <FaInstagram className="h-6 w-6" />
            <FaYoutube className="h-6 w-6" />
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
