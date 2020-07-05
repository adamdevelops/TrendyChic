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
            <img className="feat_pic" src="../extras/rsz_top.jpg" alt="clothing item" />
          </Link>
          <Link className="feat_name" to="/item">Tops</Link>
        </div>
        <div className="feat_item">
          <Link id="bottoms" className="feat_pic" to={{ pathname: '/bottoms', state: { type: 1 }}}>
            <img className="feat_pic" src="../extras/rsz_pants.jpg" alt="clothing item" />
          </Link>
          <Link className="feat_name" to="/bottoms">Bottoms</Link>
        </div>
        <div className="feat_item">
          <Link id="shoes" className="feat_pic" to="/shoes">
            <img className="feat_pic" src="../extras/rsz_shoes.jpg" alt="clothing item" />
          </Link>
          <Link className="feat_name" to="/shoes">Shoes</Link>
        </div>
        <div className="feat_item">
          <Link id="accessories" className="feat_pic" to="/accessories">
            <img className="feat_pic" src="../extras/rsz_accessories.jpg" alt="clothing item" />
          </Link>
          <Link className="feat_name" to="/accessories">Accessories</Link>
        </div>
      </div>
    );
  }
}

export default Featured;
