import React,{useState,useEffect} from 'react'

function SearchSection() {
    return (
        <section className="section section-home home-search">
            <div className="section-home-bg"></div>
            <div className="home-search__container">
                <div className="home-search__logo">
                    <span className="icon-delivery-logo">
                        Delivery.com
                    </span>
                </div>
                <Icons />
                <div className="home-search__input">
                    <div className="search-input">
                        <div className="search-input__icon">
                            <span className="icon-location-arrow"></span>
                        </div>
                        <div className="search-input__search">
                            <input 
                                placeholder="Street Address, City, State"
                                type="search"/>
                        </div>
                        <div className="search-input__button">
                            <button>Search</button>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

const Icons = () =>{
    let initialTitle = <h2>See who delivers in your neighborhood</h2>
    const [titles,setTitles] = useState(initialTitle);
    const onMouseLeave = () => setTitles(<h2>See who delivers in your neighborhood</h2>);
    // useEffect(()=>{
    //     hTitle = <h3>{titles}</h3>
    // },[titles])
    return(
        <>
            <div className="home-search__icons">
                <i 
                    onMouseEnter={()=>setTitles(<h2 className="let-fade">All of your Favorite local restaurant</h2>)}
                    onMouseLeave={()=>onMouseLeave()}
                    className="home-search__icon icon-food"></i>
                <i 
                    onMouseEnter={()=>setTitles(<h2 className="let-fade">Beer wine and spirits deliver to your home</h2>)}
                    onMouseLeave={()=>onMouseLeave()}
                    className="home-search__icon icon-alcohol"></i>
                <i 
                    onMouseEnter={()=>setTitles(<h2 className="let-fade">Grocerires and home essentials</h2>)}
                    onMouseLeave={()=>onMouseLeave()}
                    className="home-search__icon icon-groceries"></i>
                <i 
                    onMouseEnter={()=>setTitles(<h2 className="let-fade">Wash fold dry cleaning and more</h2>)}
                    onMouseLeave={()=>onMouseLeave()}
                    className="home-search__icon icon-laundry"></i>
            </div>
            <div className="home-search__title">
                {titles}
            </div>
        </>
    )
}

export default SearchSection
