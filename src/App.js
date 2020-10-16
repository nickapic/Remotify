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
import { MyColleagues } from './page/mycolleagues';
import {UpdatePage } from './page/updatePage'
import { HeroPage } from './page/HeroPage';
import { notification } from 'antd';
import { SmileOutlined } from '@ant-design/icons';

const openNotification = () => {
  notification.open({
    message: 'Your Colleague',
    description:
      'This is the content of the notification. This is the content of the notification. This is the content of the notification.',
    icon: <SmileOutlined style={{ color: '#108ee9' }} />,
  });
};
function App() {
  setTimeout(function(){ openNotification(); }, 60000);
  return (
    <div className="App">
      <Sidebar /> 
      <Navbar/>
      <Switch>
        <Route exact path="/"><HeroPage/></Route>
        <Route exact path="/dashboard" component={HomePage} />
        <Route path="/analytics" component={AnalyticsPage} />
        <Route path="/my-reservations" component={CalendarPage} />
        <Route path="/equipment" component={EquipmentPage} />
        <Route path="/checkin-checkout" component={CheckinCheckoutPage} />
        <Route path="/alerts" component={AlertsPage} />
        <Route path="/colleagues" component={MyColleagues} />
        <Route exact path="/updates" component={UpdatePage} />
      </Switch>
    </div>
  );
}

export default App;
