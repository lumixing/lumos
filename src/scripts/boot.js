import { launch } from "./apps/about";
import { createToast } from "./toast/main";
import { createWindow } from "./window/main";

console.log("booting!");

window.windows = [];
window.zIndex = 0;
window.activeWindow = null;

launch();
createToast({
    text: "yo bitch im booted up",
    time: 1000
});

document.onkeydown = ((e) => {
    if (e.key == "a" && e.altKey) {
        createWindow();
    }

    if (e.key == "q" && e.altKey) {
        window.activeWindow.remove();
    }

    if (e.key == "s" && e.altKey) {
        createToast({
            text: Date.now()
        });
    }
});