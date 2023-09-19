
export abstract class Animal {
    nombre: string;
    edad: number;
    energia: number;
    puntosAtaque: number;
    puntosDefensa: number;
    tipo: TipoAnimal | undefined; 

    constructor(nombre: string, edad: number, energia: number, puntosAtaque: number, puntosDefensa: number) {
        this.nombre = nombre;
        this.edad = edad;
        this.energia = energia;
        this.puntosAtaque = puntosAtaque;
        this.puntosDefensa = puntosDefensa;
    }

    abstract hacerSonido():string;

    toString(): string {
        return `hola soy: ${this.nombre}, mi energia es: ${this.energia}. ${this.hacerSonido()}`;
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

export const enum TipoAnimal {
    Mamífero,
    Ave,
    Reptil,
    Anfibio,
    Peces
}
