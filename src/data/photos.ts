import austinPano from "../assets/images/png/austin_pano.png";
import amsterdamPano from "../assets/images/png/amsterdam_pano.png";
import kyotoPano from "../assets/images/png/kyoto_pano.png";
import zakopanePano from "../assets/images/png/zakopane_pano.png";
import austinSquare from "../assets/images/png/austin_square.jpg";
import makiFamilyPhoto from "../assets/images/png/maki_family_photo.jpg";
import glennArborPano from "../assets/images/png/glenn_arbor_pano.png";

import austinPanoWebp from "../assets/images/webp/austin_pano.webp";
import amsterdamPanoWebp from "../assets/images/webp/amsterdam_pano.webp";
import kyotoPanoWebp from "../assets/images/webp/kyoto_pano.webp";
import zakopanePanoWebp from "../assets/images/webp/zakopane_pano.webp";
import austinSquareWebp from "../assets/images/webp/austin_square.webp";
import makiFamilyPhotoWebp from "../assets/images/webp/maki_family_photo.webp";
import glennArborPanoWebp from "../assets/images/webp/glenn_arbor_pano.webp";

export const PHOTO_ENUM = {
    AUSTIN_PANO : "austinPano",
    AMSTERDAM_PANO : "amsterdamPano",
    KYOTO_PANO : "kyotoPano",
    ZAKOPANE_PANO : "zakopanePano",
    AUSTIN_SQUARE : "austinSquare",
    MAKI_FAMILY_PHOTO : "makiFamilyPhoto",
    GLENN_ARBOR_PANO : "glennArborPano"
}
export const photos = {
    austinPano : {
        png : austinPano,
        webp : austinPanoWebp
    },
    amsterdamPano : {
        png : amsterdamPano,
        webp : amsterdamPanoWebp
    },
    kyotoPano : {
        png : kyotoPano,
        webp : kyotoPanoWebp
    },
    zakopanePano : {
        png : zakopanePano,
        webp : zakopanePanoWebp
    },
    austinSquare : {
        png : austinSquare,
        webp : austinSquareWebp
    },
    makiFamilyPhoto : {
        png : makiFamilyPhoto,
        webp : makiFamilyPhotoWebp
    },
    glennArborPano : {
        png : glennArborPano,
        webp : glennArborPanoWebp
    }
} as any