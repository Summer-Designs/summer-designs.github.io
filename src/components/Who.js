import React from 'react';
import Navbar from './Navbar';
import AnimatedTitle from './animation/AnimatedTitle';
import TextTypingAnimation from './animation/TextTypingAnimation';
import PageTransition from './animation/PageTransition';
import Footer from './Footer';
import SCircle from '../assets/imgs/SCircle.svg';

const Who = () => {
  return (
    <div className="overflow-x-hidden">
      <Navbar fastload />

      <div className="p-12 md:p-24 text-center min-w-screen h-screen flex flex-col justify-center items-center bg-black overflow-x-hidden">
        <AnimatedTitle once delay={0} display="grid" text="WHO." className="h1" />
        <TextTypingAnimation
          text="The Summer Design is a creative agency worked by two individual Tirth Jivani & Krishna Kumar, who help brands connect with people."
          className="body-text w-4/5 text-white py-2"
        />
      </div>

      <div className="w-full px-12 lg:px-24 py-12 md:py-24 flex flex-col justify-center items-center gap-8 bg-[#491926] text-white/50">
        <TextTypingAnimation text="Why Choose Us?" className="h4 text-white text-left w-full" />
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 mt-2 gap-8">
          <div className="flex flex-col gap-2">
            <div className="h5 lg:mb-4 text-left text-white">Creative Excellence</div>
            <div className="body-text">
              We pride ourselves on our creativity and attention to detail, ensuring every project is unique and
              impactful.
            </div>
          </div>
          <div className="flex flex-col gap-2">
            <div className="h5 lg:mb-4 text-left text-white">Client-Centric Approach</div>
            <div className="body-text">
              We believe in close collaboration with our clients, understanding their needs, and delivering tailored
              solutions
            </div>
          </div>
          <div className="flex flex-col gap-2">
            <div className="h5 lg:mb-4 text-left text-white">Innovative Solutions</div>
            <div className="body-text">
              We stay ahead of design trends to provide innovative and forward-thinking solutions.
            </div>
          </div>
          <div className="flex flex-col gap-2">
            <div className="h5 lg:mb-4 text-left text-white">Timely Delivery</div>
            <div className="body-text">
              We understand the importance of deadlines and are committed to delivering projects on time, without
              compromising quality.
            </div>
          </div>
          <div className="flex flex-col gap-2">
            <div className="h5 lg:mb-4 text-left text-white">Comprehensive Support</div>
            <div className="body-text">
              From concept to completion, we offer continuous support and consultation to ensure your project's success.
            </div>
          </div>
        </div>
      </div>

      <div className="w-fit mx-auto h-screen flex flex-col justify-center items-center py-24">
        <TextTypingAnimation
          text="We believe, If you're not prepared to be wrong,
		  you'll never come up with anything original."
          className="h2 w-3/4 text-white"
        />
      </div>

      <div className="w-fit mx-auto h-fit flex flex-col justify-center items-center gap-2 mt-48 px-4 lg:px-24">
        <AnimatedTitle
          once
          display="block"
          text="Ready to Transform Your Ideas into Reality?"
          delay={0}
          className="h3 px-8"
        />
        <TextTypingAnimation
          text="Let's work together to create something extraordinary. Contact us today to discuss your project and discover how The Summer Design can help you achieve your goals."
          className="body-text text-center w-3/4 text-white py-4"
        />
        <a href="https://calendly.com/thesummerdesign/1on1" className="primary-button">
          Book FREE 1 on 1
        </a>
        <img alt="The SummerDesign Element" src={SCircle} className="my-12 -z-10" />
      </div>

      <Footer />
    </div>
  );
};

export default PageTransition(Who);
