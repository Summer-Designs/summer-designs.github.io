import React from 'react';
import '../index.css';
import Navbar from './Navbar';
import Banner from './Banner';
import TextTypingAnimation from './animation/TextTypingAnimation';
import AnimatedTitle from './animation/AnimatedTitle';
import WorkList from './WorkList';
import Footer from './Footer';
import HorizontalScrollCarousel from './animation/HorizontalScrollCarousel';
import PageTransition from './animation/PageTransition';
import SCircle from '../assets/imgs/SCircle.svg';

const Home = () => {
  return (
    <>
      <Navbar />
      <Banner />

      <div className="w-fit mx-auto h-screen flex flex-col justify-center items-center py-24">
        <TextTypingAnimation
          text="The Summer Design is a creative agency that helps brands connect with people, through iconic design, animation and visual storytelling."
          className="h2 w-3/4 text-white"
        />
      </div>

      <WorkList />

      <div className="w-fit mx-auto h-screen flex flex-col justify-center items-center gap-4">
        <AnimatedTitle once display="block" text="Our Creative Partners" delay={0} className="h3" />
        <TextTypingAnimation
          text="We work as a strategic, creative partner to our clients, helping to shape their brands, tell their stories and move their audiences. From global brands to ambitious startups, our clients all have one thing in common… Great taste in creative agencies!"
          className="body-text text-center w-3/4 text-white"
        />
        <a href="https://calendly.com/thesummerdesign/1on1" className="primary-button mb-8">
          Book FREE 1 on 1
        </a>
      </div>

      <div className="w-full px-10 md:px-24 py-24 flex flex-col justify-center items-center gap-8 bg-[#491926] text-white/50">
        <TextTypingAnimation
          text="Share Your Dream, We'll Craft It to Perfection"
          className="h4 text-white text-left w-full"
        />
        <div className="text-right w-full">*But we don't design on CANVA</div>
        <div className="flex flex-col lg:flex-row justify-end w-full lg:px-16 mt-8 gap-12 lg:gap-24">
          <div className="flex flex-col gap-2">
            <div className="h5 lg:mb-4 text-left text-white">Product</div>
            <div className="grid grid-cols-2 lg:grid-cols-1">
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
            <div className="grid grid-cols-2 lg:grid-cols-1">
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
            <div className="grid grid-cols-2 lg:grid-cols-1">
              <div className="hover:text-accent cursor-pointer body-text">Wireframes</div>
              <div className="hover:text-accent cursor-pointer body-text">Art Direction</div>
              <div className="hover:text-accent cursor-pointer body-text">Responsive</div>
              <div className="hover:text-accent cursor-pointer body-text">Design System</div>
              <div className="hover:text-accent cursor-pointer body-text">Story Telling</div>
            </div>
          </div>
          <div className="flex flex-col gap-2">
            <div className="h5 lg:mb-4 text-left text-white">Marketing Assets</div>
            <div className="grid grid-cols-2 lg:grid-cols-1">
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

      <div className="w-fit py-28 mx-auto h-screen flex flex-col justify-center items-center">
        <TextTypingAnimation
          text="We are committed to enhancing your brand's essence and fortifying the connection with your audience through collaborative efforts to create something remarkable."
          className="h2 w-3/4 text-white"
        />
      </div>

      <HorizontalScrollCarousel />

      <div className="w-fit mx-auto h-fit flex flex-col justify-center items-center gap-2 mt-48">
        <AnimatedTitle once display="block" text="Your next design partner" delay={0} className="h3 px-8" />
        <TextTypingAnimation
          text="Let's collaborate and craft something extraordinary together."
          className="body-text text-center w-3/4 text-white py-4"
        />
        <a href="https://calendly.com/thesummerdesign/1on1" className="primary-button">
          Book FREE 1 on 1
        </a>
        <img alt="The SummerDesign Element" src={SCircle} className="my-12 -z-10" />
      </div>

      <Footer />
    </>
  );
};

export default PageTransition(Home);
