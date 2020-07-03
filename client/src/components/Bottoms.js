import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import { connect } from 'react-redux';
import { addITEM, addFAVORITE, filterSIZE, filterCOLOR, filterPRICE } from '../actions';
// import Slider from 'react-rangeslider'
import '../styles.css';
// import 'react-rangeslider/lib/index.css'

const fav_heart = {
  color: 'black',
};

class Bottoms extends Component {
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
    this.filterColor = this.filterColor.bind(this);
    this.filterPrice = this.filterPrice.bind(this);

  }

  openSearchBar() {
    this.setState({showSearchBar: !this.state.showSearchBar});
  }

  addFavorite = (event, item, id) => {
    // fav_heart = {
    //   color: 'red',
    // };

    let icon_id = 'fav-icon' + id;
    console.log(icon_id)

    let fav_heart = document.getElementById(icon_id);
    ReactDOM.findDOMNode(fav_heart).style.color = 'red';

    this.props.addFAVORITE(item);
  }

  addToCart = (event, item) => {
    this.props.addITEM(item);
  }

  filterSize = (event, size, checked_status) => {
    checked_status = !checked_status;
    console.log('filterSize');

    let checked = [...this.state.checked]
    checked[size-1] = checked_status;
    this.setState({checked});

    event.preventDefault();

    console.log(checked_status)
    this.props.filterSIZE(size, checked_status, this.props.clothing);
  }

  filterColor = (event, color) => {
    console.log('filterColor');

    event.preventDefault();

    this.props.filterCOLOR(color, this.props.clothing);
  }

  filterPrice = (event, price) => {
    console.log('filterPrice');

    event.preventDefault();

    this.props.filterPRICE(price, this.props.clothing);
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
          <img className="item" src={item.imgSrc + '.jpg'} alt="clothing item"
            srcSet={`${item.imgSrc + '-small.jpg'} 300w, ${item.imgSrc + '.jpg'} 700w`}
            />
          <a className="fav-link"><i id={`fav-icon${item.id}`} className="fa fa-heart fav-icon pointer" style={fav_heart} aria-hidden="true" onClick={(event) => this.addFavorite(event, item, item.id)}></i></a>
          <p className="item-name">{item.name}</p>
          <p className="item-price">${item.price}</p> <button className="addtoCart_btn" onClick={(event) => this.addToCart(event, item)}>Add</button>
        </div>
      )
    }
  )
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
                <a href="/item" onClick={(event) => this.filterSize(event, 1, this.state.checked[0])}>
                  <label className="container">XS </label>
                </a>
              </li>
              <li className="">
                <a href="/item" onClick={(event) => this.filterSize(event, 2, this.state.checked[1])}>
                  <label className="container">S </label>
                </a>
              </li>
              <li className="">
                <a href="/item" onClick={(event) => this.filterSize(event, 3, this.state.checked[2])}>
                  <label className="container">M </label>
                </a>
              </li>
              <li className="">
                <a href="/item" onClick={(event) => this.filterSize(event, 4, this.state.checked[3])}>
                  <label className="container">L </label>
                </a>
              </li>
              <li className="">
                <a href="/item" onClick={(event) => this.filterSize(event, 5, this.state.checked[4])}>
                  <label className="container">XL </label>
                </a>
              </li>
              <li className="">
                <a href="/item" onClick={(event) => this.filterSize(event, 6, this.state.checked[5])}>
                  <label className="container">XXL </label>
                </a>
              </li>
              <li className="">
                <a href="/item" onClick={(event) => this.filterSize(event, 8, this.state.checked[8])}>
                  Clear
                </a>
              </li>
            </ul>
          </div>
          <div className="color-box">
            <h5>Color:</h5>
            <ul className="color-list">
              <li className="swatch color-swatch-black pointer" onClick={(event) => this.filterColor(event, 1)}>
                <a href="/item" >  </a>
              </li>
              <li className="swatch color-swatch-blue pointer" onClick={(event) => this.filterColor(event, 2)}>
                <a href="/item">  </a>
              </li>
              <li className="swatch color-swatch-red pointer" onClick={(event) => this.filterColor(event, 3)}>
                <a href="/item">  </a>
              </li>   <br />
            <li className="swatch color-swatch-nude pointer" onClick={(event) => this.filterColor(event, 4)}>
                  <a href="/item">  </a>
              </li>
              <li className="swatch color-swatch-white pointer" onClick={(event) => this.filterColor(event, 5)}>
                <a href="/item">  </a>
              </li>
              <li className="swatch color-swatch-grey pointer" onClick={(event) => this.filterColor(event, 6)}>
                <a href="/item">  </a>
              </li>   <br />
            <li className="swatch color-swatch-purple pointer" onClick={(event) => this.filterColor(event, 7)}>
                <a href="/item">  </a>
              </li>
              <li className="swatch color-swatch-brown pointer" onClick={(event) => this.filterColor(event, 8)}>
                <a href="/item">  </a>
              </li>
              <li className="swatch color-swatch-yellow pointer" onClick={(event) => this.filterColor(event, 9)}>
                <a href="/item">  </a>
              </li>  <br />
            <li className="swatch color-swatch-orange pointer" onClick={(event) => this.filterColor(event, 10)}>
                <a href="/item">  </a>
              </li>
              <li className="swatch color-swatch-pink pointer" onClick={(event) => this.filterColor(event, 11)}>
                <a href="/item">  </a>
              </li>
              <li className="swatch color-swatch-green pointer" onClick={(event) => this.filterColor(event, 12)}>
                <a href="/item">  </a>
              </li>  <br />
            </ul>
          </div>
          <div className="price-range">
            <h5 className="">Price:</h5>
            <ul className="prices">
              <li><a href="/item" className="pointer" onClick={(event) => this.filterPrice(event, 10)}>$10</a></li>
              <li><a href="/item" className="pointer" onClick={(event) => this.filterPrice(event, 20)}>$20</a></li>
              <li><a href="/item" className="pointer" onClick={(event) => this.filterPrice(event, 30)}>$30</a></li>
              <li><a href="/item" className="pointer" onClick={(event) => this.filterPrice(event, 40)}>$40</a></li>
              <li><a href="/item" className="pointer" onClick={(event) => this.filterPrice(event, 50)}>$50</a></li>
              <li><a href="/item" className="pointer" onClick={(event) => this.filterPrice(event, 100)}>$100</a></li>
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

const mapStateToProps = (state, props) => {
  console.log('State in ItemGrid')
  console.log(state)
  console.log(state.apps.clothing)
  console.log(state.apps.displayed_clothing)
  if (state.apps.displayed_clothing === undefined | state.apps.displayed_clothing.length === 0){
    return {clothing: state.apps.bottoms}
  };
  return{clothing: state.apps.displayed_clothing}
}

export default connect(mapStateToProps, {addITEM, addFAVORITE, filterSIZE, filterCOLOR, filterPRICE})(Bottoms);
