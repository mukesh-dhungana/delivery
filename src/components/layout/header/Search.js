import React from 'react'

function Search() {
    return (
        <div className="header-search">
            <Autocomplete icon="search" />
            <Autocomplete icon="location" />
            <div className="header-search__btn">
                <button>
                    <span class="iconify" data-icon="heroicons:sm-search" data-inline="false"></span>
                </button>
            </div>
            <div className="header-overlay"></div>
        </div>
    )
}

const Autocomplete = ({icon}) =>{
    let searchIcon;
    if(icon === 'search') searchIcon = <span class="iconify" data-icon="heroicons:sm-search" data-inline="false"></span>
    if(icon === 'location') searchIcon = <span class="iconify" data-icon="map:location-arrow" data-inline="false"></span>
    
    return(
        <div className="autocomplete">
            <div className="autocomplete-container">
                <span className="autocomplete-icon">
                    {searchIcon}
                </span>
                <div className="autocomplete-input">
                    <input 
                        type="text"
                    />
                </div>
                {/* <span className="autocomplete-icon">
                    <span class="iconify" data-icon="ion:close-outline" data-inline="false"></span>
                </span> */}
            </div>
        </div>
    )
}


export default Search
