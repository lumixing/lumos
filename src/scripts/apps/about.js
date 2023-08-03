import { createWindow } from "../window/main";
import image from "../../static/nft.png";

export function launchAbout() {
    createWindow({
        title: "about lumOS",
        icon: image,
        center: true,
        minimize: false,
        flexCenter: true,
        body: /*html*/`
            <div class="df fdc g8">    
                <div class="df aic g8">
                    <img src=${image} alt="lumos" width="48">
                    <div class="div">
                        <h1>lumOS</h1>
                        <span>version 0.2</span>
                    </div>
                </div>
                <p>really cool operating system</p>
                <button class="asc">ok</button>
            </div>
        `
    });
}