import { IconDefinition } from "@fortawesome/fontawesome-common-types";

export class EventInfo {
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