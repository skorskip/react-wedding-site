import React, { useState, useEffect } from "react";
import "./navbar.css"
import logo from "../../assets/images/logo/puppy.png"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faConciergeBell, faGlassCheers, faHighlighter, faCalendarCheck, faBars, faTimes } from "@fortawesome/free-solid-svg-icons";


export const Navbar = () => {

    const [width, setWidth] = useState(window.innerWidth);
    const mobileWidth = 550;
    const [selected, setSelected] = useState("home");
    const [displayMobileMenu, setDisplayMobileMenu] = useState(false);

    const getSelectedClass = (item: string) => {
        var navClass = "regular-font nav-bar-item";
        if(item === selected) {
            return navClass + " nav-bar-selected"
        }
        return navClass;
    }

    const mobileMenuSelected = () => {
        setDisplayMobileMenu(!displayMobileMenu);
    } 

    const navItemSelected = (item: string) => {
        setSelected(item);
        let element;
        switch(item) {
            case "details" : 
                element = document.getElementById('Details-header-picture');
                break;
            case "venue" :
                element = document.getElementById('Venue-header-picture');
                break;
            case "hotel" :
                element = document.getElementById('Hotel-header-picture');
                break;
            case "rsvp"  :
                element = document.getElementById('RSVP-header-picture');
                break;
            case "top" :
                element = document.getElementById("header-image-container");
                break;
            default :
                element = document.getElementById('Details-header-picture');
        }

        element?.scrollIntoView({behavior: "smooth", block: "start", inline: "nearest"});
        setDisplayMobileMenu(false);
    }

    const mobileNavMenu = (displayMobileMenu) && (
        <nav className="panel nav-bar-mobile-menu base-background-color">
            <div className="panel-block nav-bar-mobile-menu-item primary-color" onClick={() => navItemSelected("details")}>
                <span className="icon is-large">
                    <FontAwesomeIcon icon={faHighlighter}/>
                </span>
                details
            </div>
            <div className="panel-block nav-bar-mobile-menu-item primary-color" onClick={() => navItemSelected("venue")}>
                <span className="icon is-large">
                    <FontAwesomeIcon icon={faGlassCheers}/>
                </span>
                venue
            </div>
            <div className="panel-block nav-bar-mobile-menu-item primary-color" onClick={() => navItemSelected("hotel")}>
                <span className="icon is-large">
                    <FontAwesomeIcon icon={faConciergeBell}/>
                </span>
                hotel
            </div>
            <div className="panel-block nav-bar-mobile-menu-item primary-color" onClick={() => navItemSelected("rsvp")}>
                <span className="icon is-large">
                    <FontAwesomeIcon icon={faCalendarCheck}/>
                </span>
                rsvp
            </div>
        </nav>
    )

    const desktopNav = (width >= mobileWidth) &&(
        <div className="nav-bar-container primary-color base-background-color">
            <div className={getSelectedClass("details")} onClick={() => navItemSelected("details")}>
                details
            </div>
            <div className={getSelectedClass("venue")} onClick={() => navItemSelected("venue")}>
                venue
            </div>
            <div>
                <span className="icon navbar-icon" onClick={() => navItemSelected("top")}>
                    <img src={logo}/>
                </span>
            </div>
            <div className={getSelectedClass("hotel")} onClick={() => navItemSelected("hotel")}>
                hotel
            </div>
            <div className={getSelectedClass("rsvp")} onClick={() => navItemSelected("rsvp")}>
                rsvp
            </div>
        </div>
    );

    const mobileNav = (width < mobileWidth) && (
        <div className="nav-bar-mobile-container base-background-color">
            <div>
                <span className="icon navbar-icon-mobile" onClick={() => navItemSelected("top")}>
                    <img src={logo}/>
                </span>
            </div>
            <div>
                <span className="icon is-large nav-item-mobile primary-color" onClick={mobileMenuSelected}>
                    <FontAwesomeIcon icon={(displayMobileMenu) ? faTimes : faBars}/>
                </span>
            </div>
        </div>
    )

    useEffect(() => {
        const updateWidth = () => {
            setWidth(window.innerWidth);
        };
        window.addEventListener("resize", updateWidth);
        return () => window.removeEventListener("resize", updateWidth);
    }, []);

    return (
        <>
            {desktopNav}
            {mobileNav}
            {mobileNavMenu}
        </>
    )
}