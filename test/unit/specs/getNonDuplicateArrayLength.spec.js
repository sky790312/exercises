
describe('exercise: ', () => {
  it('two sum', () => {
    /*
    Given a sorted array, remove the duplicates in place such that each element appear only once and return the new length.

    Do not allocate extra space for another array, you must do this in place with constant memory.

    For example, Given input array nums = [1,1,2],

    Your function should return length = 2, with the first two elements of nums being 1 and 2 respectively. It doesn't matter what you leave beyond the new length.
    */
    const getNonDuplicateArrayLength = (array) => {
      if (array == null || array.length === 0) {
        return 0
      }

      if (array.length === 1) {
        return 1
      }

      let count = 0
      for (let i = 1; i < array.length; i++) {
        console.log('i: ', i)
        console.log('nums[i]: ', array[i])
        console.log('count: ', count)
        console.log('nums[count]: ', array[count])
        if (array[count] !== array[i]) {
          count++
          array[count] = array[i]
        }
        console.log('after: ', array)
      }
      count += 1
      return count
    }

    const array = [1, 2, 2, 3]
    expect(getNonDuplicateArrayLength(array)).toEqual(3)
  })
})
