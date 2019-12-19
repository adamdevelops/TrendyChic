import React, {Component} from 'react';
import { connect } from 'react-redux';



class Account extends Component {
  constructor(props){
    super(props);

    this.state = {

    };

    this.renderFavorites = this.renderFavorites.bind(this);

  }

  renderFavorites(){
    console.log('renderFavorites')
    console.log(this.props.favorites)
    return this.props.favorites.map((favorites_item) => {
      return(
        <div key={favorites_item.id}>
          <div className="checkout-item">
            <img className="fav-item-pic fleft" src="/tops/8.jpg" alt="clothing item"/>
            <p className="item-name">{this.props.favorites_item.name}</p>
            <p className="item-price">${this.props.favorites_item.price}</p>
            <button className="remove_button">Remove</button>
          </div>
          <hr />
        </div>
      )
    }
  )
}

  render(){
    return(
      <div id="account-section">
        <div className="recent-orders">
          <h1>Recent Orders</h1>
            <div className="checkout-item">
              <img className="checkout-item-pic fleft" src="/tops/7.jpg" alt="clothing item"/>
              <p className="item-name">White Dress with Black Design</p>
              <p className="item-price">$15</p>
              <button className="remove_button">Remove</button>
            </div>
        </div>
        <div className="favorites">
          <h1>Favorites</h1>
            {this.renderFavorites()}
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  console.log('mapStateToProps')
  console.log('State in Cart')
  console.log(state.apps.act.favorites)

  return {favorites: state.apps.act.favorites}
}

export default connect(mapStateToProps)(Account);
