import { updateTray } from "../taskbar/main";
import { createWindow } from "../window/main";
import { shortcutHandler } from "./shortcuts";

window.activeWindow = null;
window.zIndex = 10;

createWindow({
    title: "123djsaidjaodjodjodjsjdjdijdjdidjoadjdiadjasdoisajasend",
    position: "center",
});

shortcutHandler();

setInterval(() => {
    updateTray();
}, 100);