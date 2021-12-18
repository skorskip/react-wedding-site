import React, { useState, useEffect } from "react";
import "./navbar.css"
import logo from "../../assets/images/logo/puppy.png"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";

export const Navbar = () => {

    const [width, setWidth] = useState(window.innerWidth);
    const mobileWidth = 550;
    const [selected, setSelected] = useState("home");

    const getSelectedClass = (item: string) => {
        var navClass = "regular-font nav-bar-item";
        if(item === selected) {
            return navClass + " nav-bar-selected"
        }
        return navClass;
    }

    const navItemSelected = (item: string) => {
        setSelected(item);
        let element;
        switch(item) {
            case "details" : 
                element = document.getElementById('Details-card');
                break;
            case "venue" :
                element = document.getElementById('Venue-card');
                break;
            case "hotel" :
                element = document.getElementById('Hotel-card');
                break;
            case "rsvp"  :
                element = document.getElementById('RSVP-card');
                break;
            case "top" :
                element = document.getElementById("header-image-container");
                break;
            default :
                element = document.getElementById('Details-card');
        }

        element?.scrollIntoView({behavior: "smooth", block: "center", inline: "nearest"});
    }

    const desktopNav = (width >= mobileWidth) &&(
        <div className="nav-bar-container">
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
        <div className="nav-bar-mobile-container">
            <div>
                <span className="icon navbar-icon-mobile" onClick={() => navItemSelected("top")}>
                    <img src={logo}/>
                </span>
            </div>
            <div>
                <span className="icon is-large nav-item-mobile" onClick={() => navItemSelected("top")}>
                    <FontAwesomeIcon icon={faBars}/>
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
        </>
    )
}