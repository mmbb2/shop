import React from 'react';
import Home from './pages/Home';
import Cart from './pages/Cart';
import Orders from './pages/Orders';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import './styles/orderInfoModal.css'
import './styles/NavigationBar.css'
import './styles/Products.css'
import './styles/Cart.css'

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route exact path='/' element={<Home/>}/>
          <Route path='/cart' element={<Cart/>}/>
          <Route path='/orders' element={<Orders/>}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
