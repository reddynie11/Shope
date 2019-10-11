import React from 'react';

import './checkout-item.styles.scss';

const CheckoutItem = ({cartItem})=>{
    return(
        <div className='checkout-item'>
            <div className='image-container'>
                <img src={cartItem.imageUrl} alt='item' />
            </div>
            <span className='name'>{cartItem.name}</span>
            <span className='quantity'>{cartItem.quantity}</span>
            <span className='price'>INR {cartItem.price*50}</span>
            <div className='remove-item'>&#10006;</div>
        </div>
    )
}

export default CheckoutItem;
