let [x, y] = [0, 0];

export function windowMoveHandler(e) {
    if (e.target.closest(".controls")) return;
    window.activeWindow = e.target.closest(".window");

    x = e.clientX;
    y = e.clientY;

    window.activeWindow.style.zIndex = ++window.zIndex;

    document.addEventListener("mousemove", mouseMoveHandler);
    document.addEventListener("mouseup", mouseUpHandler);
}

function mouseMoveHandler(e) {
    const dx = e.clientX - x;
    const dy = e.clientY - y;

    window.activeWindow.style.top = `${Math.min(Math.max(window.activeWindow.offsetTop + dy, 0), window.innerHeight - window.activeWindow.offsetHeight)}px`;
    window.activeWindow.style.left = `${Math.min(Math.max(window.activeWindow.offsetLeft + dx, 0), window.innerWidth - window.activeWindow.offsetWidth)}px`;

    x = e.clientX;
    y = e.clientY;
}

function mouseUpHandler() {
    // window.activeWindow = null;
    document.removeEventListener("mousemove", mouseMoveHandler);
    document.removeEventListener("mouseup", mouseUpHandler);
}