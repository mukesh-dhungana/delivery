import React from 'react'
import {Link,useHistory} from 'react-router-dom';
import './footer.styles.scss'

const links = [
    {name:'Merchant',link:'/info/merchants'},
    {name:'Drivers',link:'/'},
    {name:'Aboutt Us',link:'/info/about'},
    {name:'Contacts',link:'/'},
    {name:'FAQ',link:'/'},
    {name:'Careers',link:'/'},
    {name:'Office',link:'/'},
    {name:'Blog',link:'/'},
    {name:'Terms of use',link:'/info/legal/terms'},
    {name:'Privacy Policy',link:'/info/legal/policy'},
]

function index() {
    return (
        <footer className="footer">
            <div className="footer-links">
                <nav className="footer-nav">
                    <div className="footer-nav__links">
                        {
                            links.map(NavLinks)
                        }
                    </div>
                    <div className="footer-nav__socials">
                        <div className="footer-nav__socials-icons">
                            <a href="#" className="footer-nav__socials-links" >
                                <i className="icon-facebook-f"></i>
                            </a>
                            <a href="#" className="footer-nav__socials-links" >
                                <i className="icon-twitter-bird"></i>
                            </a>
                            <a href="#" className="footer-nav__socials-links" >
                                <i className="icon-instagram"></i>
                            </a>
                        </div>
                        <div className="footer-nav__socials-phones">
                            <a href="#" className="footer-nav__socials-links apple-store"></a>
                            <a href="#" className="footer-nav__socials-links android-store"></a>
                            
                        </div>
                    </div>
                </nav>
            </div>
        </footer>
    )
}

const NavLinks = (linkData,index) =>{
    return(
        <Link to={linkData.link} key={linkData.name} className="footer-nav__link">
            {linkData.name}
        </Link>
    )
}

export default index
