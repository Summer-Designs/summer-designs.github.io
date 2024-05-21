import React from 'react';
import Navbar from './Navbar';
import Banner from './Banner';
import TextTypingAnimation from './animation/TextTypingAnimation';
import AnimatedTitle from './animation/AnimatedTitle';
import WorkList from './WorkList';
import Footer from './Footer';

import SCircle from '../assets/imgs/SCircle.svg';
import HorizontalScrollCarousel from './animation/HorizontalScrollCarousel';

export default function Homescreen() {
  return (
    <>
      {/* <CustomCursor /> */}

      <Navbar />
      <Banner />

      <div className="w-fit mx-auto h-screen flex flex-col justify-center items-center">
        <TextTypingAnimation
          text="The Summer Design is a creative agency that helps brands connect with people, through iconic design, animation and visual storytelling."
          applyClass="h2 w-3/4 text-white"
        />
      </div>

      <WorkList />

      <div className="w-fit mx-auto h-screen flex flex-col justify-center items-center gap-4">
        <AnimatedTitle once display="block" text="Our Creative Partners" className="h3" />
        <TextTypingAnimation
          text="We work as a strategic, creative partner to our clients, helping to shape their brands, tell their stories and move their audiences. From global brands to ambitious startups, our clients all have one thing in common… Great taste in creative agencies!"
          applyClass="h5 w-3/4 text-white"
        />
        <a href="https://calendly.com/thesummerdesign/1on1" className="primary-button">
          Book FREE 1 on 1
        </a>
      </div>

      <div className="w-full px-10 md:px-24 py-24 flex flex-col justify-center items-center gap-8 bg-[#491926] text-white/40">
        <TextTypingAnimation
          text="Dear Startups, You will face a lot of challenges. We'll be there."
          applyClass="h4 w-3/4 text-white text-left w-full"
        />
        <div className="text-right w-full">*But we don't design on CANVA</div>
        <div className="flex flex-col lg:flex-row justify-end w-full lg:px-16 mt-8 gap-12 lg:gap-24">
          <div className="flex flex-col gap-2">
            <div className="h5 lg:mb-4 text-left text-white">Product</div>
            <div className="grid grid-cols-2 lg:grid-cols-1">
              <div className="hover:text-accent cursor-pointer">Wireframing</div>
              <div className="hover:text-accent cursor-pointer">Userflows</div>
              <div className="hover:text-accent cursor-pointer">Prototyping</div>
              <div className="hover:text-accent cursor-pointer">Web & Mobile App</div>
              <div className="hover:text-accent cursor-pointer">Design System</div>
              <div className="hover:text-accent cursor-pointer">Interaction Design</div>
            </div>
          </div>
          <div className="flex flex-col gap-2">
            <div className="h5 lg:mb-4 text-left text-white">Branding</div>
            <div className="grid grid-cols-2 lg:grid-cols-1">
              <div className="hover:text-accent cursor-pointer">Moodboard</div>
              <div className="hover:text-accent cursor-pointer">Creative Concept</div>
              <div className="hover:text-accent cursor-pointer">Brand Guidline</div>
              <div className="hover:text-accent cursor-pointer">Graphics</div>
              <div className="hover:text-accent cursor-pointer">Illustration</div>
              <div className="hover:text-accent cursor-pointer">Logo Design</div>
            </div>
          </div>
          <div className="flex flex-col gap-2">
            <div className="h5 lg:mb-4 text-left text-white">Website</div>
            <div className="grid grid-cols-2 lg:grid-cols-1">
              <div className="hover:text-accent cursor-pointer">Wireframes</div>
              <div className="hover:text-accent cursor-pointer">Art Direction</div>
              <div className="hover:text-accent cursor-pointer">Responsive</div>
              <div className="hover:text-accent cursor-pointer">Design System</div>
              <div className="hover:text-accent cursor-pointer">Story Telling</div>
            </div>
          </div>
          <div className="flex flex-col gap-2">
            <div className="h5 lg:mb-4 text-left text-white">Marketing Assets</div>
            <div className="grid grid-cols-2 lg:grid-cols-1">
              <div className="hover:text-accent cursor-pointer">Pitch & Sales Deck</div>
              <div className="hover:text-accent cursor-pointer">A+ Content</div>
              <div className="hover:text-accent cursor-pointer">Social Media Kit</div>
              <div className="hover:text-accent cursor-pointer">Business Card</div>
              <div className="hover:text-accent cursor-pointer">Goodies</div>
              <div className="hover:text-accent cursor-pointer">Email Signatures</div>
            </div>
          </div>
        </div>
      </div>

      <div className="w-fit mx-auto h-screen flex flex-col justify-center items-center">
        <TextTypingAnimation
          text="We dedicatedly amplify the essence of your brand and strengthening the bond between you and your audience by crafting something extraordinary together."
          applyClass="h2 w-3/4 text-white"
        />
      </div>

      <HorizontalScrollCarousel />

      <div className="w-fit mx-auto h-fit flex flex-col justify-center items-center gap-2 mt-48">
        <AnimatedTitle once display="block" text="Your next design partner" className="h3" />
        <TextTypingAnimation
          text="Let's collaborate and craft something extraordinary together."
          applyClass="h5 w-3/4 text-white"
        />
        <a href="https://calendly.com/thesummerdesign/1on1" className="primary-button">
          Book FREE 1 on 1
        </a>
        <img alt="The SummerDesign Element" src={SCircle} className="-mt-12 -z-10" />
      </div>

      <Footer />
    </>
  );
}
