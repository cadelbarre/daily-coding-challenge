const { productAllNumber, productAllNumberWithoutDivision } = require('../changelles/02.spec/index.js')

const testing = [
  {
    input: [1, 2, 3, 4, 5],
    result: 17,
    want: [120, 60, 40, 30, 24]
  },
  {
    input: [3, 2, 1],
    result: 18,
    want: [2, 3, 6]
  }
]

describe('Daily Coding Challenge.', () => {
  describe('02.Spec - Product all number', () => {
    testing.forEach(({ want, result, input }) =>
      test(`[${input}] => [${want}]`, () => {
        expect(productAllNumber(input, result)).toEqual(want)
      }))
  })
})

describe('Daily Coding Challenge.', () => {
  describe('02.Spec - Product all number without division', () => {
    testing.forEach(({ want, result, input }) =>
      test(`[${input}] => [${want}]`, () => {
        expect(productAllNumberWithoutDivision(input, result)).toEqual(want)
      }))
  })
})
