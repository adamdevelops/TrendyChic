import React from 'react';
import ReactDOM from 'react-dom';
import { Link } from 'react-router-dom'



const Clothing = () => {

  return (
    <div id="featured_section">
      <h1>Clothing</h1>
      <div className="feat_item">
        <Link id="tops" className="feat_pic" to="/item">
          <img className="feat_pic" src="/rsz_top.jpg" />
        </Link>
        <Link className="feat_name">Tops</Link>
      </div>
      <div className="feat_item">
        <Link id="bottoms" className="feat_pic" to="/item">
          <img className="feat_pic" src="/rsz_pants.jpg" />
        </Link>
        <Link className="feat_name">Bottoms</Link>
      </div>
      <div className="feat_item">
        <Link id="shoes" className="feat_pic" to="/item">
          <img className="feat_pic" src="/rsz_shoes.jpg" />
        </Link>
        <Link className="feat_name">Shoes</Link>
      </div>
      <div className="feat_item">
        <Link id="accessories" className="feat_pic" to="/item">
          <img className="" src="/rsz_accessories.jpg" />
        </Link>
        <Link className="feat_name">Accessories</Link>
      </div>
    </div>
  );
}

export default Clothing;
