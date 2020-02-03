import React, {Component} from 'react';
import { connect } from 'react-redux';

import { Link } from 'react-router-dom'

import '../styles.css';

class Header extends Component {
  constructor(props){
    super(props);

    this.state = {showSearchBar: false};

    this.openSearchBar = this.openSearchBar.bind(this);
  }

  openSearchBar() {
    this.setState({showSearchBar: !this.state.showSearchBar});
  }

  render(){
    const cart_count = this.props.cart.length;

    return(
      <div id="header">
        <div id="logo-area">
          <h1 className="logo">TrendyChic</h1>
        </div>
        { this.state.showSearchBar &&
          <div id="search-bar">
            <input type="text" name="search" placeholder="Search.." />
          </div>
        }
        <div id="user-menu">
          <i className="user-icon fa fa-search fa-2x pointer" aria-hidden="true" onClick={this.openSearchBar}></i>
          <Link className="pointer" to="/account"><i className="user-icon fa fa-user-circle fa-2x pointer" aria-hidden="true"></i></Link>
          <Link className="pointer" to="/checkout"><i className="user-icon fa fa-shopping-bag fa-2x pointer" aria-hidden="true"></i>{cart_count}</Link>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  console.log('State in ItemGrid')
  console.log(state)
  console.log(state.apps.act)
  console.log(state.apps.displayed_clothing)

  return{cart: state.apps.act.cart}
}

export default connect(mapStateToProps)(Header);
