const sumPairs = (array, result) => {
  let founded = false

  array.forEach((elem, index) => {
    const subtract = result - elem
    if (array.includes(subtract, index + 1)) founded = true
  })

  return founded
}

module.exports = sumPairs
