import { Actor, Vector } from "excalibur";
import { Resources } from "./resources";

export class Steiger extends Actor {
        constructor() {
            super();
            this.graphics.use(Resources.Steiger.toSprite());
        }

        onInitialize(engine) {
            this.pos = new Vector(engine.drawWidth / 2, 600);
        }
}