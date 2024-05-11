import React from 'react';
import Socials from './Socials';
import { IoArrowUpCircleOutline } from 'react-icons/io5';

export default function Footer() {
  return (
    <>
      <div className="sd-card p-4 bg-dark text-center">
        <h2 className="p-2 text-white">Ready to Collab?</h2>
        <div className="mb-4 text-white/50">The best of us to bring your product stand-out</div>
        <button className="w-1/2 secondary-button bg-light mt-4">GET IN TOUCH</button>
        <div className="p-4 mt-4 body-text flex flex-col text-center gap-8">
          <div className="text-white flex flex-row justify-center items-center gap-2">
            Back to top <IoArrowUpCircleOutline />
          </div>
        </div>
      </div>

      <Socials />

      <div className="flex items-center justify-center p-6">Copyright © 2024</div>
    </>
  );
}
