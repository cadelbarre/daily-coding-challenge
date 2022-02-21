const sumPairs = require('../changelles/01.spec/index.js')

const testing = [
  {
    input: [10, 15, 3, 7],
    result: 17,
    want: true,
    msg: 'Since 10 + 7 is 17'
  },
  {
    input: [10, 15, 3, 7],
    result: 18,
    want: true,
    msg: 'Since 15 + 3 is 18.'
  },
  {
    input: [10, 15, 3, 7],
    result: 20,
    want: false,
    msg: 'There is not two numbers add up to 20.'
  }
]

describe('Daily Coding Challenge.', () => {
  describe('01.Spec', () => {
    testing.forEach(({ want, result, input, msg }) =>
      test(msg, () => {
        expect(sumPairs(input, result)).toEqual(want)
      }))
  })
})
