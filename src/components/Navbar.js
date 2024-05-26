import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import logo from '../assets/logos/Logo.svg';
import { Cross as Hamburger } from 'hamburger-react';
import { motion, useMotionValueEvent, useScroll } from 'framer-motion';
import { FiArrowUpRight } from 'react-icons/fi';

const parentVariants = {
  initial: { y: -100, opacity: 0 },
  visible: { opacity: 1, y: 0 },
  hidden: { opacity: 0, y: '-4rem' },
};

export default function Navbar({ fastload }) {
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
      setOpen(false);
    }
  }

  useMotionValueEvent(scrollY, 'change', (latest) => {
    update(latest, prevScroll);
    setPrevScroll(latest);
  });

  return (
    <>
      <motion.nav
        className={'fixed top-4 rounded-full px-12 md:px-16 lg:px-24 z-50 w-full'}
        variants={parentVariants}
        initial={'initial'}
        animate={hidden ? 'hidden' : 'visible'}
        transition={{
          ease: [0.1, 0.25, 0.3, 1],
          duration: 0.6,
          staggerChildren: 0.05,
          delay: fastload ? 0 : 1,
        }}
      >
        <div className="navbar-text flex flex-row justify-between items-center text-white">
          <Link to="/" className="flex flex-row items-center text-accent gap-2">
            <img
              src={logo}
              className="w-18 hover:rotate-45 transition-all delay-100 duration-150 ease-in-out hover:transition-all hover:duration-150 hover:delay-100 hover:ease-in-out"
              alt="Logo"
            />
          </Link>
          <div className="hidden lg:flex flex-row h5 text-left gap-10 p-8 body-text">
            <Link to="/" className="hover:text-accent">
              Home
            </Link>
            <Link to="/why" className="hover:text-accent">
              Why
            </Link>
            <Link to="/what" className="hover:text-accent">
              What
            </Link>
            <Link to="/who" className="hover:text-accent">
              Who
            </Link>
            <Link to="/how" className="hover:text-accent">
              How
            </Link>
            <Link to="/where" className="hover:text-accent">
              Where
            </Link>
            <Link to="mailto:thesummerdesign@gmail.com" className="hover:text-accent body-text">
              <FiArrowUpRight className="text-[20px]" />
            </Link>
          </div>
          <div className="flex lg:hidden">
            <Hamburger size={18} toggled={isOpen} toggle={setOpen} />
            {isOpen && !hidden && (
              <motion.div
                className={'fixed z-50 right-[50px] top-[70px] lg:right-[100px] lg:top-[70px]'}
                initial={{ opacity: 0, scale: 0 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.3, ease: 'backIn', staggerChildren: 0.25 }}
                exit={{ opacity: 0, scale: 0 }}
              >
                <div className="flex flex-col h5 text-right w-fit gap-3 p-8 bg-black/70 backdrop-blur-sm text-white rounded-3xl">
                  <Link to="/" className="hover:text-accent">
                    Home
                  </Link>
                  <Link to="/why" className="hover:text-accent">
                    Why
                  </Link>
                  <Link to="/what" className="hover:text-accent">
                    What
                  </Link>
                  <Link to="/who" className="hover:text-accent">
                    Who
                  </Link>
                  <Link to="/how" className="hover:text-accent">
                    How
                  </Link>
                  <Link to="/where" className="hover:text-accent">
                    Where
                  </Link>
                  <Link
                    to="mailto:thesummerdesign@gmail.com"
                    className="hover:text-accent body-text font-semibold mt-8"
                  >
                    Let's build your vision
                  </Link>
                </div>
              </motion.div>
            )}
          </div>
        </div>
      </motion.nav>
    </>
  );
}
