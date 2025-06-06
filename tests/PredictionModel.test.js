const PredictionModel = require('../src/PredictionModel');

describe('PredictionModel probability calculations', () => {
  test('correct probability of success', () => {
    expect(PredictionModel.probabilityOfSuccess(5, 10)).toBeCloseTo(0.5);
  });

  test('throws error for invalid trial count', () => {
    expect(() => PredictionModel.probabilityOfSuccess(1, 0)).toThrow('trials must be positive');
  });

  test('throws error when successes exceed trials', () => {
    expect(() => PredictionModel.probabilityOfSuccess(5, 2)).toThrow('successes must be between 0 and trials');
  });
});
