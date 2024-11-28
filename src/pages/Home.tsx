import React from 'react';

import { motion } from 'framer-motion';

const Home: React.FC = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
      className="min-h-screen bg-gray-100 flex items-center justify-center"
    >
      <h1 className="text-4xl font-bold">Welcome to My Website!</h1>
    </motion.div>
  );
};

export default Home;

