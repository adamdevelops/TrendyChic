import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import { Link } from 'react-router-dom'



class Account extends Component {
  constructor(props){
    super(props);

    this.state = {

    };

  }

  render(){
    return(
      <div id="account-section">
        <div className="recent-orders">
          <h1>Recent Orders</h1>
            <div className="checkout-item">
              <img className="checkout-item-pic fleft" src="/tops/7.jpg" />
              <p className="item-name">White Dress with Black Design</p>
              <p className="item-price">$15</p>
              <button className="remove_button">Remove</button>
            </div>
        </div>
        <div className="favorites">
          <h1>Favorites</h1>
            <div className="checkout-item">
              <img className="fav-item-pic fleft" src="/tops/7.jpg" />
              <p className="item-name">White Dress with Black Design</p>
              <p className="item-price">$15</p>
              <button className="remove_button">Remove</button>
            </div>
            <hr />
              <div className="checkout-item">
                <img className="fav-item-pic fleft" src="/tops/3.jpg" />
                <p className="item-name">White Dress with Black Design</p>
                <p className="item-price">$15</p>
                <button className="remove_button">Remove</button>
              </div>
        </div>
      </div>
    );
  }
}

export default Account;
