import React from 'react';
import { connect } from 'react-redux';

import './checkout-item.styles.scss';

import { clearItemfromCart, addItem, removeItem } from '../../redux/cart/cart.actions';

const CheckoutItem = ({cartItem, clearItem, addItem, removeItem})=>{
    return(
        <div className='checkout-item'>
            <div className='image-container'>
                <img src={cartItem.imageUrl} alt='item' />
            </div>
            <span className='name'>{cartItem.name}</span>
            <span className='quantity'>
                <div className='arrow' onClick={()=> removeItem(cartItem)}>&#10094;</div>
                    <span className='value'>{cartItem.quantity}</span> 
                <div className='arrow' onClick={()=> addItem(cartItem)} >&#10095;</div>
            </span>
            <span className='price'>INR {cartItem.price*50}</span>
            <div className='remove-button' onClick={()=> clearItem(cartItem)}>&#10006;</div>
        </div>
    )
}
const mapDispatchToProps = (dispatch)=>{
    return{
        clearItem: (item)=> dispatch(clearItemfromCart(item)),
        addItem: (item)=> dispatch(addItem(item)),
        removeItem: (item)=> dispatch(removeItem(item))
    }
}


export default connect(null, mapDispatchToProps)(CheckoutItem);
