import React from 'react';
import NavBar from './Components/NavBar';
import Header from './Components/Header';
import Customers from './Components/Customers';
import Service from './Components/Service';
import Detail1 from './Components/Detail1';
import Detail2 from './Components/Detail2';
import Pricing from './Components/Pricing';
import Request from './Components/Request';
import Testimonials from './Components/Testimonials';
import Footer from "./Components/Footer";
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
      <Request />
      <Testimonials />
      <Footer />
    </div>
  );
}

export default App;
