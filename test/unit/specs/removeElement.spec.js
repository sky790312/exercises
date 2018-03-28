
describe('exercise: ', () => {
  it('remove element', () => {
    /*
    Given an array and a value, remove all instances of that value in place and return the new length.
    Do not allocate extra space for another array, you must do this in place with constant memory.
    The order of elements can be changed. It doesn't matter what you leave beyond the new length.
    Example: Given input array array = [3,2,2,3], val = 3
    Your function should return length = 2, with the first two elements of array being 2.
    */
    const removeElement = (array, removeValue) => {
      if (array.length === 0) {
        return array.length
      }
      if (array.indexOf(removeValue) < 0) {
        return array.length
      }

      let removeCount = 0
      for (let i = 0, arrayLength = array.length; i < arrayLength; i++) {
        console.log('i: ', i)
        console.log('removeCount: ', removeCount)
        console.log('array[i]: ', array[i])
        console.log('array[removeCount]: ', array[removeCount])
        console.log('before array: ', array)
        if (array[i] !== removeValue) {
          array[removeCount] = array[i]
          removeCount += 1
        }
        console.log('after array: ', array)
      }
      array.length = removeCount
      const answer = {
        array,
        removeCount
      }
      return answer
    }

    const array = [3, 1, 2, 3, 2]
    const removeValue = 3
    const afterRemoveObj = removeElement(array, removeValue)
    expect(afterRemoveObj.array).toEqual([1, 2, 2])
    expect(afterRemoveObj.removeCount).toEqual(3)
  })
})
