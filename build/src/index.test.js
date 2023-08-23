"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const index_1 = __importDefault(require("./index"));
describe('atrapaAlRaton', () => {
    it('debería retornar true cuando el texto tiene más de 5 caracteres', () => {
        const result = index_1.default('¡R..........M');
        expect(result).toBe(true);
    });
    it('debería retornar false cuando el texto tiene 5 caracteres o menos', () => {
        const result = index_1.default('R..M');
        expect(result).toBe(false);
    });
});
