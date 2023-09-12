import {
    Animal,
    TipoAnimal,
    Mamifero,
    Ave,
    Reptil,
    Leon,
    Hornero,
    MambaNegra,
    Capibara,
    esMamifero,
    esReptil,
    esAve,
    informacionAnimal,
  } from './index';
  
  describe('Pruebas para las clases y funciones', () => {
    let leon:Leon;
    let hornero:Hornero;
    let serpiente:MambaNegra;
    let capibara:Capibara
    ;
  
    beforeEach(() => {
      leon = new Leon('Simba', 5, TipoAnimal.Mamífero, 4, 9, 8, 'pelo');
      hornero = new Hornero('Pepita', 3, TipoAnimal.Ave, 5, 2, 9);
      serpiente = new MambaNegra('Kaa', 10, TipoAnimal.Reptil, 3, 7, 7);
      capibara = new Capibara('Capi', 2, 7, 1, 2, 'pelaje');
    });
  
    it('debería crear instancias de animales correctamente', () => {
      expect(leon).toBeInstanceOf(Leon);
      expect(hornero).toBeInstanceOf(Hornero);
      expect(serpiente).toBeInstanceOf(MambaNegra);
      expect(capibara).toBeInstanceOf(Capibara);
    });
  
    it('debería hacer sonidos', () => {
      expect(leon.hacerSonido()).toBe('¡GRRRRRRAAAAWWWW!');
      expect(hornero.hacerSonido()).toBe('PIPIPIPIPI');
      expect(serpiente.hacerSonido()).toBe('TTTSSSSS');
    });
  
    it('debería verificar si un animal es un mamífero', () => {
      expect(esMamifero(leon)).toBe(true);
      expect(esMamifero(hornero)).toBe(false);
      expect(esMamifero(serpiente)).toBe(false);
      expect(esMamifero(capibara)).toBe(true);
    });
  
    it('debería verificar si un animal es un reptil', () => {
      expect(esReptil(leon)).toBe(false);
      expect(esReptil(hornero)).toBe(false);
      expect(esReptil(serpiente)).toBe(true);
      expect(esReptil(capibara)).toBe(false);
    });
  
    it('debería verificar si un animal es un ave', () => {
      expect(esAve(leon)).toBe(false);
      expect(esAve(hornero)).toBe(true);
      expect(esAve(serpiente)).toBe(false);
      expect(esAve(capibara)).toBe(false);
    });
  
    it('debería mostrar información de un animal', () => {
      const consoleSpy = jest.spyOn(console, 'log').mockImplementation();
      informacionAnimal(leon);
      expect(consoleSpy).toHaveBeenCalledWith(leon);
      informacionAnimal(hornero);
      expect(consoleSpy).toHaveBeenCalledWith(hornero);
      informacionAnimal(serpiente);
      expect(consoleSpy).toHaveBeenCalledWith(serpiente);
      informacionAnimal(capibara);
      expect(consoleSpy).toHaveBeenCalledWith(capibara);
      consoleSpy.mockRestore();
    });
  
    it('debería recibir ataques correctamente', () => {
      const initialEnergy = capibara.energia;
      capibara.recibirAtaque(leon);
      expect(capibara.energia).toBe(initialEnergy);
      
      const initialEnergy2 = leon.energia;
      leon.recibirAtaque(hornero);
      expect(leon.energia).toBeLessThan(initialEnergy2);
      
      const initialEnergy3 = serpiente.energia;
      serpiente.recibirAtaque(leon);
      expect(serpiente.energia).toBeLessThan(initialEnergy3);
    });
  });
  