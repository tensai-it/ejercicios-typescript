import { Capibara, MambaNegra } from './index'; // Asegúrate de que la ruta sea correcta

describe('Capibara', () => {
  let capibara: Capibara;

  beforeEach(() => {
    capibara = new Capibara('Capibara1', 5, 100, 10, 5, 'pielTipo');
  });

  it('debería instanciar un Capibara correctamente', () => {
    expect(capibara.nombre).toBe('Capibara1');
    expect(capibara.edad).toBe(5);
    expect(capibara.energia).toBe(100);
    expect(capibara.puntosAtaque).toBe(10);
    expect(capibara.puntosDefensa).toBe(5);
    expect(capibara.tipoPiel).toBe('pielTipo');
  });

  it('debería recibir un ataque y reducir su energía', () => {
    const atacante = new MambaNegra('Serpiente', 3, 40, 8, 3);
    const energiaEsperada = atacante.energia - (0.01 * atacante.puntosAtaque);

    atacante.atacar(capibara);

    expect(atacante.energia).toBe(energiaEsperada);
    expect(capibara.energia).toBe(100);
  });
});
