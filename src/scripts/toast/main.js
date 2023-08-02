import _ from "underscore";

const createToastDefaultOptions = {
    text: "some toast text",
    time: 2000
};

export function createToast(options) {
    options = _.defaults({}, _.clone(options), createToastDefaultOptions);

    let toastDiv = document.createElement("div");
    toastDiv.classList.add("toast");

    toastDiv.innerHTML = /*html*/`
        <span>${options.text}</span>  
    `;

    document.getElementById("toast-container").append(toastDiv);

    setTimeout(() => {
        toastDiv.style.animation = "none";
    }, 200);

    if (options.time >= 0) {
        setTimeout(() => {
            toastDiv.style.animation = "toastOpen .2s ease reverse forwards";
            
            setTimeout(() => {
                toastDiv.remove();
            }, 200);
        }, options.time);
    }
}