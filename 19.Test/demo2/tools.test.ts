import { test, expect} from 'vitest';
import { countWords, generatePassword } from '../demo2/tools';


describe('Count Words test', () => {
    test('La frase "Hala Madrid" tiene 2 palabras', () => {
        expect(countWords("Hala Madrid")).toBe(2);
    });
    test('It should be 0 when sentence is empty', () => {
        expect(countWords('')).toBe(0);
    });
    test('It should be 3 when sentence is 3 words with spaces', () => {
        expect(countWords('Hola      Don       Pepito')).toBe(3);
    });
});

describe('Generate Password test', () => {
    test('It should be a string', () => {
        const length = 14;
        const result = generatePassword(length);
        expect(result).toBeTypeOf('string');
    });
    test('It should have 6 as minimun length ', () => {
        const length = 1;
        const result = generatePassword(length);
        expect(result).toHaveLength(6);      
    });
    test('It should have length ', () => {
        const length = 12;
        const result = generatePassword(length);
        expect(result).toHaveLength(length);      
    });
    test('It should have a large length ', () => {
        const length = 130;
        const result = generatePassword(length);
        expect(result).toHaveLength(length);      
    });
    test('It should have three kind of symbols', () => {
        const length = 12;
        const result = generatePassword(length);        
        expect(result).toMatch(/[A-Z]/);
        expect(result).toMatch(/[a-z]/);
        expect(result).toMatch(/[0-9]/);
    });
});
