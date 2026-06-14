import { Actor, Vector } from "excalibur"
import { Resources } from './resources.js'

export class Background extends Actor {
    
    onInitialize(engine){
        this.graphics.use(Resources.BG.toSprite());
        this.anchor = new Vector(0,0)
    }
}