import React,{useState} from 'react';
import Switch from '../form/Switch';
import './styles.scss';
import classnames from 'classnames'
import CheckGroup from './../form/CheckGroup';
import StarRatings from 'react-star-ratings';
import {dateOptions,timeOptions} from '../../helpers/selectOptions';

function FilterSidebar() {
    return (
        <aside className="sidebar filter">
            <div className="filter-item">
                <div className="sidebar-title">
                    <h3>Refine By</h3>
                </div>
                <Title title="Delivery & Pickup Options" />
                <FilterSwitch />
                <FilterSelects />
            </div>
            <div className="filter-item">
                <FilterCategory />
            </div>
            <div className="filter-item">
                <FilterFeatures />
            </div>
            <div className="filter-item">
                <FilterCuisines />
            </div>
            <div className="filter-item">
                <Reviews />
            </div>
            <div className="filter-item">
                <Price />
            </div>
            <div className="filter-item">
                <FilterMinimum />
            </div>
        </aside>
    )
}

const Price = () =>{
    const [act,setAct] = useState('');
    const liClasses = (name) =>classnames({
        "filter-price__item":true,
        "active":act===name
    })
    return(
        <div className="filter-price">
            <Title title="Price" />
            <div className="filter-block__container filter-review__container">
                <ul className="filter-price__list">
                    <li 
                        onClick={()=>setAct('$')}
                        className={liClasses('$')}>$</li>
                    <li 
                        onClick={()=>setAct('$$')}
                        className={liClasses('$$')}>$$</li>
                    <li 
                        onClick={()=>setAct('$$$')}
                        className={liClasses('$$$')}>$$$</li>
                    <li 
                        onClick={()=>setAct('$$$$')}
                        className={liClasses('$$$$')}>$$$$</li>
                </ul>
            </div>
        </div>
    )
}

const FilterMinimum = () =>{
    return(
        <div className="filter-features">
            <Title title="Delivery Minimum" />
            <div className="filter-features__check">
                <CheckGroup label="< 5$ (15)" />
                <CheckGroup label="< 10$  (90)" />
                <CheckGroup label="< 15$  (12)" />
                <CheckGroup label="< 20$ (34)" />
            </div>
        </div>
    )
}

const Reviews = () =>{
    const [rating,setRating] =useState(0);
    return(
        <div className="filter-review">
            <Title title="Reviews" />
            <div className="filter-block__container filter-review__container">
                <StarRatings
                    rating={rating}
                    starRatedColor="#f6ba10"
                    changeRating={ (newRating) =>setRating(newRating) }
                    numberOfStars={5}
                    name='rating'
                    starDimension="25px"
                    starSpacing="3px"
                    starEmptyColor="#aaa"
                    starHoverColor="#f6ba10"
                />
            </div>
        </div>
    )
}

const FilterCuisines = () =>{
    const items = ['Sandwiches (20)','Salads (110)','Breakfast (40)']
    return(
        <div className="filter-cuisines">
            <Title title="Cuisines" />
            <div className="filter-cuisines__container">
                <ul className="filter-cuisines__list">
                    {
                        items.map(item=>{
                            return(
                                <li className="filter-cuisines__item">
                                    <a>
                                        {item}
                                    </a>
                                </li>
                            )
                        })
                    }
                    <li className="filter-cuisines__item">
                        <a className="blue">
                            Show more
                        </a>
                    </li>
                </ul>
            </div>
        </div>
    )
}

const FilterFeatures = () =>{
    return(
        <div className="filter-features">
            <Title title="Feature" />
            <div className="filter-features__check">
                <CheckGroup label="Alcohol Menu to Go (15)" />
                <CheckGroup label="Free Delivery (90)" />
                <CheckGroup label="Good for groups (12)" />
                <CheckGroup label="New (34)" />
                <CheckGroup label="Special Offer (16)" />
            </div>
        </div>
    )
}

const FilterCategory = () =>{
    return(
        <div className="filter-category">
            <Title title="Category" />
            <ul className="filter-category__list">
                <li className="filter-category__item">
                    <span>Catering (79)</span>
                </li>
                <li className="filter-category__item active">
                    <span>Restaurant (114)</span>
                </li>
            </ul>
        </div>
    )
}

export const FilterSelects = () =>{
    return(
        <div className="filter-select">
            <FilterSelect options={dateOptions} />
            <FilterSelect options={timeOptions} />
        </div>
    )
}

export const FilterSelect = ({options}) =>{
    return(
        <div className="filter-select__item">
            <select name="" id="">
                {
                    options.map(item=>{
                        return <option key={item.value} value={item.value}>{item.label}</option>
                    })
                }
            </select>
        </div>
    )
}

export const FilterSwitch = () =>{
    const [deliver,setDeliver] = useState(false);
    const switchClass = (name) => classnames({
        "filter-switch__label":true,
        "active":name ==='delivery' && !deliver || name ==='pick' && deliver
    });
    return(
        <div className="filter-switch">
            <div 
                onClick={()=>setDeliver(false)}
                className={switchClass('delivery')}>
                <span>Delivery</span>
            </div>
            <Switch 
                value={deliver} 
                checked={deliver} 
                onChange={(e)=>setDeliver(e.target.checked)} />
            <div 
                onClick={()=>setDeliver(true)}
                className={switchClass('pick')}>
                <span>Pickup</span>
            </div>
        </div>
    )
}

export const Title = ({title}) =>{
    return(
        <div className="sidebar-title bold">
            <h3>{title}</h3>
        </div>
    )
}

export default FilterSidebar
