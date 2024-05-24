import React from 'react';
import { Routes, Route, BrowserRouter, Navigate } from 'react-router-dom';
import Homescreen from './components/Homescreen';
import Info from './components/Info';
import PageNotFound from './components/PageNotFound';
import Work from './components/Work';
import Services from './components/Services';
import ContactUs from './components/ContactUs';
import { AnimatePresence } from 'framer-motion';

const App = () => {
  return (
    <>
      <BrowserRouter>
        <AnimatePresence mode="wait">
          <Routes>
            <Route path="/" element={<Homescreen />}></Route>
            <Route path="/what" element={<Services />}></Route>
            <Route path="/what" element={<Work />}></Route>
            <Route path="/who" element={<Info />}></Route>
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
