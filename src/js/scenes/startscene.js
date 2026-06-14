import { Scene } from "excalibur";
import { Game } from "../game";
import { Background } from "../background";
import { StartMenu } from "../startmenu";
import { StartLabel } from "../startlabel";

    /**
     * 
     * @param {Game} engine 
     */
export class StartScene extends Scene {
    onInitialize(engine) {
        this.add(new Background());
        this.add(new StartMenu());
    }
}
