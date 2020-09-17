import React from 'react';
import {BrowserRouter as Router} from 'react-router-dom'

import HomeScreen from './screens/homeScreen/homeScreen'

import './fonts/stylesheet.css'
import './app.global.css'

function App() {
 
  return (
    <Router>
      <HomeScreen/>
    </Router>
  );
}

export default App;
