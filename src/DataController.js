class DataController {
  static validate(entry) {
    if (typeof entry !== 'object' || entry === null) {
      throw new Error('Data must be an object');
    }
    if (typeof entry.value !== 'number') {
      throw new Error('value must be a number');
    }
    if (entry.value < 0 || entry.value > 100) {
      throw new Error('value must be between 0 and 100');
    }
    return true;
  }
}

module.exports = DataController;
