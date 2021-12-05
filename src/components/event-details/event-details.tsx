import React from "react";
import './event-details.css';
import { EventDetail } from "./components/event-detail/event-detail";
import { EventInfoList } from "../../data/eventInfoList";

export const EventDetails = () => {

    const details = EventInfoList.map((info, i) => {

        return (
            <EventDetail 
                key={i}
                title={info.title}
                subtitle={info.subTitle}
                icon={info.icon}
                button={info.button}
                subImage={info.subImage}
                titleImage={info.titleImage}
                content={info.content}
                stagger= {i}
            />
        )
    })

    return (
        <>
            {details}
        </>
    );
}