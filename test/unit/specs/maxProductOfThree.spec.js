
describe('exercise: ', () => {
  it('distinct is array', () => {
    /*
    A non-empty array A consisting of N integers is given. The product of triplet (P, Q, R) equates to A[P] * A[Q] * A[R] (0 ≤ P < Q < R < N).

    For example, array A such that:

      A[0] = -3
      A[1] = 1
      A[2] = 2
      A[3] = -2
      A[4] = 5
      A[5] = 6
    contains the following example triplets:

    (0, 1, 2), product is −3 * 1 * 2 = −6
    (1, 2, 4), product is 1 * 2 * 5 = 10
    (2, 4, 5), product is 2 * 5 * 6 = 60
    Your goal is to find the maximal product of any triplet.

    Write a function:

    function solution(A);

    that, given a non-empty array A, returns the value of the maximal product of any triplet.

    For example, given array A such that:

      A[0] = -3
      A[1] = 1
      A[2] = 2
      A[3] = -2
      A[4] = 5
      A[5] = 6
    the function should return 60, as the product of triplet (2, 4, 5) is maximal.

    Write an efficient algorithm for the following assumptions:

    N is an integer within the range [3..100,000];
    each element of array A is an integer within the range [−1,000..1,000].

    */
    const maxThreeMultiplcationInArray = (array) => {
      if (!array.length) {
        return
      }

      if (array.length <= 3) {
        return
      }

      let positiveNumberCount = 0
      let negativeNumberCount = 0
      let zeroNumberCount = 0

      for (let i = 0; i < array.length; i += 1) {
        if (array[i] > 0) {
          positiveNumberCount += 1
        } else if (array[i] < 0) {
          negativeNumberCount += 1
        } else {
          zeroNumberCount += 1
        }
      }

      const sortArray = array.sort((a, b) => a - b)
      let max = 0

      if (positiveNumberCount) {
        let number1 = sortArray[0] * sortArray[1] * sortArray[sortArray.length - 1]
        let number2 = sortArray[sortArray.length - 1] * sortArray[sortArray.length - 2] * sortArray[sortArray.length - 3]
        if (!negativeNumberCount) {
          max = number2
        } else {
          max = number1 > number2 ? number1 : number2
        }
      } else {
        if (!zeroNumberCount) {
          max = sortArray[sortArray.length - 1] * sortArray[sortArray.length - 2] * sortArray[sortArray.length - 3]
        }
      }

      return max
    }

    // example array
    const array1 = [-3, 1, 2, -2, 5, 6]
    expect(maxThreeMultiplcationInArray(array1)).toEqual(60)
    // all positive number array
    const array2 = [1, 3, 4, 5, 5, 1]
    expect(maxThreeMultiplcationInArray(array2)).toEqual(100)
    // has positive and negative number with array
    const array4 = [-1, -3, -4, -5, 5]
    expect(maxThreeMultiplcationInArray(array4)).toEqual(100)
    // all negative number array
    const array5 = [-5, -3, -4, -5, -1]
    expect(maxThreeMultiplcationInArray(array5)).toEqual(-12)
    // all negative number with zero array
    const array6 = [-1, -3, -4, -5, -5, 0]
    expect(maxThreeMultiplcationInArray(array6)).toEqual(0)
  })
})
