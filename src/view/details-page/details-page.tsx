import React from "react";
import { useLocation } from "react-router-dom";
import { EventDetail } from "../../components/event-details/components/event-detail/event-detail";
import { Navbar } from "../../components/navbar/navbar";
import { EventInfoList } from "../../data/eventInfoList";
import "./details-page.css";

export const DetailsPage = () => {

    let { search } = useLocation();
    const query = new URLSearchParams(search);
    const detailType = query.get("detail");
    const eventDetail = EventInfoList.find(detail => detail.id.toLowerCase() === detailType);

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