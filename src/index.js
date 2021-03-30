import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter as Router, Route} from 'react-router-dom';
import App from './App';
import Coordinates from './pages/CoordinatesPage';


ReactDOM.render(
  <Router>
    <React.StrictMode>
      <Route exact path='/' component={App} />
      <Route exact path='/getmycoordinates' component={Coordinates} />
    </React.StrictMode>
  </Router>,
  document.getElementById('root')
);