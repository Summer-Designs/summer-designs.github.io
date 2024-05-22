import './App.css';
import React, { useState } from 'react';
import { Routes, Route, BrowserRouter, Navigate } from 'react-router-dom';
import Homescreen from './components/Homescreen';
import Info from './components/Info';
import PageNotFound from './components/PageNotFound';
import Work from './components/Work';
import Preloader from './components/animation/Preloader';
import Services from './components/Services';
import ContactUs from './components/ContactUs';

function App() {
  const [loading, setLoading] = useState(true);
  const spinner = document.getElementById('preloader');
  if (spinner) {
    setTimeout(() => {
      spinner.style.display = 'none';
      setLoading(false);
    }, 2000);
  }

  return (
    <>
      {loading && <Preloader />}
      {!loading && (
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Homescreen />}></Route>
            <Route path="/services" element={<Services />}></Route>
            <Route path="/work" element={<Work />}></Route>
            <Route path="/about" element={<Info />}></Route>
            <Route path="/contact" element={<ContactUs />}></Route>

            <Route path="/404" element={<PageNotFound />}></Route>
            <Route path="*" exact={true} element={<Navigate replace to="/404" />}></Route>
          </Routes>
        </BrowserRouter>
      )}
    </>
  );
}

export default App;
