import React from 'react';
import img1 from '../../../assets/img/cardimage_1.jpg';
import img2 from '../../../assets/img/cardimage_2.jpg';
import img3 from '../../../assets/img/cardimage_3.jpg';

const content = [
    {
        img:img1,
        title:'For Local Businesses',
        details:'Find out how to start growing your business with online ordering.'
    },
    {
        img:img2,
        title:'About Us',
        details:'We’re a fun bunch. Drop in and get to know us!'
    },
    {
        img:img3,
        title:'Delivery Points',
        details:'No one else dishes out such great rewards'
    },
]

function KnowSection() {
    return (
        <section className="know">
            <div className="know-container">
                <div className="know-title">
                    <div className="home-title">Get to know us</div>
                </div>
                <div className="know-card__container">
                    <div className="know-cards">
                        <div className="know-cards__row know-cards__full">
                            <div className="know-cards__col">
                                <Card data={content[0]} />
                            </div>
                        </div>
                        <div className="know-cards__row know-cards__half">
                            <div className="know-cards__col">
                                <Card data={content[1]} imgLeft />
                            </div>
                            <div className="know-cards__col">
                                <Card data={content[2]} imgLeft />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

const Card = ({data,imgLeft}) =>{
    if(imgLeft){
        return(
            <div className="home-card">
                <div className="home-card__details">
                    <div className="home-card__content">
                        <h4>
                            {data.title}
                        </h4>
                        <p>
                            {data.details}
                        </p>
                        <button className="btn-outline btn-outline-primary">
                            Learn More
                        </button>
                    </div>
                   
                </div>
                <div className="home-card__image">
                    <div className="home-card__image-container"></div>
                </div>
            </div>
        )
    }
    return(
        <div className="home-card">
            <div className="home-card__image">
                <div className="home-card__image-container"></div>
            </div>
            <div className="home-card__details">
                <div className="home-card__content">
                    <h4>
                        {data.title}
                    </h4>
                    <p>
                        {data.details}
                    </p>
                    <button className="btn-outline btn-outline-primary">
                        Learn More
                    </button>
                </div>
            </div>
        </div>
    )
}

export default KnowSection
