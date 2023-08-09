import { createWindow } from "../window/main";
import { shortcutHandler } from "./shortcuts";

window.activeWindow = null;
window.zIndex = 10;

createWindow({
    position: "center",
});

shortcutHandler();