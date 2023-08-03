export function stringify(obj) {
    return JSON.stringify(obj).slice(1, -1).replaceAll("\"", "").replaceAll(",", "<br>").replaceAll(":", ": ");
}