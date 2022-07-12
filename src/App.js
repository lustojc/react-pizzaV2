import React, { useRef, useState } from 'react';
import { Route, Routes } from 'react-router-dom';

import Header from './components/Header';
import Cart from './pages/Cart';
import Home from './pages/Home';
import NotFound from './pages/NotFound';

import './scss/app.scss';

export const SearchContext = React.createContext('');

function App() {
  const [searchValue, setSearhValue] = useState('');
  const searchRef = useRef(null);

  return (
    <div>
      <div className="wrapper">
        <SearchContext.Provider value={{ searchValue, setSearhValue, searchRef }}>
          <Header />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/cart" element={<Cart />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </SearchContext.Provider>
      </div>
    </div>
  );
}

export default App;
