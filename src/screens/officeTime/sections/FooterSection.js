import React from 'react'

function FooterSection() {
    return (
        <section className='section office-footer'>
            <div className="office-footer__container">
                <div className="office-footer__row">
                    <div className="office-footer__col">
                        <a className="office-footer__btn">
                            <span className="office-footer__name">
                                Explore Group Ordering
                            </span>
                            <span className="office-footer__icon">
                                <span class="iconify" data-icon="bx:bxs-caret-right-circle" data-inline="false"></span>
                            </span>
                        </a>
                    </div>
                    <div className="office-footer__col">
                        <a className="office-footer__btn">
                            <span className="office-footer__name">
                                Explore Catering
                            </span>
                            <span className="office-footer__icon">
                                <span class="iconify" data-icon="bx:bxs-caret-right-circle" data-inline="false"></span>
                            </span>
                        </a>
                    </div>
                    <div className="office-footer__col">
                        <a className="office-footer__btn">
                            <span className="office-footer__name">
                                Explore Individual
                            </span>
                            <span className="office-footer__icon">
                                <span class="iconify" data-icon="bx:bxs-caret-right-circle" data-inline="false"></span>
                            </span>
                        </a>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default FooterSection
