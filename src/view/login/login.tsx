import React, { useState } from "react"
import { sha256 } from "js-sha256";
import logo from "../../assets/images/logo/puppy.png"
import "./login.css"
import { SECRET } from "../../data/secret";
import { useNavigate } from "react-router-dom";

export const Login = () => {

    const [input, setInput] = useState("");
    const [wrong, setWrong] = useState(false);
    const navigate = useNavigate();
    const secret = SECRET;

    const handleChange = (event:any) => {
        setInput(event.target.value);
    }

    const checkPassword = async () => {
        const response = input.toLocaleLowerCase();

        if(sha256(response) === secret){
            await localStorage.setItem("secret", response);
            navigate(`/`);
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

    const login = (
        <div className="login-container">
            {loginTitle}
            {warnBubble}
            <div className="icon login-logo">
                <img src={logo} alt=""/>
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

    return (
        <>
            {login}
        </>
    );
}