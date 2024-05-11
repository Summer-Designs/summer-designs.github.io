import React from 'react';
import Navbar from './Navbar';
import Socials from './Socials';
import WorkList from './WorkList';
import InsightList from './InsightList';
import Footer from './Footer';

import OurPic from '../assets/imgs/Us.JPG';
import UIUX from '../assets/imgs/expertise/UIUX.webp';
import Illustration from '../assets/imgs/expertise/Illustration.webp';
import Branding from '../assets/imgs/expertise/Branding.webp';
import Framer from '../assets/imgs/expertise/Framer.webp';

export default function Homescreen() {
  return (
    <>
      <div className="flex flex-col gap-4 m-4">
        <Navbar />
        <div className="bg-white rounded-3xl p-8 flex flex-col items-center">
          <div className="body-text mb-6">Hello,</div>
          <h1 className="">We bring ideas to life with lasting impact</h1>
          <div className="body-text my-8">
            We create products that focuses on the user's needs and fits into the product strategy.
          </div>
          <button className="w-full md:w-1/2 cta-button">GET IN TOUCH</button>
        </div>

        <Socials />

        <div className="my-6 text-center">
          <h2 className="p-2">Selected Work</h2>
          <div className="mb-4">The work we are proud of</div>
          <WorkList />
          <button className="w-1/2 secondary-button bg-light my-4">VIEW MORE</button>
        </div>
        <div className="mt-6 text-center">
          <h2 className="p-2">About Us</h2>
          <div className="mb-4">2 Designers based in Bangalore</div>
          <div className="sd-card p-8 flex flex-col gap-6">
            <div className="flex flex-col text-left gap-4">
              <h3>Passionate versatile digital designer and pixel perfect guy</h3>
              <div className="text-gray">
                Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the
                industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and
                scrambled it to make a type specimen book.
              </div>
            </div>
            <div className="flex flex-col text-left gap-2">
              <button className="w-full primary-button">MORE ABOUT US</button>
              <button className="w-full secondary-button">GET IN TOUCH</button>
            </div>
          </div>
        </div>
        <div className="h-96 bg-cover bg-center rounded-3xl" style={{ backgroundImage: "url('" + OurPic + "')" }}></div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div className="sd-card p-8 flex flex-col text-left gap-2">
            <div className="uppercase text-gray">Years of Experience</div>
            <h2 className="text-left">0</h2>
          </div>
          <div className="sd-card p-8 flex flex-col text-left gap-2">
            <div className="uppercase text-gray">Projects Completed</div>
            <h2 className="text-left">2</h2>
          </div>
          <div className="sd-card p-8 flex flex-col text-left gap-2">
            <div className="uppercase text-gray">Clients Satisfied</div>
            <h2 className="text-left">1</h2>
          </div>
        </div>

        {/* Expertise */}
        <div className="mt-6 text-center">
          <h2 className="p-2">Our Expertise</h2>
          <div className="mb-4">The best of us to bring your product stand-out</div>
          <div className="flex flex-col gap-4 text-center">
            {[
              [UIUX, 'UI/UX Design', 'Innovative interfaces that communicate with your audience and clients.'],
              [
                Branding,
                'Branding',
                'I craft unique and memorable identities that express your brand’s vision and values.',
              ],
              [
                Illustration,
                'Illustration',
                'I draw captivating illustrations for various media, using diverse styles and techniques.',
              ],
              [Framer, 'Framer', 'I use Framer to prototype and code dynamic interfaces that delight users.'],
            ].map(([image, title, desc]) => (
              <div className="sd-card p-8 flex flex-col text-left gap-2">
                <img className="w-1/5 mb-2" src={image} alt="" />
                <h3>{title}</h3>
                <div className="text-gray">{desc}</div>
              </div>
            ))}
          </div>
          <button className="w-1/2 secondary-button bg-light my-4">READ MORE</button>
        </div>

        {/* Logos */}
        <div className="my-8">Logos Section</div>

        {/* Insights */}
        <div className="mt-6 text-center">
          <h2 className="p-2 mb-4">Latest Insights</h2>
          <InsightList />
          <button className="w-1/2 secondary-button bg-light my-4">MORE INSIGHTS</button>
        </div>

        <Footer />
      </div>
    </>
  );
}
