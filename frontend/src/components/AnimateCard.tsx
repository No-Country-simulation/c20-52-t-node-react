// src/components/AnimatedCard.tsx
import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

interface CardProps {
  title: string;
  items: string[];
}

const AnimatedCard: React.FC<CardProps> = ({ title, items }) => {
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
      <h3 className="text-xl font-bold text-gray-800 mb-4">{title}</h3>
      <ul className="space-y-2">
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
