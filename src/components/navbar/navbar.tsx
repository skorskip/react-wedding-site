import React, { useState } from "react"
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
        setSelected(item)
    }

    return (
        <div className="nav-bar-container">
            <div className={getSelectedClass("home")} onClick={() => navItemSelected("home")}>
                home
            </div>
            <div className={getSelectedClass("rsvp")} onClick={() => navItemSelected("rsvp")}>
                rsvp
            </div>
        </div>
    )
}