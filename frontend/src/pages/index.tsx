import React from 'react';
import Image from 'next/image';
import Header from '@/components/header';

const Home = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <div className="flex flex-col lg:flex-row flex-1">
        {/* Sección de la izquierda con la imagen */}
        <div className="w-full lg:w-1/2 flex items-center justify-center bg-gray-100 p-8">
          <Image
            src="/image1.jpg"
            alt="Videollamada"
            width={500}
            height={600}
            className="rounded-lg shadow-lg"
          />
        </div>

        {/* Sección de la derecha con el texto */}
        <div className="w-full lg:w-1/2 bg-blue-900 text-white flex flex-col justify-center p-8">
          <h1 className="text-3xl sm:text-4xl font-bold mb-4">
            Médicos en línea disponibles 24/7.
          </h1>
          <p className="text-lg mb-4">
            Obtenga atención virtual conveniente que incluya atención diaria, urgente y de salud mental.
            Su visita puede costarle $0 dependiendo de su seguro.
          </p>
          <ul className="list-disc list-inside space-y-2 mb-6">
            <li><a href="#" className="text-blue-300 underline">resfriado y gripe</a></li>
            <li><a href="#" className="text-blue-300 underline">atención urgente</a></li>
            <li><a href="#" className="text-blue-300 underline">terapia en línea</a></li>
            <li><a href="#" className="text-blue-300 underline">psiquiatría en línea</a></li>
            <li><a href="#" className="text-blue-300 underline">recambios de recetas</a></li>
            <li><a href="#" className="text-blue-300 underline">y más</a></li>
          </ul>

          {/* Botones de Empezar y Cómo Funciona */}
          <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4">
            <a href="#empezar" className="bg-white text-blue-900 font-bold py-2 px-4 rounded hover:bg-gray-200">
              Empezar
            </a>
            <a href="#como-funciona" className="bg-transparent border border-white text-white font-bold py-2 px-4 rounded hover:bg-white hover:text-blue-900">
              Cómo Funciona
            </a>
          </div>
        </div>
      </div>

      {/* Segunda Sección */}
      <section className="bg-gray-50 py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl sm:text-4xl font-bold text-center text-blue-900 mb-8">
            Citas de telesalud para atención urgente en línea y salud mental
          </h2>
          <p className="text-center text-lg text-gray-700 mb-12">
            Doctor On Demand ofrece atención urgente y diaria 24/7 donde quiera que esté.
            Póngase en contacto con un terapeuta o psiquiatra superior para sus visitas de salud mental.
            <a href="#" className="text-blue-600 underline"> Aceptamos la mayoría de los seguros</a>, lo que significa que su visita podría ser gratuita.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-lg shadow">
              <h3 className="text-xl font-bold text-gray-800 mb-4">Cuidado Diario</h3>
              <ul className="space-y-2">
                <li><a href="#" className="text-blue-600 underline">Cuidado de la piel, erupciones cutáneas</a></li>
                <li><a href="#" className="text-blue-600 underline">Acné</a></li>
                <li><a href="#" className="text-blue-600 underline">Pérdida de cabello</a></li>
                <li><a href="#" className="text-blue-600 underline">Eczema</a></li>
                <li><a href="#" className="text-blue-600 underline">Asma</a></li>
                <li><a href="#" className="text-blue-600 underline">Salud sexual</a></li>
                <li><a href="#" className="text-blue-600 underline">Y más</a></li>
              </ul>
            </div>
            <div className="bg-white p-6 rounded-lg shadow">
              <h3 className="text-xl font-bold text-gray-800 mb-4">Atención Urgente</h3>
              <ul className="space-y-2">
                <li><a href="#" className="text-blue-600 underline">Resfriado y gripe</a></li>
                <li><a href="#" className="text-blue-600 underline">COVID</a></li>
                <li><a href="#" className="text-blue-600 underline">Infecciones sinusales</a></li>
                <li><a href="#" className="text-blue-600 underline">UTI</a></li>
                <li><a href="#" className="text-blue-600 underline">Tos y fiebre</a></li>
                <li><a href="#" className="text-blue-600 underline">Infecciones por levaduras</a></li>
                <li><a href="#" className="text-blue-600 underline">Y más</a></li>
              </ul>
            </div>
            <div className="bg-white p-6 rounded-lg shadow">
              <h3 className="text-xl font-bold text-gray-800 mb-4">Terapia Online</h3>
              <ul className="space-y-2">
                <li><a href="#" className="text-blue-600 underline">Ansiedad</a></li>
                <li><a href="#" className="text-blue-600 underline">Depresión</a></li>
                <li><a href="#" className="text-blue-600 underline">Estrés</a></li>
                <li><a href="#" className="text-blue-600 underline">Dolor y pérdida</a></li>
                <li><a href="#" className="text-blue-600 underline">Posparto</a></li>
                <li><a href="#" className="text-blue-600 underline">TEPT</a></li>
                <li><a href="#" className="text-blue-600 underline">Y más</a></li>
              </ul>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;