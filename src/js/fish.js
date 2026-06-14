import { Actor, Color, Vector } from "excalibur";
import { Resources } from "./resources";
import { Dobber } from "./dobber";
import { CatchPopup } from "./catchpopup";

export class Fish extends Actor {
    caught = false;
    scored = false;


    direction = Math.random() < 0.5 ? -100 : 100; // willekeurige richting: -1 (links) of 1 (rechts) 

    constructor() {
        super({ width: Resources.Goldfish.width, height: Resources.Goldfish.height });

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
        const sprite = fishes[randomIndex];

         this.name = ["Goldfish", "Clownfish", "Catfish", "Rainbow Trout", "Surgeonfish", "Bass", "Anchovy", "Angelfish", "Pufferfish"][randomIndex];

        switch (randomIndex) {
            case 0: this.points = 5; break;
            case 1: this.points = 8; break;
            case 2: this.points = 12; break;
            case 3: this.points = 15; break;
            case 4: this.points = 20; break;
            case 5: this.points = 10; break;
            case 6: this.points = 3; break;
            case 7: this.points = 7; break;
            case 8: this.points = 25; break;
        }

        sprite.tint = Color.Black;
        this.graphics.use(sprite);


        const minY = 310;
        const maxY = 505;
        const randomY = Math.random() * (maxY - minY) + minY;
        this.pos = new Vector(Math.random() * (1160 - 135) + 135, randomY);  // x = random, y = random tussen minY en maxY
        this.vel = new Vector(this.direction, 0);
        this.scale = new Vector(3, 3);

        if (this.direction < 0) {
            this.graphics.flipHorizontal = true;
        }

        this.on('exitviewport', (e) => this.turnAround(e));
    }

    turnAround(e) {
        this.direction *= -1;
        this.vel = new Vector(this.direction, 0);
        this.graphics.flipHorizontal = !this.graphics.flipHorizontal;
    }

    onCollisionStart(self, other) {
        if (other.owner instanceof Dobber && !other.owner.isUnderwater() && !other.owner.isFlying) {
            this.vel = new Vector(0, 0);
            other.owner.goUnderwater(this);
        }
    }

    onPreUpdate(engine, delta) {
        if (this.caught) {

            this.z = 100;

            // 1. Stop bewegen
            this.vel = new Vector(0, 0);

            // 2. Tint verwijderen → originele sprite tonen
            this.graphics.current.tint = Color.White;

            // 3. Naar het midden van het scherm bewegen
            const target = new Vector(engine.drawWidth / 2, engine.drawHeight / 2);
            this.pos = this.pos.lerp(target, 0.05); // smooth movement

            // 4. Groter worden
            this.scale = this.scale.lerp(new Vector(10, 10), 0.05);

            // 5. Als hij bijna in het midden is → punten geven
            if (!this.scored && this.pos.distance(target) < 10) {

                const ui = this.scene.ui;
                if (ui) {
                    ui.updateScore(this.points);
                    console.log(`+${this.points} punten!`);
                }
                this.scored = true;

                const popup = new CatchPopup(
                    this.name,
                    this.points,
                    () => {
                        // Confirm gedrukt → vis killen en dobber resetten
                        this.kill();
                        this.scene.dobber.resetToSteiger();
                    }
                );

                popup.pos = new Vector(engine.drawWidth / 2, engine.drawHeight / 2);
                this.scene.add(popup);
            }
        }
    }
}