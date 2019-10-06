import React from 'react';

import './directory.styles.scss'
import MenuItem from '../menu-item/menu-item.component';

class Directory extends React.Component{
    constructor(){
        super();
        this.state={
            sections : [
              {
                title: 'mens',
                imageUrl: 'https://i.ibb.co/BKRqYWv/men.jpg',
                size: 'large',
                id: 5,
                linkUrl: ''
              },
                  {
                    title: 'hats',
                    imageUrl: 'https://i.ibb.co/XWmKDbk/hats.jpg',
                    id: 1,
                    linkUrl: 'hats'
                  },
                 
                  {
                    title: 'jackets',
                    imageUrl: 'https://i.ibb.co/MPmRV9r/jacket.jpg',
                    id: 2,
                    linkUrl: ''
                  },
                  {
                    title: 'sneakers',
                    imageUrl: 'https://i.ibb.co/q1FWSqr/sneakers.jpg',
                    id: 3,
                    linkUrl: ''
                  }, {
                    title: 'womens',
                    imageUrl: 'https://i.ibb.co/wJC5GDX/women.jpg',
                    size: 'large',
                    id: 4,
                    linkUrl: ''
                  }
                 
                  
            ]
        }
    }
    render(){
        return(
            <div className='directory-menu' >
                {this.state.sections.map(({title,imageUrl,id, size, linkUrl})=>(
                    <MenuItem key={id} title={title} imageUrl={imageUrl} size={size} linkUrl={linkUrl}/>
                ))}
            </div>
        )
    }
}
export default Directory;