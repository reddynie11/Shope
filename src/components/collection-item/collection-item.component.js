import React from 'react';
import { Button } from 'react-bootstrap';
import { connect } from 'react-redux';

import { addItem } from '../../redux/cart/cart.actions'
import './collection-item.styles.scss';

const CollectionItem = ({item , addItem})=>{
    const { name, imageUrl, price} = item;
    return(
        <div className='collection-item'>
            <div className='image'
                style={{
                    backgroundImage:`url(${imageUrl})`
                }}/>
            <div className='collection-footer' >
                <span className='name'>{name}</span>
                <span className='price'>INR {price*50}</span>
            </div>
            <Button className='button'onClick={()=>addItem(item)}>ADD TO CART</Button>
        </div>
    )
}

const mapDispatchToProps = (dispatch)=>{
    return {
        addItem: (item)=>{ dispatch(addItem(item))}
    }
}
export default connect(null, mapDispatchToProps)(CollectionItem);