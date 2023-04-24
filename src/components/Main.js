import React from 'react';
import { Routes, Route } from "react-router-dom";
import Home from './Home';
import Dashboard from './Dashboard';
import About from './About';
import Stock from './Stock';
import stockData from '../data';

function Main(props) {
  return (
    <main>
       <Routes>
        <Route path='/'>
          <Route path="/home"  element={<Home/>} />
          <Route path="/about" element={<About/>} />
          <Route
            path="/stocks/:symbol"
            element={<Stock stockData={stockData} />}
          />
          <Route
            path="/stocks"
            element={<Dashboard stockData={stockData} />}
          />
          </Route>
   </Routes>
    </main>
  );
}

export default Main;