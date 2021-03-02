import React from 'react'

function Module({history}) {
    return (
        <section className="section section-module module">
            <div className="module-container">
                <div className="module__overlay"></div>
                <div className="module__body">
                    <h1 className="module__title about-details-title">
                        Delivery Points
                    </h1>
                    <p className="module__content">
                        Earn Delivery Points with every order. Redeem for delivery.com credits, great prizes, and donations.
                    </p>
                    <button 
                        onClick={()=>history.push('/delivery-points')}
                        className="btn btn-primary btn-large">See Rewards</button>
                    <div className="module__icon">
                        <i className="icon-star"></i>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Module
