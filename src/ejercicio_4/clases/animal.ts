export  class Animal {
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

export const enum TipoAnimal {
    Mamífero,
    Ave,
    Reptil,
    Anfibio,
    Peces
}