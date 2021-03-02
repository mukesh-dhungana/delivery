import React from 'react';
import orderimage from '../../../assets/img/office-2.png'
import food from '../../../assets/img/office-lunch.png'
import food2 from '../../../assets/img/office-lunch2.png'

function OrderAsSection() {
    return (
        <section className="section section-orderas orderas">
            <div className="orderas-image">
                <img src={orderimage} alt="Order As Image"/>
            </div>
            <div className="orderas-container">
                <div className="orderas-left">
                    <div className="orderas-title">
                        <h3>
                            Ordering 
                            <span className="orderas-title__bg"> 
                                <svg class="ForOfficeLanding__Flavor__SVG" viewBox="0 0 30 10" preserveAspectRatio="none"><line x1="0" y1="1" x2="50" y2="1" stroke="black" stroke-width="0.5" stroke-dasharray="2 2 2"></line></svg>
                                <span>as a </span>
                            </span>
                            group
                        </h3>
                    </div>
                    <div className="orderas-content">
                        <p>
                            It's as simple as picking a restaurant, inviting your<br />
                            coworkers, and enjoying your meal.
                        </p>
                    </div>
                    <div className="orderas-button">
                        <button className="btn-outline btn-outline-primary btn-large">
                            Explore Group Ordering
                        </button>
                    </div>
                    <div className="orderas-subimage">
                        <img src={food} alt="Food Image"/>
                    </div>
                    <div className="orderas-content">
                        <p>
                            Your favorite team lunch<br />
                            just got more collaborative.
                        </p>
                    </div>
                </div>
                <div className="orderas-right">
                    <div className="orderas-title">
                        <h3>
                            Ordering 
                            <span className="orderas-title__bg"> 
                                <svg class="ForOfficeLanding__Flavor__SVG" viewBox="0 0 30 10" preserveAspectRatio="none"><line x1="0" y1="1" x2="50" y2="1" stroke="black" stroke-width="0.5" stroke-dasharray="2 2 2"></line></svg>
                                <span>for a </span>
                            </span>
                            group
                        </h3>
                    </div>
                    <div className="orderas-content">
                        <p>
                            Catering that caters to you. Our options save you money,
                            <br />
                            please a hungry crowd, and are fully customizable.
                        </p>
                    </div>
                    <div className="orderas-button">
                        <button className="btn-outline btn-outline-primary btn-large">
                            Explore Caatering
                        </button>
                    </div>
                    <div className="orderas-subimage">
                        <img src={food2} alt="Food Image"/>
                    </div>
                    <div className="orderas-content">
                        <p>
                            Plan ahead for office events<br />
                            with catering that fits all.
                        </p>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default OrderAsSection
