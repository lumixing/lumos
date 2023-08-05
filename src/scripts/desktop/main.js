import image from "../../static/nft.png";
import { unfocus } from "../window/main";
import { appMoveHandler } from "./move";

export function createApp(text, launcher, x = 0, y = 0, icon = image) {
    let appDiv = document.createElement("div");
    appDiv.classList.add("app");
    appDiv.onmousedown = appMoveHandler;
    appDiv.ondblclick = launcher;

    appDiv.innerHTML = /*html*/`
        <img src="${icon}" alt="icon" width="32" draggable="false">
        <span>${text}</span>
    `;

    appDiv.style.left = `${x}px`;
    appDiv.style.top = `${y}px`;

    document.getElementById("desktop").append(appDiv);
}

export function desktopUnfocusHandler() {
    document.getElementById("desktop").onclick = () => {
        unfocus();
    };
}