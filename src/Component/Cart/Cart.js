import React from 'react';
import './Cart.css';

const Cart = (props) => {
    const {cart} = props;
    let total = 0;
    let writerName = [];
    for(const writer of cart){
        total = parseFloat(total + writer.price);
        const writerNam = writer.name;
        writerName.push(writerNam)
    }

    return (
        <div className='cart-container'>
        <h3>cart Summary</h3>
            <h4>Writers Added: <span>{props.cart.length}</span></h4>
            <h4>Total Cost:$ <span>{total}</span></h4>
            <h5>Selected Writer</h5>
            {writerName.map((name) =><li>{name}</li>)}
        </div>
    );
};

export default Cart;