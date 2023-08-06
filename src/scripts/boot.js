import { applySettings, launchSettings } from "./apps/settings";
import { loadApps } from "./desktop/loadApps";
import { desktopUnfocusHandler } from "./desktop/main";
import { shortcutHandler } from "./shortcuts";
import { createToast } from "./toast/main";

console.log("booting!");
createToast("successfully booted!", 1000, "success");

window.windows = [];
window.zIndex = 10;
window.activeWindow = null;
window.activeApp = null;

shortcutHandler();
desktopUnfocusHandler();

window.onerror = (_a, _b, _c, _d, err) => {
    createToast(`Uh oh! Seems like an error occured:<br>${err}<br>Check the console for more information...`, 5000, "error");
};

let loadedCSS = localStorage.getItem("css");
if (loadedCSS) {
    document.getElementById("custom-css-style").innerHTML = loadedCSS;
}

applySettings();

loadApps();
launchSettings();