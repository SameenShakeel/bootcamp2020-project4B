import React from 'react';
import NavBar from './NavBar';
import Header from './Header';
import Customers from './Customers';
import Service from './Service';
import Detail1 from './Detail1';
import Detail2 from './Detail2';
import Pricing from './Pricing';
import Footer from "./Footer";
import './App.css';

function App() {
  return (
    <div>
      <NavBar />
      <Header />
      <Customers />
      <Service />
      <Detail1 />
      <Detail2 />
      <Pricing />
      <Footer />
    </div>
  );
}

export default App;
