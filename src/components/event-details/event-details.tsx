import React from "react";
import './event-details.css';
import { EventDetail } from "./components/event-detail/event-detail";
import { EventInfo } from "../../models/eventInfo";

type Props = {
    eventInfoList: Array<EventInfo>
}

export const EventDetails = ({eventInfoList}: Props) => {

    const details = eventInfoList.map((info, i) => {

        return (
            <EventDetail 
                key={i}
                title={info.title}
                subtitle={info.subTitle}
                icon={info.icon}
                button={info.button}
                subImage={info.subImage}
                titleImage={info.titleImage}
                mobileTitleImage={info.mobileTitleImage}
                content={info.content}
                buttonLink={info.buttonLink}
                viewDesktop={info.viewDesktop}
                viewMobile={info.viewMobile}
            />
        )
    })

    return (
        <>
            {details}
        </>
    );
}