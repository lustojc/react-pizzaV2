import { useRef, useState } from 'react';
import { Route, Routes } from 'react-router-dom';

import Header from './components/Header';
import Cart from './pages/Cart';
import Home from './pages/Home';
import NotFound from './pages/NotFound';

import './scss/app.scss';

function App() {
  const [searchValue, setSearhValue] = useState('');
  const searchRef = useRef(null);

  return (
    <div>
      <div className="wrapper">
        <Header searchValue={searchValue} setSearhValue={setSearhValue} searchRef={searchRef} />
        <Routes>
          <Route path="/" element={<Home searchValue={searchValue} searchRef={searchRef} />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
