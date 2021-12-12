import React, { useState } from "react";
import "./navbar.css"

export const Navbar = () => {
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
            default :
                element = document.getElementById('Details-card');
        }

        element?.scrollIntoView({behavior: "smooth", block: "center", inline: "nearest"});
    }

    return (
        <div className="nav-bar-container">
            <div className={getSelectedClass("details")} onClick={() => navItemSelected("details")}>
                details
            </div>
            <div className={getSelectedClass("venue")} onClick={() => navItemSelected("venue")}>
                venue
            </div>
            <div className={getSelectedClass("hotel")} onClick={() => navItemSelected("hotel")}>
                hotel
            </div>
            <div className={getSelectedClass("rsvp")} onClick={() => navItemSelected("rsvp")}>
                rsvp
            </div>
        </div>
    )
}