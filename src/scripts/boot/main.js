import { updateTray } from "../taskbar/main";
import { shortcutHandler } from "./shortcuts";

window.activeWindow = null;
window.zIndex = 10;

shortcutHandler();

// pls fix this
import(`../apps/about`).then(e => e.launch());

setInterval(() => {
    updateTray();
}, 100);