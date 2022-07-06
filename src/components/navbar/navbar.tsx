import React, { useState, useEffect } from "react";
import "./navbar.css"
import logo from "../../assets/images/logo/puppy.png"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faTimes } from "@fortawesome/free-solid-svg-icons";
import { Link, useLocation } from "react-router-dom";
import { EventInfoList } from "../../data/eventInfoList";



export const Navbar = () => {

    let { search } = useLocation();
    const query = new URLSearchParams(search);
    const param = query.get("detail");
    const [width, setWidth] = useState(window.innerWidth);
    const mobileWidth = 550;
    const [selected, setSelected] = useState(param);
    const [displayMobileMenu, setDisplayMobileMenu] = useState(false);
    const eventDetails = EventInfoList;

    const getSelectedClass = (item: string) => {
        var navClass = "regular-font nav-bar-item primary-color";
        if(item === 'rsvp') {
            navClass = "regular-font nav-bar-item accent-background-color nav-special-item"; 
        }
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

    const mobileNavItem = eventDetails.map((info) => {
        return (
            <Link 
                className="panel-block nav-bar-mobile-menu-item primary-color" 
                to={`/details?detail=${info.id}`}
                onClick={() => selectItemMobile()}
            >
                <span className="icon is-large">
                    <FontAwesomeIcon icon={info.icon}/>
                </span>
                {info.title}
            </Link>
        )
    });

    const navItem = eventDetails.map((info) => {
        return (
            <Link 
                to={`/details?detail=${info.id}`}
                onClick={() => selectItem(info.id)}>
                <div className={getSelectedClass(info.id)}>{info.title}</div>
            </Link>
        )
    });

    const mobileNavMenu = (displayMobileMenu) && (
        <nav className="panel nav-bar-mobile-menu base-background-color">
            {mobileNavItem}
        </nav>
    )

    const desktopNav = (width >= mobileWidth) &&(
        <div className="nav-bar-container primary-color base-background-color">
            <Link to="/">
                <span className="icon navbar-icon">
                    <img src={logo} alt=""/>
                </span>
            </Link>
            {navItem}
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