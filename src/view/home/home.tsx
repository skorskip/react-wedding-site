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
        const response = input.toLocaleLowerCase();

        if(sha256(response) === secret){
            localStorage.setItem("secret", response);
            window.location.reload();
        } else {
            setWrong(true);
        }
    }

    const keyPressInput = (event: any) => {
        let keyPressed = event.keyCode || event.which;
        if (keyPressed === 13) {
            checkPassword();
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

    const supportMessage = (wrong) && (
        <span className="bubble-subcontent">Having problems? Send an emil to <a href="mailto:wedding@skorski.org">wedding@skorski.org</a></span>
    )

    const loginTitle = (
        <div className="login-title regular-font">
            <div className="login-title-welcome">
                Welcome!
            </div>
            <div>
                Paul and Caroline's Wedding
            </div>
        </div>
    )

    const login = (!allow) && (
        <div className="login-container">
            {loginTitle}
            {warnBubble}
            <div className="icon login-logo">
                <img src={logo}/>
            </div>
            <input 
                className={wrong ? "input is-large is-danger" : "input is-large"} 
                type="text" 
                placeholder="enter secret" 
                onChange={handleChange}
                onKeyPress={keyPressInput}>
            </input>

            <div className="login-button">
                <button 
                    className="button accent-color is-outlined" 
                    onClick={checkPassword}>
                        Login
                </button>
            </div>

                {supportMessage}
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