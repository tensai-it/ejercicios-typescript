"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.atrapaAlRaton = (patron) => {
    if (!exports.correctPatron(patron)) {
        throw new Error('Patrón Incorrecto');
    }
    return patron.length > 5;
};
exports.correctPatron = (patron) => {
    if (typeof patron !== 'string') {
        return false;
    }
    if (patron.length < 3) {
        return false;
    }
    if (patron[0] !== 'C' || patron[patron.length - 1] !== 'M') {
        return false;
    }
    const caracteresMedio = patron.slice(1, -1);
    for (const char of caracteresMedio) {
        if (char !== '.') {
            return false;
        }
    }
    return true;
};
//Orden "c", ".", "m". de lo contrario falso 
//Si no es un string devuelve falso
// Si el primer caracter no es C devuelve falso
// Si el ultimo caracter no es M devuelve falso
// Si los caracteres del medio no son puntos devuelven falso 
