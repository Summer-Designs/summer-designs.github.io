import React from 'react';
import { Routes, Route, BrowserRouter, Navigate } from 'react-router-dom';
import Home from './components/Home';
import PageNotFound from './components/PageNotFound';
import Work from './components/What';
import Services from './components/Services';
import ContactUs from './components/ContactUs';
import { AnimatePresence } from 'framer-motion';
import Who from './components/Who';

const App = () => {
  return (
    <>
      <BrowserRouter>
        <AnimatePresence mode="wait">
          <Routes>
            <Route path="/" element={<Home />}></Route>
            <Route path="/why" element={<Services />}></Route>
            <Route path="/what" element={<Work />}></Route>
            <Route path="/who" element={<Who />}></Route>
            <Route path="/how" element={<Who />}></Route>
            <Route path="/where" element={<ContactUs />}></Route>

            <Route path="/404" element={<PageNotFound />}></Route>
            <Route path="*" exact={true} element={<Navigate replace to="/404" />}></Route>
          </Routes>
        </AnimatePresence>
      </BrowserRouter>
    </>
  );
};

export default App;
