import React from 'react'
import About from './About'
import Mobile from './Mobile';
import Module from './Module';
import Join from './Join';
import Merchant from './Merchant';
import { useHistory } from "react-router-dom";

function Sections() {
    const history = useHistory();
    return (
        <div className="about-container">
            <About />
            <Mobile />
            <Module history={history} />
            <Join history={history} />
            <Merchant history={history} />
        </div>
    )
}

export default Sections
