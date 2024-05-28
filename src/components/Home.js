import React from 'react';
import '../index.css';
import Navbar from './Navbar';
import Banner from './Banner';
import ContentReveal from './animation/ContentReveal';
import TitleReveal from './animation/TitleReveal';
import Footer from './Footer';
import HorizontalScrollCarousel from './ui/HorizontalScrollCarousel';
import PageTransition from './animation/PageTransition';
import SCircle from '../assets/imgs/SCircle.svg';
import CustomButton from './ui/CustomButton';
import { motion } from 'framer-motion';
import TextRevealByWord from './animation/TextRevealByWord.tsx';

const Home = () => {
  return (
    <>
      <motion.div initial={{ y: -200 }} animate={{ y: 0 }} transition={{ delay: 1, duration: 0.6 }}>
        <Navbar />
      </motion.div>

      <Banner />

      <div>
        <TextRevealByWord
          text="We believe branding is an art form, essential for creating a unique identity. Our creative solutions — from
            poster graphics and illustrations to websites with professional story building — ensure your brand stands
            out with a breezy summer vibe"
        />
      </div>

      <section>
        <div className="w-fit min-h-screen mx-auto flex flex-col justify-center items-center gap-4">
          <TitleReveal once display="block" text="Ready to Transform Your Brand?" delay={0} className="h4 w-[70%]" />
          <ContentReveal
            text="Let's create something amazing together."
            className="body-text text-center w-3/4 text-white"
          />
          <CustomButton href="https://calendly.com/thesummerdesign/1on1" />
        </div>
      </section>

      {/* <section>
          <StickyScroll content={content} />
        </section> */}

      <section>
        <div className="w-full px-10 md:px-24 py-36 flex flex-col justify-center items-center gap-8 bg-[#491926] text-white/50">
          <ContentReveal text="Share Your Dream, We'll Craft It to Perfection" className="h4 w-[80%] text-white" />
          <div className="text-center w-full">*But we don't design on CANVA</div>
          <div className="flex flex-col lg:flex-row justify-center w-full lg:px-16 mt-8 gap-12 lg:gap-24">
            <div className="flex flex-col gap-2">
              <div className="h5 lg:mb-4 text-left text-white">Product</div>
              <div className="grid grid-cols-2 lg:grid-cols-1 gap-1">
                <div className="hover:text-accent cursor-pointer body-text">Wireframing</div>
                <div className="hover:text-accent cursor-pointer body-text">Userflows</div>
                <div className="hover:text-accent cursor-pointer body-text">Prototyping</div>
                <div className="hover:text-accent cursor-pointer body-text">Web & Mobile App</div>
                <div className="hover:text-accent cursor-pointer body-text">Design System</div>
                <div className="hover:text-accent cursor-pointer body-text">Interaction Design</div>
              </div>
            </div>
            <div className="flex flex-col gap-2">
              <div className="h5 lg:mb-4 text-left text-white">Branding</div>
              <div className="grid grid-cols-2 lg:grid-cols-1 gap-1">
                <div className="hover:text-accent cursor-pointer body-text">Moodboard</div>
                <div className="hover:text-accent cursor-pointer body-text">Creative Concept</div>
                <div className="hover:text-accent cursor-pointer body-text">Brand Guidline</div>
                <div className="hover:text-accent cursor-pointer body-text">Graphics</div>
                <div className="hover:text-accent cursor-pointer body-text">Illustration</div>
                <div className="hover:text-accent cursor-pointer body-text">Logo Design</div>
              </div>
            </div>
            <div className="flex flex-col gap-2">
              <div className="h5 lg:mb-4 text-left text-white">Website</div>
              <div className="grid grid-cols-2 lg:grid-cols-1 gap-1">
                <div className="hover:text-accent cursor-pointer body-text">Wireframes</div>
                <div className="hover:text-accent cursor-pointer body-text">Art Direction</div>
                <div className="hover:text-accent cursor-pointer body-text">Responsive</div>
                <div className="hover:text-accent cursor-pointer body-text">Design System</div>
                <div className="hover:text-accent cursor-pointer body-text">Story Telling</div>
              </div>
            </div>
            <div className="flex flex-col gap-2">
              <div className="h5 lg:mb-4 text-left text-white">Marketing Assets</div>
              <div className="grid grid-cols-2 lg:grid-cols-1 gap-1">
                <div className="hover:text-accent cursor-pointer body-text">Pitch & Sales Deck</div>
                <div className="hover:text-accent cursor-pointer body-text">A+ Content</div>
                <div className="hover:text-accent cursor-pointer body-text">Social Media Kit</div>
                <div className="hover:text-accent cursor-pointer body-text">Business Card</div>
                <div className="hover:text-accent cursor-pointer body-text">Goodies</div>
                <div className="hover:text-accent cursor-pointer body-text">Email Signatures</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section>
        <TextRevealByWord text="We are committed to enhancing your brand's essence and fortifying the connection with your audience through collaborative efforts to create something remarkable." />
      </section>

      <HorizontalScrollCarousel />

      <div className="w-fit mx-auto h-fit flex flex-col justify-center items-center gap-2 mt-48">
        <TitleReveal once display="block" text="Your next design partner" delay={0} className="h4 px-8" />
        <ContentReveal
          text="Let's collaborate and craft something extraordinary together."
          className="body-text text-center w-3/4 text-white py-4"
        />
        <CustomButton href="https://calendly.com/thesummerdesign/1on1" />
        <img alt="The SummerDesign Element" src={SCircle} className="mt-12 -z-10" />
      </div>

      <Footer />
    </>
  );
};

export default PageTransition(Home);
