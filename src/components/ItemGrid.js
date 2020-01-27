import React, {Component} from 'react';
import { connect } from 'react-redux';
import { addITEM, addFAVORITE, filterSIZE } from '../actions';
// import Slider from 'react-rangeslider'
import '../styles.css';
// import 'react-rangeslider/lib/index.css'


class ItemGrid extends Component {
  constructor(props){
    super(props);

    this.state = {
      checked: [false, false, false, false, false, false],

      checked_color: false
    }

    this.openSearchBar = this.openSearchBar.bind(this);
    this.addFavorite = this.addFavorite.bind(this);
    this.addToCart = this.addToCart.bind(this);
    this.filterSize = this.filterSize.bind(this);

  }

  openSearchBar() {
    this.setState({showSearchBar: !this.state.showSearchBar});
  }

  addFavorite = (event, item) => {
    this.props.addFAVORITE(item);
  }

  addToCart = (event, item) => {
    this.props.addITEM(item);
  }

  filterSize = (event, size, checked_status) => {
    console.log('filterSize in ItemGrid')
    checked_status = !checked_status; // change status to checked for check box

    let checked = [...this.state.checked];
    checked[size-1] = checked_status;
    this.setState({checked});

    console.log(this.state.checked)

    event.preventDefault();

    console.log(checked_status)
    this.props.filterSIZE(size, checked_status);
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
          <i className="fa fa-heart fav-icon pointer" aria-hidden="true" onClick={(event) => this.addFavorite(event, item)}></i>
          <p className="item-name">{item.name}</p>
          <p className="item-price">${item.price}</p> <button className="addtoCart_btn" onClick={(event) => this.addToCart(event, item)}>Add</button>
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
                <a href="/item" onClick={(event) => this.filterSize(event, 1, this.state.checked[0])}>
                  <label className="container">XS
                    <input type="checkbox" />
                    <span className="checkmark"></span>
                  </label>
                </a>
              </li>
              <li className="">
                <a href="/item" onClick={(event) => this.filterSize(event, 2, this.state.checked[1])}>
                  <label className="container">S
                    <input type="checkbox" />
                    <span className="checkmark"></span>
                  </label>
                </a>
              </li>
              <li className="">
                <a href="/item">
                  <label className="container">M
                    <input type="checkbox" />
                    <span className="checkmark"></span>
                  </label>
                </a>
              </li>
              <li className="">
                <a href="/item">
                  <label className="container">L
                    <input type="checkbox" />
                    <span className="checkmark"></span>
                  </label>
                </a>
              </li>
              <li className="">
                <a href="/item">
                  <label className="container">XL
                    <input type="checkbox" />
                    <span className="checkmark"></span>
                  </label>
                </a>
              </li>
              <li className="">
                <a href="/item">
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
                <a href="/item">  </a>
              </li>
              <li className="swatch color-swatch-blue pointer">
                <a href="/item">  </a>
              </li>
              <li className="swatch color-swatch-red pointer">
                <a href="/item">  </a>
              </li>   <br />
              <li className="swatch color-swatch-nude pointer">
                  <a href="/item">  </a>
              </li>
              <li className="swatch color-swatch-white pointer">
                <a href="/item">  </a>
              </li>
              <li className="swatch color-swatch-grey pointer">
                <a href="/item">  </a>
              </li>   <br />
              <li className="swatch color-swatch-purple pointer">
                <a href="/item">  </a>
              </li>
              <li className="swatch color-swatch-brown pointer">
                <a href="/item">  </a>
              </li>
              <li className="swatch color-swatch-yellow pointer">
                <a href="/item">  </a>
              </li>  <br />
              <li className="swatch color-swatch-orange pointer">
                <a href="/item">  </a>
              </li>
              <li className="swatch color-swatch-pink pointer">
                <a href="/item">  </a>
              </li>
              <li className="swatch color-swatch-green pointer">
                <a href="/item">  </a>
              </li>  <br />
            </ul>
          </div>
          <div className="price-range">
            <h5 className="">Price:</h5>
            <ul className="prices">
              <li><a href="/item" className="pointer">$10</a></li>
              <li><a href="/item" className="pointer">$20</a></li>
              <li><a href="/item" className="pointer">$30</a></li>
              <li><a href="/item" className="pointer">$40</a></li>
              <li><a href="/item" className="pointer">$50</a></li>
              <li><a href="/item" className="pointer">$100</a></li>
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
  console.log(state)
  console.log(state.apps.clothing)
  console.log(state.apps.displayed_clothing)
  if (state.apps.displayed_clothing === undefined | state.apps.displayed_clothing.length === 0){
    return {clothing: state.apps.clothing}
  };
  return{clothing: state.apps.displayed_clothing}
}

export default connect(mapStateToProps, {addITEM, addFAVORITE, filterSIZE})(ItemGrid);
