import { createWindow } from "../window/main";
import image from "../../static/nft.png";
import { createToast } from "../toast/main";

export function launchWhatsNew() {
    let windowDiv = createWindow({
        title: "what's new?!",
        icon: image,
        body: /*html*/`
            <div class="p8">
                <h1>WHAT'S NEW?!</h1>
                <span>in version 0.2</span>

                <h1 class="mt16">Added</h1>
                
                <div class="mb16">
                    <p>Some cool new apps!</p>
                    <ul>
                        <li><b>About</b> See what's all about lumOS</li>
                        <li><b>Editor</b> Edit away your thoughts</li>
                        <li><b>Twitch</b> Watch a Twitch&trade; streamer</li>
                        <li><b>Spotify</b> Not really Spotify.. (their embeds suck!)</li>
                        <li><b>What's New</b> I don't remember adding this</li>
                    </ul>
                </div>

                <div class="mb16">
                    <p>TOASTS! Try them out!</p>
                    <button id="test-button-1">toast1</button>
                    <button id="test-button-2">toast2</button>
                    <button id="test-button-3">toast3</button>
                    <button id="test-button-4">toast4</button>
                </div>

                <div class="mb16">
                    <p><i>Keyboard shortcuts</i>!</p>
                    <ul>
                        <li><b>Alt+Q</b> Close an active window</li>
                        <li><b>Alt+W</b> Toast an active window's rect info</li>
                        <li><b>Alt+A</b> Open a blank window</li>
                        <li><b>Alt+S</b> Toast the UNIX time</li>
                    </ul>
                </div>

                <div>
                    <p>Desktop features!</p>
                    <ul>
                        <li>Desktop apps that launch their respective app! (revolutionary technological advancement)</li>
                        <li>You can move the desktop apps</li>
                        <li>Desktop apps locations are saved after refresh for your own customizable desktop experience!</li>
                    </ul>
                </div>

                <h1 class="mt16">Fixed</h1>
                <p>Fixed a few bugs :)</p>

            </div>
        `,
        center: true,
        width: 500
    });

    windowDiv.querySelector("#test-button-1").onclick = () => createToast("this is toast NUMBER ONE!!!");
    windowDiv.querySelector("#test-button-2").onclick = () => createToast("successful toast number too B)", 2000, "success");
    windowDiv.querySelector("#test-button-3").onclick = () => createToast("umm this is toast 3", 2000, "warn");
    windowDiv.querySelector("#test-button-4").onclick = () => createToast("THIS IS TOAST CODE FOUR RUN", 2000, "error");
}