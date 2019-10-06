import React from 'react';
import {Link} from 'react-router-dom';
import { Navbar, Nav} from 'react-bootstrap';

import './header.styles.scss';
import { auth } from '../../firebase/firebase.utils';

const Header = ({currentUser})=>{
    return(
        <div className='header'>
            <Link to='/' className='logo-container'>
                <span className='logo'>SHOPE</span>
            </Link>
            <div className='options'>
                <Link to='/shop' className='option'>SHOP</Link>
                <Link to='/' className='option'>CONTACT</Link>
                { currentUser ? <div className="option" onClick={()=> auth.signOut()} >SIGN OUT</div>
                          : <Link className="option" to="/signin" >SIGN IN</Link>
                }
            </div>
           
        </div>
    )
}
export default Header;