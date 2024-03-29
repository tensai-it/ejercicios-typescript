import { ipToNum, correctIP } from './index'; // Asegúrate de que la ruta al archivo sea correcta

describe('ipToNum', () => {
  it('debería convertir una dirección IP válida a un número decimal', () => {
    expect(ipToNum('192.168.1.1')).toBe(3232235777);
  });

  it('debería retornar null para una dirección IP no válida', () => {
    expect(ipToNum('256.H.0.1')).toBeNull();
  });
});

describe('correctIP', () => {
  it('debería retornar true para una dirección IP válida', () => {
    expect(correctIP([192, 168, 1, 1])).toBe(true);
  });

  it('debería retornar false para una dirección IP con octetos fuera de rango', () => {
    expect(correctIP([192, 168, 256, 1])).toBe(false);
  });

  it('debería retornar false para una dirección IP con un número incorrecto de octetos', () => {
    expect(correctIP([192, 168, 1])).toBe(false);
  });
});


import { numToIp } from './index';

describe('numToIp', () => {
  it('debe convertir correctamente un número a una dirección IP válida', () => {
    expect(numToIp(3232235777)).toBe('192.168.1.1');
    expect(numToIp(2149583361)).toBe('128.32.10.1');
    expect(numToIp(0)).toBe('0.0.0.0');
  });

  it('debe devolver null para números fuera del rango válido', () => {
    expect(numToIp(-1)).toBeNull();
    expect(numToIp(4294967296)).toBeNull();
  });
});

