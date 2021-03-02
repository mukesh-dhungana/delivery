import CoverSection from './CoverSection';
import OrderAsSection from './OrderAsSection'
import React from 'react';
import IndividualSection from './IndividualSection'
import FooterSection from './FooterSection'
import WhySection from './WhySection';

function index() {
    return (
        <div className="office-sections">
            <CoverSection />
            <OrderAsSection />
            <IndividualSection />
            <WhySection />
            <FooterSection />
        </div>
    )
}

export default index
