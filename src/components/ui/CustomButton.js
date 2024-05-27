import React from 'react';

const CustomButton = ({ text = 'Book 1 on 1', href, className = '' }) => {
  const handleClick = () => {
    if (href) {
      window.open(href, '_blank');
    }
  };

  return (
    <button
      onClick={handleClick}
      className={`relative inline-flex h-12 overflow-hidden rounded-full p-[2px] focus:outline-none ${className}`}
    >
      {/* Animated background */}
      <span className="absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#E52458_0%,#22732E_50%,#E52458_100%)]" />

      {/* Button content */}
      <span className="inline-flex h-full w-full cursor-pointer items-center justify-center rounded-full bg-black px-8 py-4 body-text text-white backdrop-blur-3xl">
        {text}
      </span>
    </button>
  );
};

export default CustomButton;
