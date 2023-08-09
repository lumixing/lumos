import { closeWindow } from "../window/main";

export function shortcutHandler() {
    document.addEventListener("keydown", (e) => {
        // e.preventDefault();

        if (e.key == "Q" && e.altKey) {
            if (!window.activeWindow) return;
            closeWindow(window.activeWindow);
        }
    });
}