import './App.css';
import React from 'react';
import Login from './Login';
import Homepage from './Homepage';
import Registration from './Registration';
import ApiConnectivity from './ApiConnectivity';
import Portfolio from './Portfolio';
import Stockdetails from './Stockdetails';


function App() {
  return (
    <div>
      <Homepage/>
      <Portfolio/>
      <Login/> 
      <Registration/>
      <ApiConnectivity/>
      <Stockdetails/>
      
    </div>
  );
}

export default App;
