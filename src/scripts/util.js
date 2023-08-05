export function stringify(obj) {
    return JSON.stringify(obj).slice(1, -1).replaceAll("\"", "").replaceAll(",", "<br>").replaceAll(":", ": ");
}

export function playAnimation(element, animation, time, callback) {
    element.style.animation = "none";

    setTimeout(() => {
        element.style.animation = `${animation} ${time}ms`;
    }, 0);

    setTimeout(callback, time);
}