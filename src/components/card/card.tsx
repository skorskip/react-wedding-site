import { IconDefinition } from "@fortawesome/fontawesome-common-types";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import "./card.css";

type Props = {
    title: string,
    content: string,
    icon: IconDefinition,
    button: string | null,
    imagePath: string | null
}

export const Card = ({title, content, icon, button, imagePath}: Props) => {
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
        <figure className="image is-2by1 card-side-image">
            <img src={imagePath} className="card-side-image-style"/>
        </figure>
    )

    return (
        <div id={title + '-card'} className="card" style={{width:"60%", margin:"10px", display:"flex", flexDirection:"row"}}>
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