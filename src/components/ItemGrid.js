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
          <h3>Filters</h3>
          <div className="size-box">
            <h5>Size:</h5>
            <ul>
              <li className="">
                <a>
                  <label class="container">XS
                    <input type="checkbox" />
                    <span class="checkmark"></span>
                  </label>
                </a>
              </li>
              <li className="">
                <a>
                  <label class="container">S
                    <input type="checkbox" />
                    <span class="checkmark"></span>
                  </label>
                </a>
              </li>
              <li className="">
                <a>
                  <label class="container">M
                    <input type="checkbox" />
                    <span class="checkmark"></span>
                  </label>
                </a>
              </li>
              <li className="">
                <a>
                  <label class="container">L
                    <input type="checkbox" />
                    <span class="checkmark"></span>
                  </label>
                </a>
              </li>
              <li className="">
                <a>
                  <label class="container">XL
                    <input type="checkbox" />
                    <span class="checkmark"></span>
                  </label>
                </a>
              </li>
              <li className="">
                <a>
                  <label class="container">XXL
                    <input type="checkbox" />
                    <span class="checkmark"></span>
                  </label>
                </a>
              </li>
            </ul>
          </div>
          <div className="color-box">
            <h5>Color:</h5>
              <ul className="color-list">
                <li className="swatch color-swatch-black">
                  <a>  </a>
                </li>
                <li className="swatch color-swatch-blue">
                  <a>  </a>
                </li>
                <li className="swatch color-swatch-red">
                  <a>  </a>
                </li>   <br />
                <li className="swatch color-swatch-green">
                    <a>  </a>
                </li>
                <li className="swatch color-swatch-white">
                  <a>  </a>
                </li>
                <li className="swatch color-swatch-grey">
                  <a>  </a>
                </li>   <br />
                <li className="swatch color-swatch-purple">
                  <a>  </a>
                </li>
                <li className="swatch color-swatch-brown">
                  <a>  </a>
                </li>
                <li className="swatch color-swatch-yellow">
                  <a>  </a>
                </li>  <br />

              </ul>
          </div>
        </div>
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
