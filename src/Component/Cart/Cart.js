import React from 'react';
import './Cart.css';

const Cart = (props) => {
    const {cart} = props;
    console.log(cart);
    let total = 0;
    let writerName = [];
    for(const writer of cart){
        total = parseFloat(total + writer.price);
        const writerNam = writer.name;
        writerName.push(writerNam)
    }
    console.log(writerName);
    return (
        <div className=''>
        <h3>cart Summary</h3>
            <h4>Writers Added:{props.cart.length}</h4>
            <h4>Total Cost:{total}</h4>
            <h4>Select Writer</h4>
            {writerName.map((name) =><li>{name}</li>)}
        </div>
    );
};

export default Cart;