import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import '../styles.css';

class Footer extends Component {

  render(){
    return(
      <div id="footer">
        <div id="info" className="footer_item">
          <h4>Information</h4>
          <ul>
            <li><a className="pointer">About Us</a></li>
            <li><a className="pointer">My Account</a></li>
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
            <li><a className="pointer">Looking to work with us?</a></li>
          </ul>
        </div>
      </div>
    );
  }
}

export default Footer;
