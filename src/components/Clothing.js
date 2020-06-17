import React from 'react';
import { Link } from 'react-router-dom'



const Clothing = () => {

  return (
    <div id="featured_section">
      <h1>Clothing</h1>
      <div className="feat_item">
        <Link id="tops" className="feat_pic" to="/item">
          <img className="feat_pic" src="/rsz_top.jpg" alt="featured section tops menu" />
        </Link>
        <Link className="feat_name">Tops</Link>
      </div>
      <div className="feat_item">
        <Link id="bottoms" className="feat_pic" to="/bottoms">
          <img className="feat_pic" src="/rsz_pants.jpg" alt="featured section bottoms menu"/>
        </Link>
        <Link className="feat_name">Bottoms</Link>
      </div>
      <div className="feat_item">
        <Link id="shoes" className="feat_pic" to="/shoes">
          <img className="feat_pic" src="/rsz_shoes.jpg" alt="featured section shoes menu"/>
        </Link>
        <Link className="feat_name">Shoes</Link>
      </div>
      <div className="feat_item">
        <Link id="accessories" className="feat_pic" to="/accessories">
          <img className="" src="/rsz_accessories.jpg" alt="featured section accessories menu"/>
        </Link>
        <Link className="feat_name">Accessories</Link>
      </div>
    </div>
  );
}

export default Clothing;
