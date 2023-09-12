export abstract class Animal {
    nombre: string;
    edad: number;
    tipo: TipoAnimal;
    energia: number;
    puntosAtaque: number;
    puntosDefensa: number;

    constructor(nombre: string, edad: number, tipo: TipoAnimal, energia: number, puntosAtaque: number, puntosDefensa: number) {
        this.nombre = nombre;
        this.edad = edad;
        this.tipo = tipo;
        this.energia = energia;
        this.puntosAtaque = puntosAtaque;
        this.puntosDefensa = puntosDefensa;
    }

    mover(distancia: number) {
        return `El animal se mueve ${distancia} metros`;
    }

    atacar(otroAnimal: Animal) {
        otroAnimal.recibirAtaque(this)
    }

    recibirAtaque(atacante: Animal) {
        this.energia -= atacante.puntosAtaque;
    }

    recuperarEnergia(cantidad: number) {
        this.energia += cantidad;
        console.log(`${this.nombre} a recarcado ${cantidad} puntos de energia!`)
    }
}

export enum TipoAnimal {
    "Mamífero",
    "Ave",
    "Reptil",
    "Anfibio",
    "Peces"
}

export abstract class Mamifero extends Animal {
    tipoPiel: string;

    constructor(nombre: string, edad: number, tipo: TipoAnimal, energia: number, puntosAtaque: number, puntosDefensa: number, tipoPiel: string) {
        super(nombre, edad, tipo, energia, puntosAtaque, puntosDefensa);
        this.tipoPiel = tipoPiel;
    }

    recibirAtaque(atacante: Animal) {
        if (atacante.tipo === TipoAnimal.Ave) {
            // Si el atacante es un ave, reducir el daño en un 25%
            const danoReducido = atacante.puntosAtaque * 0.75;
            this.energia -= danoReducido;
        } else if (atacante.tipo === TipoAnimal.Reptil && (atacante instanceof Reptil) && atacante.esVenenosa()) {
            // Si el atacante es un reptil venenoso, infligir el doble de daño
            this.energia -= atacante.puntosAtaque * 2;
        } else {
            // En otros casos, infligir daño normal
            this.energia -= atacante.puntosAtaque;
        }

    }
}

export abstract class Ave extends Animal {

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


export abstract class Reptil extends Animal {
    esquivarAtaque(): boolean {
        // Generar un número aleatorio entre 0 y 1. Si es menor que 0.4 (40%), el ataque esquivado.
        const probabilidadEsquivar = Math.random();
        return probabilidadEsquivar < 0.4;
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
        super(nombre, edad, TipoAnimal.Mamífero, energia, puntosAtaque, puntosDefensa, tipoPiel);
    }

    recibirAtaque(atacante: Animal) {

        atacante.recibirAtaque(this) 
            const danio = atacante.puntosAtaque * 0.01;
            console.log(`${this.nombre} ha infligido ${danio} puntos de daño a ${atacante.nombre}.`);
            atacante.energia -= danio;
        }
    }





export function esMamifero(animal: Animal): animal is Mamifero {
    return animal instanceof Mamifero;
}

export function esReptil(animal: Animal): animal is Reptil {
    return animal instanceof Reptil;
}

export function esAve(animal: Animal): animal is Ave {
    return animal instanceof Ave;
}

export function informacionAnimal(animal: Animal) {
    console.log(animal)
}

