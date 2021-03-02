import React from 'react';
import Sections from './sections';
import './home.styles.scss';

function index() {
    return (
        <div className="home">
            <div className="home-sections">
                <Sections />
            </div>
        </div>
    )
}

export default index
