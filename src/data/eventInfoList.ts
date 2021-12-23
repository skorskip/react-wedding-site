import { EventInfo } from "../models/eventInfo";
import { faConciergeBell, faGlassCheers, faHighlighter, faCalendarCheck } from "@fortawesome/free-solid-svg-icons";
import { PHOTO_ENUM } from "./photos";

export const EventInfoList = [
    {
        title: "when ...",
        subTitle: "Details",
        titleImage: PHOTO_ENUM.AMSTERDAM_PANO,
        mobileTitleImage: PHOTO_ENUM.AMSTERDAM_SQUARE,
        subImage: PHOTO_ENUM.ENGAGEMENT_1,
        button: null,
        content: "<ul>The wedding ceremony will begin at 5:00pm on 9/9/2022 at the Point at Norwalk Cove.</ul><ul>Followed by cocktail hour and reception all at the same location.</ul>",
        icon: faHighlighter,
        buttonLink: null
    },
    {
        title: "where ...",
        subTitle: "Venue",
        titleImage: PHOTO_ENUM.GLENN_ARBOR_PANO,
        mobileTitleImage: PHOTO_ENUM.GLENN_ARBOR_SQUARE,
        subImage: PHOTO_ENUM.ENGAGEMENT_2,
        button: "View map",
        content: "<ul>The wedding will hosted at the The Point in Norwalk, CT.</ul><ul>This is a tented, outdoor venue right on the water.</ul>",
        icon: faGlassCheers,
        buttonLink: "https://www.google.com/maps/@41.0837121,-73.3984655,3a,90y,316.55h,93.76t/data=!3m10!1e1!3m8!1sAF1QipMm8bF8l23W_NK4q2xQuy_3ebNepO83_qdfWNNi!2e10!3e12!7i8192!8i4096!9m2!1b1!2i38"
    },
    {
        title: "how ...",
        subTitle: "Hotel",
        titleImage: PHOTO_ENUM.ZAKOPANE_PANO,
        mobileTitleImage: PHOTO_ENUM.ZAKOPANE_SQUARE,
        subImage: PHOTO_ENUM.ENGAGEMENT_3,
        button: "Book stay",
        content: "<ul>We have room blocks reserved at the Zero Degrees hotel in Norwalk.</ul><ul>You may book your stay using the below link.</ul><ul>Or call (203)750-9800 and say you are part of the Gorniak/Skorski wedding.</ul>",
        icon: faConciergeBell,
        buttonLink: "https://www.bookonthenet.net/east/premium/eresmain.aspx?id=LO8W7KTBFBqJtZAby1hkmmTxmOqeaOn4yjTO6OXz1ew%3d&arrival_date=2022-09-08&stay_nights=2&promo_code=Gorniak-Skorski%20#/rates"
    },
    {
        title: "who ...",
        subTitle: "RSVP",
        titleImage: PHOTO_ENUM.BRUGE_PANO,
        mobileTitleImage: PHOTO_ENUM.KYOTO_SQUARE,
        subImage: null,
        button: null,
        content: "Coming soon, stay tuned!",
        icon: faCalendarCheck,
        buttonLink: null
    }
] as EventInfo[]