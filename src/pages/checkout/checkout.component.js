import React from 'react';
import { connect } from 'react-redux';

import './checkout.styles.scss';

import CheckoutItem from '../../components/checkout-item/checkout-item.component';

const CheckOutPage = ({cartItems,total})=>{
    console.log(cartItems)
    return(
        <div className='checkout-page'>
            <div className='checkout-header'>
                <div className='header-block'>
                    <span>Product</span>
                </div>
                <div className='header-block'>
                    <span>Description</span>
                </div>
                <div className='header-block'>
                    <span>Quantity</span>
                </div>
                <div className='header-block'>
                    <span>Price</span>
                </div>
                <div className='header-block'>
                    <span>Remove</span>
                </div>
            </div>
            {
                cartItems.map((item)=> (
                    <CheckoutItem key={item.id} cartItem={item} />
                ))
            }
            <div className='total'>
                <span>Total: INR {total*50}</span>
            </div>
        </div>
    )
}
const mapStateToProps = (state)=>{
    return{
        cartItems: state.cart.cartItems,
        total : state.cart.cartItems.reduce((accumilateQty, item)=> accumilateQty+item.quantity*item.price,0)
    }
}


export default connect(mapStateToProps)(CheckOutPage);