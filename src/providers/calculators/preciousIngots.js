class PreciousIngotCostCalculator {
  constructor (RecipesClass) {
    this.recipes = new RecipesClass()
  }
  silverIngotPrice(silverOrePrice) {
    return this.recipes.silverIngot(silverOrePrice)
  }

  goldIngotPrice({silver: {ore: orePrice, ingot: ingotPrice}}, goldOrePrice, flux) {
    return this.recipes.goldIngot(ingotPrice || this.silverIngotPrice(orePrice), goldOrePrice, flux)
  }

  platinumIngotPrice({
    gold: {
      ore: goldOrePrice, 
      ingot: goldIngotPrice 
    }, 
    silver
  }, platinumOrePrice, flux) {
    if (!goldIngotPrice) return this.recipes.platinumIngot(
      this.goldIngotPrice({silver}, goldOrePrice, flux), 
      platinumOrePrice, 
      flux
    )
    
    return this.recipes.platinumIngot(goldIngotPrice, platinumOrePrice, flux)
  }
}

module.exports = PreciousIngotCostCalculator