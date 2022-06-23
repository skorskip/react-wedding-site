import React, { useState, useEffect } from "react";
import "./navbar.css"
import logo from "../../assets/images/logo/puppy.png"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faConciergeBell, faGlassCheers, faHighlighter, faCalendarCheck, faBars, faTimes } from "@fortawesome/free-solid-svg-icons";
import { Link, useLocation } from "react-router-dom";


export const Navbar = () => {

    let { search } = useLocation();
    const query = new URLSearchParams(search);
    const param = query.get("detail");
    const [width, setWidth] = useState(window.innerWidth);
    const mobileWidth = 550;
    const [selected, setSelected] = useState(param);
    const [displayMobileMenu, setDisplayMobileMenu] = useState(false);

    const getSelectedClass = (item: string) => {
        var navClass = "regular-font nav-bar-item primary-color";
        if(item === selected) {
            return navClass + " nav-bar-selected"
        }
        return navClass;
    }

    const mobileMenuSelected = () => {
        setDisplayMobileMenu(!displayMobileMenu);
    }

    const selectItem = (item: string) => {
        setSelected(item);
    }

    const selectItemMobile = () => {
        setDisplayMobileMenu(!displayMobileMenu);
    }

    const mobileNavMenu = (displayMobileMenu) && (
        <nav className="panel nav-bar-mobile-menu base-background-color">
            <Link 
                className="panel-block nav-bar-mobile-menu-item primary-color" 
                to="/details?detail=rsvp"
                onClick={() => selectItemMobile()}
            >
                <span className="icon is-large">
                    <FontAwesomeIcon icon={faCalendarCheck}/>
                </span>
                rsvp
            </Link>
            <Link 
                className="panel-block nav-bar-mobile-menu-item primary-color" 
                to="/details?detail=schedule"
                onClick={() => selectItemMobile()}
            >
                <span className="icon is-large">
                    <FontAwesomeIcon icon={faHighlighter}/>
                </span>
                schedule
            </Link>
            <Link   
                className="panel-block nav-bar-mobile-menu-item primary-color" 
                to="/details?detail=venue"
                onClick={() => selectItemMobile()}
            >
                <span className="icon is-large">
                    <FontAwesomeIcon icon={faGlassCheers}/>
                </span>
                venue
            </Link>
            <Link 
                className="panel-block nav-bar-mobile-menu-item primary-color" 
                to="/details?detail=hotel"
                onClick={() => selectItemMobile()}
            >
                <span className="icon is-large">
                    <FontAwesomeIcon icon={faConciergeBell}/>
                </span>
                hotel
            </Link>
            <Link 
                className="panel-block nav-bar-mobile-menu-item primary-color" 
                to="/details?detail=registry"
                onClick={() => selectItemMobile()}
            >
                <span className="icon is-large">
                    <FontAwesomeIcon icon={faConciergeBell}/>
                </span>
                registry
            </Link>
        </nav>
    )

    const desktopNav = (width >= mobileWidth) &&(
        <div className="nav-bar-container primary-color base-background-color">
            <Link to="/">
                <span className="icon navbar-icon">
                    <img src={logo} alt=""/>
                </span>
            </Link>
            <Link 
                to="/details?detail=rsvp" 
                onClick={() => selectItem('rsvp')}>
                <div className={getSelectedClass("rsvp")}>rsvp</div>
            </Link>
            <Link
                onClick={() => selectItem('schedule')}
                to="/details?detail=schedule">
                <div className={getSelectedClass("schedule")}>schedule</div>
            </Link>
            <Link 
                onClick={() => selectItem('venue')}
                to="/details?detail=venue">
                <div className={getSelectedClass("venue")}>venue</div>
            </Link>
            <Link
                onClick={() => selectItem('hotel')}
                to="/details?detail=hotel">
                <div className={getSelectedClass("hotel")}>hotel</div>
            </Link>
            <Link
                onClick={() => selectItem('registry')}
                to="/details?detail=registry">
                <div className={getSelectedClass("registry")}>registry</div>
            </Link>
        </div>
    );

    const mobileNav = (width < mobileWidth) && (
        <div className="nav-bar-mobile-container base-background-color">
            <Link to="/">
                <span className="icon navbar-icon-mobile">
                    <img src={logo} alt=""/>
                </span>
            </Link>
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