import React from 'react'
import TermsComp from './Terms';
import Policy from './Policy';
import './terms.styles.scss'

function Terms({main,...props}) {
    return (
        <div className="terms">
            <div className="terms-header">
                <div className="terms-title">
                    <h1>{main}</h1>
                </div>
            </div>
            <div className="terms-container">
                <div className="terms-body">
                    <div className="terms-content">
                        {
                            main === 'Terms' ? 
                                <TermsComp />
                            :main==='Policy' ? 
                                <Policy />
                            : null
                        }
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Terms
