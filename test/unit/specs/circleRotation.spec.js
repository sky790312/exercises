
describe('exercise: ', () => {
  it('circle rotation', () => {
    /*
    Given an array of integers, return indices of the two numbers such that they add up to a specific target.
    You may assume that each input would have exactly one solution.
    Example:
    Given nums = [2, 7, 11, 15], target = 9,

    Because nums[0] + nums[1] = 2 + 7 = 9,
    return [0, 1].
    */
    const getArrayAfterRotation = (array, rotationTimes) => {
      if (!array.length) {
        return
      }

      if (array.length === 1 || rotationTimes === 0) {
        return array
      }

      let realRotationTimes = (rotationTimes > array.length)
        ? rotationTimes % array.length
        : rotationTimes
      let index = array.length - realRotationTimes
      let arrayBeforeIndex = array.slice(0, index)
      let arrayAfterIndex = array.slice(index, array.length)
      return [...arrayAfterIndex, ...arrayBeforeIndex]
    }
    const array1 = [1, 2, 3, 4]
    const rotationTimes1 = 2
    const targetValue1 = [3, 4, 1, 2]
    expect(getArrayAfterRotation(array1, rotationTimes1)).toEqual(targetValue1)
    const array2 = [0, 0, 0]
    const rotationTimes2 = 1
    const targetValue2 = [0, 0, 0]
    expect(getArrayAfterRotation(array2, rotationTimes2)).toEqual(targetValue2)
    const array3 = [1, 2, 3, 4]
    const rotationTimes3 = 4
    const targetValue3 = [1, 2, 3, 4]
    expect(getArrayAfterRotation(array3, rotationTimes3)).toEqual(targetValue3)
  })
})
