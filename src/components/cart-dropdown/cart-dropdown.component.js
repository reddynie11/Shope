import React from 'react';

import { Button } from 'react-bootstrap';

import './cart-dropdown.styles.scss';

const CartDropdown = () => {
    return(
        <div className='cart-dropdown'>
            <div className="cart-items"></div>
            <Button className="button">GO TO CHECKOUT</Button>
        </div>
    )
}
export default CartDropdown;