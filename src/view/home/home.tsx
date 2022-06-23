import React, { useEffect } from "react"
import { Header } from "../../components/header/header";
import { Navbar } from "../../components/navbar/navbar";
import Rellax from 'rellax';
import { sha256 } from "js-sha256";
import { SECRET } from "../../data/secret";
import { useNavigate } from "react-router-dom";

export const Home = () => {
    const secret = SECRET;
    const navigate = useNavigate();

    const loadRellax = () => {
        new Rellax('.rellax *');
    }

    const main = (
        <div onLoad={loadRellax}>
            <Navbar />
            <Header />
        </div>
    );

    useEffect(() => {
        let password = localStorage.getItem("secret");
        if(password){
            if(sha256(password) === secret){
                navigate('/')
            } else {
                navigate('/login')
            }
        } else {
            navigate('/login')
        }

    }, [secret, navigate])

    return (
        <>
            {main}
        </>
    );
}