import React, {Component} from 'react';
import { connect } from 'react-redux';

import { deleteFAVORITE } from '../actions'


class Account extends Component {
  constructor(props){
    super(props);

    this.renderHistory = this.renderHistory.bind(this);
    this.renderFavorites = this.renderFavorites.bind(this);
    this.deleteFavorite = this.deleteFavorite.bind(this);
  }

  deleteFavorite(event, item){
    this.props.deleteFAVORITE(item)
  }

  renderHistory(){
    return this.props.history.map((order_history) => {
      return (
      <div key={order_history.id}>
        <p>Order #: {order_history.id}</p>
        {order_history.items.map((item) => {
              return(
                <div className="checkout-item" key={item.id}>
                  <img className="act-item-pic fleft" src={item.imgSrc} alt="clothing item"/>
                  <p className="item-name">{item.name}</p>
                  <p className="item-price">${item.price}</p>
                </div>
                )
          })
        }
        <hr />
      </div>
    )


    })

  }

  renderFavorites(){
    console.log('renderFavorites')
    console.log(this.props.favorites)
    return this.props.favorites.map((favorites_item) => {
      return(
        <div key={favorites_item.id}>
          <div className="checkout-item">
            <img className="act-item-pic fleft" src={favorites_item.imgSrc} alt="clothing item"/>
            <p className="item-name">{favorites_item.name}</p>
            <p className="item-price">${favorites_item.price}</p>
            <button className="remove_button" onClick={(event) => this.deleteFavorite(event, favorites_item)}>Remove</button>
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
            {this.renderHistory()}
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
  console.log('State in Favorites')
  console.log(state.apps.act.favorites)
  console.log('State in History')
  console.log(state.apps.act.history)

  return {favorites: state.apps.act.favorites, history: state.apps.act.history}
}

export default connect(mapStateToProps, {deleteFAVORITE})(Account);
