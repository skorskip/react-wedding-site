import { IconDefinition } from "@fortawesome/fontawesome-common-types";
import { Card } from "../../../card/card";
import Rellax from 'rellax';
import React, { useEffect, useState } from "react";

type Props = {
    title: string,
    subtitle: string,
    icon: IconDefinition,
    button: string | null,
    content: string,
    titleImage: string,
    subImage: string,
    stagger: number
}

export const EventDetail = ({title, subtitle, icon, button, content, titleImage, subImage, stagger} : Props) => {
    
    const [cardHeight, setCardHeight] = useState(0);

    const getCardHeight = () => {
        const height = document.getElementById(subtitle + '-card')?.offsetHeight;
        if(height) setCardHeight(height * (3/4));
    }
    
    useEffect(() => {
        var rellax = new Rellax('.rellax *');
    }, []);

    return (
        <>
            <div className="rellax event-details-row" data-rellax-speed="2">
                <img src={titleImage} style={{paddingBottom:(cardHeight * stagger)}} className="dark-image" onLoad={getCardHeight}/>
            </div>
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
                />
            </div>
        </>
    );
}