import React from 'react';

import './cart.styles.scss';

const CartIcon = ()=>{
    return(
        <div className='cart-icon'>
            <span className='shopping-icon'>CART - <span className="item-count"> 0 </span></span>
            
        </div>
    )
}
export default CartIcon;