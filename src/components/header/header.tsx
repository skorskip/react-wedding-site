import React, { useState, useEffect } from 'react';
import { PHOTO_ENUM } from '../../data/photos';
import { Picture } from '../picture/picture';
import "./header.css"

export const Header = () => {
    
    const [offset, setOffset] = useState("");
    const [width, setWidth] = useState(window.innerWidth);
    const headerImage = PHOTO_ENUM.AUSTIN_PANO;
    const mobileHeaderImage = PHOTO_ENUM.AUSTIN_SQUARE;
    const mobileWidth = 550;

    const handleImageLoad = (event: any) => {

        const height = document.getElementById("header-image-container")?.offsetHeight
        if(height) {
            if(width > mobileWidth){
                setOffset((height / 2) + "px")
            } else {
                setOffset("50%");
            }
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
        <div className="header-container" id="header-image-container" onLoad={handleImageLoad}>
            <div className="rellax header-row" data-rellax-speed="2">
                <div className="header-date-text regular-font primary-color">come party!</div>
            </div>
            <div className="header-row">
                <Picture 
                    id={'header-picture'}
                    picture={(width > mobileWidth) ? headerImage : mobileHeaderImage}
                    customClass="dark-image"
                />
                <div className="header-image-title base-color" style={{top:offset}}>
                    <div className="header-text-large fancy-font">Paul</div>
                    <div className="header-text-large fancy-font">&</div>
                    <div className="header-text-large fancy-font">Caroline</div>
                </div>
            </div>
            <div className="rellax header-row" data-rellax-speed="2">
                <div className="header-date-text regular-font primary-color">9 - 9 - 2022</div>
            </div>
        </div>
    )
}