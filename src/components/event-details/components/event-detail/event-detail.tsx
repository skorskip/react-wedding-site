import { Card } from "../../../card/card";
import React, { useState, useEffect } from "react";
import { Picture } from "../../../picture/picture";
import { EventInfo } from "../../../../models/eventInfo";
import './event-detail.css'

type Props = {
    detail: EventInfo
}

export const EventDetail = ({detail} : Props) => {

    const [width, setWidth] = useState(window.innerWidth);
    const mobileWidth = 550;

    const titlePicture = (
        <div className="event-details-row">
            <Picture
                id={detail?.subTitle + '-header-picture'} 
                picture={(width > mobileWidth) ? detail?.titleImage : detail?.mobileTitleImage}
                style={null}
                loadFunc={() => null}
                customClass="dark-image event-detail-title-image"
            />
        </div>
    );

    const cardDetails = (
        <div className="event-details-floating">
            <div className="event-details-image-title">
                <div className="event-detail-text-large fancy-font">{detail?.title}</div>
            </div>
            <div className="event-details-content-group">
                <Card
                    id={detail?.id}
                    title={detail?.subTitle}
                    icon={detail?.icon}
                    button={detail?.button}
                    imagePath={detail?.subImage}
                    content={detail?.content}
                    buttonLink={detail?.buttonLink}
                />
            </div>
        </div>
    )

    const eventDetails = ((width < mobileWidth && detail?.viewMobile) || 
    (width >= mobileWidth && detail?.viewDesktop)) && (
        <>
            {titlePicture}
            {cardDetails}
        </>
    )

    useEffect(() => {
        const updateWidth = () => {
            setWidth(window.innerWidth);
        };
        window.addEventListener("resize", updateWidth);
        return () => window.removeEventListener("resize", updateWidth);
    }, []);

    return (
        <>
            {eventDetails}
        </>
    );
}