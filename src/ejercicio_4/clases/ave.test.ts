import { TipoAnimal, Animal } from './animal';
import { Hornero, informacionAnimal} from './index';
import { Ave, esAve } from './ave';
import { esMamifero } from './mamifero';
import { esReptil } from './reptil';

describe('Pruebas para la Clase Ave', () => {

    let hornero: Hornero;
    //let leon: Leon



    beforeEach(() => {

        hornero = new Hornero('Pepita', 3, TipoAnimal.Ave, 5, 2, 9);
        //leon = new Leon('Simba', 3, TipoAnimal.Mamífero, 5, 8, 6, "pelaje");

    });

    it('debería crear instancias de animales correctamente', () => {

        expect(hornero).toBeInstanceOf(Hornero);

    });

    it('debería hacer sonidos', () => {

        expect(hornero.hacerSonido()).toBe('PIPIPIPIPI');

    });

    it('debería verificar si un animal es un mamífero', () => {

        expect(esMamifero(hornero)).toBe(false);

    });

    it('debería verificar si un animal es un reptil', () => {

        expect(esReptil(hornero)).toBe(false);

    });

    it('debería verificar si un animal es un ave', () => {

        expect(esAve(hornero)).toBe(true);

    });

    it('debería mostrar información de un animal', () => {
        const consoleSpy = jest.spyOn(console, 'log').mockImplementation();

        informacionAnimal(hornero);
        expect(consoleSpy).toHaveBeenCalledWith(hornero);
        consoleSpy.mockRestore();
    });

});


//---------------------------------------------------------------


// Prueba la función esquivarAtaque de la clase Ave
describe('Ave', () => {
  it('debe esquivar el ataque con una probabilidad del 40%', () => {
    const ave = new Ave('Aguila', 100, TipoAnimal.Ave, 30, 20,  10,);
    //const atacante = new Animal('León', 50, TipoAnimal.Mamífero, 10, 30, 9);

    // Usamos jest.spyOn para reemplazar Math.random con un valor constante para probar
    const randomMock = jest.spyOn(Math, 'random');
    randomMock.mockReturnValue(0.2); // Simulamos un 20% de probabilidad

    const resultado = ave.esquivarAtaque();

    expect(resultado).toBe(true);
    expect(randomMock).toHaveBeenCalled();

    randomMock.mockRestore(); // Restauramos Math.random a su implementación original
  });

  it('no debe esquivar el ataque con una probabilidad del 60%', () => {
    const ave = new Ave('Gavilán', 80, TipoAnimal.Ave, 4, 23, 40);
    //const atacante = new Animal('Lobo', 60, TipoAnimal.Mamífero, 20, 43, 13);

    // Usamos jest.spyOn para reemplazar Math.random con un valor constante para probar
    const randomMock = jest.spyOn(Math, 'random');
    randomMock.mockReturnValue(0.7); // Simulamos un 70% de probabilidad

    const resultado = ave.esquivarAtaque();

    expect(resultado).toBe(false);
    expect(randomMock).toHaveBeenCalled();

    randomMock.mockRestore(); // Restauramos Math.random a su implementación original
  });

  it('debe recibir un ataque y reducir su energía si no esquiva', () => {
    const ave = new Ave('Búho', 70, TipoAnimal.Ave, 10, 8, 3);
    const atacante = new Animal('Coyote', 50, TipoAnimal.Mamífero, 34, 8, 6);

    // Usamos jest.spyOn para reemplazar Math.random con un valor constante para probar
    const randomMock = jest.spyOn(Math, 'random');
    randomMock.mockReturnValue(0.8); // Simulamos un 80% de probabilidad (no esquiva)

    ave.recibirAtaque(atacante);

    expect(ave.energia).toBe(2); // Energía restante después del ataque

    randomMock.mockRestore(); // Restauramos Math.random a su implementación original
  });

  it('debe esquivar un ataque y mostrar un mensaje si lo hace', () => {
    const ave = new Ave('Búho', 70, TipoAnimal.Ave, 10, 5, 4);
    const atacante = new Animal('Zorro', 70, TipoAnimal.Mamífero, 10, 8, 3);

    // Usamos jest.spyOn para reemplazar Math.random con un valor constante para probar
    const randomMock = jest.spyOn(Math, 'random');
    randomMock.mockReturnValue(0.2); // Simulamos un 20% de probabilidad (esquiva)

    // Utilizamos jest.spyOn para capturar la salida de la consola
    const consoleSpy = jest.spyOn(console, 'log');
        const expectedLog = 'Búho esquivó el ataque de Zorro!';

    ave.recibirAtaque(atacante);

    expect(ave.energia).toBe(10); // Energía no se reduce
    expect(consoleSpy).toHaveBeenCalledWith(expectedLog);

    randomMock.mockRestore(); // Restauramos Math.random a su implementación original
    consoleSpy.mockRestore(); // Restauramos console.log a su implementación original
  });
});
