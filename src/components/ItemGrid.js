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

  renderClothing(){
    return this.props.clothing.map((item) => {
      return(
        <div className="item-product" key={item.id}>
          <img className="item" src={item.imgSrc} alt="clothing item" />
          <p className="item-name">{item.name}</p>
          <p className="item-price">${item.price}</p> <button className="addtoCart_btn">Add</button>
        </div>
      )
    }
  )
}



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
          {this.renderClothing()}
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
