import React, {Component} from 'react';
import { Link } from 'react-router-dom'

import '../styles.css';

class Featured extends Component {

  render(){
    return(
      <div id="featured_section">
        <h1>Featured Items</h1>
        <div className="feat_item">
          <Link id="tops" className="feat_pic" to="/item">
            <img className="feat_pic" src="/rsz_top.jpg" alt="clothing item" />
          </Link>
          <Link className="feat_name" to="/item">Tops</Link>
        </div>
        <div className="feat_item">
          <Link id="bottoms" className="feat_pic" to="/item">
            <img className="feat_pic" src="/rsz_pants.jpg" alt="clothing item" />
          </Link>
          <Link className="feat_name" to="/item">Bottoms</Link>
        </div>
        <div className="feat_item">
          <Link id="shoes" className="feat_pic" to="/item">
            <img className="feat_pic" src="/rsz_shoes.jpg" alt="clothing item" />
          </Link>
          <Link className="feat_name" to="/item">Shoes</Link>
        </div>
        <div className="feat_item">
          <Link id="accessories" className="feat_pic" to="/item">
            <img className="" src="/rsz_accessories.jpg" alt="clothing item" />
          </Link>
          <Link className="feat_name" to="/item">Accessories</Link>
        </div>
      </div>
    );
  }
}

export default Featured;
