import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import '../styles.css';

class Header extends Component {
  constructor(props){
    super(props);

  }

  render(){
    return(
      <div id="header">
        <div id="logo-area">
          <h1 className="logo">TrendyChic</h1>
        </div>
        <div id="user-menu">
          <i className="user-icon fa fa-search fa-3x" aria-hidden="true"></i>
          <i className="user-icon fa fa-user-circle fa-3x" aria-hidden="true"></i>
          <i className="user-icon fa fa-shopping-bag fa-3x" aria-hidden="true"></i>
        </div>
      </div>
    );
  }
}

export default Header;
