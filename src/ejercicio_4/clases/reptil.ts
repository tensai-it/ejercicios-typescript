import { Animal, TipoAnimal } from "./animal";
export abstract class Reptil extends Animal {
    constructor(nombre: string, edad: number, energia: number, puntosAtaque: number, puntosDefensa: number) {
        super(nombre, edad, energia, puntosAtaque, puntosDefensa);
        this.tipo = TipoAnimal.Reptil
    }

    esquivarAtaque(): boolean {
        const probabilidadEsquivar = Math.random();
        return probabilidadEsquivar < 0.25;
    }

    abstract esVenenosa(): boolean;

    recibirAtaque(atacante: Animal) {
        if (this.esquivarAtaque()) {
            console.log(`${this.nombre} esquivó el ataque de ${atacante.nombre}!`);
        } else {
            const energiaRestante = this.energia - atacante.puntosAtaque;
            this.energia = Math.max(energiaRestante, 0);
            console.log(`${this.nombre} recibió un ataque de ${atacante.nombre}. Energía restante: ${this.energia}`);
        }
    }
}

export function esReptil(animal: Animal): animal is Reptil {
    return animal instanceof Reptil;
}