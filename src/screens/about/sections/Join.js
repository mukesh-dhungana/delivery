import React from 'react'
import ad from '../../../assets/img/about-ad.png';
import ad2 from '../../../assets/img/aboutcomp2.png';
import ad3 from '../../../assets/img/aboutcomp3.png';
import ad4 from '../../../assets/img/aboutcomp4.png';

function Join({history}) {
    return (
        <section className="section section-join aboutjoin">
            <div className="aboutjoin-container">
                <div className="aboutjoin__body">
                    <div className="aboutjoin__details">
                        <h1 className="about-details-title">
                            Be an office hero
                        </h1>
                        <p>
                            Ordering at the office has never been easier with group orders, corporate discounts, catering, and paying with credits.
                        </p>
                        <button 
                            onClick={()=>history.push('/for-office')}
                            className="btn btn-primary btn-large">
                            Learn More
                        </button>
                    </div>
                    <div className="aboutjoin__companies">
                        <h3>Just a few of <br />our happy clients:</h3>
                        <ul className="aboutjoin__list">
                            <li className="aboutjoin__item advisor"><img src={ad} alt="Company Images"/></li>
                            <li className="aboutjoin__item exchange"><img src={ad2} alt="Company Images"/></li>
                            <li className="aboutjoin__item criteo"><img src={ad3} alt="Company Images"/></li>
                            <li className="aboutjoin__item rga"><img src={ad4} alt="Company Images"/></li>
                        </ul>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Join
