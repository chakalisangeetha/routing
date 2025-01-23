import React from 'react';

import { BrowserRouter, Link, Routes, Route } from 'react-router-dom';
import Home from './Home';
import About from './About';
import Contact from './Contact';
import Linkp from './LinkPage';
const RoutingPage = () => {
  return (
    <>
      <BrowserRouter>
        <Linkp />

        {/*         
    <Link to="/"> Home </Link>
        <Link to="/about"> About </Link>
        <Link to="/contact"> Contact </Link> */}

        <Routes>
          <Route index path="/:id" element={<Home />} />
          <Route exact path="/about" element={<About />} />
          <Route exact path="/contact" element={<Contact />} />
        </Routes>
      </BrowserRouter>
    </>
  );
};
export default RoutingPage;
