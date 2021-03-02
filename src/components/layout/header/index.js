import React from "react";
import {withRouter} from 'react-router-dom';
import TopHeader from './TopHeader';
import Navigation from './Navigation';
import HeaderHome from './HeaderHome'
import './headers.styles.scss';

function index(props) {
    console.log(props)
    if(props.location.pathname === '/'){
        return (
            <header className="header-home">
                <HeaderHome />
            </header>
        )
    }
    return (
        <header className="header">
            <TopHeader />
            <Navigation />
        </header>
    )
}

export default withRouter(index)
