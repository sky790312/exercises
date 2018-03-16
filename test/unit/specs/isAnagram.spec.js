
describe('exercise: ', () => {
  it('valid anagram', () => {
    /*
      Given two strings s and t, write a function to determine if t is an anagram of s.
      For example,
      s = "anagram", t = "nagaram", return true.
      s = "rat", t = "car", return false.
      Note:
      You may assume the string contains only lowercase alphabets.
    */
    const isAnagram = (string1, string2) => {
      if (string1.length !== string2.length) {
        return false
      }

      const sortString1 = string1.split('').sort().join('')
      const sortString2 = string2.split('').sort().join('')
      return sortString1 === sortString2
    }
    let s, t
    s = 'anagram'
    t = 'nagaram'
    expect(isAnagram(s, t)).toEqual(true)
    s = 'rat'
    t = 'car'
    expect(isAnagram(s, t)).toEqual(false)
  })
})
