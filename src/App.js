import React from 'react';
import './App.css';
import { HomePage } from './page/home';
import {Switch ,Route} from "react-router-dom";
import { Sidebar } from './components/sidebar';
import Navbar from './components/navbar';
import { MyColleagues } from './page/mycolleagues';

function App() {
  return (
    <div className="App">
      <Sidebar /> 
      <Navbar/>
      <Switch>
          <Route exact path="/">
            <HomePage />
          </Route>
          <Route exact path="/colleagues">
            <MyColleagues />
          </Route>

        </Switch>
    </div>
  );
}

export default App;
