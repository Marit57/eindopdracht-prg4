import { Color, Label, Scene } from "excalibur";
import { Fish } from "../fish";
import { Dobber } from "../dobber";
import { Background } from "../background";
import { Steiger } from "../steiger";
import { UI } from "../ui";
import { CountdownTimer } from "../countdowntimer";


export class MainScene extends Scene {
    ui;
    timer;
    dobber;

    onInitialize(engine) {
        const bg = new Background();
        this.add(bg);

        this.add(new Steiger());
        this.dobber = new Dobber();
        this.add(this.dobber);

        for (let i = 0; i < 7; i++) {
            this.add(new Fish());
        }

        this.ui = new UI();
        this.add(this.ui);

        this.timer = new CountdownTimer();
        this.add(this.timer);
    }
}