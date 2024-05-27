import React from 'react';
import { Routes, Route, BrowserRouter, Navigate } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';
import Home from './components/Home';

import PageNotFound from './components/PageNotFound';
import WorkList from './components/WorkList';

const App = () => {
  return (
    <>
      <BrowserRouter>
        <AnimatePresence mode="wait">
          <Routes>
            <Route path="/" element={<Home />}></Route>
            <Route path="/contact" element={<WorkList />}></Route>

            <Route path="/404" element={<PageNotFound />}></Route>
            <Route path="*" exact={true} element={<Navigate replace to="/404" />}></Route>
          </Routes>
        </AnimatePresence>
      </BrowserRouter>
    </>
  );
};

export default App;
