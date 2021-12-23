import React, { useEffect, useState } from "react"
import { EventDetails } from "../../components/event-details/event-details";
import { Header } from "../../components/header/header";
import { Navbar } from "../../components/navbar/navbar";
import Rellax from 'rellax';
import { sha256 } from "js-sha256";
import logo from "../../assets/images/logo/puppy.png"
import "./home.css"
import { SECRET } from "../../data/secret";

export const Home = () => {

    const [allow, setAllow] = useState(false); 
    const [input, setInput] = useState("");
    const [wrong, setWrong] = useState(false);
    const secret = SECRET;

    const loadRellax = () => {
        new Rellax('.rellax *');
    }

    const handleChange = (event:any) => {
        setInput(event.target.value);
    }

    const checkPassword = () => {
        if(sha256(input) === secret){
            localStorage.setItem("secret", input);
            window.location.reload();
        } else {
            setWrong(true);
        }
    }

    const main = (allow) && (
        <div onLoad={loadRellax}>
            <Navbar />
            <Header />
            <EventDetails />
        </div>
    );

    const warnBubble = (wrong) && (
        <div className="bubble-container">
            <div className="bubble primary-color">
                "BARK!"
                <span className="bubble-subcontent">*wrong password</span>
            </div>
            <div className="pointer"></div>
        </div>
    );

    const login = (!allow) && (
        <div className="login-container">
            {warnBubble}
            <span className="icon login-logo">
                <img src={logo}/>
            </span>
            <input 
                className={wrong ? "input is-large is-danger" : "input is-large"} 
                type="text" 
                placeholder="secret" 
                onChange={handleChange}>
            </input>
            <button 
                className="button accent-color is-outlined login-button" 
                onClick={checkPassword}>
                    Login
            </button>
        </div>
    );

    useEffect(() => {
        let password = localStorage.getItem("secret");
        if(password){
            if(sha256(password) === secret){
                setAllow(true);
            }
        }
    }, [])

    return (
        <>
            {login}
            {main}
        </>
    );
}