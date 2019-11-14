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
import ItemGrid from './ItemGrid';
import Checkout from './Checkout';
import Account from './Account';



const App = () => {

  return (
    <Router>
        <Header />
        <MainMenu />
        <Route exact path="/" component={Home} />
        <Route path="/clothing" component={Clothing} />
        <Route path="/item" component={ItemGrid} />
        <Route path="/checkout" component={Checkout} />
        <Route path="/account" component={Account} />
        <Footer />
    </Router>
  );
}

export default App;
