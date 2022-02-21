const productAllNumber = (array) => {
  let product = 1
  for (let i = 0; i < array.length; i++) {
    product *= array[i]
  }

  return array.map(elem => product / elem)
}

const productAllNumberWithoutDivision = (array) => {
  return array.map((elem, index) => {
    let subtotal = 1
    for (let i = 0; i < array.length; i++) {
      if (i !== index) subtotal *= array[i]
    }
    return subtotal
  })
}

module.exports = {
  productAllNumber,
  productAllNumberWithoutDivision
}
