import React, { useEffect, useState } from "react"
import { EventDetails } from "../../components/event-details/event-details";
import { Header } from "../../components/header/header";
import { Navbar } from "../../components/navbar/navbar";
import { Login } from "../login/login";
import Rellax from 'rellax';
import "./home.css"
import { sha256 } from "js-sha256";
import { SECRET } from "../../data/secret";
import { EventInfoList } from "../../data/eventInfoList";


export const Home = () => {

    const [allow, setAllow] = useState(false); 
    const secret = SECRET;

    const allowUser = () => {
        setAllow(true);
        window.location.reload();
    }

    const loadRellax = () => {
        new Rellax('.rellax *');
    }

    const login = (!allow) && (
        <Login
            allowUser={allowUser}
        ></Login>
    )

    const main = (allow) && (
        <div onLoad={loadRellax}>
            <Navbar />
            <Header />
            <EventDetails
                eventInfoList={EventInfoList} 
            />
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