import _ from "underscore";
import { createApp } from "./main";
import { launchAbout } from "../apps/about";
import { launchEditor } from "../apps/editor";
import { launchTwitch } from "../apps/twitch";
import { launchSpotify } from "../apps/spotify";
import { launchWhatsNew } from "../apps/whatsnew";
import { launchCSS } from "../apps/css";
import twitchImage from "../../static/twitch.png";

const defaultLoadedApps = {
    "about": [100, 100],
    "editor": [200, 100],
    "twitch": [300, 100],
    "spotify": [400, 100],
    "whatsnew": [500, 100],
    "css": [600, 100],
};

export function loadApps() {
    let loadedApps = localStorage.getItem("apps");

    if (loadedApps) {
        loadedApps = JSON.parse(loadedApps);
    } else {
        loadedApps = {};
        localStorage.setItem("apps", JSON.stringify(loadedApps));
    }

    loadedApps = _.defaults({}, _.clone(loadedApps), defaultLoadedApps);

    createApp("about", launchAbout, loadedApps["about"][0], loadedApps["about"][1]);
    createApp("editor", launchEditor, loadedApps["editor"][0], loadedApps["editor"][1]);
    createApp("twitch", launchTwitch, loadedApps["twitch"][0], loadedApps["twitch"][1], twitchImage);
    createApp("spotify", launchSpotify, loadedApps["spotify"][0], loadedApps["spotify"][1]);
    createApp("whatsnew", launchWhatsNew, loadedApps["whatsnew"][0], loadedApps["whatsnew"][1]);
    createApp("css", launchCSS, loadedApps["css"][0], loadedApps["css"][1]);
}