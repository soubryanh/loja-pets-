import React from 'react';
import {
  About,
  Header,
  Products,
  Services,
  Contact,
  Navbar,
} from './components';
import './App.css';

export default function App() {
  return (
    <div className='App'>
      <Header />
      <Navbar />
      <About />
      <Products />
      <Services />
      <Contact />
    </div>
  );
}
