
describe('exercise: ', () => {
  it('distinct is array', () => {
    /*
    Write a function

    function solution(A);

    that, given an array A consisting of N integers, returns the number of distinct values in array A.

    For example, given array A consisting of six elements such that:

     A[0] = 2    A[1] = 1    A[2] = 1
     A[3] = 2    A[4] = 3    A[5] = 1
    the function should return 3, because there are 3 distinct values appearing in array A, namely 1, 2 and 3.

    Write an efficient algorithm for the following assumptions:

    N is an integer within the range [0..100,000];
    each element of array A is an integer within the range [−1,000,000..1,000,000].
    */
    const hasTriangleNumberInArray = (array) => {
      if (!array.length) {
        return
      }

      if (array.length === 1) {
        return 1
      }

      const sortArray = array.sort((a, b) => a - b)
      let count = 1

      for (let i = 1; i < sortArray.length; i += 1) {
        if (sortArray[i - 1] !== sortArray[i]) {
          count += 1
        }
      }
      return count
    }

    const array1 = [2, 1, 1, 2, 3, 1]
    expect(hasTriangleNumberInArray(array1)).toEqual(3)
    const array2 = [1, 3, 4, 5, 5, 1]
    expect(hasTriangleNumberInArray(array2)).toEqual(4)
  })
})
