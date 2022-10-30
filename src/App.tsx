import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Header from './components/Header/Header';
import Commits from './components/Repositories/Commits/Commits';
import FullPerson from './pages/FullPerson/FullPerson';
import Home from './pages/Home/Home';

function App() {
  return (
    <div className="wrapper">
      <Header />
      <div className="content">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/person/:id" element={<FullPerson />} />
          <Route path="/commits/:name" element={<Commits author={{
            author: undefined
          }} commit={''} date={''} name={''} message={undefined} id={0} />} />
        </Routes>
      </div>
      {/* <Bottom /> */}
    </div>
  );
}

export default App;
