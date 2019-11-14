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
        </div>
        <div className="favorites">
          <h1>Favorites</h1>
        </div>
      </div>
    );
  }
}

export default Account;
