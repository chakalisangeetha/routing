import React from 'react';
import Todo from './Todo';
import Details from './Details';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
const Routepage = () => {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route index path="/" element={<Todo />} />
          <Route exact path="/details" element={<Details />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
};
export default Routepage;
