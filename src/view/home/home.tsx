import React from "react"
import { EventDetails } from "../../components/event-details/event-details";
import { Header } from "../../components/header/header";
import { Navbar } from "../../components/navbar/navbar";
import Rellax from 'rellax';


export const Home = () => {

    const loadRellax = () => {
        new Rellax('.rellax *');
    }

    return (
        <div onLoad={loadRellax}>
            <Navbar />
            <Header />
            <EventDetails />
        </div>
    );
}