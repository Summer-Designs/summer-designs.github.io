import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../assets/logos/Logo.svg';

export default function Footer() {
  return (
    <>
      <div className="py-16 px-24 flex flex-col">
        <div className="flex flex-row">
          <div className="w-1/2 flex flex-col gap-8">
            <div>
              <Link to="#" className="flex flex-row items-center text-white gap-4">
                <img src={logo} className="w-18 rotate-45 py-8" alt="Logo" />
                <span className="font-summerDreamsSans h5">SummerDesigns</span>
              </Link>
            </div>

            <div className="flex flex-row justify-between">
              <div className="w-1/2 flex flex-col justify-between">
                <div>
                  Bengaluru <br /> KA
                </div>
                <div>(+91) 98 98 219 779</div>
              </div>
              <div className="w-1/2 flex flex-col gap-4">
                <div className="text-white/40">Follow</div>
                <div className="flex flex-col">
                  <div className="">Linkedin</div>
                  <div className="">Instagram</div>
                  <div className="">Dribbble</div>
                  <div className="">Youtube</div>
                  <div className="">X</div>
                </div>
              </div>
            </div>
          </div>
          <div className="w-1/2">
            <div className="flex flex-col h4 text-left gap-3 py-8">
              <div className="">Service</div>
              <div className="">Work</div>
              <div className="">About</div>
              <div className="">Blog</div>
              <div className="">Contact</div>
            </div>
          </div>
        </div>
        <div className="flex flex-row items-center">
          <div className="w-1/2">
            <button className="secondary-button">Let's Discuss about your brand</button>
          </div>
          <div className="flex flex-row gap-8 w-1/2">
            <div>2024 © The SummerDesigns</div>
            <div>Privacy & Cookie Policy</div>
          </div>
        </div>
      </div>
    </>
  );
}
