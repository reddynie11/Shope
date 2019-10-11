import React from 'react';
import { connect } from 'react-redux'
import { Button } from 'react-bootstrap';
import { withRouter } from 'react-router-dom';

import CartItem from '../cart-item/cart-item.component';

import './cart-dropdown.styles.scss';

const CartDropdown = ({cartItems, history}) => {
    return(
        <div className='cart-dropdown'>
            <div className="cart-items">
                {
                    cartItems.length ?
                    cartItems.map((item)=>{
                    return(
                        <CartItem key={item.id} item={item} />
                    )
                }):(<span className='empty-msg'>Your cart is empty</span>)
                }
            </div>
            <Button className="button" onClick={()=> history.push('/checkout')}>GO TO CHECKOUT</Button>
        </div>
    )
}
const mapStateToProps = (state)=>{
    return {
        cartItems: state.cart.cartItems
    }
}

export default withRouter(connect(mapStateToProps)(CartDropdown));