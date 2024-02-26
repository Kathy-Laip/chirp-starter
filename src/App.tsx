import React from 'react';
import { Customers } from './compenents/Customers';
import { Features } from './compenents/Features';
import { MainView } from './compenents/MainView';


function App() {
  return (
    <div>
      <MainView/>
      <Features/>
      <Customers/>
    </div>
  );
}

export default App;
