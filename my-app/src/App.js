import React from 'react';
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import MainSite from './assets/pages/mainPages/mainSite';
import MainDashboard from './assets/pages/dashboardPages/dashboardMain';
import 'fontsource-roboto';

function App() {
  return (
    <Router>
      <div>
        <Switch>
          <Route exact path="/">
            <MainSite />
          </Route>
          <Route path="/dashboard">
            <MainDashboard />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
