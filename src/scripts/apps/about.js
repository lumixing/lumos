import { createWindow } from "../window/main"
import image from "../../static/lumos.png";

export function launch() {
    createWindow({
        title: "about lumOS",
        body: /*html*/`
            <div class="flex g8">
                <img src=${image} alt="lumos" draggable="false">
                <div class="flex flex-column">
                    <span class="bold text-32">lumOS</span>
                    <span>version 0.1</span>
                </div>
            </div>
        `,
        icon: image,
        size: [400, 180],
        position: "center",
        minimizable: false,
        centerBody: true,
    });
}