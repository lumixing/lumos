let selectedWindowResize = null;

export function windowResizeHandler(e) {
    selectedWindow = e.target.parentElement;
    selectedWindowResize = e.target;

    x = e.clientX;
    y = e.clientY;

    selectedWindow.style.zIndex = ++window.zIndex;

    document.addEventListener("mousemove", windowResizeMouseMoveHandler);
    document.addEventListener("mouseup", windowResizeMouseUpHandler);
}

function windowResizeMouseMoveHandler(e) {
    const dx = e.clientX - x;
    const dy = e.clientY - y;

    if (selectedWindowResize.classList.contains("top-resize") ||
        selectedWindowResize.classList.contains("top-left-resize") ||
        selectedWindowResize.classList.contains("top-right-resize")) {
        selectedWindow.style.height = `${selectedWindow.offsetHeight - dy}px`;
        if (selectedWindow.offsetHeight - dy > 99) {
            selectedWindow.style.top = `${selectedWindow.offsetTop + dy}px`;
        }
    }
    if (selectedWindowResize.classList.contains("right-resize") ||
        selectedWindowResize.classList.contains("top-right-resize") ||
        selectedWindowResize.classList.contains("bottom-right-resize")) {
        selectedWindow.style.width = `${selectedWindow.offsetWidth + dx}px`;
    }
    if (selectedWindowResize.classList.contains("bottom-resize") ||
        selectedWindowResize.classList.contains("bottom-left-resize") ||
        selectedWindowResize.classList.contains("bottom-right-resize")) {
        selectedWindow.style.height = `${selectedWindow.offsetHeight + dy}px`;
    }
    if (selectedWindowResize.classList.contains("left-resize") ||
        selectedWindowResize.classList.contains("top-left-resize") ||
        selectedWindowResize.classList.contains("bottom-left-resize")) {
        selectedWindow.style.width = `${selectedWindow.offsetWidth - dx}px`;
        if (selectedWindow.offsetWidth - dx > 99) {
            selectedWindow.style.left = `${selectedWindow.offsetLeft + dx}px`;
        }
    }

    x = e.clientX;
    y = e.clientY;
}

function windowResizeMouseUpHandler() {
    selectedWindow = null;
    selectedWindowResize = null;
    document.removeEventListener("mousemove", windowResizeMouseMoveHandler);
    document.removeEventListener("mouseup", windowResizeMouseUpHandler);
}