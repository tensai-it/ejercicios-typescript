import { Animal} from "./animal";
import { Mamifero } from "./mamifero";
export class Capibara extends Mamifero {
    constructor(nombre: string, edad: number, energia: number, puntosAtaque: number, puntosDefensa: number, tipoPiel: string) {
        super(nombre, edad, energia, puntosAtaque, puntosDefensa, tipoPiel);
    }

    hacerSonido(): string {
        return `sniff sniff sniff`;
    }

    recibirAtaque(atacante: Animal) {

        
        const danio = atacante.puntosAtaque * 0.01;
        
        atacante.energia -= danio;
        console.log(`${this.nombre} ha infligido ${danio} puntos de daño a ${atacante.nombre}, su energia restante es ${atacante.energia}`);
    }
}