import { createWindow } from "../window/main";
import { shortcutHandler } from "./shortcuts";

window.activeWindow = null;
window.zIndex = 10;

createWindow({
    title: "123djsaidjaodjodjodjsjdjdijdjdidjoadjdiadjasdoisajasend",
    position: "center",
});

shortcutHandler();