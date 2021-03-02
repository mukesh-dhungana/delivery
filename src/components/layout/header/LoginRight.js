import React from 'react';
import Cart from './Cart';
import {Link} from 'react-router-dom';
import Login from './Login';

function LoginRight() {
    return (
        <div className="header-top__right">
            <div className="header-top__link">
                <Link to="/for-office">For Office</Link>
            </div>
            <div className="header-top__button">
                <Login />
            </div>
            <Cart className="header-top__cart" />
        </div>
    )
}

export default LoginRight
