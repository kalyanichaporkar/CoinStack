import './App.css';
import React from 'react';
import Login from './Login';
import Homepage from './Homepage';
import Registration from './Registration';
import ApiConnectivity from './ApiConnectivity';


function App() {
  return (
    <div>
      <Homepage/>
      <Login/> 
      <Registration/>
      <ApiConnectivity/>
    </div>
  );
}

export default App;
