import React, {Component} from 'react';
import { Link } from 'react-router-dom'

import '../styles.css';

class Footer extends Component {

  render(){
    return(
      <div id="footer">
        <div id="info" className="footer_item">
          <h4>Information</h4>
          <ul>
            <li><Link className="pointer" to="/home">About Us</Link></li>
            <li><Link className="pointer" to="/home">My Account</Link></li>
          </ul>
        </div>
        <div id="terms" className="footer_item">
          <h4>Terms of Use</h4>
        </div>
        <div id="contact" className="footer_item">
          <h4>Contact Us</h4>
          <ul>
            <li>Phone#: (800)-201-1789</li>
            <li>Email: trendychic </li>
            <li><Link className="pointer" to="/home">Looking to work with us?</Link></li>
          </ul>
        </div>
      </div>
    );
  }
}

export default Footer;
