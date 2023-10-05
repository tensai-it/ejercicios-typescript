import { Capibara } from './capibara';
import { Leon } from './leon';
import { informacionAnimal } from './index';

describe('Capibara', () => {
  let capibara: Capibara;
  let atacante: Leon;
  let energiaInicial = 100;

  beforeEach(() => {
    capibara = new Capibara('Capibara1', 5, energiaInicial, 10, 5, 'pielTipo');
  });

  it('debería instanciar un Capibara correctamente', () => {
    expect(capibara.nombre).toBe('Capibara1');
    expect(capibara.edad).toBe(5);
    expect(capibara.energia).toBe(100);
    expect(capibara.puntosDefensa).toBe(5);
    expect(capibara.tipoPiel).toBe('pielTipo');
  });

  it('debería mostrar información de un animal', () => {
    const mensaje = 'hola soy: Capibara1, mi energia es: 100. sniff sniff sniff';
    const consoleSpy = jest.spyOn(console, 'log').mockImplementation();

    informacionAnimal(capibara);
    expect(consoleSpy).toHaveBeenCalledWith(mensaje);
    consoleSpy.mockRestore();
})

  it('debería recibir un ataque y reducir su energía', () => {
    atacante = new Leon('LeonMalo', 3, 40, 8, 3, 'rulos');
    const danio = 0.01 * atacante.puntosAtaque;
    const energiaEsperada = (atacante.energia - danio);

    capibara.recibirAtaque(atacante);

    expect(atacante.energia).toBeCloseTo(energiaEsperada);
    expect(capibara.energia).toBe(energiaInicial);
  });
});

