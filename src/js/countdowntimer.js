import { Actor, Color, FontUnit, Label, Vector, Keys } from "excalibur";
import { Resources } from "./resources";

export class CountdownTimer extends Actor {
    timeLeft = 0;
    running = false;
    label;

    onSuccess = null;
    onFail = null;

    onInitialize(engine) {
        this.label = new Label({
            text: "",
            pos: new Vector(engine.drawWidth / 2, 50),
            font: Resources.PixelFont.toFont({
                unit: FontUnit.Px,
                size: 48,
                color: Color.White
            })
        });
        engine.currentScene.add(this.label);

        engine.input.keyboard.on("press", (evt) => {
            if (evt.key === Keys.Space && this.running) {
                console.log("Spatie op tijd gedrukt!");
                this.running = false;

                if (this.onSuccess) {
                    this.onSuccess();
                }
            }
        });
    }

    start(onSuccess, onFail) {
        this.timeLeft = 7000; // 7 seconden
        this.running = true;

        this.onSuccess = onSuccess;
        this.onFail = onFail;
        console.log("Timer gestart!");
    }

    onPreUpdate(_engine, delta) {
        if (!this.running) return;

        this.timeLeft -= delta;

        // Update label tekst
        const seconds = (this.timeLeft / 1000).toFixed(1);
        this.label.text = seconds;

        if (this.timeLeft <= 0) {
            this.timeLeft = 0;
            this.running = false;
            this.label.text = "0.0";

            if (this.onFail) {
                this.onFail();
            }
            console.log("Timer afgelopen! Speler was te laat.");
        }
    }
}