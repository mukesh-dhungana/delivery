import React from 'react'
import bg from '../../../assets/img/about-bg2.png'

function Merchant({history}) {    
    return (
        <section className="section section-about-merchants aboutmerchants">
            <div className="aboutmerchants-container">
                <div className="aboutmerchants__body">
                    <h1 className="aboutmerchants__title about-details-title">
                        Join our merchant network
                    </h1>
                    <p className="aboutmerchants__content about-details-caption">
                        Join over 12,000 businesses finding new customers with delivery.com. It's free to join, and you'll pay for only the orders we send you.
                    </p>
                    <button 
                        onClick={()=>history.push('/info/merchants')}
                        className="btn btn-primary btn-large">Get More Info</button>
                    <div className="aboutmerchants__img">
                        <img src={bg} alt="Bg Image"/>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Merchant
