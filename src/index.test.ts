import atrapaAlRaton from './index';

describe('atrapaAlRaton', () => {
    it('debería retornar true cuando el texto tiene más de 5 caracteres', () => {
        const result = atrapaAlRaton('¡R..........M');
        expect(result).toBe(true);
    });

    it('debería retornar false cuando el texto tiene 5 caracteres o menos', () => {
        const result = atrapaAlRaton('R..M');
        expect(result).toBe(false);
    });
});
