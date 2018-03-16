
describe('exercise: ', () => {
  it('palindrome number', () => {
    /*
    Determine whether an integer is a palindrome. Do this without extra space.

    Some hints: Could negative integers be palindromes? (ie, -1)
    If you are thinking of converting the integer to string, note the restriction of using extra space.
    You could also try reversing an integer. However, if you have solved the problem "Reverse Integer", you know that the reversed integer might overflow. How would you handle such case?
    There is a more generic way of solving this problem.
    */
    const isPalindromeNumber = (number) => {
      // x < 0 or x > (2^32 - 1) , false;
      if (number < 0 || number > Math.pow(2, 32) - 1) {
        return false
      }
      if (number < 10) {
        return true
      }

      // keep x
      const initialNumber = number

      let recNumber = number % 10
      number = parseInt(number / 10)
      // console.log('start recNum: ', recNumber)
      // console.log('start number: ', number)
      // 將recNum*10，再抓最高位數加到recNumb
      while (number !== 0) {
        // console.log('before recNum: ', recNumber)
        // console.log('before number: ', number)
        recNumber = recNumber * 10
        recNumber = recNumber + number % 10
        number = parseInt(number / 10)
        // console.log('after recNum: ', recNumber)
        // console.log('after number: ', number)
      }
      // console.log('end recNum: ', recNumber)
      // console.log('end number: ', number)
      return recNumber === initialNumber
    }
    const number1 = 22722
    expect(isPalindromeNumber(number1)).toEqual(true)
    const number2 = 2271
    expect(isPalindromeNumber(number2)).toEqual(false)
  })
})
