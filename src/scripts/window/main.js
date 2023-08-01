import _ from "underscore";
import { windowMoveHandler } from "./move";
import { windowResizeHandler } from "./resize";

const createWindowDefaultOptions = {
    title: "lorem is idos ido sidos idos i",
    icon: "",
    body: "body",
    resize: true
};

export function createWindow(options) {
    options = _.defaults({}, _.clone(options), createWindowDefaultOptions);

    let id = Math.random();
    let windowDiv = document.createElement("div");
    windowDiv.classList.add("window");

    windowDiv.innerHTML = /*html*/`
        <div class="head">
            <div class="title">
                ${options.icon ? `<img src="${options.icon}" alt="icon">` : ""}
                <span>${options.title}</span>
            </div>
            <div class="controls">
                <button class="minimize">_</button>
                <button class="close">x</button>
            </div>
        </div>
        <div class="body">${options.body}</div>

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
    window.windows.push(id);
}
