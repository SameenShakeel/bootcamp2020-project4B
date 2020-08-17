import React from 'react';
import NavBar from './NavBar';
import Header from './Header';
import Customers from './Customers';
import Service from './Service';
import Pricing from './Pricing';
import Footer from "./Footer";
import './App.css';

function App() {
  return (
    <>
      <NavBar />
      <Header />
      <Customers />
      <Service />
      <Pricing />
      <Footer />
    </>
  );
}

export default App;
