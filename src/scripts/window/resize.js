let selectedWindowResize = null;
let [x, y] = [0, 0];

export function windowResizeHandler(e) {
    window.activeWindow = e.target.parentElement;
    selectedWindowResize = e.target;

    x = e.clientX;
    y = e.clientY;

    window.activeWindow.style.zIndex = ++window.zIndex;

    document.addEventListener("mousemove", windowResizeMouseMoveHandler);
    document.addEventListener("mouseup", windowResizeMouseUpHandler);
}

function windowResizeMouseMoveHandler(e) {
    const dx = e.clientX - x;
    const dy = e.clientY - y;

    if (selectedWindowResize.classList.contains("top-resize") ||
        selectedWindowResize.classList.contains("top-left-resize") ||
        selectedWindowResize.classList.contains("top-right-resize")) {
        window.activeWindow.style.height = `${window.activeWindow.offsetHeight - dy - 4}px`;
        if (window.activeWindow.offsetHeight - dy - 4 > 99) {
            window.activeWindow.style.top = `${window.activeWindow.offsetTop + dy}px`;
        }
    }
    if (selectedWindowResize.classList.contains("right-resize") ||
        selectedWindowResize.classList.contains("top-right-resize") ||
        selectedWindowResize.classList.contains("bottom-right-resize")) {
        window.activeWindow.style.width = `${window.activeWindow.offsetWidth + dx - 4}px`;
    }
    if (selectedWindowResize.classList.contains("bottom-resize") ||
        selectedWindowResize.classList.contains("bottom-left-resize") ||
        selectedWindowResize.classList.contains("bottom-right-resize")) {
        window.activeWindow.style.height = `${window.activeWindow.offsetHeight + dy - 4}px`;
    }
    if (selectedWindowResize.classList.contains("left-resize") ||
        selectedWindowResize.classList.contains("top-left-resize") ||
        selectedWindowResize.classList.contains("bottom-left-resize")) {
        window.activeWindow.style.width = `${window.activeWindow.offsetWidth - dx - 4}px`;
        if (window.activeWindow.offsetWidth - dx - 4 > 99) {
            window.activeWindow.style.left = `${window.activeWindow.offsetLeft + dx}px`;
        }
    }

    x = e.clientX;
    y = e.clientY;
}

function windowResizeMouseUpHandler() {
    if (window.activeWindow.offsetWidth % 2 == 1) {
        window.activeWindow.style.width = `${window.activeWindow.offsetWidth + 1}px`;
    }

    selectedWindowResize = null;
    document.removeEventListener("mousemove", windowResizeMouseMoveHandler);
    document.removeEventListener("mouseup", windowResizeMouseUpHandler);
}