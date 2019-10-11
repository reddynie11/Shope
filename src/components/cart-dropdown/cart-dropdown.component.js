import React from 'react';
import { connect } from 'react-redux'
import { Button } from 'react-bootstrap';
import { withRouter } from 'react-router-dom';

import CartItem from '../cart-item/cart-item.component';

import './cart-dropdown.styles.scss';

import { toggleCartHidden } from '../../redux/cart/cart.actions'

const CartDropdown = ({cartItems, history, toggleCartHidden}) => {
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
            <Button className="button" 
                    onClick={()=> {
                        history.push('/checkout'); 
                        toggleCartHidden();
                    }}
            >GO TO CHECKOUT</Button>
        </div>
    )
}
const mapStateToProps = (state)=>{
    return {
        cartItems: state.cart.cartItems
    }
}
const mapDispatchToProps = (dispatch)=>{
    return{
        toggleCartHidden: ()=> dispatch(toggleCartHidden())
    }
}

export default withRouter(connect(mapStateToProps,mapDispatchToProps)(CartDropdown));