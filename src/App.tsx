import React from 'react';
import { Customers } from './compenents/Customers';
import { Features } from './compenents/Features';
import { Footer } from './compenents/Footer';
import { MainView } from './compenents/MainView';
import { Price } from './compenents/Price';


function App() {
  return (
    <div>
      <MainView/>
      <Features/>
      <Customers/>
      <Price/>
      <Footer/>
    </div>
  );
}

export default App;
