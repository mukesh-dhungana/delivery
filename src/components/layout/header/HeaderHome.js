import React from 'react';
import Cart from './Cart';
import Login from './Login';
import {Link} from 'react-router-dom'
import HowItWorks from './HowItWorks'

function HeaderHome() {
    return (
        <div className="header-home__container">
            <div className="header-home__right">
                <Cart className="header-home__cart" />
                <Login type="primary" />
                <div className="header-home__link">
                    <Link to="/for-office">For Office</Link>
                </div>
                <HowItWorks />
            </div>
        </div>
    )
}

export default HeaderHome
