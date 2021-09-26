import React from 'react';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faShoppingCart } from '@fortawesome/free-solid-svg-icons';
import './Writer.css';
const Writer = (props) => {
    const {img,name,age,price,language} = props.writer;
    const shippingIcon = <FontAwesomeIcon icon={faShoppingCart} />
    return (
            <div className='writer-container'>
          <div className="cart">
          <img src={img} alt="" />
             <h3>Name: <span>{name}</span> </h3>
             <h3>Age: <span>{age}</span></h3>
             <h3>Language: <span>{language}</span></h3>
             <h3>Price: <span>{price}</span></h3>
          </div>
             <button onClick={() => props.handleAddToCart(props.writer)} className='cart-btn'> <span>{shippingIcon}</span> Cart</button>

          
      </div>
    );
};

export default Writer;