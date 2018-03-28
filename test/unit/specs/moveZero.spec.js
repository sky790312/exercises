
describe('exercise: ', () => {
  it('move zero', () => {
    /*
    Given an array nums, write a function to move all 0's to the end of it while maintaining the relative order of the non-zero elements.
    For example, given nums = [0, 1, 0, 3, 12], after calling your function, nums should be [1, 3, 12, 0, 0].
    Note:
    You must do this in-place without making a copy of the array.
    Minimize the total number of operations.
    */
    const moveZeroRearange = (array) => {
      if (array.length === 0) {
        return array.length
      }
      let index = 0
      for (let i = 0, arrayLength = array.length; i < arrayLength; i++) {
        if (array[i]) {
          array[index] = array[i]
          index += 1
        }
      }
      for (let i = index, arrayLength = array.length; i < arrayLength; i++) {
        array[i] = 0
      }

      return array
    }

    const array = [1, 0, 2, 0]
    expect(moveZeroRearange(array)).toEqual([1, 2, 0, 0])
  })
})
