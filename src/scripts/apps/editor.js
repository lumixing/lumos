import { createWindow } from "../window/main";
import { EditorView, basicSetup } from "codemirror"

export function launchEditor() {
    let windowDiv = createWindow({
        title: "editor!",
    });

    let editor = new EditorView({
        extensions: [
            basicSetup,
            EditorView.theme({
                ".cm-content": {fontFamily: "unifont"},
            })
        ],
        parent: windowDiv.querySelector(".body")
    });
}