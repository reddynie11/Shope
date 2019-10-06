import React from 'react';
import { connect } from 'react-redux';

import { toggleCartHidden } from '../../redux/cart/cart.actions'

import './cart.styles.scss';

const CartIcon = ({ toggleCartHidden})=>{
    return(
        <div className='cart-icon' onClick={toggleCartHidden} >
            <span className='shopping-icon'>
                CART - <span className="item-count"> 0 </span>
            </span>
            
        </div>
    )
}

const mapDispatchToProps = (dispatch)=> {
    return{
        toggleCartHidden: ()=> dispatch(toggleCartHidden())
    }
}

export default connect(null,mapDispatchToProps)(CartIcon);