import React from 'react';
import './App.css';
import { HomePage } from './page/home';
import {Switch ,Route} from "react-router-dom";
import { Sidebar } from './components/sidebar';
import Navbar from './components/navbar';

function App() {
  return (
    <div className="App">
      <Sidebar /> 
      <Navbar/>
      <Switch>
          <Route path="/">
            <HomePage />
          </Route>
        </Switch>
    </div>
  );
}

export default App;
