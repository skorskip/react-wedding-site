import React, { useEffect, useState } from 'react';
import "./header.css"
import Rellax from 'rellax';

export const Header = () => {
    
    const [imageHeight, setImageHeight] = useState(0);

    const handleImageLoad = (event: any) => {
        const height = document.getElementById("imageContainer")?.offsetHeight
        if(height) setImageHeight(height);
    }

    useEffect(() => {
        var rellax = new Rellax('.rellax *');
    }, []);

    return (
        <div className="header-container" id="imageContainer" onLoad={handleImageLoad}>
            <div className="rellax header-row" data-rellax-speed="2">
                <div className="header-date-text regular-font">come party!</div>
            </div>
            <div className="header-row">
                {/* <div style={{display:"flex", flexDirection:"column"}}>
                    <img src="/assets/images/austin_pano_left.png" />
                    <img src="/assets/images/austion_pano_right.png" />
                </div> */}
                <img  src="/assets/images/austion_pano.png" className="dark-image"/>
                <div className="header-image-title" style={{top:imageHeight/2 + "px"}}>
                    <div className="header-text-large fancy-font">Paul</div>
                    <div className="header-text-large fancy-font">&</div>
                    <div className="header-text-large fancy-font">Caroline</div>
                </div>
            </div>
            <div className="rellax header-row" data-rellax-speed="2">
                <div className="header-date-text regular-font">9 - 9 - 2022</div>
            </div>
        </div>
    )
}