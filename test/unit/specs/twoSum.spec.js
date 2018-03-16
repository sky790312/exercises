
describe('exercise: ', () => {
  it('two sum', () => {
    /*
    Given an array of integers, return indices of the two numbers such that they add up to a specific target.
    You may assume that each input would have exactly one solution.
    Example:
    Given nums = [2, 7, 11, 15], target = 9,

    Because nums[0] + nums[1] = 2 + 7 = 9,
    return [0, 1].
    */
    const getTwoSumPositionInArray = (array, targetValue) => {
      if (!array.length) {
        return
      }

      let map = {}
      for (let i = 0; i < array.length; i++) {
        let value = array[i]
        let foundTargetValue = map[targetValue - value]

        console.log('value: ', value)
        console.log('map: ', map)
        console.log('targetValue: ', targetValue)
        console.log('foundTargetValue: ', foundTargetValue)
        console.log('map[value]: ', map[value])

        // use object key to find without for loop
        if (foundTargetValue >= 0) {
          return [foundTargetValue, i]
        } else {
          map[value] = i
        }
      }
    }
    const array = [2, 7, 11, 15]
    const targetValue = 9
    expect(getTwoSumPositionInArray(array, targetValue)).toEqual([0, 1])
  })
})
