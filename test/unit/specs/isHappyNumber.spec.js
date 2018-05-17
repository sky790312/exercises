
describe('exercise: ', () => {
  it('is happy number', () => {
    /*
    Write an algorithm to determine if a number is "happy".
    A happy number is a number defined by the following process: Starting with any positive integer, replace the number by the sum of the squares of its digits, and repeat the process until the number equals 1 (where it will stay), or it loops endlessly in a cycle which does not include 1. Those numbers for which this process ends in 1 are happy numbers.
    Example: 19 is a happy number
    1^2 + 9^2 = 82
    8^2 + 2^2 = 68
    6^2 + 8^2 = 100
    1^2 + 0^2 + 0^2 = 1
    */
    const isHappyNumber = (number) => {
      if (number <= 0) {
        return
      }

      // use store to remember calculate numbers
      let store = {}
      function recursiveFc (number) {
        console.log('number: ', number)

        if (number === 1) {
          return number
        }

        store[number] = number
        // calculate each numbers's total square
        number.toString().split('').forEach((v, i) => {
          if (i === 0) {
            number = 0
          }
          number += v * v
        })
        number = parseInt(number, 10)
        // prevent infinite loop, check store that if the number is already calculate
        if (store[number]) {
          return null
        }
        return recursiveFc(number)
      }
      const lastNumber = recursiveFc(number)
      // number === 1 mean it's a happy number
      return (lastNumber === 1)
    }

    const number1 = 19
    expect(isHappyNumber(number1)).toEqual(true)
    const number2 = 26
    expect(isHappyNumber(number2)).toEqual(false)
  })
})
