import { Animal, TipoAnimal } from "./animal";
import { Reptil } from "./reptil";
import { Ave } from "./ave";

export abstract class Mamifero extends Animal {
    tipoPiel: string;
    

    constructor(nombre: string, edad: number, energia: number, puntosAtaque: number, puntosDefensa: number, tipoPiel: string) {
        super(nombre, edad, energia, puntosAtaque, puntosDefensa);
        this.tipoPiel = tipoPiel;
        this.tipo =  TipoAnimal.Mamífero
    }

    recibirAtaque(atacante: Animal) {
        if (atacante instanceof Ave) {
            // Si el atacante es un ave, reducir el daño en un 25%
            const danoReducido = atacante.puntosAtaque * 0.75;
            this.energia -= danoReducido;
        } else if (atacante instanceof Reptil && atacante.esVenenosa()) {
            // Si el atacante es un reptil venenoso, infligir el doble de daño
            this.energia -= atacante.puntosAtaque * 2;
        } else {
            // En otros casos, infligir daño normal
            this.energia -= atacante.puntosAtaque;
        }
    }
}


export function esMamifero(animal: Animal): animal is Mamifero {
    return animal instanceof Mamifero;
}