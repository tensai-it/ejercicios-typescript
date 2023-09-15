import { Capibara } from './index'; // Asegúrate de que la ruta sea correcta
import { TipoAnimal, Animal } from './animal'; // Asegúrate de que la ruta sea correcta

describe('Capibara', () => {
  let capibara: Capibara;

  beforeEach(() => {
    capibara = new Capibara('Capibara1', 5, 100, 10, 5, 'pielTipo');
  });

  it('debería instanciar un Capibara correctamente', () => {
    expect(capibara.nombre).toBe('Capibara1');
    expect(capibara.edad).toBe(5);
    expect(capibara.tipo).toBe(TipoAnimal.Mamífero);
    expect(capibara.energia).toBe(100);
    expect(capibara.puntosAtaque).toBe(1);
    expect(capibara.puntosDefensa).toBe(5);
    expect(capibara.tipoPiel).toBe('pielTipo');
  });

  it('debería recibir un ataque y reducir su energía', () => {
    const atacante = new Animal('Serpiente', 3, TipoAnimal.Reptil, 40, 8, 3); // Asegúrate de que la clase Animal esté disponible
    const energiaEsperada = atacante.energia - (0.01 * atacante.puntosAtaque);

    atacante.recibirAtaque(capibara);

    expect(atacante.energia).toBe(energiaEsperada);
  });
});
