let [x, y] = [0, 0];
let selectedWindow = null;

export function windowMoveHandler(e) {
    if (e.target.closest(".controls")) return;
    selectedWindow = e.target.closest(".window");

    x = e.clientX;
    y = e.clientY;

    selectedWindow.style.zIndex = ++window.zIndex;

    document.addEventListener("mousemove", mouseMoveHandler);
    document.addEventListener("mouseup", mouseUpHandler);
}

function mouseMoveHandler(e) {
    const dx = e.clientX - x;
    const dy = e.clientY - y;

    selectedWindow.style.top = `${Math.min(Math.max(selectedWindow.offsetTop + dy, 0), window.innerHeight - selectedWindow.offsetHeight)}px`;
    selectedWindow.style.left = `${Math.min(Math.max(selectedWindow.offsetLeft + dx, 0), window.innerWidth - selectedWindow.offsetWidth)}px`;

    x = e.clientX;
    y = e.clientY;
}

function mouseUpHandler() {
    selectedWindow = null;
    document.removeEventListener("mousemove", mouseMoveHandler);
    document.removeEventListener("mouseup", mouseUpHandler);
}