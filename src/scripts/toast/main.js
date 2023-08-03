import _ from "underscore";

export function createToast(text, time = 2000, type) {
    let toastDiv = document.createElement("div");
    toastDiv.classList.add("toast");
    
    if (type) {
        toastDiv.classList.add(type);
    }

    toastDiv.innerHTML = /*html*/`
        <span>${text}</span>  
    `;

    document.getElementById("toast-container").append(toastDiv);

    setTimeout(() => {
        toastDiv.style.animation = "none";
    }, 200);

    if (time >= 0) {
        setTimeout(() => {
            toastDiv.style.animation = "toastOpen .2s ease reverse forwards";
            
            setTimeout(() => {
                toastDiv.remove();
            }, 200);
        }, time);
    }
}