import { Actor, Color, FontUnit, Label, Vector } from "excalibur";
import { Resources } from "./resources";

export class CatchPopup extends Actor {
    constructor(fishName, points, onConfirm) {
        super({ z: 10000 }); // altijd vooraan

        this.onConfirm = onConfirm;

        // Tekst boven vis
        this.message = new Label({
            text: `Je hebt een ${fishName} gevangen voor ${points} punten!`,
            color: Color.Black,
            font: Resources.PixelFont.toFont({
                unit: FontUnit.Px,
                size: 36,
                color: Color.White
            }),
            textAlign: "center",
            baseAlign: "middle",
        });

        this.message.anchor = new Vector(0.5, 0.5);
        this.message.pos = new Vector(0, -150);

        this.addChild(this.message);

        // Confirm knop
        this.button = new Label({
            text: "[ CONFIRM ]",
            color: Color.Yellow,
            font: Resources.PixelFont.toFont({
                unit: FontUnit.Px,
                size: 36,
                color: Color.White
            })
        });
        this.button.anchor = new Vector(0.5, 0.5);
        this.button.pos = new Vector(0, 150);

        this.button.collider.useBoxCollider(200, 40);
        this.addChild(this.button);

        // Klik detectie
        this.button.on("pointerup", () => {
            if (this.onConfirm) this.onConfirm();
            this.kill();
        });
    }
}
