import React from 'react'
import FilterSidebar from '../../components/sidebar/FilterSidebar'
import FilterList from '../../components/common/FilterList'

function index() {
    return (
        <div className="layout page">
            <FilterSidebar />
            <div className="layout-body">
                <div className="page-block">
                    <div className="page-title">
                        <h2>
                            55 Restaurants Near New York, NY
                        </h2>
                    </div>
                    <div className="page-filters">
                        <div className="page-filters__badges">
                            <span className="badge right-icon">
                                <span>$$</span>
                                <span className="icon-plus"></span>
                            </span>
                            <span className="badge right-icon">
                                <span>4+ stars</span>
                                <span className="icon-plus"></span>
                            </span>
                        </div>
                        <SortSelect />
                    </div>
                </div>

                <FilterList />
            </div>
        </div>
    )
}

const SortSelect = () =>{
    const selectOption = ['Popularity','Rating','Distance','Minimum'];  
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
