import React from 'react';
import Navbar from './Navbar';
import Footer from './Footer';
// import Gallery from './ui/Gallery.tsx';
import TitleReveal from './animation/TitleReveal';
import PageTransition from './animation/PageTransition';

const Contact = () => {
  return (
    <div className="overflow-x-hidden">
      <Navbar />

      <div className="w-screen h-screen flex flex-row justify-center items-center">
        <TitleReveal once delay={1} display="grid" text="Cont" className="h1" />
        <TitleReveal once delay={1.5} display="grid" text="act" className="h1 -ml-10 text-transparent font-outline-2" />
      </div>

      <Footer />
    </div>
  );
};

export default PageTransition(Contact);
