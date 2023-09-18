
import { Hornero, Leon, informacionAnimal} from './index';
import { esAve } from './ave';
import { esMamifero } from './mamifero';
import { esReptil } from './reptil';

describe('Pruebas para la Clase Ave', () => {

    let hornero: Hornero;
    //let leon: Leon



    beforeEach(() => {

        hornero = new Hornero('Pepita', 3, 5, 2, 9);
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
describe('Animal', () => {
    let pajaro: Hornero;
  
    beforeEach(() => {
      pajaro = new Hornero('NombreHornero', 2, 4, 7, 5); // Asegúrate de ajustar los valores adecuados aquí
    });
  
    describe('esquivarAtaque', () => {
      it('debería devolver true si la probabilidad es menor que 0.4', () => {
        jest.spyOn(Math, 'random').mockReturnValue(0.1); // Mockeamos Math.random para simular una probabilidad de 0.3
        expect(pajaro.esquivarAtaque()).toBe(true);
      });
  
      it('debería devolver false si la probabilidad es mayor o igual que 0.4', () => {
        jest.spyOn(Math, 'random').mockReturnValue(3); // Mockeamos Math.random para simular una probabilidad de 0.6
        expect(pajaro.esquivarAtaque()).toBe(false);
      });
    });
  
    describe('recibirAtaque', () => {
      it('debería esquivar el ataque y mostrar un mensaje si esquivarAtaque devuelve true', () => {
        jest.spyOn(Math, 'random').mockReturnValue(0.1); // Mockeamos Math.random para simular una probabilidad de 0.3
        const atacante = new Leon('LeonAtacante', 5, 3, 7, 2, 'pelaje');
        const consoleSpy = jest.spyOn(console, 'log');
        pajaro.recibirAtaque(atacante);
        expect(consoleSpy).toHaveBeenCalledWith('NombreHornero esquivó el ataque de LeonAtacante!');
      });
  
      it('debería recibir el ataque y reducir la energía si esquivarAtaque devuelve false', () => {
        jest.spyOn(Math, 'random').mockReturnValue(2); // Mockeamos Math.random para simular una probabilidad de 0.6
        const atacante = new Leon('SimbaElLeon', 10, 2, 10, 4, 'pelaje');
        const consoleSpy = jest.spyOn(console, 'log');
        pajaro.recibirAtaque(atacante);
        expect(consoleSpy).toHaveBeenCalledWith('NombreHornero recibió un ataque de SimbaElLeon. Energía restante: 0');
      });
    });
  });
