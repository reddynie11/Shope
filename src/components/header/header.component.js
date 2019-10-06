import React from 'react';
import { connect } from 'react-redux';

import {Link} from 'react-router-dom';

import './header.styles.scss';
import { auth } from '../../firebase/firebase.utils';
import CartIcon from '../cart-icon/cart-icon.component';

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
                <CartIcon className='option' />
            </div>
           
        </div>
    )
}

const mapStateToProps = (state) => {
    return ({
        currentUser : state.user.currentUser
    })
}

export default connect(mapStateToProps)(Header);