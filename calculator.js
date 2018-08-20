const calculator = () => {
  const add = (a, b) => a + b;
  const subtract = (a, b) => a - b;
  const multiply = (a, b) => a * b;
  const divide = (a, b) => {
    if(b === 0){
      throw new Error();
    }
    return a / b;
  };

  return { add, subtract, multiply, divide };
};

module.exports = calculator;