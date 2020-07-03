import React, {Component} from 'react';
import '../styles.css';

class Promo extends Component {

  render(){
    return(
      <div id="promo">
        <picture>
          <img className="responsive-promo" src="/rsz_adult-beautiful-black-clothes-1040424.jpg" alt="Promo"/>
        </picture>
      </div>
    );
  }
}

export default Promo;
