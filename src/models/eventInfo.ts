import { IconDefinition } from "@fortawesome/fontawesome-common-types";

export class EventInfo {
    id: string;
    title: string;
    subTitle: string;
    icon: IconDefinition;
    button: string | null;
    subImage: string;
    titleImage: string;
    mobileTitleImage: string;
    content: string;
    buttonLink: string | null;
    viewMobile: boolean;
    viewDesktop: boolean;
    

    constructor(
        id: string,
        title: string, 
        subtitle: string,
        icon: IconDefinition,
        button: string,
        subImage: string,
        titleImage: string,
        mobileTitleImage: string,
        content: string,
        buttonLink: string,
        viewMobile: boolean,
        viewDesktop: boolean) {

        this.id = id;
        this.title = title;
        this.subTitle = subtitle;
        this.icon = icon;
        this.button = button;
        this.subImage = subImage;
        this.titleImage = titleImage;
        this.mobileTitleImage = mobileTitleImage;
        this.content = content;
        this.buttonLink = buttonLink;
        this.viewMobile = viewMobile;
        this.viewDesktop = viewDesktop;
    }
}