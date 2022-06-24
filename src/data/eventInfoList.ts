import { EventInfo } from "../models/eventInfo";
import { faConciergeBell, faGlassCheers, faCalendarDay, faCalendarCheck, faGift } from "@fortawesome/free-solid-svg-icons";
import { PHOTO_ENUM } from "./photos";
import williamSonoma from "../assets/images/logo/william-sonoma.svg";
import potteryBarn from "../assets/images/logo/pottery-barn.svg";
import westElm from "../assets/images/logo/west-elm.svg";
import anthropologie from "../assets/images/logo/anthropologie.svg";

export const EventInfoList = [
    {
        id: "rsvp",
        title: "rsvp",
        subTitle: "",
        titleImage: PHOTO_ENUM.BRUGE_PANO,
        mobileTitleImage: PHOTO_ENUM.KYOTO_SQUARE,
        subImage: PHOTO_ENUM.ENGAGEMENT_4,
        button: "Go to form",
        content: "<ul>Let us know if you are joining us!</ul><ul>Fill the form out by going to the link below.</ul>",
        icon: faCalendarCheck,
        buttonLink: "https://forms.gle/eejVWqnr153KGWVv5",
        viewMobile: true,
        viewDesktop: true
    },
    {
        id: "schedule",
        title: "schedule",
        subTitle: "",
        titleImage: PHOTO_ENUM.AMSTERDAM_PANO,
        mobileTitleImage: PHOTO_ENUM.PARIS_SQUARE,
        subImage: PHOTO_ENUM.ENGAGEMENT_1,
        button: null,
        content: `
            <table
                <tr><td>4:50 PM</td><td>Arrive to venue</td></tr>
                <tr><td>5:00 PM - 5:30 PM</td><td>Ceremony</td></tr>
                <tr><td>5:30 PM - 6:30 PM</td><td>Cocktail Hour</td></tr>
                <tr><td>6:30 PM - 11:00 PM</td><td>Reception</td></tr>
            <table>`,
        icon: faCalendarDay,
        buttonLink: null,
        viewDesktop: true,
        viewMobile: true
    },
    {
        id: "venue",
        title: "venue",
        subTitle: "",
        titleImage: PHOTO_ENUM.GLENN_ARBOR_PANO,
        mobileTitleImage: PHOTO_ENUM.GLENN_ARBOR_SQUARE,
        subImage: PHOTO_ENUM.ENGAGEMENT_2,
        button: "View map",
        content: `
            <ul>Our wedding ceremony and cocktail hour will be hosted at the Point at Norwalk Cove in Norwalk, CT.</ul>
            <ul>48 Calf Pasture Beach Rd. Norwalk, CT 06855</ul>`,
        icon: faGlassCheers,
        buttonLink: "https://www.google.com/maps/@41.0837121,-73.3984655,3a,90y,316.55h,93.76t/data=!3m10!1e1!3m8!1sAF1QipMm8bF8l23W_NK4q2xQuy_3ebNepO83_qdfWNNi!2e10!3e12!7i8192!8i4096!9m2!1b1!2i38",
        viewMobile: true,
        viewDesktop: true
    },
    {
        id: "hotel",
        title: "hotel",
        subTitle: "",
        titleImage: PHOTO_ENUM.ZAKOPANE_PANO,
        mobileTitleImage: PHOTO_ENUM.ZAKOPANE_SQUARE,
        subImage: PHOTO_ENUM.ENGAGEMENT_3,
        button: "Book stay",
        content: `
            <ul>We have room blocks reserved at the Zero Degrees hotel in Norwalk.</ul>
            <ul>
                <li>You may book your stay using the below link.</li>
            </ul>
            <ul>
                <li>Or call (203)750-9800 and say you are part of the Gorniak/Skorski wedding.</li>
            </ul>`,
        icon: faConciergeBell,
        buttonLink: "https://www.bookonthenet.net/east/premium/eresmain.aspx?id=LO8W7KTBFBqJtZAby1hkmmTxmOqeaOn4yjTO6OXz1ew%3d&arrival_date=2022-09-08&stay_nights=2&promo_code=Gorniak-Skorski%20#/rates",
        viewDesktop: true,
        viewMobile: true
    },
    {
        id: "registry",
        title: "registry",
        subTitle: "",
        titleImage: PHOTO_ENUM.HAWAII_PANO,
        mobileTitleImage: PHOTO_ENUM.HAWAII_SQUARE,
        subImage: PHOTO_ENUM.ENGAGEMENT_5,
        button: null,
        content: `
        <ul>Thank you for visiting our registry. Any gift is greatly appreciated! Can't wait to celebrate with everyone!</ul>
        <div class="content-items">
            <div class="content-item">
                <a href='https://www.williams-sonoma.com/registry/gts5j6htk7/registry-list.html?cm_Type=gnav'>
                    <div class="content-button-image accent-color">
                        <img src="${williamSonoma}"/>
                    </div>
                </a>
            </div>
            <div class="content-item">
                <a href='https://www.anthropologie.com/registry/listing?registryId=63CE915B1E5F#:~:text=https%3A//www.anthropologie.com/registry/listing%3FregistryId%3D63CE915B1E5F'>
                    <div class="content-button-image accent-color">
                        <img src="${anthropologie}"/>
                    </div>
                </a>
            </div>
            <div class="content-item">
                <a href='https://www.potterybarn.com/registry/gts5j6htk7/registry-list.html'>
                    <div class="content-button-image accent-color">
                        <img src="${potteryBarn}"/>
                    </div>
                </a>
            </div>
            <div class="content-item">
                <a href='https://www.westelm.com/registry/gts5j6htk7/registry-list.html'>
                    <div class="content-button-image accent-color">
                        <img src="${westElm}"/>
                    </div>
                </a>
            </div>
            </div>`,
        icon: faGift,
        buttonLink: null,
        viewDesktop: true,
        viewMobile: true
    }
] as EventInfo[]