import { EventInfo } from "../models/eventInfo";
import { faConciergeBell, faGlassCheers, faHighlighter, faCalendarCheck, faQuestion } from "@fortawesome/free-solid-svg-icons";
import { PHOTO_ENUM } from "./photos";

export const EventInfoList = [
    {
        title: "when ...",
        subTitle: "Details",
        titleImage: PHOTO_ENUM.AMSTERDAM_PANO,
        mobileTitleImage: PHOTO_ENUM.PARIS_SQUARE,
        subImage: PHOTO_ENUM.ENGAGEMENT_1,
        button: null,
        content: "<ul>The wedding ceremony will begin at 5:00pm on 9/9/2022 at the Point at Norwalk Cove.</ul>" +
        "<ul>Followed by cocktail hour and reception all at the same location.</ul>",
        icon: faHighlighter,
        buttonLink: null,
        viewDesktop: true,
        viewMobile: true
    },
    {
        title: "where ...",
        subTitle: "Venue",
        titleImage: PHOTO_ENUM.GLENN_ARBOR_PANO,
        mobileTitleImage: PHOTO_ENUM.GLENN_ARBOR_SQUARE,
        subImage: PHOTO_ENUM.ENGAGEMENT_2,
        button: "View map",
        content: "<ul>The wedding will be hosted at the The Point in Norwalk, CT.</ul>" + 
        "<ul>This is a tented, outdoor venue right on the water.</ul>",
        icon: faGlassCheers,
        buttonLink: "https://www.google.com/maps/@41.0837121,-73.3984655,3a,90y,316.55h,93.76t/data=!3m10!1e1!3m8!1sAF1QipMm8bF8l23W_NK4q2xQuy_3ebNepO83_qdfWNNi!2e10!3e12!7i8192!8i4096!9m2!1b1!2i38",
        viewMobile: true,
        viewDesktop: true
    },
    {
        title: "how ...",
        subTitle: "Hotel",
        titleImage: PHOTO_ENUM.ZAKOPANE_PANO,
        mobileTitleImage: PHOTO_ENUM.ZAKOPANE_SQUARE,
        subImage: PHOTO_ENUM.ENGAGEMENT_3,
        button: "Book stay",
        content: "<ul>We have room blocks reserved at the Zero Degrees hotel in Norwalk.</ul>" +  
        "<ul><li>You may book your stay using the below link.</li></ul>" + 
        "<ul><li>Or call (203)750-9800 and say you are part of the Gorniak/Skorski wedding.</li></ul>",
        icon: faConciergeBell,
        buttonLink: "https://www.bookonthenet.net/east/premium/eresmain.aspx?id=LO8W7KTBFBqJtZAby1hkmmTxmOqeaOn4yjTO6OXz1ew%3d&arrival_date=2022-09-08&stay_nights=2&promo_code=Gorniak-Skorski%20#/rates",
        viewDesktop: true,
        viewMobile: true
    },
    {
        title: "what ...",
        subTitle: "FAQs",
        titleImage: PHOTO_ENUM.BRUGE_PANO,
        mobileTitleImage: PHOTO_ENUM.KYOTO_SQUARE,
        subImage: null,
        button: null,
        content: "<ul>Who's this dog I see everywhere?" + 
        "<ul><li>That's Maki, the best boy, and no he will not be at the wedding.</li></ul></ul>" +
        "<ul>What time should I be there?" + 
        "<ul><li>Be there before 5, please.</li></ul></ul>",
        icon: faQuestion,
        buttonLink: "https://www.bookonthenet.net/east/premium/eresmain.aspx?id=LO8W7KTBFBqJtZAby1hkmmTxmOqeaOn4yjTO6OXz1ew%3d&arrival_date=2022-09-08&stay_nights=2&promo_code=Gorniak-Skorski%20#/rates",
        viewDesktop: true,
        viewMobile: true
    },
    // {
    //     title: "who ...",
    //     subTitle: "RSVP",
    //     titleImage: PHOTO_ENUM.BRUGE_PANO,
    //     mobileTitleImage: PHOTO_ENUM.KYOTO_SQUARE,
    //     subImage: PHOTO_ENUM.ENGAGEMENT_4,
    //     button: "Go to form",
    //     content: "<ul>Let us know if you are joining us!</ul><ul>Fill the form out by going to the link below.</ul>",
    //     icon: faCalendarCheck,
    //     buttonLink: "https://forms.gle/eejVWqnr153KGWVv5",
    //     viewMobile: true,
    //     viewDesktop: true
    // },
    // {
    //     title: "who ...",
    //     subTitle: "RSVP",
    //     titleImage: PHOTO_ENUM.BRUGE_PANO,
    //     mobileTitleImage: PHOTO_ENUM.KYOTO_SQUARE,
    //     subImage: null,
    //     button: null,
    //     content: "<iframe src=\"https://docs.google.com/forms/d/e/1FAIpQLSfVOVlXUB39aD_WYpJqHIa6eD0ytvJzQX3YYeYloVOomdikbQ/viewform?embedded=true\" width=\"640\" height=\"1000\" frameborder=\"0\" marginheight=\"0\" marginwidth=\"0\">Loading…</iframe>",
    //     icon: faCalendarCheck,
    //     buttonLink: null,
    //     viewDesktop: true,
    //     viewMobile: false
    // }
] as EventInfo[]