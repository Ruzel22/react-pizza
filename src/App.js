import './scss/app.scss';
import Header from './components/Header';
import Home from './pages/Home';
import NotFound from './components/NotFoundBlock/';
import { Routes, Route } from 'react-router-dom';
import React from 'react';
import Cart from './pages/Cart';

function App() {
  const [searchValue, setSearchValue] = React.useState('');

  return (
    <div className="wrapper">
      <Header searchValue={searchValue} setSearchValue={setSearchValue} />
      <div className="content">
        <Routes>
          <Route exact path="/" element={<Home searchValue={searchValue} />} />
          <Route exact path="*" element={<NotFound />} />
          <Route path="/cart" element={<Cart />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
