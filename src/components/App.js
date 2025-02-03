import './App.css';
import React from 'react';
import Login from './Login';
import Homepage from './Homepage';
// import Registration from './Registration';
// import ApiConnectivity from './ApiConnectivity';
// import Portfolio from './Portfolio';
// import Stockdetails from './Stockdetails';
import { Route, Routes } from 'react-router-dom';


function App() {
  return (
    <div>
      <Routes><Route path='' element={Homepage}></Route>
      <Route path='/Login' element={Login}></Route>
      
      
      </Routes>

    
      
    </div>
  );
}

export default App;
