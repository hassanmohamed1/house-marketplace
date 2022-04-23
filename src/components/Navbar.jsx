import React from 'react'
import { useNavigate, useLocation } from "react-router-dom"
import { ReactComponent as OfferIcon } from "../assets/svg/localOfferIcon.svg"
import { ReactComponent as ExploreIcon } from "../assets/svg/exploreIcon.svg"
import { ReactComponent as PersonOutLineIcon } from "../assets/svg/personOutlineIcon.svg"

function Navbar() {
    const navgate = useNavigate()
    const location = useLocation()

    const pathMatchRoute = (route) => {
        if(route === location.pathname) {
            return true
        }
    }

  return (
      
    <footer className='navbar'>
        <div className="navbarNav">
            <ul className="navbarListItems">
                <li className="navbarListItem" onClick={() => navgate("/")}>
                    <ExploreIcon fill={pathMatchRoute("/") ? "#2c2c2c" : "#8f8f8f"} width="36px" height="36px" />
                    <p className={pathMatchRoute("/") ? "navbarListItemNameActive" : "navbarListItemName"}>Explore</p>
                </li>

                <li className="navbarListItem" onClick={() => navgate("/offer")}>
                    <OfferIcon fill={pathMatchRoute("/offers") ? "#2c2c2c" : "#8f8f8f"} width="36px" height="36px" />
                    <p className={pathMatchRoute("/offers") ? "navbarListItemNameActive" : "navbarListItemName"}>Offers</p>
                </li>

                <li className="navbarListItem" onClick={() => navgate("/profile")}>
                    <PersonOutLineIcon fill={pathMatchRoute("/profile") ? "#2c2c2c" : "#8f8f8f"} width="36px" height="36px" />
                    <p className={pathMatchRoute("/profile") ? "navbarListItemNameActive" : "navbarListItemName"}>Profile</p>
                </li>

            </ul>
        </div>
    </footer>
  )
}

export default Navbar
