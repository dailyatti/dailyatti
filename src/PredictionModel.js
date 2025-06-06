class PredictionModel {
  static probabilityOfSuccess(successes, trials) {
    if (typeof successes !== 'number' || typeof trials !== 'number') {
      throw new Error('inputs must be numbers');
    }
    if (trials <= 0) {
      throw new Error('trials must be positive');
    }
    if (successes < 0 || successes > trials) {
      throw new Error('successes must be between 0 and trials');
    }
    return successes / trials;
  }
}

module.exports = PredictionModel;
