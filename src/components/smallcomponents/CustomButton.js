import React from 'react';
import { motion } from 'framer-motion';

const CustomButton = ({ text }) => {
  return (
    <div className="w-20 h-20 bg-white hover:w-fit rounded-full">
      <motion.button class="hidden hover:flex font-summerDreamsSans bg-white text-black">{text}</motion.button>
    </div>
  );
};

export default CustomButton;
