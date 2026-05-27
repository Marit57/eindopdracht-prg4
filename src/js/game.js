import '../css/style.css'
import { Actor, Engine, Vector, DisplayMode } from "excalibur"
import { Resources, ResourceLoader } from './resources.js'
import { Background } from './background.js'
import { Dobber } from './dobber.js'
import { Steiger } from './steiger.js'
import { Fish } from './fish.js'

export class Game extends Engine {

    constructor() {
        super({ 
            width: 1280,
            height: 720,
            maxFps: 60,
            displayMode: DisplayMode.FitScreen
         })
        this.start(ResourceLoader).then(() => this.startGame())
    }

    startGame() {
        const bg = new Background();
        this.add(bg);

        this.add(new Steiger());
        this.add(new Dobber());

        for (let i = 0; i < 5; i++) {
        this.add(new Fish());
        }
    }
}

new Game()
