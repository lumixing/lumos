import { createWindow } from "../window/main";

export function launchCSS() {
    let windowDiv = createWindow({
        title: "custom css",
        body: /*html*/`
            <textarea class="w100 h100" id="custom-css"></textarea>
        `,
        center: true,
        hideOverflow: true
    });

    let loadedCSS = localStorage.getItem("css");
    if (loadedCSS) {
        windowDiv.querySelector("#custom-css").value = loadedCSS;
    }

    windowDiv.querySelector("#custom-css").oninput = () => {
        let value = windowDiv.querySelector("#custom-css").value
        localStorage.setItem("css", value);
        document.getElementById("custom-css-style").innerHTML = value;
    };
}