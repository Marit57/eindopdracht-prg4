import { Actor, Vector } from "excalibur"
import { Resources } from './resources.js'
import { StartLabel } from "./startlabel.js";

export class StartMenu extends Actor {
    constructor() {
        super();
        this.graphics.use(Resources.Startmenu.toSprite());
    }

    onInitialize(engine) {
        this.pos = new Vector(engine.drawWidth / 2, engine.drawHeight / 2);

        const startLabel = new StartLabel();
        this.addChild(startLabel);

        startLabel.on("pointerdown", () => {
            engine.goToScene("main");
        });
    }
}