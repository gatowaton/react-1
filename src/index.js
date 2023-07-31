import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import App from './App';
import Mail from './Components/Contact/Mail';
import Footer from './Components/footer/Footer';
import Navbar from './Components/navmenu/Navbar';
import Products from './Pages/Products';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
    <Navbar/>
      <Routes>
        <Route path='/react-1' element={<App/>}/>
        <Route path='/products'element={<Products/>}/>
        <Route path='/contact'element={<Mail/>}/>
      </Routes>
    <Footer/>  
    </BrowserRouter>
  </React.StrictMode>
);


