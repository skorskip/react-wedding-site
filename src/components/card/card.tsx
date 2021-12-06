import { IconDefinition } from "@fortawesome/fontawesome-common-types";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, {useEffect, useState} from "react";
import { Picture } from "../picture/picture";
import "./card.css";

type Props = {
    title: string,
    content: string,
    icon: IconDefinition,
    button: string | null,
    imagePath: string | null
}

export const Card = ({title, content, icon, button, imagePath}: Props) => {

    const [width, setWidth] = useState(window.innerWidth);
    const mobileWidth = 550;
    const cardClass = "image is-2by1 card-side-image";
    const cardClassMobile = "image is-5by4 card-side-image";

    useEffect(() => {
        const updateWidth = () => {
            setWidth(window.innerWidth);
        };
        window.addEventListener("resize", updateWidth);
        return () => window.removeEventListener("resize", updateWidth);
    }, []);

    const titleCard = (
        <div className="title">
            <span className="icon-text" style={{display:"flex", alignItems:"center",justifyContent:"center"}}>
                <span className="icon">
                    <FontAwesomeIcon icon={icon}/>
                </span>
                <span className="card-title-text regular-font">{title}</span>
            </span>
        </div>
    )

    const buttonCard = (button) && (
        <div style={{display:"flex",justifyContent:"flex-end",flexDirection:"column", alignItems:"center"}}>
            <button className="button is-primary is-outlined">
                {button}
            </button>
        </div>
    )

    const imageCard = (imagePath) && (
        <figure className={(width > mobileWidth) ? cardClass : cardClassMobile}>
            <Picture 
                picture={imagePath}
                customClass={(width > mobileWidth) ? "card-side-image-style" : "card-top-image-style"}
                style={null}
                loadFunc={() => null}
            />
        </figure>
    )

    return (
        <div id={title + '-card'} className="card card-style">
            { imageCard }
            <div className="card-content">
                { titleCard }
                <div className="content card-content-text" style={{fontSize:".7em"}}>
                    {content}
                </div>
                { buttonCard }
            </div>
        </div>
    )
}