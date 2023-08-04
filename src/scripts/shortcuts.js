import { createToast } from "./toast/main";
import { createWindow } from "./window/main";
import { stringify } from "./util";

export function shortcutHandler() {
    document.onkeydown = ((e) => {
        if (e.key == "a" && e.altKey) {
            createWindow();
        }
    
        if (e.key == "q" && e.altKey) {
            if (window.activeWindow == null) return;
            window.activeWindow.remove();
            window.activeWindow = null;
        }
    
        if (e.key == "s" && e.altKey) {
            createToast(Date.now());
        }
    
        if (e.key == "w" && e.altKey) {
            if (window.activeWindow == null) {
                createToast("No any active window!", 1000, "warn");
                return;
            }
    
            createToast(stringify(window.activeWindow.getBoundingClientRect()), 3000);
        }

        if (e.key == "e" && e.altKey) {
            if (window.activeWindow == null) {
                createToast("No any active window!", 1000, "warn");
                return;
            }
    
            createToast(window.activeWindow.dataset.id, 3000);
        }
    });
}