import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import '../styles.css';

class MainMenu extends Component {

  render(){
    return(
      <div id="mainmenu">
        <a className="menu_item pointer">Home</a>
        <a className="menu_item pointer">About</a>
        <a className="menu_item pointer">Clothing</a>
      </div>
    );
  }
}

export default MainMenu;
