import React, {Component} from 'react';
import { connect } from 'react-redux';
import { addITEM } from '../actions';
// import Slider from 'react-rangeslider'
import '../styles.css';
// import 'react-rangeslider/lib/index.css'


class ItemGrid extends Component {
  constructor(props, context){
    super(props, context);


    this.openSearchBar = this.openSearchBar.bind(this);
    this.addToCart = this.addToCart.bind(this);
  }

  openSearchBar() {
    this.setState({showSearchBar: !this.state.showSearchBar});
  }

  addToCart(){

  }

  handleChangeStart = () => {
    console.log('Change event started')
  };

  handleChange = value => {
    this.setState({
      value: value
    })
  };

  handleChangeComplete = () => {
    console.log('Change event completed')
  };



  render(){
    console.log('props')
    console.log(this.props.clothing)
    return(
      <div id="item-area">
        <div id="side-menu">
          <h3>Filters</h3>
          <div className="size-box">
            <h5>Size:</h5>
            <ul>
              <li className="">
                <a>
                  <label className="container">XS
                    <input type="checkbox" />
                    <span className="checkmark"></span>
                  </label>
                </a>
              </li>
              <li className="">
                <a>
                  <label className="container">S
                    <input type="checkbox" />
                    <span className="checkmark"></span>
                  </label>
                </a>
              </li>
              <li className="">
                <a>
                  <label className="container">M
                    <input type="checkbox" />
                    <span className="checkmark"></span>
                  </label>
                </a>
              </li>
              <li className="">
                <a>
                  <label className="container">L
                    <input type="checkbox" />
                    <span className="checkmark"></span>
                  </label>
                </a>
              </li>
              <li className="">
                <a>
                  <label className="container">XL
                    <input type="checkbox" />
                    <span className="checkmark"></span>
                  </label>
                </a>
              </li>
              <li className="">
                <a>
                  <label className="container">XXL
                    <input type="checkbox" />
                    <span className="checkmark"></span>
                  </label>
                </a>
              </li>
            </ul>
          </div>
          <div className="color-box">
            <h5>Color:</h5>
            <ul className="color-list">
              <li className="swatch color-swatch-black pointer">
                <a>  </a>
              </li>
              <li className="swatch color-swatch-blue pointer">
                <a>  </a>
              </li>
              <li className="swatch color-swatch-red pointer">
                <a>  </a>
              </li>   <br />
              <li className="swatch color-swatch-nude pointer">
                  <a>  </a>
              </li>
              <li className="swatch color-swatch-white pointer">
                <a>  </a>
              </li>
              <li className="swatch color-swatch-grey pointer">
                <a>  </a>
              </li>   <br />
              <li className="swatch color-swatch-purple pointer">
                <a>  </a>
              </li>
              <li className="swatch color-swatch-brown pointer">
                <a>  </a>
              </li>
              <li className="swatch color-swatch-yellow pointer">
                <a>  </a>
              </li>  <br />
              <li className="swatch color-swatch-orange pointer">
                <a>  </a>
              </li>
              <li className="swatch color-swatch-pink pointer">
                <a>  </a>
              </li>
              <li className="swatch color-swatch-green pointer">
                <a>  </a>
              </li>  <br />
            </ul>
          </div>
          <div className="price-range">
            <h5 className="">Price:</h5>
            <ul className="prices">
              <li><a className="pointer">$10</a></li>
              <li><a className="pointer">$20</a></li>
              <li><a className="pointer">$30</a></li>
              <li><a className="pointer">$40</a></li>
              <li><a className="pointer">$50</a></li>
              <li><a className="pointer">$100</a></li>
            </ul>
          </div>
        </div>
        <div id="item-grid">
          <div className="item-product">
            <img className="item" src={this.props.clothing[0].imgSrc} alt="clothing item" />
            <p className="item-name">{this.props.clothing[0].name}</p>
            <p className="item-price">${this.props.clothing[0].price}</p> <button className="addtoCart_btn">Add</button>
          </div>
          <div className="item-product">
            <img className="item" src="/tops/4.jpg" alt="clothing item" />
            <p className="item-name">Nude Dress with Blue Floral Design</p>
            <p className="item-price">$20</p>
          </div>
          <div className="item-product">
            <img className="item" src="/tops/5.jpg" alt="clothing item" />
            <p className="item-name">White Dress with Gold Design</p>
            <p className="item-price">$15</p>
          </div>
          <div className="item-product">
            <img className="item" src="/tops/6.jpg" alt="clothing item" />
            <p className="item-name">Brown Button Shirt</p>
            <p className="item-price">$15</p>
          </div>
          <div className="item-product">
            <img className="item" src="/tops/7.jpg" alt="clothing item" />
            <p className="item-name">Yellow Dress</p>
            <p className="item-price">$27</p>
          </div>
          <div className="item-product">
            <img className="item" src="/tops/8.jpg" alt="clothing item" />
            <p className="item-name">White Dress with Flower Design</p>
            <p className="item-price">$40</p>
          </div>
          <div className="item-product">
            <img className="item" src="/tops/9.jpg" alt="clothing item" />
            <p className="item-name">White Blossom Mary shirt</p>
            <p className="item-price">$13</p>
          </div>
          <div className="item-product">
            <img className="item" src="/tops/3.jpg" alt="clothing item" />
            <p className="item-name">White Dress with Black Design</p>
            <p className="item-price">$22</p>
          </div>
          <div className="item-product">
            <img className="item" src="/tops/3.jpg" alt="clothing item" />
            <p className="item-name">White Dress with Black Design</p>
            <p className="item-price">$22</p>
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  console.log('State in ItemGrid')
  console.log(state.apps[0].clothing)
  return {clothing: state.apps[0].clothing}
}

export default connect(mapStateToProps, {addITEM})(ItemGrid);
