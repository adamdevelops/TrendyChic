import React, {Component} from 'react';
import '../styles.css';

class Featured extends Component {

  render(){
    return(
      <div id="featured_section">
        <h1>Featured Items</h1>
        <div className="feat_item">
          <a id="tops" className="feat_pic">
            <img className="feat_pic" src="/rsz_top.jpg" alt="clothing item" />
          </a>
          <a className="feat_name">Tops</a>
        </div>
        <div className="feat_item">
          <a id="bottoms" className="feat_pic">
            <img className="feat_pic" src="/rsz_pants.jpg" alt="clothing item" />
          </a>
          <a className="feat_name">Bottoms</a>
        </div>
        <div className="feat_item">
          <a id="shoes" className="feat_pic">
            <img className="feat_pic" src="/rsz_shoes.jpg" alt="clothing item" />
          </a>
          <a className="feat_name">Shoes</a>
        </div>
        <div className="feat_item">
          <a id="accessories" className="feat_pic">
            <img className="" src="/rsz_accessories.jpg" alt="clothing item" />
          </a>
          <a className="feat_name">Accessories</a>
        </div>
      </div>
    );
  }
}

export default Featured;