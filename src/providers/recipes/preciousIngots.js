class Recipes {
  silverIngot(silverOre) {
    return silverOre * 4
  }
  
  goldIngot(silverIngot, goldOre, flux) {
    
    return (silverIngot * 2) + (goldOre * 5) + flux
  }

  platinumIngot(goldIngot, platinumOre, flux) {
    return (goldIngot * 2) + (platinumOre * 6) + flux
  }
}

module.exports = Recipes