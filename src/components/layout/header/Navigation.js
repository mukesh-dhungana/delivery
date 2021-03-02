import React from 'react'
import { NavLink } from 'react-router-dom'

const navList=[
    {name:'Food',iconClass:'icon-food',to:'/food'},
    {name:'Alcohol',iconClass:'icon-alcohol',to:'/alcohol'},
    {name:'Groceries',iconClass:'icon-groceries',to:'/groceries'},
    {name:'Laundry',iconClass:'icon-laundry',to:'/laundry'},
    {name:'Catering',iconClass:'icon-catering',to:'/catering'},
    {name:'Gifts',iconClass:'icon-gifts',to:'/gifts'}
]

export default function Navigation() {
    return (
        <div className="header-navigation">
            <nav className="navbar">
                <ul className="navbar-list">
                    {
                        navList.map(NavigateLink)
                    }
                </ul>
            </nav>
        </div>
    )
}

const NavigateLink = (link,index) =>{
    return(
        <li 
            key={index + link.name}
            className="navbar-list__item">
            <NavLink 
                to={link.to}
                activeClassName="active-link"
                className="navbar-list__link" >
                    <span className="navbar-list__link-icon">
                        <span className={link.iconClass}></span>
                    </span>
                    <span className="navbar-list__link-name">
                        {link.name}
                    </span>
            </NavLink>
        </li>
    )
}
