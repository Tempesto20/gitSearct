import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Bottom from './components/Bottom/Bottom';
import Header from './components/Header/Header';
import FullPerson from './pages/FullPerson/FullPerson';
import Home from './pages/Home/Home';

function App() {
  return (
    <div className="wrapper">
      <Header />
      <div className="content">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/cat/:id" element={<FullPerson />} />
        </Routes>
      </div>
      <Bottom />
    </div>
  );
}

export default App;
