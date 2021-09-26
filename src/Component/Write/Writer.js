import React from 'react';
import './Writer.css'
const Writer = (props) => {
    const {img,name,age,price} = props.writer
    return (
            <div className='writer-container'>
          <div className="cart">
          <img src={img} alt="" />
             <h3>Name:{name} </h3>
             <h3>Age:</h3>
             <h3>Language:</h3>
             <h3>Price:{price}</h3>
             <button onClick={() => props.handleAddToCart(props.writer)} className='cart-btn'>Cart</button>
          </div>

          
      </div>
    );
};

export default Writer;