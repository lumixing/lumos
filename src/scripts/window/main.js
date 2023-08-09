import _ from "underscore";
import { windowMoveMouseDown } from "./move";
import { windowResizeMouseDown } from "./resize";

const defaultOptions = {
    title: "untitled window",
    body: "<p>unbodied window</p>",
    movable: true,
    resizable: true,
    position: [100, 100],
    size: [600, 400],
    closable: true,
    minimizable: true
};

export function createWindow(options) {
    options = _.defaults({}, _.clone(options), defaultOptions);

    let windowDiv = document.createElement("div");

    windowDiv.classList.add("window");
    windowDiv.innerHTML = /*html*/`
        <div class="head${!options.movable ? " no-move" : ""}">
            <div class="left">
                <span class="title">${options.title}</span>
            </div>
            <div class="right">
                ${options.minimizable ? '<button class="minimize">_</button>' : ""}
                ${options.closable ? '<button class="close">x</button>' : ""}
            </div>
        </div>
        <div class="body">
            ${options.body}
        </div>
        ${options.resizable ? /*html*/`
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
    
    document.getElementById("window-container").append(windowDiv);

    focusWindow(windowDiv);
    let windowHead = windowDiv.querySelector(".head");

    // window size
    windowDiv.style.width = `${options.size[0]}px`;
    windowDiv.style.height = `${options.size[1]}px`;

    // window position
    if (Array.isArray(options.position)) {
        windowDiv.style.left = `${options.position[0]}px`;
        windowDiv.style.top = `${options.position[1]}px`;
    }
    else if (options.position.toLowerCase() == "center") {
        windowDiv.style.left = `${~~(window.innerWidth / 2 - windowDiv.offsetWidth / 2)}px`;
        windowDiv.style.top = `${~~(window.innerHeight / 2 - windowDiv.offsetHeight / 2)}px`;
    }
    else if (options.position.toLowerCase() == "random") {
        windowDiv.style.left = `${~~(Math.random() * (window.innerWidth - windowDiv.offsetWidth))}px`;
        windowDiv.style.top = `${~~(Math.random() * (window.innerHeight - windowDiv.offsetHeight))}px`;
    }

    // window movement
    if (options.movable) {
        windowHead.addEventListener("mousedown", windowMoveMouseDown);
    }

    // window resizing
    if (options.resizable) {
        windowDiv.querySelectorAll(".resize").forEach(r => {
            r.addEventListener("mousedown", windowResizeMouseDown);
        });
    }

    windowDiv.addEventListener("mousedown", () => {
        focusWindow(windowDiv);
    });

    if (options.closable) {
        windowDiv.querySelector(".close").addEventListener("click", () => {
            closeWindow(windowDiv);
        });
    }

    return windowDiv;
}

function focusWindow(windowDiv) {
    window.activeWindow = windowDiv;
    windowDiv.style.zIndex = ++window.zIndex;
}

export function closeWindow(windowDiv) {
    window.activeWindow = null;
    windowDiv.remove();
}