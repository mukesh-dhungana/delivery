import React from 'react'
import bg from '../../../assets/img/office-bg2.png';
import pack from '../../../assets/img/office-lunchpack.png'

function IndividualSection() {
    return (
        <section className="section section-individual individual">
            <div className="individual-image">
                <img src={bg} alt="Individual Background"/>
            </div>
            <div className="individual-container">
                <div className="individual-left">
                    <div className="individual-subimage">
                        <img src={pack} alt="Lunc Pack"/>
                    </div>
                    <div className="individual-content">
                        <p>
                            Let coworkers choose their meal <br />
                            from options that fit your budget.
                        </p>
                    </div>
                </div>
                <div className="individual-right">
                    <div className="orderas-title">
                        <h3>
                            <span className="orderas-title__bg"> 
                                <svg class="ForOfficeLanding__Flavor__SVG" viewBox="0 0 30 10" preserveAspectRatio="none"><line x1="0" y1="1" x2="50" y2="1" stroke="black" stroke-width="0.5" stroke-dasharray="2 2 2"></line></svg>
                                <span>Individual</span>
                            </span>
                            Ordering
                        </h3>
                    </div>
                    <div className="individual-content">
                        <p>
                            Create your own rules for budget and scheduling, and let us<br />
                            do the rest! Employees will use pre-set credits for each order,<br />
                            and you'll be the office hero.
                        </p>
                    </div>
                    <div className="individual-btn">
                        <button className="btn-outline btn-outline-primary btn-large">
                            Individual Orderinng
                        </button>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default IndividualSection
