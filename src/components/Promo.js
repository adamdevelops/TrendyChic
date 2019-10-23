import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import '../styles.css';

class Promo extends Component {
  constructor(props){
    super(props);

  }

  render(){
    return(
      <div id="promo">
        <picture>
          <img className="responsive-promo" src="/rsz_adult-beautiful-black-clothes-1040424.jpg" />
        </picture>
      </div>
    );
  }
}

export default Promo;
