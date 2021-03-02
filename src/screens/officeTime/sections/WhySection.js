import React from 'react'
import book from '../../../assets/img/officebook.png';
import breakf from '../../../assets/img/office-breakfast.png';
import drink from '../../../assets/img/office-drink.png'
import sushi from '../../../assets/img/office-sushi.png'

function WhySection() {
    return (
        <section className="section section-why why">
            <div className="why-title">
                <h2>Why delivery.com?</h2>
            </div>
            <div className="why-container">
                <div className="why-row">
                    <div className="why-column">
                        <div className="why-column__content">
                            <h5>SAVE MONEY</h5>
                            <p>
                                Pay zero fees for ordering from <br />
                                the best local restaurants that <br />
                                deliver to your office.

                            </p>
                        </div>
                    </div>
                    <div className="why-column">
                        <div className="why-column__image">
                            <img src={book} alt=""/>
                        </div>
                    </div>
                </div>
                <div className="why-row with-extra-image">
                    
                    <div className="why-column">
                        <div className="why-column__image">
                            <img src={breakf} alt=""/>
                        </div>
                    </div>
                    <div className="why-column">
                        <div className="why-column__content">
                            <h5>FULLY CUSTOMIZABLE SOLUTION</h5>
                            <p>
                                Choose what fits your team, from <br />
                                group ordering & catering to pre-set <br />
                                rules for accounts.
                            </p>
                        </div>
                    </div>
                    <div className="with-image">
                        <img src={drink} alt=""/>
                    </div>
                </div>
                <div className="why-row">
                    <div className="why-column">
                        <div className="why-column__image">
                            <img src={sushi} alt=""/>
                        </div>
                    </div>
                    <div className="why-column">
                        <div className="why-column__content">
                            <h5>Multi Vertical</h5>
                            <p>
                                More than just food. Get same-day <br />
                                delivery of wine, beer & spirits, <br />
                                groceries, and office essentials.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default WhySection
