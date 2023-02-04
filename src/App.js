import './scss/app.scss';
import Header from './components/Header';
import Home from './pages/Home';
import NotFound from './components/NotFoundBlock/';
import { Routes, Route } from 'react-router-dom';
import React from 'react';
import Cart from './pages/Cart';

function App() {
  return (
    <div className="wrapper">
      <Header />
      <div className="content">
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="*" element={<NotFound />} />
          <Route path="/cart" element={<Cart />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
