import React from 'react';
import { Routes, Route, BrowserRouter, Navigate } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';

import Home from './components/Home';
import Contact from './components/Contact';
import About from './components/About';

import PageNotFound from './components/PageNotFound';

const App = () => {
  return (
    <>
      <BrowserRouter>
        <AnimatePresence mode="wait">
          <Routes>
            <Route path="/" element={<Home />}></Route>
            <Route path="/about" element={<About />}></Route>
            <Route path="/contact" element={<Contact />}></Route>

            <Route path="/404" element={<PageNotFound />}></Route>
            <Route path="*" exact={true} element={<Navigate replace to="/404" />}></Route>
          </Routes>
        </AnimatePresence>
      </BrowserRouter>
    </>
  );
};

export default App;
