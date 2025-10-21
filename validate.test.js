const {
    validateCardNumber,
    validateRegularDate,
    validateNonRegularDate,
    validatePhoneNumber,
    validateNumber
} = require('./validate');
const {describe, test, expect} = require('@jest/globals');


describe('validateCardNumber', () => {
    test('should accept valid card numbers (8-16 digits)', () => {
        expect(validateCardNumber('12345678')).toBe(true);
        expect(validateCardNumber('1234567890123456')).toBe(true);
        expect(validateCardNumber('123456789012')).toBe(true);
    });

    test('should reject invalid card numbers', () => {
        expect(validateCardNumber('1234567')).toBe(false);
        expect(validateCardNumber('12345678901234567')).toBe(false);
        expect(validateCardNumber('1234abcd')).toBe(false);
        expect(validateCardNumber('')).toBe(false);
    });
});

describe('validateRegularDate', () => {
    test('should accept valid DD.MM.YYYY dates', () => {
        expect(validateRegularDate('25.12.2024')).toBe(true);
        expect(validateRegularDate('01.01.2025')).toBe(true);
        expect(validateRegularDate('31.03.2023')).toBe(true);
    });

    test('should reject invalid dates', () => {
        expect(validateRegularDate('32.12.2024')).toBe(false);
        expect(validateRegularDate('25.13.2024')).toBe(false);
        expect(validateRegularDate('25-12-2024')).toBe(false);
        expect(validateRegularDate('2024.12.25')).toBe(false);
    })
});

describe('validateNonRegularDate', () => {
    test('should accept valid YYYY-MM-DD dates', () => {
        expect(validateNonRegularDate('2024-12-25')).toBe(true);
        expect(validateNonRegularDate('2025-01-01')).toBe(true);
        expect(validateNonRegularDate('2023-03-31')).toBe(true);
    });

    test('should reject invalid dates', () => {
        expect(validateNonRegularDate('2024-13-25')).toBe(false);
        expect(validateNonRegularDate('2024-12-32')).toBe(false);
        expect(validateNonRegularDate('24-12-25')).toBe(false);
        expect(validateNonRegularDate('2024.12.25')).toBe(false);
    });
});

describe('validatePhoneNumber', () => {
    test('should accept valid phone numbers', () => {
        expect(validatePhoneNumber('+12(34)5678-9012')).toBe(true);
        expect(validatePhoneNumber('+99(99)9999-9999')).toBe(true);
        expect(validatePhoneNumber('+00(00)0000-0000')).toBe(true);
    });

    test('should reject invalid phone numbers', () => {
        expect(validatePhoneNumber('12(34)5678-9012')).toBe(false);
        expect(validatePhoneNumber('+1(34)5678-9012')).toBe(false);
        expect(validatePhoneNumber('+12-34-5678-9012')).toBe(false);
        expect(validatePhoneNumber('+12(34)56789012')).toBe(false);
    });
});

describe('validateNumber', () => {
    test('should accept numbers from 0 to 255', () => {
        expect(validateNumber('0')).toBe(true);
        expect(validateNumber('1')).toBe(true);
        expect(validateNumber('99')).toBe(true);
        expect(validateNumber('100')).toBe(true);
        expect(validateNumber('200')).toBe(true);
        expect(validateNumber('255')).toBe(true);
    });

    test('should reject numbers greater than 255', () => {
        expect(validateNumber('256')).toBe(false);
        expect(validateNumber('300')).toBe(false);
        expect(validateNumber('1000')).toBe(false);
    });

    test('should reject negative numbers and non-numbers', () => {
        expect(validateNumber('-5')).toBe(false);
        expect(validateNumber('abc')).toBe(false);
        expect(validateNumber('25.5')).toBe(false);
    });
});