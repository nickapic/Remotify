import React from 'react';
import './App.css';
import { HomePage } from './page/home';
import {Switch ,Route} from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Switch>
          <Route path="/">
            <HomePage />
          </Route>
        </Switch>
    </div>
  );
}

export default App;
