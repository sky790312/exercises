
describe('exercise: ', () => {
  it('two sum', () => {
    /*
    A binary gap within a positive integer N is any maximal sequence of consecutive zeros that is surrounded by ones at both ends in the binary representation of N.

    For example, number 9 has binary representation 1001 and contains a binary gap of length 2. The number 529 has binary representation 1000010001 and contains two binary gaps: one of length 4 and one of length 3. The number 20 has binary representation 10100 and contains one binary gap of length 1. The number 15 has binary representation 1111 and has no binary gaps. The number 32 has binary representation 100000 and has no binary gaps.

    Write a function:

    function solution(N);

    that, given a positive integer N, returns the length of its longest binary gap. The function should return 0 if N doesn't contain a binary gap.

    For example, given N = 1041 the function should return 5, because N has binary representation 10000010001 and so its longest binary gap is of length 5. Given N = 32 the function should return 0, because N has binary representation '100000' and thus no binary gaps.

    Assume that:

    N is an integer within the range [1..2,147,483,647].
    Complexity:

    expected worst-case time complexity is O(log(N));
    expected worst-case space complexity is O(1).
    */
    const getBiggestBinaryGapLength = number => {
      let binaryDigitNumber = ''
      const convertBinary = tenDigitNumber => {
        if (tenDigitNumber > 0) {
          const nextDigitNumber = parseInt(tenDigitNumber / 2)
          tenDigitNumber = tenDigitNumber % 2
          binaryDigitNumber += tenDigitNumber
          return convertBinary(nextDigitNumber)
        }

        return binaryDigitNumber
      }
      binaryDigitNumber = convertBinary(number).split('').reverse().join('')

      let biggestDistance = 0
      let tmp = 0
      for (var i = 0; i < binaryDigitNumber.length; i++) {
        if (binaryDigitNumber.charAt(i) === '1') {
          if (tmp > biggestDistance) {
            biggestDistance = tmp
          }
          tmp = 0
        }
        tmp += 1
      }
      const maxGap = biggestDistance ? biggestDistance - 1 : 0
      return maxGap
    }
    const number1 = 529
    expect(getBiggestBinaryGapLength(number1)).toEqual(4)
    const number2 = 15
    expect(getBiggestBinaryGapLength(number2)).toEqual(0)
    const number3 = 32
    expect(getBiggestBinaryGapLength(number3)).toEqual(0)
  })
})
