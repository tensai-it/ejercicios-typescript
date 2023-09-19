import { Animal} from "./animal";
import { Ave } from "./ave";
import { Mamifero } from "./mamifero";
import { Reptil } from "./reptil";

export class Leon extends Mamifero {
    hacerSonido() {
        return `¡GRRRRRRAAAAWWWW!`
    }
}

export class Hornero extends Ave {
    hacerSonido() {
        return `PIPIPIPIPI`
    }
}

export class MambaNegra extends Reptil {
    esVenenosa(): boolean {
        return true;
    }
    hacerSonido() {
        return `TTTSSSSS`
    }
}

export class Capibara extends Mamifero {
    constructor(nombre: string, edad: number, energia: number, puntosAtaque: number, puntosDefensa: number, tipoPiel: string) {
        super(nombre, edad, energia, puntosAtaque, puntosDefensa, tipoPiel);
    }

    hacerSonido(): string {
        return `sniff sniff sniff`;
    }

    recibirAtaque(atacante: Animal) {

        atacante.recibirAtaque(this)
        const danio = atacante.puntosAtaque * 0.01;
        console.log(`${this.nombre} ha infligido ${danio} puntos de daño a ${atacante.nombre}.`);
        atacante.energia -= danio;
    }
}

export function informacionAnimal(animal: Animal) {
    console.log(animal.toString());
}

const simba = new Leon('Simba', 12, 20, 3, 4, 'melena');

informacionAnimal(simba);

