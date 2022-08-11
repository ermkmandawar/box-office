import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Nav from './component/Nav';
import Home from './pages/Home';
import Starred from './pages/Starred';
import NotFound from './pages/NotFound';

function App() {
  return (
    <div>
      <Nav />
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/starred" element={<Starred />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </div>
  );
}

export default App;
