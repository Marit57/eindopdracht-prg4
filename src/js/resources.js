import { ImageSource, Sound, Resource, Loader, FontSource } from 'excalibur'

// voeg hier jouw eigen resources toe
const Resources = {
    BG: new ImageSource('images/water2.png'),
    Startmenu: new ImageSource('images/Startmenu.png'),
    Dobber: new ImageSource('images/dobber.png'),
    ThrownDobber: new ImageSource('images/dobber2.png'),
    UnderwaterDobber: new ImageSource('images/onderwaterdobber.png'),
    Steiger: new ImageSource('images/steiger.png'),
    Surgeonfish: new ImageSource('images/Surgeonfish.png'),
    Goldfish: new ImageSource('images/Goldfish.png'),
    Pufferfish: new ImageSource('images/Pufferfish.png'),
    Bass: new ImageSource('images/Bass.png'),
    Anchovy: new ImageSource('images/Anchovy.png'),
    Angelfish: new ImageSource('images/Angelfish.png'),
    Catfish: new ImageSource('images/Catfish.png'),
    Clownfish: new ImageSource('images/Clownfish.png'),
    RainbowTrout: new ImageSource('images/RainbowTrout.png'),
    dobberSpritesheet: new ImageSource('images/dobberSpritesheet.png'),
    PixelFont: new FontSource('fonts/upheavtt.ttf', 'Upheaval'),
    DobberLeft1: new ImageSource('images/dobberLeft1.png'),
    DobberLeft2: new ImageSource('images/dobberLeft2.png'),
    DobberLeft3: new ImageSource('images/dobberLeft3.png'),
    DobberRight1: new ImageSource('images/dobberRight1.png'),
    DobberRight2: new ImageSource('images/dobberRight2.png'),
    DobberRight3: new ImageSource('images/dobberRight3.png'),
}




const ResourceLoader = new Loader()
for (let res of Object.values(Resources)) {
    ResourceLoader.addResource(res)
}

export { Resources, ResourceLoader }