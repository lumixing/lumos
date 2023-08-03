let [x, y] = [0, 0];

export function appMoveHandler(e) {
    window.activeApp = e.target.closest(".app");

    x = e.clientX;
    y = e.clientY;

    document.addEventListener("mousemove", appMoveHandler2);
    document.addEventListener("mouseup", appUpHandler);
}

function appMoveHandler2(e) {
    const dx = e.clientX - x;
    const dy = e.clientY - y;

    window.activeApp.style.top = `${Math.min(Math.max(window.activeApp.offsetTop + dy, 0), window.innerHeight - window.activeApp.offsetHeight)}px`;
    window.activeApp.style.left = `${Math.min(Math.max(window.activeApp.offsetLeft + dx, 0), window.innerWidth - window.activeApp.offsetWidth)}px`;

    x = e.clientX;
    y = e.clientY;
}

function appUpHandler() {
    let name = window.activeApp.querySelector("span").innerText;
    let loadedApps = JSON.parse(localStorage.getItem("apps"));
    loadedApps[name] = [window.activeApp.offsetLeft, window.activeApp.offsetTop];
    localStorage.setItem("apps", JSON.stringify(loadedApps));

    document.removeEventListener("mousemove", appMoveHandler2);
    document.removeEventListener("mouseup", appUpHandler);
}