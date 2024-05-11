import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import logo from '../assets/logos/Logo.svg';
import { Cross as Hamburger } from 'hamburger-react';
import { IoArrowUp } from 'react-icons/io5';

export default function Navbar() {
  const [scroll, setScroll] = useState(false);
  const [isOpen, setOpen] = useState(false);

  useEffect(() => {
    window.addEventListener('scroll', () => {
      setScroll(window.scrollY > 40);
    });
  }, []);

  return (
    <>
      <nav
        className={
          'sticky top-4 rounded-full bg-white p-4 px-6 ' +
          (scroll ? 'drop-shadow-xl ease-in duration-300' : 'drop-shadow-none ease-out duration-300')
        }
      >
        <div className="navbar-text flex flex-row justify-between items-center w-full">
          <div className="flex flex-row items-center">
            <Hamburger size={17} toggled={isOpen} toggle={setOpen} />
            MENU
          </div>
          <Link to="/" className="flex flex-row items-center text-accent gap-2">
            <img src={logo} className="w-10" alt="Logo" />
            <span className="hidden md:flex font-[600]">SUMMERDESIGNS</span>
          </Link>
          <button className="hidden md:flex w-fit secondary-button">GET IN TOUCH</button>
        </div>
      </nav>
      <div
        className={'fixed bottom-6 right-4 p-2 w-fit rounded-full bg-dark text-light ' + (scroll ? 'fixed' : 'hidden')}
      >
        <IoArrowUp className="text-4xl" />
      </div>
    </>
  );
}
