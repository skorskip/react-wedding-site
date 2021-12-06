import React from "react";
import { photos } from "../../data/photos";

type Props = {
    picture : string,
    style : any | null,
    customClass : string,
    loadFunc : () => void | null
}

export const Picture = ({picture, style, customClass, loadFunc}:Props) => {

    let photo = photos[picture];
    
    return (
        <picture>
            <source 
                srcSet={photo.webp} 
                type="image/webp" 
                onLoad={loadFunc} 
                className={customClass}
                style={style}
            />
            <img 
                src={photo.png} 
                alt="" 
                onLoad={loadFunc}
                className={customClass}
                style={style}
            />
        </picture>
    )
}