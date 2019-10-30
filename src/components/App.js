import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route } from 'react-router-dom'

import Header from './Header';
import MainMenu from './MainMenu';
import Promo from './Promo';
import Featured from './Featured';
import Footer from './Footer';
import Home from './Home';
import Clothing from './Clothing';



const App = () => {

  return (
    <Router>
      <div>
        <Header />
        <MainMenu />
        <Route exact path="/" component={Home} />
        <Route path="/clothing" component={Clothing} />
        <Footer />
      </div>
    </Router>
  );
}

export default App;
