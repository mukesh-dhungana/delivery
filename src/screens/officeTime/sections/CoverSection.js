import React from 'react';
import cover from '../../../assets/img/office.png'

function CoverSection() {
    return (
        <section className="section section-cover cover">
            <div className="cover-image">
                <img src={cover} alt="Office Cover Image"/>
            </div>
            <div className="cover-content">
                <div className="cover-content__title">
                    <h2>Ordering for the team has <br />never been easier</h2>
                </div>
                <div className="cover-content__details">
                    <p>
                        Choose from customizable options and one size fits all solutions.
                    </p>
                </div>
                <div className="cover-content__btn">
                    <button className="btn btn-primary btn-large">
                        Get Started
                    </button>
                </div>
            </div>
        </section>
    )
}

export default CoverSection
