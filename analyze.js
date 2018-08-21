function analyze(array) {
  const length = array.length;
  const max = Math.max(...array);
  const min = Math.min(...array);
  const average = (array.reduce((a, c) => a + c)) / array.length;

  return { average: average, min: min, max: max, length: length }
}

module.exports = analyze;