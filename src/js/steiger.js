import { Actor, Vector } from "excalibur";
import { Resources } from "./resources";

export class Steiger extends Actor {
        onInitialize(engine) {
            this.graphics.use(Resources.Steiger.toSprite());
            this.pos = new Vector(engine.drawWidth / 2, 600);
        }
}