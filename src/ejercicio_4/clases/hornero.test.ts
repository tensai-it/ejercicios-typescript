import { Hornero } from './hornero';
import { Leon } from './leon';
import { informacionAnimal } from './index';

describe('Pruebas para la Clase Hornero', () => {
  let hornero: Hornero;

  beforeEach(() => {
    hornero = new Hornero('Pepita', 3, 5, 2, 9);
  });

  it('debería mostrar información de un animal', () => {
    const mensaje = 'hola soy: Pepita, mi energia es: 5. PIPIPIPIPI';
    const consoleSpy = jest.spyOn(console, 'log').mockImplementation();

    informacionAnimal(hornero);
    expect(consoleSpy).toHaveBeenCalledWith(mensaje);
    consoleSpy.mockRestore();
});

  describe('esquivarAtaque', () => {
    it('debería devolver true si la probabilidad es menor que 0.4', () => {
      jest.spyOn(Math, 'random').mockReturnValue(0.1);
      expect(hornero.esquivarAtaque()).toBe(true);
    });

    it('debería devolver false si la probabilidad es mayor o igual que 0.4', () => {
      jest.spyOn(Math, 'random').mockReturnValue(0.4);
      expect(hornero.esquivarAtaque()).toBe(false);
    });
  });

  describe('recibirAtaque', () => {
    it('debería esquivar el ataque y mostrar un mensaje si esquivarAtaque devuelve true', () => {
      jest.spyOn(Math, 'random').mockReturnValue(0.1);
      const atacante = new Leon('LeonAtacante', 5, 3, 7, 2, 'pelaje');
      const consoleSpy = jest.spyOn(console, 'log');
      hornero.recibirAtaque(atacante);
      expect(consoleSpy).toHaveBeenCalledWith('Pepita esquivó el ataque de LeonAtacante!');
    });

    it('debería recibir el ataque y reducir la energía si esquivarAtaque devuelve false', () => {
      jest.spyOn(Math, 'random').mockReturnValue(0.6);
      const atacante = new Leon('SimbaElLeon', 10, 2, 10, 4, 'pelaje');
      const consoleSpy = jest.spyOn(console, 'log');
      hornero.recibirAtaque(atacante);
      expect(consoleSpy).toHaveBeenCalledWith('Pepita recibió un ataque de SimbaElLeon. Energía restante: 0');
    });
  });
});
