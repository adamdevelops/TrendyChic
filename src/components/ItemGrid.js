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
        <aside id="side-menu">
          <h3>Filters</h3>
          <div className="size-box">
            <h5>Size:</h5>
            <ul>
              <li className=""><a>XS</a></li>
              <li className=""><a>S</a></li>
              <li className=""><a>M</a></li>
              <li className=""><a>L</a></li>
              <li className=""><a>XL</a></li>
              <li className=""><a>XXL</a></li>
            </ul>
          </div>
        </aside>
        <div id="item-grid">
          <div className="item-product">
            1
          </div>
          <div className="item-product">
            2
          </div>
          <div className="item-product">
            3
          </div>
          <div className="item-product">
            4
          </div>
          <div className="item-product">
            5
          </div>
          <div className="item-product">
            6
          </div>
          <div className="item-product">
            7
          </div>
          <div className="item-product">
            8
          </div>
          <div className="item-product">
            9
          </div>
        </div>
      </div>
    );
  }
}

export default ItemGrid;
