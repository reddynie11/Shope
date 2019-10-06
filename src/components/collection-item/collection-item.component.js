import React from 'react';
import { Button } from 'react-bootstrap';

import './collection-item.styles.scss';

const CollectionItem = ({id, name, imageUrl, price})=>{
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
            <Button className='button'>ADD TO CART</Button>
        </div>
    )
}
export default CollectionItem;