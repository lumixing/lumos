import { closeWindow, createWindow } from "../window/main";

export function shortcutHandler() {
    document.addEventListener("keydown", (e) => {
        // e.preventDefault();

        if (e.key == "Q" && e.altKey) {
            if (!window.activeWindow) return;
            closeWindow(window.activeWindow);
        }

        if (e.key == "a" && e.altKey) {
            createWindow({
                title: Math.random(),
                position: "random"
            });
        }

        if (e.key == "e") {
            if (!window.activeWindow) return;
            console.log(window.activeWindow.getBoundingClientRect());
        }
    });
}