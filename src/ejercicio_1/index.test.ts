import { atrapaAlRaton, correctPatron } from './index';

describe('atrapaAlRaton', () => {
    it('debería lanzar un error si el patrón es incorrecto', () => {
        expect(() => {
            atrapaAlRaton('C..X.M');
        }).toThrow('Patrón Incorrecto');
    });

    it('debería devolver false si el patrón no es una cadena, o distinto a "C . M"', () => {
        const resultado = correctPatron('ASDSD');
        expect(resultado).toBe(false);
    });

    it('debería devolver true si patron.length < 5', () => {
        const resultado = correctPatron('C.M');
        expect(resultado).toBe(true);
    });
});

describe('correctPatron', () => {

    it('debería devolver false si el primer y último carácter no son "C" y "M" respectivamente', () => {
        const resultado = correctPatron('X...Y');
        expect(resultado).toBe(false);
    });

    it('debería devolver false si hay algún carácter distinto de "." en el medio', () => {
        const resultado = correctPatron('C.X.M');
        expect(resultado).toBe(false);
    });

    it('debería devolver true para un patrón válido', () => {
        const resultado = correctPatron('C...M');
        expect(resultado).toBe(true);
    });
});
