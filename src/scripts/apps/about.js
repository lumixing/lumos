import { closeWindow, createWindow } from "../window/main";
import image from "../../static/nft.png";

export function launchAbout() {
    let windowDiv = createWindow({
        title: "about lumOS",
        icon: image,
        center: true,
        minimize: false,
        flexCenter: true,
        body: /*html*/`
            <div class="flex flex-column g8">    
                <div class="flex align-center g8">
                    <img src=${image} alt="lumos" width="48">
                    <div class="div">
                        <h1>lumOS</h1>
                        <span>version 0.2</span>
                    </div>
                </div>
                <p>really cool operating system</p>
                <button id="about-ok" class="align-self-center">ok</button>
            </div>
        `
    });

    windowDiv.querySelector("#about-ok").onclick = (e) => {
        closeWindow(e.target.closest(".window"));  
    };
}