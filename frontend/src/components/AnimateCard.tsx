import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import Image from 'next/image';

interface CardProps {
  title: string;
  items: string[];
  image?: string; // Haz que la imagen sea opcional
}

const AnimatedCard: React.FC<CardProps> = ({ title, items, image }) => {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: inView ? 1 : 0, y: inView ? 0 : 50 }}
      transition={{ duration: 0.5 }}
      className="bg-white p-6 rounded-lg shadow"
    >
      {image && (
        <div className="h-48 w-full overflow-hidden rounded-t-lg">
          <Image
            src={image}
            alt={title}
            width={300}
            height={200}
            className="w-full h-full object-cover"
          />
        </div>
      )}
      <h3 className="text-xl font-bold text-gray-800 mt-4">{title}</h3>
      <ul className="space-y-2 mt-2">
        {items.map((item, index) => (
          <li key={index}>
            <a href="#" className="text-blue-600 underline">
              {item}
            </a>
          </li>
        ))}
      </ul>
    </motion.div>
  );
};

export default AnimatedCard;
