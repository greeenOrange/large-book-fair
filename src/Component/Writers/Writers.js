import React, { useEffect } from 'react';
import './Writers.css'
import { useState } from 'react';
import Writer from '../Write/Writer';
import Cart from '../Cart/Cart';

const Writers = () => {
    const [writers,setWriters] = useState([]);
    const [cart, setCart] = useState([])
    useEffect(()=>{
        fetch('./writers.JSON')
        .then(res => res.json())
        .then(data => setWriters(data))
    },[]);
    const handleAddToCart = (writers)=> {
        const newCart = [...cart, writers];
        setCart(newCart);
    }
    return (
        <div className='writers-container'>
            <div className="writer-style">
            {
                writers.map(writer => <Writer 
                key={writer.name}
                 writer={writer}
                
                 handleAddToCart={handleAddToCart}
                ></Writer>)
            }
            </div>
            <div>
            <Cart cart={cart}></Cart>
          </div>
        </div>
    );
};

export default Writers;