import { EventInfo } from "../models/eventInfo";
import { faConciergeBell, faGlassCheers, faHighlighter, faCalendarCheck } from "@fortawesome/free-solid-svg-icons";
import { PHOTO_ENUM } from "./photos";

export const EventInfoList = [
    {
        title: "when ...",
        subTitle: "Details",
        titleImage: PHOTO_ENUM.AMSTERDAM_PANO,
        mobileTitleImage: PHOTO_ENUM.AMSTERDAM_SQUARE,
        subImage: PHOTO_ENUM.MAKI_FAMILY_PHOTO,
        button: null,
        content: "The wedding ceremony will begin at 5:00pm on 9/9/2022 at the Longshore Pavillion, followed by cocktail hour and reception all at the same location.",
        icon: faHighlighter
    },
    {
        title: "where ...",
        subTitle: "Venue",
        titleImage: PHOTO_ENUM.GLENN_ARBOR_PANO,
        mobileTitleImage: PHOTO_ENUM.GLENN_ARBOR_SQUARE,
        subImage: PHOTO_ENUM.MAKI_FAMILY_PHOTO,
        button: "View map",
        content: "The wedding will hosted at the Longshore Pavillion in Norwalk, CT. A tented, outdoor venues right on the water.",
        icon: faGlassCheers
    },
    {
        title: "how ...",
        subTitle: "Hotel",
        titleImage: PHOTO_ENUM.ZAKOPANE_PANO,
        mobileTitleImage: PHOTO_ENUM.ZAKOPANE_SQUARE,
        subImage: PHOTO_ENUM.MAKI_FAMILY_PHOTO,
        button: "Book stay",
        content: "We have room blocks reserved at the Zero Degrees hotel in Norwalk, you can book your stay using the below link or call ()-- and say you are part of the Gorniak/Skorski wedding.",
        icon: faConciergeBell
    },
    {
        title: "who ...",
        subTitle: "RSVP",
        titleImage: PHOTO_ENUM.KYOTO_PANO,
        mobileTitleImage: PHOTO_ENUM.KYOTO_SQUARE,
        subImage: null,
        button: null,
        content: "Coming soon, stay tuned!",
        icon: faCalendarCheck
    }
] as EventInfo[]