import React from 'react';
import classnames from 'classnames';
import {Link} from 'react-router-dom';

function AlcoholList(data,index) {
    const ulClass = classnames({
        "alcohol-block__list":true,
        [data.classType]:true
    })
    return (
        <div 
            className="alcohol-block"
            key={index + Math.random()}>
            <div className="alcohol-block__title">
                <h3>
                    {data.name}
                </h3>
            </div>
            <div className="alcohol-block__container">
                <ul className={ulClass}>
                    {
                        data.types.map(AlcoholItem)
                    }
                </ul>
            </div>
        </div>
    )
}

export const AlcoholItem = (data,index) =>{
    return(
        <li 
            key={index + Math.random()}
            className="alcohol-block__item">
            <Link to={`/alcohol/${data}`}>
                <div className="alcohol-block__item-title">
                    <h5>
                        {data}
                    </h5>
                </div>
                <div className="alcohol-block__item-img"></div>
            </Link>
        </li>
    )
}

export default AlcoholList
