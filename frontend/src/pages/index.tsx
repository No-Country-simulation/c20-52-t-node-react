import React from 'react';
import Image from 'next/image';
import { cardData } from '../data/CardData';
import Header from '@/components/header';
import AnimatedCard from '@/components/AnimateCard';
import { whyDoctorData } from '@/data/WhyDoctorData';
import Footer from '@/components/Footer';

const Home = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <div className="flex flex-col lg:flex-row flex-1">
        <div className="w-full lg:w-1/2 flex items-center justify-center bg-gray-100 p-8">
          <Image
            src="/image1.jpg"
            alt="Videollamada"
            width={500}
            height={600}
            className="rounded-lg shadow-lg"
          />
        </div>

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
            {cardData.map((card, index) => (
              <AnimatedCard key={index} title={card.title} items={card.items} />
            ))}
          </div>
          <div className="text-center mt-6">
            <button className="bg-blue-600 text-white px-6 py-3 rounded-md hover:bg-blue-700 transition">
              Averigüe si aceptamos su seguro
            </button>
          </div>
        </div>
      </section>

      {/* Tercera Sección */}
      <section className="bg-white py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl sm:text-4xl font-bold text-center text-blue-900 mb-8">
            ¿Por qué Doctor On Demand?
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {whyDoctorData.map((card, index) => (
              <AnimatedCard key={index} title={card.title} items={card.items} image={card.image} />
            ))}
          </div>
        </div>
      </section>
      <Footer/>
    </div>
  );
};

export default Home;