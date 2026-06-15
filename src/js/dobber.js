import { Actor, Animation, CollisionType, Keys, range, SpriteSheet, Timer, Vector } from "excalibur";
import { Resources } from "./resources";
import { CountdownTimer } from "./countdowntimer";
import { CatchPopup } from "./catchpopup";

export class Dobber extends Actor {

    #isUnderwater = false;

    speed = 100;
    isFlying = false;

    constructor() {
        super({ radius: Resources.Dobber.width / 3 });
        this.body.collisionType = CollisionType.Active;

    }

    onInitialize(engine) {
        this.body.useGravity = false;
        this.graphics.use(Resources.Dobber.toSprite());
        this.pos = new Vector(engine.drawWidth / 2, 600);
        this.vel = new Vector(0, 0);
        this.scale = new Vector(0.3, 0.3);

        this.leftAnimation = new Animation({
            frames: [
                { graphic: Resources.DobberLeft1.toSprite(), duration: 200 },
                { graphic: Resources.DobberLeft2.toSprite(), duration: 200 },
                { graphic: Resources.DobberLeft3.toSprite(), duration: 200 }
            ]
        });

        this.rightAnimation = new Animation({
            frames: [
                { graphic: Resources.DobberRight1.toSprite(), duration: 200 },
                { graphic: Resources.DobberRight2.toSprite(), duration: 200 },
                { graphic: Resources.DobberRight3.toSprite(), duration: 200 }
            ]
        });
    }

    onPreUpdate(engine) {
        let xspeed = 0;
        let yspeed = 0;

        if (engine.input.keyboard.wasPressed(Keys.Enter)) {
            this.throw();
        }
        if (this.isFlying) return;

        if (engine.input.keyboard.isHeld(Keys.Left)) {
            xspeed = -this.speed;
            this.graphics.use(this.leftAnimation);
        }

        if (engine.input.keyboard.isHeld(Keys.Right)) {
            xspeed = this.speed;
            this.graphics.use(this.rightAnimation);
        }

        if (engine.input.keyboard.isHeld(Keys.Up)) {
            yspeed = -this.speed;
        }

        if (engine.input.keyboard.isHeld(Keys.Down)) {
            yspeed = this.speed;
        }

        this.vel = new Vector(xspeed, yspeed);
    }

    throw() {
        if (this.isFlying) return;

        this.isFlying = true;

        // Reset snelheid
        this.vel = new Vector(0, 0);

        // Gravity AAN tijdens de worp
        this.body.useGravity = true;

        // Geef worp-snelheid (parabool)
        this.body.vel = new Vector(200, -600);

        //sprite in het water
        this.scene.engine.clock.schedule(() => {
            this.graphics.use(Resources.ThrownDobber.toSprite());
        }, 600);

        // Na 1 sec worp is klaar, gravity gaat weer
        this.scene.engine.clock.schedule(() => {
            this.body.useGravity = false;
            this.body.vel = new Vector(0, 0);
            this.isFlying = false;
        }, 1000);
    }

    goUnderwater(fish) {
        this.#isUnderwater = true;

        this.actions.moveBy(0, 10, 50).callMethod(() => {
            this.graphics.use(Resources.UnderwaterDobber.toSprite());
        });

        this.scene.timer.start(
            () => {
                fish.caught = true;
                console.log("Vis gevangen!");
            },
            () => {
                fish.caught = false;
                fish.vel = new Vector(fish.direction, 0);
                this.graphics.use(Resources.Dobber.toSprite());
                this.resetToSteiger();
                console.log("Te laat!");
            }
        );
    }

    isUnderwater() {
        return this.#isUnderwater;
    }

    resetToSteiger() {
        const engine = this.scene.engine;
        this.pos = new Vector(engine.drawWidth / 2, 600);
        this.vel = new Vector(0, 0);
        this.#isUnderwater = false;
        this.graphics.use(Resources.Dobber.toSprite());
    }

}