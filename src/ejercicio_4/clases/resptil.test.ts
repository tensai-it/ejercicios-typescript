import { TipoAnimal, Animal } from './animal';
import { MambaNegra, informacionAnimal } from './index';
import { esAve } from './ave';
import { esMamifero } from './mamifero';
import { esReptil } from './reptil';

describe('Pruebas para la Clase Reptil', () => {


    let serpiente: MambaNegra;
    //let leon: Leon



    beforeEach(() => {
        serpiente = new MambaNegra('Kaa', 10, TipoAnimal.Reptil, 3, 7, 7);
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


// Prueba la función esquivarAtaque de la clase Ave
describe('Reptil', () => {
    it('debe esquivar el ataque con una probabilidad del 25%', () => {
      const serpiente = new MambaNegra('Serpiente', 100, TipoAnimal.Reptil, 30, 20,  10,);
      //const atacante = new Animal('León', 50, TipoAnimal.Mamífero, 10, 30, 9);
  
      // Usamos jest.spyOn para reemplazar Math.random con un valor constante para probar
      const randomMock = jest.spyOn(Math, 'random');
      randomMock.mockReturnValue(0.2); // Simulamos un 20% de probabilidad
  
      const resultado = serpiente.esquivarAtaque();
  
      expect(resultado).toBe(true);
      expect(randomMock).toHaveBeenCalled();
  
      randomMock.mockRestore(); // Restauramos Math.random a su implementación original
    });
  
    it('no debe esquivar el ataque con una probabilidad del 60%', () => {
      const serpiente = new MambaNegra('LolaBoa', 80, TipoAnimal.Reptil, 4, 23, 40);
      //const atacante = new Animal('Lobo', 60, TipoAnimal.Mamífero, 20, 43, 13);
  
      // Usamos jest.spyOn para reemplazar Math.random con un valor constante para probar
      const randomMock = jest.spyOn(Math, 'random');
      randomMock.mockReturnValue(0.7); // Simulamos un 70% de probabilidad
  
      const resultado = serpiente.esquivarAtaque();
  
      expect(resultado).toBe(false);
      expect(randomMock).toHaveBeenCalled();
  
      randomMock.mockRestore(); // Restauramos Math.random a su implementación original
    });
  
    it('debe recibir un ataque y reducir su energía si no esquiva', () => {
      const serpiente = new MambaNegra('Serpiente', 70, TipoAnimal.Reptil, 10, 8, 3);
      const atacante = new Animal('Coyote', 50, TipoAnimal.Mamífero, 34, 8, 6);
  
      // Usamos jest.spyOn para reemplazar Math.random con un valor constante para probar
      const randomMock = jest.spyOn(Math, 'random');
      randomMock.mockReturnValue(0.8); // Simulamos un 80% de probabilidad (no esquiva)
  
      serpiente.recibirAtaque(atacante);
  
      expect(serpiente.energia).toBe(2); // Energía restante después del ataque
  
      randomMock.mockRestore(); // Restauramos Math.random a su implementación original
    });
  
    it('debe esquivar un ataque y mostrar un mensaje si lo hace', () => {
      const serpiente = new MambaNegra('Serpiente', 70, TipoAnimal.Reptil, 10, 5, 4);
      const atacante = new Animal('Zorro', 70, TipoAnimal.Mamífero, 10, 8, 3);
  
      // Usamos jest.spyOn para reemplazar Math.random con un valor constante para probar
      const randomMock = jest.spyOn(Math, 'random');
      randomMock.mockReturnValue(0.2); // Simulamos un 20% de probabilidad (esquiva)
  
      // Utilizamos jest.spyOn para capturar la salida de la consola
      const consoleSpy = jest.spyOn(console, 'log');
          const expectedLog = 'Serpiente esquivó el ataque de Zorro!';
  
      serpiente.recibirAtaque(atacante);
  
      expect(serpiente.energia).toBe(10); // Energía no se reduce
      expect(consoleSpy).toHaveBeenCalledWith(expectedLog);
  
      randomMock.mockRestore(); // Restauramos Math.random a su implementación original
      consoleSpy.mockRestore(); // Restauramos console.log a su implementación original
    });
  });


