import { IconDefinition } from "@fortawesome/fontawesome-common-types";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, {useEffect, useState} from "react";
import { Picture } from "../picture/picture";
import "./card.css";

type Props = {
    id: string,
    title: string,
    content: string,
    icon: IconDefinition,
    button: string | null,
    imagePath: string | null,
    buttonLink: string | null
}

export const Card = ({id, title, content, icon, button, imagePath, buttonLink}: Props) => {

    const [width, setWidth] = useState(window.innerWidth);
    const mobileWidth = 550;
    const cardClass = "image is-2by1 card-side-image";
    const cardClassMobile = "image is-5by4 card-side-image";

    useEffect(() => {

        let contentTag = document.getElementById(id + '-card-content');
        
        if(contentTag && content) {
            contentTag.innerHTML = content;
        }

        const updateWidth = () => {
            setWidth(window.innerWidth);
        };
        window.addEventListener("resize", updateWidth);
        return () => window.removeEventListener("resize", updateWidth);

    }, [id, content]);

    const buttonClick = () => {
        if(buttonLink){
            window.open(buttonLink, '_blank');
        }
    }

    const titleCard = (
        <div className="title">
            <span className="icon-text" style={{display:"flex", alignItems:"center",justifyContent:"center"}}>
                <span className="icon is-large primary-color">
                    <FontAwesomeIcon size="lg" icon={icon}/>
                </span>
                <span className="card-title-text regular-font primary-color">{title}</span>
            </span>
        </div>
    )

    const buttonCard = (button) && (
        <div style={{display:"flex",justifyContent:"flex-end",flexDirection:"column", alignItems:"center"}}>
            <button className="button accent-color is-outlined" onClick={buttonClick}>
                {button}
            </button>
        </div>
    )

    const imageCard = (imagePath) && (
        <figure className={(width > mobileWidth) ? cardClass : cardClassMobile}>
            <Picture 
                id={id + '-subheader-picture'}
                picture={imagePath}
                customClass={(width > mobileWidth) ? "card-side-image-style" : "card-top-image-style"}
                style={null}
                loadFunc={() => null}
            />
        </figure>
    )

    return (
        <div id={id + '-card'} className="card card-style">
            { imageCard }
            <div className="card-content">
                { titleCard }
                <div id={id + '-card-content'} className="content card-content-text primary-color">
                </div>
                { buttonCard }
            </div>
        </div>
    )
}