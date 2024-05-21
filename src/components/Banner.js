import React from 'react';
import BackgroundVideo from '../assets/videos/background.mp4';
import AnimatedTitle from './animation/AnimatedTitle';

const Banner = () => {
  return (
    <div className="relative flex items-center justify-center h-screen overflow-hidden">
      <h1 className="z-10 w-fit mx-auto h-screen flex flex-col justify-center items-center">
        <h3 className="font-summerWind font-[400] z-10 mb-4">The</h3>
        <AnimatedTitle once display="grid" text="SUMMER DESIGNS." className="h1" />
      </h1>
      <div className="bg-black/70 absolute top-0 left-0 w-screen h-screen"></div>
      <video
        src={BackgroundVideo}
        autoPlay
        loop
        muted
        playsinline
        className="absolute -z-10 w-auto min-w-full min-h-full max-w-none"
      ></video>
    </div>
  );
};

export default Banner;
