import React from 'react';

import './shop.styles.scss';

import SHOP_DATA from './shop.data';

import CollectionPreview from '../../components/preview-collection/collection-preview.component';

class ShopPage extends React.Component{
    constructor(props){
        super(props)

        this.state={
            collections: SHOP_DATA
        }
    }
    
    render(){
        return(
            <div className='shop-page'>
                {this.state.collections.map((collection)=>(
                    <CollectionPreview key={collection.id} title={collection.title} items={collection.items} />
                ))}
            </div>
        )
    }
}
export default ShopPage;