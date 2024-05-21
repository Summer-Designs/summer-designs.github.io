import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../assets/logos/Logo.svg';

import { FiArrowUpRight } from 'react-icons/fi';

export default function Footer() {
  return (
    <>
      <div className="h-screenpy-16 px-8 md:px-16 py-8 mb-12 lg:px-24 gap-8 md:gap-4 flex flex-col">
        <Link to="#" className="flex lg:hidden">
          <span className="font-summerDreamsSans h5">SummerDesigns</span>
        </Link>
        <div className="flex flex-col-reverse lg:flex-row gap-8 lg:gap-0">
          <div className="w-full lg:w-1/2 flex flex-col">
            <Link to="#" className="hidden lg:flex flex-row items-center text-white gap-4">
              <span className="font-summerDreamsSans h5">SummerDesigns</span>
            </Link>
            <div className="flex flex-col lg:flex-row lg:justify-between gap-8 lg:gap-2">
              <div className="w-fit lg:w-1/2 flex flex-col justify-between gap-4">
                <div>
                  Bengaluru, <br className="hidden lg:block" /> KA
                </div>
                <a className="hover:text-accent" href="tel:09898219779">
                  (+91) 98 98 219 779
                </a>
              </div>
              <div className="w-fit lg:w-1/2 flex flex-col gap-1">
                <div className="text-white/40 w-fit">Follow</div>
                <div className="flex flex-col w-fit">
                  <a href="https://www.linkedin.com/company/summerdesigns/" className="hover:text-accent">
                    Linkedin
                  </a>
                  <a href="https://www.instagram.com/thesummerdesign/" className="hover:text-accent">
                    Instagram
                  </a>
                  <a href="https://www.instagram.com/thesummerdesign/" className="hover:text-accent">
                    Dribbble
                  </a>
                  <a href="https://www.youtube.com/thesummerdesign/" className="hover:text-accent">
                    Youtube
                  </a>
                  <a href="https://www.x.com/thesummerdesign/" className="hover:text-accent">
                    X
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div className="w-full lg:w-1/2">
            <div className="flex flex-col h4 text-right lg:text-left gap-3 w-full lg:w-fit">
              <a href="/services" className="hover:text-accent">
                Services
              </a>
              <a href="/work" className="hover:text-accent">
                Work
              </a>
              <a href="/about" className="hover:text-accent">
                About
              </a>
              <a href="/contact" className="hover:text-accent">
                Contact Us
              </a>
            </div>
          </div>
        </div>
        <div className="flex flex-row items-start lg:items-center mt-8">
          <div className="w-1/2">
            <img src={logo} className="w-16 rotate-45 py-4" alt="Logo" />
          </div>
          <div className="flex flex-row justify-end lg:justify-start text-right lg:text-left gap-8 w-1/2">
            <div>2024 © The Summer Design</div>
            <a
              href="mailto:thesummerdesign@gmail.com"
              className="hidden hover:text-accent lg:flex flex-row items-center"
            >
              thesummerdesign@gmail.com <FiArrowUpRight className="text-[20px]" />
            </a>
          </div>
        </div>
        <a
          href="mailto:thesummerdesign@gmail.com"
          className="lg:hidden hover:text-accent flex flex-row justify-center w-full items-center"
        >
          thesummerdesign@gmail.com <FiArrowUpRight className="text-[20px]" />
        </a>
      </div>
    </>
  );
}
