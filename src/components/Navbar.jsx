import React from 'react';
import Logotype from '../assets/Logotype.png'

function Navbar() {
    return (
        <div>
            <img className='logotype' src={Logotype} />
            <div>Demos</div>
            <div>Post</div>
            <div>Features</div>
            <div>Categories</div>
            <div>Shop</div>
            <div>Buy Now</div>
        </div>
      
    )
}

export default Navbar
