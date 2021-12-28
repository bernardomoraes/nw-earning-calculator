const Recipes = require('../src/providers/recipes/preciousIngots')
const PreciousIngotCostCalculator = require('../src/providers/calculators/preciousIngots')
const CalculatorFactory = require('../src/factories/calculatorFactory')

describe('Precious ingot', () => {
  const preciousIngotCostCalculator = new CalculatorFactory(PreciousIngotCostCalculator, Recipes)

  const recipes = new Recipes()
  const mocks = {
    prices: {
      ores: {
        silver: 0.44,
        gold: 0.1,
        platinum: 0.4
      },
      ingots: {
        silver: 0.55,
        gold: 2.5,
        platinum: 2.65,
      }
    }
  }

  beforeAll(() => {
    
  })

  it('Should calculate silver ingot price', () => {
    // Act
    const silverIngot = preciousIngotCostCalculator.silverIngotPrice(mocks.prices.ores.silver)

    //Assert
    expect(silverIngot).toBe(recipes.silverIngot(mocks.prices.ores.silver))

  })

  it('Should calculate gold ingot price with silver ingot', () => {
    // Arrange
    const silverPrice = {
      silver: {
        ingot: mocks.prices.ingots.silver
      }
    }
    // Act
    const goldIngot = preciousIngotCostCalculator.goldIngotPrice(silverPrice, mocks.prices.ores.gold)

    //Assert
    expect(goldIngot).toBe(recipes.goldIngot(mocks.prices.ingots.silver, mocks.prices.ores.gold))
  })

  it('Should calculate gold ingot price with silver ore', () => {
    // Arrange
    const silverPrice = {
      silver: {
        ore: mocks.prices.ores.silver
      }
    }
    const silverIngot = recipes.silverIngot(mocks.prices.ores.silver)


    // Act
    const goldIngot = preciousIngotCostCalculator.goldIngotPrice(silverPrice, mocks.prices.ores.gold)

    //Assert
    expect(goldIngot).toBe(recipes.goldIngot(silverIngot, mocks.prices.ores.gold))
  })

  it('Should calculate platinum ingot price with gold ingot as an option', () => {
    // Arrange
    const prices = {
      goldingot: 2.5,
      platinumOre: 0.4,
      flux: 1
    }
    // Act
    const platinumIngot = preciousIngotCostCalculator
      .platinumIngotPrice({gold: { ingot: prices.goldingot }}, prices.platinumOre, prices.flux)
    
    // Assert

    expect(platinumIngot).toBe(recipes.platinumIngot(prices.goldingot, prices.platinumOre, prices.flux))

  })
})