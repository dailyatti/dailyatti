const DataController = require('../src/DataController');

describe('DataController validation', () => {
  test('valid data passes validation', () => {
    expect(DataController.validate({ value: 10 })).toBe(true);
  });

  test('throws error for non-object', () => {
    expect(() => DataController.validate(null)).toThrow('Data must be an object');
  });

  test('throws error for missing value', () => {
    expect(() => DataController.validate({})).toThrow('value must be a number');
  });

  test('throws error for out-of-range value', () => {
    expect(() => DataController.validate({ value: 200 })).toThrow('value must be between 0 and 100');
  });
});
