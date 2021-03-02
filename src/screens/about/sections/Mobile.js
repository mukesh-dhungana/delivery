import React from 'react'
import mob from '../../../assets/img/mo.png';
import apple from '../../../assets/img/icon/applestorelogo.png'
import google from '../../../assets/img/icon/googlestorelogo.png'

function Mobile() {
    return (
        <section className="section section-mobile aboutmobile">
            <div className="aboutmobile-container">
                <div className="aboutmobile__img">
                    <img src={mob} alt="Mobile App Image"/>
                </div>
                <div className="aboutmobile__body">
                    <h1 className="aboutmobile__title about-details-title">
                        <span>The neighborhood in your pocket</span>
                        <div className="aboutmobile__title-bg"></div>
                    </h1>
                    <div className="aboutmobile__captions">
                        <div className="aboutmobile__captions-item">
                            <h4>EASY ORDERING</h4>
                            <p>Quick, convenient & free <br /> to order on any device.</p>
                        </div>
                        <div className="aboutmobile__captions-item">
                            <h4>MORE CHOICES</h4>
                            <p>Your one-stop shop for everything <br /> from food to dry cleaning.</p>
                        </div>
                    </div>
                    <div className="aboutmobile__buttons">
                        <a href="#">
                            <img src={apple} alt="Apple AppStore"/>
                        </a>
                        <a href="#">
                            <img src={google} alt="Google AppStore"/>
                        </a>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Mobile
