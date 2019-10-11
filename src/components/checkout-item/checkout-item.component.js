import React from 'react';
import { connect } from 'react-redux';

import './checkout-item.styles.scss';

import { clearItemfromCart } from '../../redux/cart/cart.actions';

const CheckoutItem = ({cartItem, clearItem})=>{
    return(
        <div className='checkout-item'>
            <div className='image-container'>
                <img src={cartItem.imageUrl} alt='item' />
            </div>
            <span className='name'>{cartItem.name}</span>
            <span className='quantity'>{cartItem.quantity}</span>
            <span className='price'>INR {cartItem.price*50}</span>
            <div className='remove-button' onClick={()=> clearItem(cartItem)}>&#10006;</div>
        </div>
    )
}
const mapDispatchToProps = (dispatch)=>{
    return{
        clearItem: (item)=> dispatch(clearItemfromCart(item))
    }
}


export default connect(null, mapDispatchToProps)(CheckoutItem);
