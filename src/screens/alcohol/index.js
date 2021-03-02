import React from 'react'
import FilterSidebar from '../../components/sidebar/FilterSidebar'
import './alcohol.styles.scss'
import {data} from './fakeData'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";


function index() {
    console.log(data)
    return (
        <div className="layout page">
            <FilterSidebar />
            <div className="layout-body alcohol">
                <div className="page-block">
                    <div className="page-filters">
                        <div className="page-filters__breadcrumb">
                            <BreadCrumb />
                        </div>
                        <SortSelect />
                    </div>
                    <div className="alcohol-container">
                        <div className="alcohol-title">
                                <h3>Red</h3>
                        </div>
                        <div className="alcohol-items">
                            {
                                data.map(AlcoholItem)
                            }
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

const AlcoholItem = (items,index) =>{
    const width = window.outerWidth;
    let slidesNum = 6;
    if(width > 1200){
        slidesNum = 6;
    }
    if(width >950 && width< 1200){
        slidesNum = 5
    }
    if(width >600 && width< 950){
        slidesNum = 4
    }
    if(width < 600 ){
        slidesNum = 3
    }
    const settings = {
        dots: false,
        infinite: false,
        arrows:true,
        speed: 500,
        // slidesPerRow
        slidesToShow: 6,
        responsive: [
            {
              breakpoint: 1200,
              settings: {
                slidesToShow: 5,
                slidesToScroll: 4,
              }
            },
            {
              breakpoint: 950,
              settings: {
                slidesToShow: 4,
                slidesToScroll: 3,
              }
            },
            {
              breakpoint: 650,
              settings: {
                slidesToShow: 3,
                slidesToScroll: 1
              }
            }
          ],
        slidesToScroll: 3
      };
      
    return(
        <div className="alcohol-item">
            <div className="alcohol-item__title">
                <h3>{items.name}</h3>
                <div className="alcohol-item__view">
                    <a >View All ></a>
                </div>
            </div>
            <div className="alcohol-item__list">
                <Slider {...settings}>
                    {
                        items.items.map(item=><Alcoholproduct data={item} />)
                    }
                </Slider>
            </div>
            
        </div>
    )
}

const Alcoholproduct = ({data}) =>{
    return(
        <div className="alcohol-product">
            <div className="alcohol-product__img">
                <img src={data.img} alt={data.name} />
            </div>
            <div className="alcohol-product__name">
                <span>
                    {data.name}
                </span>
            </div>
            <div className="alcohol-product__price">
                <span>
                    {data.price}
                </span>
            </div>
        </div>
    )
}

const BreadCrumb = () =>{
    const data = ['Alcohol','Wine','Red']
    return(
        <div className="breadcrumb">
            {
                data.map(item=>{
                    return(
                        <a key={item} href="#">
                            <span>{item}</span>
                        </a>
                    )
                })
            }
            
        </div>
    )
}

const SortSelect = () =>{
    const selectOption = ['Best Selling','Name A to Z','Name Z to A','Price High to Low','Price Low to High'];  
    return(
        <div className="page-filters__sort">
            <div className="page-filters__select sort-select">
                <label htmlFor="sortselect" className="sort-select__label">Sort by: </label>
                <div className="sort-select__select">
                    <select name="sort" id="sortselect">
                        {
                            selectOption.map(item=>{
                                return (
                                    <option value={item}>{item}</option>
                                )
                            })
                        }
                    </select>
                    <div className="sort-select__icon">
                        <span className="icon-down-arrow-thick"></span>
                    </div>
                </div>
                
            </div>
        </div>
    )
}

export default index
