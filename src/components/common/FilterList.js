import React from 'react'
import './styles/filters.styles.scss';
import img from '../../assets/img/cardimage_2.jpg'
import StarRatings from 'react-star-ratings';
import classnames from 'classnames';
import {Link} from 'react-router-dom'

function FilterList() {
    const a = ['Sponsored'];
    const b=['Sponsored','10% off on all product']
    return (
        <div className="product">
            <div className="product-container">
                <ul className="product-list">
                    <ProdunctItem flagtitle={a} flagType="yellow" />
                    <ProdunctItem />
                    <ProdunctItem />
                    <ProdunctItem flagtitle={b} />
                    <ProdunctItem />
                </ul>
            </div>
        </div>
    )
}

const ProdunctItem = ({flagtitle,flagType}) =>{
    return(
        <li className="product-list__item">
            <Link to="/food/some">
                <div className="product-list__container">
                    <div className="product-list__left">
                        <div className="product-list__logo">
                            <img src={img} alt="Vendor Logo"/>
                        </div>
                        <div className="product-list__title">
                            <h3>
                                <span>
                                    Flower Cafe
                                </span>
                            </h3>
                            <FlagLabel flagType={flagType} title={flagtitle}/>
                        </div>
                        <div className="product-list__content">
                            <div className="product-list__content-items">
                                <ul className="product-list__content-items-list">
                                    <li className="product-list__content-items-item">
                                        <span>
                                            Breakfast
                                        </span>
                                    </li>
                                    <li className="product-list__content-items-item">
                                        <span>
                                            Sandwiches
                                        </span>
                                    </li>
                                    <li className="product-list__content-items-item">
                                        <span>
                                            Salads
                                        </span>
                                    </li>
                                    <li className="product-list__content-items-item">
                                        <span>
                                            Vegetarian
                                        </span>
                                    </li>
                                </ul>
                            </div>
                            <div className="product-list__dollars">
                                <ul className="product-list__dollars-list">
                                    <li className="product-list__dollars-item">$</li>
                                    <li className="product-list__dollars-item">$</li>
                                    <li className="product-list__dollars-item active">$</li>
                                    <li className="product-list__dollars-item active">$</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div className="product-list__right">
                        <div className="product-list__block">
                            <div className="product-list__rating">
                                <StarRatings
                                        rating={4.5}
                                        starRatedColor="#f6ba10"
                                        numberOfStars={5}
                                        name='rating'
                                        starDimension="18px"
                                        starSpacing="2px"
                                        starEmptyColor="#aaa"
                                        starHoverColor="#f6ba10"
                                    />
                            </div>
                            <div className="product-list__normal">
                                <span>112 Review</span>
                            </div>
                        </div>
                        <div className="product-list__block">
                            <div className="product-list__bold">
                                <span>0.5</span>
                            </div>
                            <div className="product-list__normal">
                                <span>Miles</span>
                            </div>
                        </div>
                        <div className="product-list__block">
                            <div className="product-list__bold">
                                <span>45-60 min</span>
                            </div>
                            <div className="product-list__normal">
                                <span>Est time</span>
                            </div>
                        </div>
                        <div className="product-list__block">
                            <div className="product-list__bold">
                                <span>$10</span>
                            </div>
                            <div className="product-list__normal">
                                <span>Minimum</span>
                            </div>
                        </div>
                        <div className="product-list__block">
                            <div className="product-list__bold blue">
                                <span>Free</span>
                            </div>
                            <div className="product-list__normal">
                                <span>Delivery</span>
                            </div>
                        </div>
                    </div>
                </div>
            </Link>
        </li>
    )
}


const FlagLabel = ({title,flagType}) =>{
    if(title){
        return(
            <div className="flaglabel">
                {
                    title.map(item=>{
                        const flagClasses = classnames({
                            "flaglabel-item":true,
                            "flaglabel__yellow":flagType==='yellow'
                        })
                        return(
                            <span className={flagClasses}>{item}</span>
                        )
                    })
                }
            </div>
        )
    }
    return null

}

export default FilterList
