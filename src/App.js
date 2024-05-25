import React from 'react';
import { Routes, Route, BrowserRouter, Navigate } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';
import Home from './components/Home';
import Why from './components/Why';
import What from './components/What';
import Who from './components/Who';
import How from './components/How';
import Where from './components/Where';
import PageNotFound from './components/PageNotFound';

const App = () => {
  return (
    <>
      <BrowserRouter>
        <AnimatePresence mode="wait">
          <Routes>
            <Route path="/" element={<Home />}></Route>
            <Route path="/why" element={<Why />}></Route>
            <Route path="/what" element={<What />}></Route>
            <Route path="/who" element={<Who />}></Route>
            <Route path="/how" element={<How />}></Route>
            <Route path="/where" element={<Where />}></Route>

            <Route path="/404" element={<PageNotFound />}></Route>
            <Route path="*" exact={true} element={<Navigate replace to="/404" />}></Route>
          </Routes>
        </AnimatePresence>
      </BrowserRouter>
    </>
  );
};

export default App;
