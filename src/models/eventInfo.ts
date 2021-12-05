import { IconDefinition } from "@fortawesome/fontawesome-common-types";

export class EventInfo {
    title: string;
    subTitle: string;
    icon: IconDefinition;
    button: string | null;
    subImage: string;
    titleImage: string;
    content: string;

    constructor(
        title: string, 
        subtitle: string,
        icon: IconDefinition,
        button: string,
        subImage: string,
        titleImage: string,
        content: string) {

        this.title = title;
        this.subTitle = subtitle;
        this.icon = icon;
        this.button = button;
        this.subImage = subImage;
        this.titleImage = titleImage;
        this.content = content;
    }
}