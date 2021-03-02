import React from 'react'

const data = [
    {title:'2 MILLION+ USERS',subtitle:'order online',icon:'icon-about-users'},
    {title:'12,000+ MERCHANTS',subtitle:'grow their businesses',icon:'icon-merchant-store-front'},
    {title:'100+ CITIES',subtitle:'& even more on the way',icon:'icon-us-map'},
    {title:'25MM ORDERS',subtitle:'and counting',icon:'icon-your-orders'}
]

function About() {
    return (
        <section className="section section-about aboutus">
            <div className="aboutus__title">
                <h1 className="about-details-title">About Us</h1>
            </div>
            <div className="aboutus__content">
                <p>
                    delivery.com lets people order online from their favorite local<br />
                    restaurants, liquor stores, grocery stores, and laundry and dry cleaning providers.
                </p>
            </div>
            <div className="aboutus__icons">
                <ul className="aboutus__list">
                    {
                        data.map(AboutItem)
                    }
                    
                </ul>
            </div>
        </section>
    )
}

const AboutItem = (data) =>{
    return(
        <li 
            key={data.title}
            className="aboutus__item">
            <div className="aboutus__item-icon">
                <i className={data.icon}></i>
            </div>
            <div className="aboutus__item-details">
                <h3>{data.title}</h3>
                <p>{data.subtitle}</p>
            </div>
        </li>
    )
}

export default About
