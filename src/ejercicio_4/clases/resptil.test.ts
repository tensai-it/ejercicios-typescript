
import { Leon, MambaNegra, informacionAnimal } from './index';
import { esAve } from './ave';
import { esMamifero } from './mamifero';
import { esReptil } from './reptil';

describe('Pruebas para la Clase Reptil', () => {


    let serpiente: MambaNegra;
    //let leon: Leon



    beforeEach(() => {
        serpiente = new MambaNegra('Kaa', 10, 3, 7, 7);
        //leon = new Leon('Mufasa', 10, TipoAnimal.Mamífero, 3, 7, 7, "pelaje");
    });

    it('debería crear la instancia correctamente', () => {
        expect(serpiente).toBeInstanceOf(MambaNegra);
    });

    it('debería hacer el sonido correcto', () => {
        expect(serpiente.hacerSonido()).toBe('TTTSSSSS');
    });

    it('debería verificar si un animal es un mamífero', () => {
        expect(esMamifero(serpiente)).toBe(false);
    });

    it('debería verificar si un animal es un reptil', () => {
        expect(esReptil(serpiente)).toBe(true);
    });

    it('debería verificar si un animal es un ave', () => {
        expect(esAve(serpiente)).toBe(false);
    });

    it('debería mostrar información de un animal', () => {
        const consoleSpy = jest.spyOn(console, 'log').mockImplementation();
        informacionAnimal(serpiente);
        expect(consoleSpy).toHaveBeenCalledWith(serpiente);
        consoleSpy.mockRestore();
    });

});

//---------------------------------------------------------------

describe('Animal', () => {
  let serpiente: MambaNegra;

  beforeEach(() => {
    serpiente = new MambaNegra('NombreMambaNegra', 2, 4, 7, 5); // Asegúrate de ajustar los valores adecuados aquí
  });

  describe('esquivarAtaque', () => {
    it('debería devolver true si la probabilidad es menor que 0.25', () => {
      jest.spyOn(Math, 'random').mockReturnValue(0.10); // Mockeamos Math.random para simular una probabilidad de 0.3
      expect(serpiente.esquivarAtaque()).toBe(true);
    });

    it('debería devolver false si la probabilidad es mayor o igual que 0.25', () => {
      jest.spyOn(Math, 'random').mockReturnValue(0.50); // Mockeamos Math.random para simular una probabilidad de 0.6
      expect(serpiente.esquivarAtaque()).toBe(false);
    });
  });

  describe('recibirAtaque', () => {
    it('debería esquivar el ataque y mostrar un mensaje si esquivarAtaque devuelve true', () => {
      jest.spyOn(Math, 'random').mockReturnValue(0.10); // Mockeamos Math.random para simular una probabilidad de 0.3
      const atacante = new Leon('LeonAtacante', 5, 3, 7, 2, 'pelaje');
      const consoleSpy = jest.spyOn(console, 'log');
      serpiente.recibirAtaque(atacante);
      expect(consoleSpy).toHaveBeenCalledWith('NombreMambaNegra esquivó el ataque de LeonAtacante!');
    });

    it('debería recibir el ataque y reducir la energía si esquivarAtaque devuelve false', () => {
      jest.spyOn(Math, 'random').mockReturnValue(0.50); // Mockeamos Math.random para simular una probabilidad de 0.6
      const atacante = new Leon('SimbaElLeon', 10, 2, 10, 4, 'pelaje');
      const consoleSpy = jest.spyOn(console, 'log');
      serpiente.recibirAtaque(atacante);
      expect(consoleSpy).toHaveBeenCalledWith('NombreMambaNegra recibió un ataque de SimbaElLeon. Energía restante: 0');
    });
  });
});


