import React from "react";
import './event-details.css';
import { EventDetail } from "./components/event-detail/event-detail";
import { EventInfo } from "../../models/eventInfo";

type Props = {
    eventDetails: Array<EventInfo>; 
}

export const EventDetails = ({eventDetails}: Props) => {

    const details = eventDetails.map((info, i) => {

        return (
            <EventDetail 
                detail={info}
            />
        )
    })

    return (
        <>
            {details}
        </>
    );
}