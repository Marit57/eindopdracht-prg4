import { Actor, Vector } from "excalibur";
import { Resources } from "./resources";

export class Fish extends Actor {
 
    constructor() {
        super();
    }

    onInitialize(engine) {
    const fishes = [
        Resources.Goldfish.toSprite(),
        Resources.Clownfish.toSprite(),
        Resources.Catfish.toSprite(),
        Resources.RainbowTrout.toSprite(),
        Resources.Surgeonfish.toSprite(),
        Resources.Bass.toSprite(),
        Resources.Anchovy.toSprite(),
        Resources.Angelfish.toSprite(),
        Resources.Pufferfish.toSprite()
    ];

    const randomIndex = Math.floor(Math.random() * fishes.length);
        this.graphics.use(fishes[randomIndex]);
            

        const minY = 250;
        const maxY = 500;
        const randomY = Math.random() * (maxY - minY) + minY;
        this.pos = new Vector(Math.random() * (1160 - 135) + 135, randomY);  // x = random, y = random tussen minY en maxY
        this.scale = new Vector(3, 3);
        }
}