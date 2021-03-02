import React, { useEffect, useRef, useState } from 'react'
import Search from './Search';
import LoginRight from './LoginRight'
import { Link } from 'react-router-dom';

function TopHeader() {
    const [isSticky, setSticky] = useState(false);
    const ref = useRef(null);
    const handleScroll = () => {
      if (ref.current) {
        setSticky(ref.current.getBoundingClientRect().top <= 0);
      }
    };
    useEffect(() => {
        window.addEventListener('scroll', handleScroll);
    
        return () => {
          window.removeEventListener('scroll', () => handleScroll);
        };
    }, []);

    return (
        <div className="header-top">
            <div className="header-top__container">
                <div className="header-top__logo">
                    <Link to="/">
                        <span className="icon-delivery-logo"></span>
                    </Link>
                </div>
                <Search />
                <LoginRight />
            </div>

        </div>
    )
}

export default TopHeader
