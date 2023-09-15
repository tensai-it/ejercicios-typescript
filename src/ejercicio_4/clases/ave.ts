import { Animal } from "./animal";
export  class Ave extends Animal {

    esquivarAtaque(): boolean {
        // Generar un número aleatorio entre 0 y 1. Si es menor que 0.4 (40%), el ataque esquivado.
        const probabilidadEsquivar = Math.random();
        return probabilidadEsquivar < 0.4;
    }

    recibirAtaque(atacante: Animal) {
        if (this.esquivarAtaque()) {
            console.log(`${this.nombre} esquivó el ataque de ${atacante.nombre}!`);
        } else {
            const energiaRestante = this.energia - atacante.puntosAtaque;
            this.energia = Math.max(energiaRestante, 0)
            console.log(`${this.nombre} recibió un ataque de ${atacante.nombre}. Energía restante: ${this.energia}`);
        }
    }
}

export function esAve(animal: Animal): animal is Ave {
    return animal instanceof Ave;
}