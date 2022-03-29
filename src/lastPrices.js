const CalculatorFactory = require("./factories/calculatorFactory");

const preciousIngotCalculator = new CalculatorFactory().instancePreciousIngotsCalculator()

const goldOreIngotCostPrice = preciousIngotCalculator.goldIngotPrice({
  silver: {
    ore: 0.2
  }
}, 0.1, 0.7)

console.log('goldOreIngotCostPrice: ', goldOreIngotCostPrice);

