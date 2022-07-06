import { sha256 } from "js-sha256";
import React, { useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { EventDetail } from "../../components/event-detail/event-detail";
import { Navbar } from "../../components/navbar/navbar";
import { EventInfoList } from "../../data/eventInfoList";
import { SECRET } from "../../data/secret";
import "./details-page.css";

export const DetailsPage = () => {

    let { search } = useLocation();
    const query = new URLSearchParams(search);
    const detailType = query.get("detail");
    const eventDetail = EventInfoList.find(detail => detail.id.toLowerCase() === detailType);
    const secret = SECRET;
    const navigate = useNavigate();

    useEffect(() => {
        let password = localStorage.getItem("secret");
        if(password){
            if(sha256(password) !== secret){
                navigate('/login')
            }
        } else {
            navigate('/login')
        }

    }, [secret, navigate])

    return (
        <>
            <Navbar />
            <div className="details-container">
                <EventDetail 
                    //@ts-ignore
                    detail={eventDetail}
                />
            </div>
        </>
    );
}