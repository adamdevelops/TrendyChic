import React from 'react';
import ReactDOM from 'react-dom';
import Header from './Header';
import MainMenu from './MainMenu';
import Promo from './Promo';
import Featured from './Featured';
import Footer from './Footer';



const App = () => {

  return (
    <div>
      <Header />
      <MainMenu />
      <Promo />
      <Featured />
      <Footer />
    </div>
  );
}

export default App;
