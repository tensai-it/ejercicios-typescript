//import { TipoAnimal } from './clases/animal';
import { Leon, MambaNegra, informacionAnimal } from './index';
import { esAve } from './ave';
import { esMamifero } from './mamifero';
import { esReptil } from './reptil';

describe('Pruebas para la Clase Mamifero', () => {

    let serpiente: MambaNegra;
    let leon: Leon



    beforeEach(() => {

        leon = new Leon('Simba', 5, 2, 4, 9, 'pelo');
        serpiente = new MambaNegra('Kaa', 5, 2, 4, 9,);


    });

    it('debería crear instancias de animales correctamente', () => {

        expect(leon).toBeInstanceOf(Leon);

    });

    it('debería hacer sonidos', () => {

        expect(leon.hacerSonido()).toBe('¡GRRRRRRAAAAWWWW!');

    });

    it('debería verificar si un animal es un mamífero', () => {

        expect(esMamifero(leon)).toBe(true);

    });

    it('debería verificar si un animal es un reptil', () => {

        expect(esReptil(leon)).toBe(false);

    });

    it('debería verificar si un animal es un ave', () => {

        expect(esAve(leon)).toBe(false);

    });

    it('debería mostrar información de un animal', () => {
        const consoleSpy = jest.spyOn(console, 'log').mockImplementation();

        informacionAnimal(leon);
        expect(consoleSpy).toHaveBeenCalledWith(leon);
        consoleSpy.mockRestore();
    });

     it('debería recibir ataques correctamente', () => {
         const initialEnergy = leon.energia;
         leon.recibirAtaque(serpiente);
         expect(leon.energia).toBeLessThan(initialEnergy);
    });
});
