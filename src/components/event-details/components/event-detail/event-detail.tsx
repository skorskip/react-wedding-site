import { IconDefinition } from "@fortawesome/fontawesome-common-types";
import { Card } from "../../../card/card";
import React, { useState, useEffect } from "react";
import { Picture } from "../../../picture/picture";

type Props = {
    title: string,
    subtitle: string,
    icon: IconDefinition,
    button: string | null,
    content: string,
    titleImage: string,
    mobileTitleImage: string,
    subImage: string | null,
    buttonLink: string | null,
    viewMobile: boolean,
    viewDesktop: boolean
}

export const EventDetail = ({
    title, 
    subtitle, 
    icon, 
    button, 
    content, 
    titleImage, 
    mobileTitleImage, 
    subImage, 
    buttonLink,
    viewDesktop,
    viewMobile
} : Props) => {

    const [width, setWidth] = useState(window.innerWidth);
    const mobileWidth = 550;

    const titlePicture = (
        <div className="event-details-row">
            <Picture
                id={subtitle + '-header-picture'} 
                picture={(width > mobileWidth) ? titleImage : mobileTitleImage}
                style={null}
                loadFunc={() => null}
                customClass="dark-image event-detail-title-image"
            />
        </div>
    );

    const cardDetails = (
        <div className="event-details-floating">
            <div className="event-details-image-title">
                <div className="event-detail-text-large fancy-font">{title}</div>
            </div>
            <div className="event-details-content-group">
                <Card
                    title={subtitle}
                    icon={icon}
                    button={button}
                    imagePath={subImage}
                    content={content}
                    buttonLink={buttonLink}
                />
            </div>
        </div>
    )

    const eventDetails = ((width < mobileWidth && viewMobile) || 
    (width >= mobileWidth && viewDesktop)) && (
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