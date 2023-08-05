import { closeWindow, createWindow } from "../window/main";
import twitchImage from "../../static/twitch.png";

export function launchTwitch() {
    let windowDiv = createWindow({
        title: "https://twitch.tv",
        body: /*html*/`
            <div class="flex flex-column flex-center g4">
                <label for="twitch-channel">type a twitch username to watch:</label>
                <div>
                    <input type="text" id="twitch-channel">
                    <button id="twitch-watch">watch</button>
                </div>
            </div>
        `,
        flexCenter: true,
        center: true,
        height: 150,
        icon: twitchImage
    });

    windowDiv.querySelector("#twitch-watch").onclick = () => {
        let channelName = windowDiv.querySelector("#twitch-channel").value;
        closeWindow(windowDiv);
        
        createWindow({
            title: `https://twitch.tv/${channelName}`,
            body: /*html*/`
                <iframe class="w100 h100" src="https://player.twitch.tv/?channel=${channelName}&parent=lumixing.github.io" frameborder="0" allowfullscreen="true" scrolling="no"></iframe>
            `,
            x: 127,
            y: 39,
            width: 984,
            height: 569,
            hideOverflow: true,
            icon: twitchImage
        });
    
        createWindow({
            title: `https://twitch.tv/${channelName}/chat`,
            body: /*html*/`
                <iframe class="w100 h100" src="https://www.twitch.tv/embed/${channelName}/chat?parent=lumixing.github.io"></iframe>
            `,
            x: 1127,
            y: 38,
            width: 358,
            height: 806,
            hideOverflow: true,
            icon: twitchImage
        });
    };

}