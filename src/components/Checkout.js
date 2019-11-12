import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import { Link } from 'react-router-dom'



class Checkout extends Component {
  constructor(props){
    super(props);

    this.state = {

    };

  }

  render(){
    return(
      <div id="checkout_section">
        <h1>Checkout</h1>
          <div className="checkout-item">
            <img className="checkout-item-pic" src="/tops/7.jpg" />
            <p className="item-name">White Dress with Black Design</p>
            <p className="item-price">$15</p>
          </div>
      </div>
    );
  }
}

export default Checkout;
