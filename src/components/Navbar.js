import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import logo from '../assets/logos/Logo.svg';
// import { Cross as Hamburger } from 'hamburger-react';
import { easeOut, motion, useMotionValueEvent, useScroll } from 'framer-motion';
import CustomButton from './ui/CustomButton';
// import { FiArrowUpRight } from 'react-icons/fi';

const parentVariants = {
  initial: { y: -200, opacity: 0 },
  visible: { opacity: 1, y: 0 },
  hidden: { opacity: 0, y: '-4rem' },
};

export default function Navbar() {
  // const [isOpen, setOpen] = useState(false);

  //   <Hamburger size={18} toggled={isOpen} toggle={setOpen} />;
  // {
  //   isOpen && !hidden && (
  //     <motion.div
  //       className={'fixed z-50 right-[50px] top-[70px] lg:right-[100px] lg:top-[70px]'}
  //       initial={{ opacity: 0, scale: 0 }}
  //       animate={{ opacity: 1, scale: 1 }}
  //       transition={{ duration: 0.3, ease: 'backIn', staggerChildren: 0.25 }}
  //       exit={{ opacity: 0, scale: 0 }}
  //     >
  //       <div className="flex flex-col h5 text-right w-fit gap-3 p-8 bg-black/70 backdrop-blur-sm text-white rounded-3xl">
  //         <Link to="/" className="hover:text-accent">
  //           Home
  //         </Link>
  //         <Link to="/why" className="hover:text-accent">
  //           Why
  //         </Link>
  //         <Link to="/what" className="hover:text-accent">
  //           What
  //         </Link>
  //         <Link to="/who" className="hover:text-accent">
  //           Who
  //         </Link>
  //         <Link to="/how" className="hover:text-accent">
  //           How
  //         </Link>
  //         <Link to="/where" className="hover:text-accent">
  //           Where
  //         </Link>
  //         <Link to="mailto:thesummerdesign@gmail.com" className="hover:text-accent body-text font-semibold mt-8">
  //           Let's build your vision
  //         </Link>
  //       </div>
  //     </motion.div>
  //   );
  // }

  const [hidden, setHidden] = useState(false);
  const [prevScroll, setPrevScroll] = useState(0);

  const { scrollY } = useScroll();
  useMotionValueEvent(scrollY, 'change', (latest) => {});

  function update(latest, prev) {
    if (latest < prev) {
      setHidden(false);
    } else if (latest > 50 && latest > prev) {
      setHidden(true);
      // setOpen(false);
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
          ease: easeOut,
          duration: 0.6,
          staggerChildren: 0.1,
        }}
      >
        <div className="navbar-text flex flex-row justify-between items-center text-white py-6">
          <Link to="/" className="flex flex-row items-center text-accent">
            <img
              src={logo}
              className={
                hidden
                  ? 'rotate-0 transition duration-150 ease-in'
                  : '' +
                    'rotate-45 w-18 transition-all delay-100 duration-150 ease-in-out hover:transition-all hover:duration-150 hover:delay-100 hover:ease-in-out'
              }
              alt="Logo"
            />
          </Link>
          <CustomButton href="https://calendly.com/thesummerdesign/1on1" />
          {/* <a href="mailto:thesummerdesign@gmail.com" className="body-text hover:text-accent">
            GET IN TOUCH
          </a> */}
        </div>
      </motion.nav>
    </>
  );
}
