// Importa las funciones que deseas probar
import { convertASCIItoString, stringToASCII } from './index';

// Pruebas para convertASCIItoString
describe('convertASCIItoString', () => {
  it('convierte números ASCII en cadena correctamente', () => {
    expect(convertASCIItoString(656667)).toBe('ABC');
    expect(convertASCIItoString(72797665)).toBe('HOLA');
    expect(convertASCIItoString(767383)).toBe('LIS');
  });

  it('maneja espacios correctamente', () => {
    expect(convertASCIItoString(32)).toBe(' ');
  });
});

// Pruebas para stringToASCII
describe('stringToASCII', () => {
  it('convierte cadena en números ASCII correctamente', () => {
    expect(stringToASCII('ABC')).toEqual(656667);
    expect(stringToASCII(' LIS ')).toEqual(3276738332);
    expect(stringToASCII('HOLA')).toEqual(72797665);
  });

  it('convierte a mayúsculas antes de convertir a ASCII', () => {
    expect(stringToASCII('abc')).toEqual(656667);
  });

});
