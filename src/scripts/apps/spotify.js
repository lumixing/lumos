import { createWindow } from "../window/main";

export function launchSpotify() {
    createWindow({
        title: "A$AP Rocky - LVL",
        body: /*html*/`
            <iframe class="w100 h100" src="https://www.youtube.com/embed/lR5dwQNizVU?&autoplay=1" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
        `,
        width: 564,
        height: 341,
        hideOverflow: true
    });
}