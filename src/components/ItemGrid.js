import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import '../styles.css';

class ItemGrid extends Component {
  constructor(props){
    super(props);

    this.state = {};

    this.openSearchBar = this.openSearchBar.bind(this);
  }

  openSearchBar() {
    this.setState({showSearchBar: !this.state.showSearchBar});
  }

  render(){
    return(
      <div id="item-area">
        <div id="side-menu">

        </div>
        <div id="item-grid">
          <div class="item-product">
            1
          </div>
          <div class="item-product">
            2
          </div>
          <div class="item-product">
            3
          </div>
          <div class="item-product">
            4
          </div>
          <div class="item-product">
            5
          </div>
          <div class="item-product">
            6
          </div>
          <div class="item-product">
            7
          </div>
          <div class="item-product">
            8
          </div>
          <div class="item-product">
            9
          </div>
        </div>
      </div>
    );
  }
}

export default ItemGrid;
