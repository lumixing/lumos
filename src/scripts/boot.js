import { createWindow } from "./window/main";

console.log("booting!");

window.windows = [];
window.zIndex = 0;

createWindow();

document.onkeydown = ((e) => {
    if (e.key == "a" && e.altKey) {
        createWindow();
    }
});