
describe('exercise: ', () => {
  it('reverse integer', () => {
    /*
    Reverse digits of an integer.
    Example1: x = 123, return 321 Example2: x = -123, return -321
    Have you thought about this? Here are some good questions to ask before coding. Bonus points for you if you have already thought through this!
    If the integer's last digit is 0, what should the output be? ie, cases such as 10, 100.
    Did you notice that the reversed integer might overflow? Assume the input is a 32-bit integer, then the reverse of 1000000003 overflows. How should you handle such cases?
    For the purpose of this problem, assume that your function returns 0 when the reversed integer overflows.
    */
    const reverseInteger = (integer) => {
      if (integer >= 0 && integer < 10) {
        return integer
      }

      const integerToString = integer.toString()
      let newInteger = integerToString.split('').reverse().join('')
      if (newInteger.indexOf('-') !== -1) {
        newInteger = `-${newInteger.replace('-', '')}`
      }
      newInteger = parseInt(newInteger, 10)

      const INT_MAX = Math.pow(2, 31) - 1
      const isOverflow = (newInteger > INT_MAX || newInteger < -(1 + INT_MAX))
      return isOverflow
        ? 0
        : newInteger
    }

    const integer1 = 123
    expect(reverseInteger(integer1)).toEqual(321)
    const integer2 = -321
    expect(reverseInteger(integer2)).toEqual(-123)
  })
})
