import React from 'react';
import { connect } from 'react-redux';

import { toggleCartHidden } from '../../redux/cart/cart.actions'

import './cart.styles.scss';

const CartIcon = ({ toggleCartHidden, itemCount})=>{
    return(
        <div className='cart-icon' onClick={toggleCartHidden} >
            <span className='shopping-icon'>
                CART - <span className="item-count"> {itemCount} </span>
            </span>
            
        </div>
    )
}

const mapStatetoProps = (state)=>{
    return {
        itemCount: state.cart.cartItems.reduce((accumlatedQty,item)=>{
            return accumlatedQty + item.quantity
        },0)
    }
}

const mapDispatchToProps = (dispatch)=> {
    return{
        toggleCartHidden: ()=> dispatch(toggleCartHidden())
    }
}

export default connect(mapStatetoProps,mapDispatchToProps)(CartIcon);