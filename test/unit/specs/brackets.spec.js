
describe('exercise: ', () => {
  it('move zero', () => {
    /*
    A string S consisting of N characters is considered to be properly nested if any of the following conditions is true:

    S is empty;
    S has the form "(U)" or "[U]" or "{U}" where U is a properly nested string;
    S has the form "VW" where V and W are properly nested strings.
    For example, the string "{[()()]}" is properly nested but "([)()]" is not.

    Write a function:

    function solution(S);

    that, given a string S consisting of N characters, returns 1 if S is properly nested and 0 otherwise.

    For example, given S = "{[()()]}", the function should return 1 and given S = "([)()]", the function should return 0, as explained above.

    Write an efficient algorithm for the following assumptions:

    N is an integer within the range [0..200,000];
    string S consists only of the following characters: "(", "{", "[", "]", "}" and/or ")".
    */
    const isNestBrackets = (string) => {
      const isOpener = (opener) => {
        return (opener === '(' || opener === '{' || opener === '[')
      }

      const isCloserMatch = (opener, closer) => {
        return (opener === '{' && closer === '}') ||
          (opener === '(' && closer === ')') ||
          (opener === '[' && closer === ']')
      }

      const stack = []

      if (string.length === 0 || string.length % 2) {
        return 0
      }

      for (let i = 0; i < string.length; i += 1) {
        if (isOpener(string[i])) {
          stack.push(string[i])
        } else {
          const lastString = stack.pop()
          if (!isCloserMatch(lastString, string[i])) {
            return 0
          }
        }
      }

      return (stack.length) ? 0 : 1
    }

    const string1 = '{[()]}'
    expect(isNestBrackets(string1)).toEqual(1)
    const string2 = '([)()]'
    expect(isNestBrackets(string2)).toEqual(0)
  })
})
