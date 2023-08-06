import _ from "underscore";
import { createWindow } from "../window/main";
import { createToast } from "../toast/main";

const defaultSettings = {
    systemFontFamily: "px437 nec apc3 8x16",
    systemFontSize: 16,
    desktopColor: "#003b3b",
    windowBorderColor: "#cccccc",
};

export function launchSettings() {
    let windowDiv = createWindow({
        title: "settings",
        body: /*html*/`
            <div class="p8">
                <b>Appearance</b>
                <div class="mt4">
                    <label for="systemFont">System font:</label>
                    <input type="text" name="systemFontFamily" id="settings-system-font-family">
                    <input type="number" name="systemFontSize" id="settings-system-font-size">
                    <button class="settings-reset-button" name="systemFont">Reset</button>
                </div>
                <div class="mt4">
                    <label for="desktopColor">Desktop color:</label>
                    <input type="color" name="desktopColor" id="settings-desktop-color">
                    <button class="settings-reset-button" name="desktopColor">Reset</button>
                </div>
                <div class="mt4">
                    <label for="windowBorderColor">Window border color:</label>
                    <input type="color" name="windowBorderColor" id="settings-window-border-color">
                    <button class="settings-reset-button" name="windowBorderColor">Reset</button>
                </div>
            </div>
        `,
        center: true,
        width: 600,
        height: 400
    });

    let loadedSettings = getLoadedSettings();

    windowDiv.querySelectorAll("input").forEach(e => {
        e.value = loadedSettings[e.getAttribute("name")];

        e.oninput = () => {
            let setting = e.getAttribute("name");
            let value = e.value;
            // createToast(`changed ${setting} to ${value}`);
            loadedSettings[setting] = value;
            localStorage.setItem("settings", JSON.stringify(loadedSettings));
            applySettings();
        };
    });

    windowDiv.querySelectorAll("button.settings-reset-button").forEach(e => {
        e.onclick = () => {
            e.closest("div").querySelectorAll("input").forEach(input => {
                let setting = input.getAttribute("name");
                loadedSettings[setting] = defaultSettings[setting];
                input.value = loadedSettings[setting];
                localStorage.setItem("settings", JSON.stringify(loadedSettings));
                applySettings();
            });
        };
    });
}

export function applySettings() {
    let loadedSettings = getLoadedSettings();
    let root = document.querySelector(":root");

    root.style.setProperty("--font-family", `"${loadedSettings.systemFontFamily}"`);
    root.style.setProperty("--font-size", `${loadedSettings.systemFontSize}px`);
    root.style.setProperty("--desktop-color", `${loadedSettings.desktopColor}`);
    root.style.setProperty("--window-border-color", `${loadedSettings.windowBorderColor}`);
}

export function getLoadedSettings() {
    let loadedSettings = localStorage.getItem("settings");
    if (loadedSettings) {
        loadedSettings = JSON.parse(loadedSettings);
    } else {
        loadedSettings = {};
        localStorage.setItem("settings", JSON.stringify(loadedSettings));
    }
    loadedSettings = _.defaults({}, _.clone(loadedSettings), defaultSettings);
    return loadedSettings;
}