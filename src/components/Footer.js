import React from 'react';
import { Link } from 'react-router-dom';

import { FiArrowUpRight } from 'react-icons/fi';

export default function Footer() {
  return (
    <div
      className="relative h-[520px] sm:h-[580px] md:h-[620px] lg:h-[720px] 2xl:h-screen"
      style={{ clipPath: 'polygon(0% 0, 100% 0%, 100% 100%, 0 100%)' }}
    >
      <div className="fixed bottom-0 h-[520px] sm:h-[580px] md:h-[620px] lg:h-[720px] 2xl:h-screen w-full bg-dark">
        <div className="h-screen py-16 px-8 md:px-16 lg:px-24 gap-8 flex flex-col">
          <div className="flex flex-col gap-8">
            <Link to="/about">
              <div className="text-left h4 hover:text-accent">About</div>
            </Link>
            <Link to="/contact">
              <div className="text-left h4 hover:text-accent">Contact Us</div>
            </Link>
          </div>
          <div className="flex flex-col gap-2">
            <div className="text-left opacity-50">Follow</div>
            <div className="flex flex-row justify-between w-full">
              <a
                href="https://www.linkedin.com/company/summerdesigns/"
                target="_blank"
                rel="noreferrer"
                className="hover:text-accent"
              >
                LI.
              </a>
              <a
                href="https://www.instagram.com/thesummerdesign/"
                target="_blank"
                rel="noreferrer"
                className="hover:text-accent"
              >
                IN.
              </a>
              <a
                href="https://www.instagram.com/thesummerdesign/"
                target="_blank"
                rel="noreferrer"
                className="hover:text-accent"
              >
                DB.
              </a>
              <a
                href="https://www.youtube.com/thesummerdesign/"
                target="_blank"
                rel="noreferrer"
                className="hover:text-accent"
              >
                YT.
              </a>
              <a
                href="https://www.x.com/thesummerdesign/"
                target="_blank"
                rel="noreferrer"
                className="hover:text-accent"
              >
                X.
              </a>
            </div>
          </div>
          <a
            href="mailto:thesummerdesign@gmail.com"
            className="lg:hidden hover:text-accent flex flex-row items-center w-full"
          >
            thesummerdesign@gmail.com <FiArrowUpRight className="text-[20px]" />
          </a>

          <div className="flex flex-col -mx-8 md:mx-[-5rem] lg:mx-[-6.5rem] mt-24 lg:mt-48 opacity-20">
            <div className="font-summerDreamsSans text-[20.8cqw] leading-3 mx-auto">Summer</div>
            <div className="font-summerDreamsSans text-[20.8cqw] mx-auto bg-clip-text text-transparent font-outline-2">
              Designs
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
