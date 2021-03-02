import React from 'react'
import a from '../../../assets/img/layout1.png'
import b from '../../../assets/img/layout2.png'
import c from '../../../assets/img/layout3.png'
import apple from '../../../assets/img/icon/applestorelogo.png'
import google from '../../../assets/img/icon/googlestorelogo.png'

function SectionApp() {
    return (
        <section className="section section-app mobileapp">
            <div className="mobileapp-container">
                <div className="mobileapp__left">
                    <div className="mobileapp-layout mobileapp__layer1">
                        <img src={a} alt=""/>
                    </div>
                    <div className="mobileapp-layout mobileapp__layer2">
                        <img src={b} alt=""/>
                    </div>
                    <div className="mobileapp-layout mobileapp__layer3">
                        <img src={c} alt=""/>
                    </div>
                </div>
                <div className="mobileapp__right">
                    <h2 className="mobileapp__title">Tap into the neighborhood.</h2>
                    <p className="mobileapp__content">Download the delivery.com app today so you can order anytime, anywhere.</p>
                    <div className="mobileapp__buttons">
                        <a href="#">
                            <img src={apple} alt="Apple Store Logo"/>
                        </a>
                        <a href="#">
                            <img src={google} alt="Google Store Logo"/>
                        </a>
                    </div>
                    <div className="mobieapp__number">
                        <div className="search-input">
                            <div className="search-input__search">
                                <input type="number" placeholder="Mobile Number" />
                            </div>
                            <div className="search-input__button">
                                <button>Send Link</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default SectionApp
