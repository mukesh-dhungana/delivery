import React from 'react'
import FilterSidebar from '../../components/sidebar/FilterSidebar'
import AlcoholList from './AlcoholList'
import './alcohol.style.scss'

const data = [
    {
        name:'Wine',
        types:['Red','White','Rose','Sparkling','Organic'],
        classType:'wine-img'
    },
    {
        name:'Liquor',
        types:['Wishkey','Featured','Rum','Scothc','Vodka'],
        classType:'liquore-img'
    },
    {
        name:'Beer',
        types:['Ale','Lager','Cider','Featured','May Picks'],
        classType:'beer-img'
    },
]

function index(props) {
    return (
        <div className="layout page">
            <FilterSidebar />
            <div className="layout-body alcohol">
                <div className="page-block">
                    {
                        data.map(AlcoholList)
                    }
                </div>
            </div>
        </div>
    )
}

export default index
