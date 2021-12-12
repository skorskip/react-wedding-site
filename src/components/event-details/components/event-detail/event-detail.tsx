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
    stagger: number
}

export const EventDetail = ({title, subtitle, icon, button, content, titleImage, mobileTitleImage, subImage, stagger} : Props) => {
    
    const [offset, setOffset] = useState(0);
    const [width, setWidth] = useState(window.innerWidth);
    const mobileWidth = 550;

    const getCardHeight = () => {
        const height = document.getElementById(subtitle + '-header-picture')?.offsetHeight;
        if(height) {
            let magic = width > mobileWidth ? (5/12) : (3/16)
            setOffset((height * magic) * stagger);
        }
    }

    useEffect(() => {
        const updateWidth = () => {
            setWidth(window.innerWidth);
        };
        window.addEventListener("resize", updateWidth);
        return () => window.removeEventListener("resize", updateWidth);
    }, []);

    return (
        <>
            <div className="rellax event-details-row" data-rellax-speed="2">
                <Picture
                    id={subtitle + '-header-picture'} 
                    picture={(width > mobileWidth) ? titleImage : mobileTitleImage}
                    style={{paddingBottom:(offset)}}
                    loadFunc={getCardHeight}
                    customClass="dark-image event-detail-title-image"
                />
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