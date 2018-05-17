
describe('exercise: ', () => {
  it('numbers of 1 bits', () => {
    /*
    Given a sorted array, remove the duplicates in place such that each element appear only once and return the new length.

    Do not allocate extra space for another array, you must do this in place with constant memory.

    For example, Given input array nums = [1,1,2],

    Your function should return length = 2, with the first two elements of nums being 1 and 2 respectively. It doesn't matter what you leave beyond the new length.
    */
    const hammingWeight = (number) => {
      if (number <= 0) {
        return false
      }

      let count = 0
      const array = number.toString(2).split('')
      console.log(array)
      array.map(n => {
        if (n % 2 === 1) {
          count = count += 1
        }
      })

      return count
    }

    const number1 = 11
    const number2 = 32
    expect(hammingWeight(number1)).toEqual(3)
    expect(hammingWeight(number2)).toEqual(1)
  })
})
