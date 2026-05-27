import { ImageSource, Sound, Resource, Loader } from 'excalibur'

// voeg hier jouw eigen resources toe
const Resources = {
    Fish: new ImageSource('images/fish.png'),
    Shark: new ImageSource('images/shark.png'),
    BG: new ImageSource('images/water2.png'),
    Dobber: new ImageSource('images/dobber.png'),
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
}




const ResourceLoader = new Loader()
for (let res of Object.values(Resources)) {
    ResourceLoader.addResource(res)
}

export { Resources, ResourceLoader }