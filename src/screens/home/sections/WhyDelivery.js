import React from 'react';
import img from '../../../assets/img/hom_icon1.png'
import img3 from '../../../assets/img/home_icon3.png'
import img2 from '../../../assets/img/home_icon2.png'


const content = [
    {
        image:img,
        title:'Find Favorites and Discover New Ones',
        details:'Browse thousands of restaurants and stores to get the best of your neighborhood delivered.'
    },
    {
        image:img2,
        title:'Free, Easy, and Essential',
        details:'Browse thousands of restaurants and stores to get the best of your neighborhood delivered.'
    },
    {
        image:img3,
        title:'Earn Points and Get Rewards',
        details:'Score Delivery Points with every purchase and cash them in for gift cards and other rewards.'
    }
    
]

function WhyDelivery() {
    return (
        <section className="whydelivery">
            <div className="whydelivery-container">
                <div className="whydelivery-title">
                    <h3 className="home-title">
                        Why order with deliver.com
                    </h3>
                </div>
                <div className="whydelivery-panel">
                    <Bubble />
                    <Bubble />
                    <div className="whydelivery-panel__container">
                        {content.map(Content)}
                    </div>
                </div>
            </div>
        </section>
    )
}


const Content = (data) =>{
    return(
        <div 
            key={data.title}
            className="whydelivery-panel__content">
            <div className="whydelivery-panel__img">
                <img src={data.image} className="animate-top" alt="Delivery Icons"/>
            </div>
            <div className="whydelivery-panel__title">
                <h4>
                    {data.title}
                </h4>
            </div>
            <div className="whydelivery-panel__details">
                <p>
                    {
                        data.details
                    }
                </p>
            </div>
        </div>
    )
}

const Bubble = () =>{
    return(
        <div className="bubbles">
            {
                Array.apply(null, { length: 9 }).map((e, i) => (
                    <span key={i} className="bubble"></span>
                    ))
            }
        </div>
    )
}

export default WhyDelivery