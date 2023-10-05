
import {  informacionAnimal } from './index';
import { Leon } from './leon';
import {  MambaNegra } from './mambaNegra';
import { esAve } from './ave';
import { esMamifero } from './mamifero';
import { esReptil } from './reptil';

describe('Pruebas para la Clase MambNegra', () => {

  let serpiente: MambaNegra;

  beforeEach(() => {
    serpiente = new MambaNegra('Kaa', 10, 3, 7, 7);
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
    const mensaje = 'hola soy: Kaa, mi energia es: 3. TTTSSSSS'

    informacionAnimal(serpiente);
    expect(consoleSpy).toHaveBeenCalledWith(mensaje);
    consoleSpy.mockRestore();
  });

  describe('esquivarAtaque', () => {
    it('debería devolver true si la probabilidad es menor que 0.25', () => {
      jest.spyOn(Math, 'random').mockReturnValue(0.10);
      expect(serpiente.esquivarAtaque()).toBe(true);
    });

    it('debería devolver false si la probabilidad es mayor o igual que 0.25', () => {
      jest.spyOn(Math, 'random').mockReturnValue(0.50);
      expect(serpiente.esquivarAtaque()).toBe(false);
    });
  });

  describe('recibirAtaque', () => {
    it('debería esquivar el ataque y mostrar un mensaje si esquivarAtaque devuelve true', () => {
      jest.spyOn(Math, 'random').mockReturnValue(0.10);
      const atacante = new Leon('LeonAtacante', 5, 3, 7, 2, 'pelaje');
      const consoleSpy = jest.spyOn(console, 'log');
      serpiente.recibirAtaque(atacante);
      expect(consoleSpy).toHaveBeenCalledWith('Kaa esquivó el ataque de LeonAtacante!');
    });

    it('debería recibir el ataque y reducir la energía si esquivarAtaque devuelve false', () => {
      jest.spyOn(Math, 'random').mockReturnValue(0.50);
      const atacante = new Leon('SimbaElLeon', 10, 2, 10, 4, 'pelaje');
      const consoleSpy = jest.spyOn(console, 'log');
      serpiente.recibirAtaque(atacante);
      expect(consoleSpy).toHaveBeenCalledWith('Kaa recibió un ataque de SimbaElLeon. Energía restante: 0');
    });
  });



});




