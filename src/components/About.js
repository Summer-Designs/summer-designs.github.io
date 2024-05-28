import React from 'react';
import Navbar from './Navbar';
import Footer from './Footer';
import Gallery from './ui/Gallery.tsx';
import TitleReveal from './animation/TitleReveal';
import PageTransition from './animation/PageTransition';

const About = () => {
  return (
    <div className="overflow-x-hidden">
      <Navbar />

      <div className="w-screen h-screen flex flex-row justify-center items-center">
        <TitleReveal once delay={1} display="grid" text="Abo" className="h1" />
        <TitleReveal once delay={1.5} display="grid" text="ut" className="h1 -ml-8 text-transparent font-outline-2" />
      </div>

      <section>
        <Gallery />
      </section>

      <Footer />
    </div>
  );
};

export default PageTransition(About);
