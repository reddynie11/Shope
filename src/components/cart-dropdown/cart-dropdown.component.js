import React from 'react';
import { connect } from 'react-redux'
import { Button } from 'react-bootstrap';

import CartItem from '../cart-item/cart-item.component';

import './cart-dropdown.styles.scss';

const CartDropdown = ({cartItems}) => {
    return(
        <div className='cart-dropdown'>
            <div className="cart-items">
                {cartItems.map((item)=>{
                    return(
                        <CartItem key={item.id} item={item} />
                    )
                })}
            </div>
            <Button className="button">GO TO CHECKOUT</Button>
        </div>
    )
}
const mapStateToProps = (state)=>{
    return {
        cartItems: state.cart.cartItems
    }
}

export default connect(mapStateToProps)(CartDropdown);