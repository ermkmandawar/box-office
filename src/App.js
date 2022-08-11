import React from 'react';
import { Routes, Route } from 'react-router-dom';

function App() {
  return (
    <Routes>
      <Route exact path="/" element={'HomePage'} />
      <Route exact path="/starred" element={'Starred page'} />
      <Route path="*" element={'Page not exist'} />
    </Routes>
  );
}

export default App;
