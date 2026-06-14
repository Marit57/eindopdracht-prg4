import { Actor, Color, FontUnit, Label } from "excalibur";
import { Resources } from "./resources";

export class UI extends Actor {
    constructor() {
        super();
        this.score = 0;
        this.scoreLabel = new Label({
                font: Resources.PixelFont.toFont({
                unit: FontUnit.Px,
                size: 36,
                color: Color.White
            }),
                x: 10,
                y: 10,
                text: `Score: ${this.score}`
            });
        this.addChild(this.scoreLabel)
    }

    updateScore(points) {
        this.score += points;
        this.scoreLabel.text = `Score: ${this.score}`;
    }
}