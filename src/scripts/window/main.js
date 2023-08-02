import _ from "underscore";
import { windowMoveHandler } from "./move";
import { windowResizeHandler } from "./resize";

const createWindowDefaultOptions = {
    title: "untitled window",
    icon: "",
    body: "",
    resize: true,
    move: true,
    close: true,
    minimize: true,
    center: false
};

export function createWindow(options) {
    options = _.defaults({}, _.clone(options), createWindowDefaultOptions);

    let id = Math.random();
    let windowDiv = document.createElement("div");
    windowDiv.classList.add("window");

    windowDiv.innerHTML = /*html*/`
        <div class="head">
            <div class="title">
                ${options.icon ? `<img src="${options.icon}" alt="icon" draggable="false">` : ""}
                <span>${options.title}</span>
            </div>
            <div class="controls">
                ${options.minimize ? `<button class="minimize">_</button>` : ""}
                ${options.close ? `<button class="close">x</button>` : ""}
            </div>
        </div>
        <div class="body ${options.flexCenter ? "body-center" : ""}">${options.body}</div>

        ${options.resize ? /*html*/`
        <div class="resize top-resize"></div>
        <div class="resize top-right-resize"></div>
        <div class="resize right-resize"></div>
        <div class="resize bottom-right-resize"></div>
        <div class="resize bottom-resize"></div>
        <div class="resize bottom-left-resize"></div>
        <div class="resize left-resize"></div>
        <div class="resize top-left-resize"></div>
        ` : ""}
    `;

    windowDiv.querySelector(".head").onmousedown = windowMoveHandler
    windowDiv.querySelectorAll(".resize").forEach(r => r.onmousedown = windowResizeHandler);

    document.getElementById("window-container").append(windowDiv);

    if (options.center) {
        windowDiv.style.left = `${window.innerWidth / 2 - windowDiv.offsetWidth / 2}px`;
        windowDiv.style.top = `${window.innerHeight / 2 - windowDiv.offsetHeight / 2}px`;
    }

    window.windows.push(id);
}
