
describe('exercise: ', () => {
  it('circle rotation', () => {
    /*
    An array A consisting of N integers is given. A triplet (P, Q, R) is triangular if 0 ≤ P < Q < R < N and:

    A[P] + A[Q] > A[R],
    A[Q] + A[R] > A[P],
    A[R] + A[P] > A[Q].
    For example, consider array A such that:

      A[0] = 10    A[1] = 2    A[2] = 5
      A[3] = 1     A[4] = 8    A[5] = 20
    Triplet (0, 2, 4) is triangular.

    Write a function:

    function solution(A);

    that, given an array A consisting of N integers, returns 1 if there exists a triangular triplet for this array and returns 0 otherwise.

    For example, given array A such that:

      A[0] = 10    A[1] = 2    A[2] = 5
      A[3] = 1     A[4] = 8    A[5] = 20
    the function should return 1, as explained above. Given array A such that:

      A[0] = 10    A[1] = 50    A[2] = 5
      A[3] = 1
    the function should return 0.

    Write an efficient algorithm for the following assumptions:

    N is an integer within the range [0..100,000];
    each element of array A is an integer within the range [−2,147,483,648..2,147,483,647].
    */
    const hasTriangleNumberInArray = (array) => {
      if (!array.length || array.length < 3) {
        return
      }

      const sortArray = array.sort((a, b) => a - b)

      const isTriangleNumber = (x, y, z) => {
        return ((x + y) > z) &&
                ((x + z) > y) &&
                ((y + z) > x)
      }

      for (let i = 0; i < sortArray.length; i += 1) {
        if (isTriangleNumber(sortArray[i - 2], sortArray[i - 1], sortArray[i])) {
          return 1
        }
      }

      return 0
    }

    const array1 = [10, 2, 5, 1, 8, 20]
    expect(hasTriangleNumberInArray(array1)).toEqual(1)
    const array2 = [10, 50, 5, 1]
    expect(hasTriangleNumberInArray(array2)).toEqual(0)
  })
})
