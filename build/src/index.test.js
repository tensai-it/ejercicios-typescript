"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const index_1 = require("./index");
describe('atrapaAlRaton', () => {
    it('debería lanzar un error si el patrón es incorrecto', () => {
        expect(() => {
            index_1.atrapaAlRaton('C..X.M');
        }).toThrow('Patrón Incorrecto');
    });
    it('debería devolver true para un patrón válido con longitud mayor a 5', () => {
        const resultado = index_1.atrapaAlRaton('C.....M');
        expect(resultado).toBe(true);
    });
    it('debería devolver false para un patrón válido con longitud menor o igual a 5', () => {
        const resultado = index_1.atrapaAlRaton('C.M');
        expect(resultado).toBe(false);
    });
});
describe('correctPatron', () => {
    it('debería devolver true si el patrón es una cadena', () => {
        const resultado = index_1.correctPatron('C..M');
        expect(resultado).toBe(true);
    });
    it('debería devolver false si la longitud del patrón es menor a 3', () => {
        const resultado = index_1.correctPatron('CM');
        expect(resultado).toBe(false);
    });
    it('debería devolver false si el primer y último carácter no son "C" y "M" respectivamente', () => {
        const resultado = index_1.correctPatron('X...Y');
        expect(resultado).toBe(false);
    });
    it('debería devolver false si hay algún carácter distinto de "." en el medio', () => {
        const resultado = index_1.correctPatron('C.X.M');
        expect(resultado).toBe(false);
    });
    it('debería devolver true para un patrón válido', () => {
        const resultado = index_1.correctPatron('C...M');
        expect(resultado).toBe(true);
    });
});
