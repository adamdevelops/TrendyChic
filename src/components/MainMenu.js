import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import { Link } from 'react-router-dom'
import '../styles.css';

class MainMenu extends Component {

  render(){
    return(
      <div id="mainmenu">
        <Link className="menu_item pointer" to="/">Home</Link>
        <Link className="menu_item pointer" to="/">About</Link>
        <Link className="menu_item pointer" to="/clothing">Clothing</Link>
      </div>
    );
  }
}

export default MainMenu;
