import React from "react"
import { EventDetails } from "../../components/event-details/event-details";
import { Header } from "../../components/header/header";
import { Navbar } from "../../components/navbar/navbar";


export const Home = () => {
    return (
        <>
            <Navbar />
            <Header />
            <EventDetails />
        </>
    );
}