
describe('exercise: ', () => {
  it('cyclic rotation', () => {
    /*
    An array A consisting of N integers is given. Rotation of the array means that each element is shifted right by one index, and the last element of the array is moved to the first place. For example, the rotation of array A = [3, 8, 9, 7, 6] is [6, 3, 8, 9, 7] (elements are shifted right by one index and 6 is moved to the first place).

    The goal is to rotate array A K times; that is, each element of A will be shifted to the right K times.

    Write a function:

    function solution(A, K);

    that, given an array A consisting of N integers and an integer K, returns the array A rotated K times.

    For example, given

        A = [3, 8, 9, 7, 6]
        K = 3
    the function should return [9, 7, 6, 3, 8]. Three rotations were made:

        [3, 8, 9, 7, 6] -> [6, 3, 8, 9, 7]
        [6, 3, 8, 9, 7] -> [7, 6, 3, 8, 9]
        [7, 6, 3, 8, 9] -> [9, 7, 6, 3, 8]
    For another example, given

        A = [0, 0, 0]
        K = 1
    the function should return [0, 0, 0]

    Given

        A = [1, 2, 3, 4]
        K = 4
    the function should return [1, 2, 3, 4]

    Assume that:

    N and K are integers within the range [0..100];
    each element of array A is an integer within the range [−1,000..1,000].
    In your solution, focus on correctness. The performance of your solution will not be the focus of the assessment.
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

      for (let i = 0; i < realRotationTimes; i += 1) {
        const value = array.pop()
        array.unshift(value)
      }

      return array
      // let index = array.length - realRotationTimes
      // let arrayBeforeIndex = array.slice(0, index)
      // let arrayAfterIndex = array.slice(index, array.length)
      // return [...arrayAfterIndex, ...arrayBeforeIndex]
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
