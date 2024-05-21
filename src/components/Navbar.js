import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import logo from '../assets/logos/Logo.svg';
import { Cross as Hamburger } from 'hamburger-react';
// import { IoArrowUp } from 'react-icons/io5';
import { motion, useMotionValueEvent, useScroll } from 'framer-motion';

const parentVariants = {
  visible: { opacity: 1, y: 0 },
  hidden: { opacity: 0, y: '-4rem' },
};

export default function Navbar() {
  const [isOpen, setOpen] = useState(false);

  const [hidden, setHidden] = useState(false);
  const [prevScroll, setPrevScroll] = useState(0);

  const { scrollY } = useScroll();
  useMotionValueEvent(scrollY, 'change', (latest) => {});

  function update(latest, prev) {
    if (latest < prev) {
      setHidden(false);
    } else if (latest > 100 && latest > prev) {
      setHidden(true);
    }
  }

  useMotionValueEvent(scrollY, 'change', (latest) => {
    update(latest, prevScroll);
    setPrevScroll(latest);
  });

  return (
    <>
      <motion.nav
        className={'fixed top-4 rounded-full p-4 px-12 z-50 w-full'}
        variants={parentVariants}
        animate={hidden ? 'hidden' : 'visible'}
        transition={{
          ease: [0.1, 0.25, 0.3, 1],
          duration: 0.6,
          staggerChildren: 0.05,
        }}
      >
        <div className="navbar-text flex flex-row justify-between items-center text-white lg:px-14">
          <Link to="/" className="flex flex-row items-center text-accent gap-2">
            <img
              src={logo}
              className="w-18 hover:rotate-45 transition-all delay-100 duration-150 ease-in-out hover:transition-all hover:duration-150 hover:delay-100 hover:ease-in-out"
              alt="Logo"
            />
          </Link>
          <Hamburger size={18} toggled={isOpen} toggle={setOpen} />
          {isOpen && (
            <motion.div
              className={'fixed right-[100px] top-[70px] rounded-3xl bg-light/80 text-dark'}
              initial={{ opacity: 0, scale: 0 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.3, ease: 'backIn' }}
              exit={{ opacity: 0, scale: 0.1 }}
            >
              <div className="flex flex-col h5 text-left gap-3 p-8">
                <a href="/services" className="">
                  Service
                </a>
                <a href="/work" className="">
                  Work
                </a>
                <a href="/about" className="">
                  About
                </a>
                <a href="/contact" className="">
                  Contact Us
                </a>
              </div>
            </motion.div>
          )}
        </div>
      </motion.nav>
    </>
  );
}
