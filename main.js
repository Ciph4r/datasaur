/********************
 * HELPER FUNCTIONS *
 ********************/
const makeDino = (species , period , carnivore , extinct = false) => {
  const dino = {
    species: species ,
    period: period,
    carnivore: carnivore,
    extinct: extinct , 
  }
  return dino
}

const makeSingular = (obj) => {
  const newobj = {...obj}
  return obj.species.endsWith('us') ? (newobj.species = newobj.species.slice(0,obj.species.length-2) , newobj)  :  obj
}

const truncateSpecies = (obj) => {
  const newobj = {...obj}
  return obj.species.length > 7 ? (newobj.species = newobj.species.slice(0,7)+'...' , newobj)  :  obj
}

const makeExtinct = (obj) =>{
  return {...obj , extinct: true}
}

const isCarnivore = (obj) => {
  return obj.carnivore
}

const isExtinct = (obj) => {
  return obj.extinct
}

const isTriassic = (obj) => {
  return obj.period === 'Triassic'
}

const isJurassic = (obj) => {
  return obj.period === 'Jurassic'
}

const isCretaceous = (obj) => {
  return obj.period === 'Cretaceous'
}

const isFirstAlphabeticallyBySpecies = (obj , obj2) => {
  return obj.species === obj2.species ? 0 : obj.species > obj2.species ? 1 : -1
}

const extinctIsLast = (obj , obj2) => {
  return obj.extinct === obj2.extinct ? 0 : obj.extinct ? 1 : -1
}

const carnivoreIsFirst = (obj , obj2) => {
  return obj.carnivore === obj2.carnivore ? 0 : obj.carnivore ? -1 : 1
}

const isInPeriodOrder = (obj , obj2) => {

  if (obj.period === 'Jurassic'){
    return obj2.period === 'Triassic' ? 1 : obj2.period === 'Cretaceous' ? -1 : 0
  }
  if (obj.period === 'Cretaceous'){
    return obj2.period === 'Triassic' ? 1 : obj2.period === 'Jurassic' ? 1 : 0
  }
  if (obj.period === 'Triassic'){
    return obj2.period === 'Cretaceous' ? -1 : obj2.period === 'Jurassic' ? -1 : 0
  }
}
  const singularizeDinos = (array) => {
    return [...array].map(makeSingular)
  }

  const truncateDinos = (array) => {
    return [...array].map(truncateSpecies)
  }


const makeAllExtinct = (array) => {
  return [...array].map(makeExtinct)
}

const carnivoresOnly = (array) => {
  return [...array].filter(isCarnivore)
}

const herbivoresOnly = (array) => {
  return [...array].filter(a => a.carnivore === false)
}

const extinctOnly = (array) => {
  return [...array].filter(isExtinct)
}

const notExtinct = (array) => {
  return [...array].filter(a => a.extinct === false)
}

const triassicOnly = (array) => {
  return [...array].filter(isTriassic)
}

const notTriassic = (array) => {
  return [...array].filter(a => a.period !== 'Triassic' )
}

const bySpecies = (array) => {
  return [...array].sort(isFirstAlphabeticallyBySpecies)
}

const byExtinctLast = (array) => {
  return [...array].sort(extinctIsLast)
}

const byCarnivoresFirst = (array) => {
  return [...array].sort(carnivoreIsFirst)
}

const byPeriod = (array) => {
  return [...array].sort(isInPeriodOrder)
}




/***********************
 * ITERATION FUNCTIONS *
 **********************/



/*********************************
 * TEST SETUP CODE - DON'T TOUCH!*
 ********************************/

  if (typeof makeDino === 'undefined') {
    makeDino = undefined
  }

  if (typeof makeSingular === 'undefined') {
    makeSingular = undefined
  }

  if (typeof truncateSpecies === 'undefined') {
    truncateSpecies = undefined
  }

  if (typeof makeExtinct === 'undefined') {
    makeExtinct = undefined
  }

  if (typeof isCarnivore === 'undefined') {
    isCarnivore = undefined
  }

  if (typeof isExtinct === 'undefined') {
    isExtinct = undefined
  }

  if (typeof isTriassic === 'undefined') {
    isTriassic = undefined
  }

  if (typeof isJurassic === 'undefined') {
    isJurassic = undefined
  }

  if (typeof isCretaceous === 'undefined') {
    isCretaceous = undefined
  }

  if (typeof isFirstAlphabeticallyBySpecies === 'undefined') {
    isFirstAlphabeticallyBySpecies = undefined
  }

  if (typeof extinctIsLast === 'undefined') {
    extinctIsLast = undefined
  }

  if (typeof carnivoreIsFirst === 'undefined') {
    carnivoreIsFirst = undefined
  }

  if (typeof isInPeriodOrder === 'undefined') {
    isInPeriodOrder = undefined
  }

  if (typeof singularizeDinos === 'undefined') {
    singularizeDinos = undefined
  }

  if (typeof truncateDinos === 'undefined') {
    truncateDinos = undefined
  }

  if (typeof makeAllExtinct === 'undefined') {
    makeAllExtinct = undefined
  }

  if (typeof carnivoresOnly === 'undefined') {
    carnivoresOnly = undefined
  }

  if (typeof herbivoresOnly === 'undefined') {
    herbivoresOnly = undefined
  }

  if (typeof extinctOnly === 'undefined') {
    extinctOnly = undefined
  }

  if (typeof notExtinct === 'undefined') {
    notExtinct = undefined
  }

  if (typeof triassicOnly === 'undefined') {
    triassicOnly = undefined
  }

  if (typeof notTriassic === 'undefined') {
    notTriassic = undefined
  }

  if (typeof bySpecies === 'undefined') {
    bySpecies = undefined
  }

  if (typeof byExtinctLast === 'undefined') {
    byExtinctLast = undefined
  }

  if (typeof byCarnivoresFirst === 'undefined') {
    byCarnivoresFirst = undefined
  }

  if (typeof byPeriod === 'undefined') {
    byPeriod = undefined
  }



module.exports = {
  makeDino,
  makeSingular,
  truncateSpecies,
  makeExtinct,
  isCarnivore,
  isExtinct,
  isTriassic,
  isJurassic,
  isCretaceous,
  isFirstAlphabeticallyBySpecies,
  extinctIsLast,
  carnivoreIsFirst,
  isInPeriodOrder,
  singularizeDinos,
  truncateDinos,
  makeAllExtinct,
  carnivoresOnly,
  herbivoresOnly,
  extinctOnly,
  notExtinct,
  triassicOnly,
  notTriassic,
  bySpecies,
  byExtinctLast,
  byCarnivoresFirst,
  byPeriod,
}
