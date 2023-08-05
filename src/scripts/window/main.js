import _ from "underscore";
import { windowMoveHandler } from "./move";
import { windowResizeHandler } from "./resize";
import { playAnimation } from "../util";

const createWindowDefaultOptions = {
    title: "untitled window",
    icon: "",
    body: "",
    resize: true,
    move: true,
    close: true,
    minimize: true,
    center: false,
    x: 0,
    y: 0,
    width: 300,
    height: 300,
    hideOverflow: false,
    flexCenter: false
};

export function createWindow(options) {
    options = _.defaults({}, _.clone(options), createWindowDefaultOptions);

    let id = Math.random();
    let windowDiv = document.createElement("div");
    windowDiv.classList.add("window");
    windowDiv.dataset.id = id;

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

    windowDiv.onmousedown = (e) => {
        if (e.target.closest(".controls")) return;
        focusWindow(e.target.closest(".window"));
    };

    windowDiv.querySelector(".head").onmousedown = windowMoveHandler;
    windowDiv.querySelectorAll(".resize").forEach(r => r.onmousedown = windowResizeHandler);
    
    windowDiv.querySelector(".close").onclick = (e) => {
        closeWindow(e.target.closest(".window"));
    };

    document.getElementById("window-container").append(windowDiv);

    windowDiv.style.left = `${options.x}px`;
    windowDiv.style.top = `${options.y}px`;
    windowDiv.style.width = `${options.width}px`;
    windowDiv.style.height = `${options.height}px`;

    if (options.hideOverflow) {
        windowDiv.querySelector(".body").style.overflow = "hidden";
    }

    if (options.center) {
        windowDiv.style.left = `${~~(window.innerWidth / 2 - windowDiv.offsetWidth / 2)}px`;
        windowDiv.style.top = `${~~(window.innerHeight / 2 - windowDiv.offsetHeight / 2)}px`;
    }

    focusWindow(windowDiv);

    return windowDiv;
}

export function focusWindow(windowDiv) {
    document.querySelectorAll(".window.focused").forEach(e => {
        e.classList.remove("focused");
    });
    window.activeWindow = windowDiv;
    window.activeWindow.classList.add("focused");
    window.activeWindow.style.zIndex = ++window.zIndex;
}

export function unfocus() {
    document.querySelectorAll(".window.focused").forEach(e => {
        e.classList.remove("focused");
    });
    window.activeWindow = null;
}

export function closeWindow(windowDiv) {
    playAnimation(windowDiv, "windowOpen ease reverse forwards", 100, () => {
        console.log("closing window!");
        windowDiv.remove();
        window.activeWindow = null;
    });
}