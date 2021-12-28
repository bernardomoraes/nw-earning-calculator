const calculators = require('../providers/calculators')
const recipes = require('../providers/recipes')

class CalculatorFactory {
  instancePreciousIngotsCalculator() {
    return new calculators.preciousIngots(recipes.preciousIngots)
  }
}

module.exports = CalculatorFactory