import React from 'react';
import './App.css';
import { HomePage } from './page/home';
import { AnalyticsPage } from './page/analytics';
import { CalendarPage } from './page/calendar';
import { EquipmentPage } from './page/equipment';
import { CheckinCheckoutPage } from './page/checkin_checkout';
import { AlertsPage } from './page/alerts';
import {Switch, Route} from "react-router-dom";
import { Sidebar } from './components/sidebar';
import Navbar from './components/navbar';

function App() {
  return (
    <div className="App">
      <Sidebar /> 
      <Navbar/>
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route path="/analytics" component={AnalyticsPage} />
        <Route path="/my-reservations" component={CalendarPage} />
        <Route path="/equipment" component={EquipmentPage} />
        <Route path="/checkin-checkout" component={CheckinCheckoutPage} />
        <Route path="/alerts" component={AlertsPage} />
      </Switch>
    </div>
  );
}

export default App;
