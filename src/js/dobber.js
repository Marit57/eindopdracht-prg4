import { Actor, Keys, Vector } from "excalibur";
import { Resources } from "./resources";

export class Dobber extends Actor {
    
    speed = 100;

    constructor() {
        super();
    }

    onInitialize(engine) {
        this.graphics.use(Resources.Dobber.toSprite());
        this.pos = new Vector(engine.drawWidth / 2, 600);
        this.vel = new Vector(0, 0);
        this.scale = new Vector(0.3, 0.3);
    }

    onPreUpdate(engine){
        let xspeed = 0;
        let yspeed = 0;

        if (engine.input.keyboard.isHeld(Keys.Left)){
            xspeed = -this.speed;
        }

        if (engine.input.keyboard.isHeld(Keys.Right)){
            xspeed = this.speed;
        }

        if (engine.input.keyboard.isHeld(Keys.Up)){
            yspeed = -this.speed;
        }

        if (engine.input.keyboard.isHeld(Keys.Down)){
            yspeed = this.speed;
        }

        this.vel = new Vector(xspeed, yspeed);
    }
}