import { EventInfo } from "../models/eventInfo";
import { faConciergeBell, faGlassCheers, faHighlighter } from "@fortawesome/free-solid-svg-icons";

export const EventInfoList = [
    {
        title: "when ...",
        subTitle: "Details",
        titleImage: "/assets/images/amsterdam_pano.png",
        subImage: "/assets/images/maki_family_photo.JPG",
        button: null,
        content: "The wedding ceremony will begin at 5:00pm on 9/9/2022 at the Longshore Pavillion, followed by cocktail hour and reception all at the same location.",
        icon: faHighlighter
    },
    {
        title: "where ...",
        subTitle: "Venue",
        titleImage: "/assets/images/glenn_arbor_pano.png",
        subImage: "/assets/images/maki_family_photo.JPG",
        button: "View map",
        content: "The wedding will hosted at the Longshore Pavillion in Norwalk, CT. A tented, outdoor venues right on the water.",
        icon: faGlassCheers
    },
    {
        title: "how ...",
        subTitle: "Hotel",
        titleImage: "/assets/images/zakopane_pano.png",
        subImage: "/assets/images/maki_family_photo.JPG",
        button: "Book stay",
        content: "We have room blocks reserved at the Zero Degrees hotel in Norwalk, you can book your stay using the below link or call ()-- and say you are part of the Gorniak/Skorski wedding.",
        icon: faConciergeBell
    },
] as EventInfo[]