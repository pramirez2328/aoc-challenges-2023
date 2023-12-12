/* Write a function that reverses characters in (possibly nested) parentheses in the input string.

Input strings will always be well-formed with matching ()s.

Example

For inputString = "(bar)", the output should be
solution(inputString) = "rab";
For inputString = "foo(bar)baz", the output should be
solution(inputString) = "foorabbaz";
For inputString = "foo(bar)baz(blim)", the output should be
solution(inputString) = "foorabbazmilb";
For inputString = "foo(bar(baz))blim", the output should be
solution(inputString) = "foobazrabblim".
Because "foo(bar(baz))blim" becomes "foo(barzab)blim" and then "foobazrabblim".
Input/Output

[execution time limit] 4 seconds (js)

[memory limit] 1 GB

[input] string inputString

A string consisting of lowercase English letters and the characters ( and ). It is guaranteed that all parentheses in inputString form a regular bracket sequence.

Guaranteed constraints:
0 ≤ inputString.length ≤ 50.

[output] string

Return inputString, with all the characters that were in parentheses reversed.
*/

function solution(inputString) {
  const stack = [];
  let result = '';

  for (let char of inputString) {
    if (char === '(') {
      stack.push(result);
      result = '';
    } else if (char === ')') {
      result = stack.pop() + result.split('').reverse().join('');
    } else {
      result += char;
    }
  }

  return result;
}

// Test cases
console.log(solution('(bar)')); // Output: "rab"
console.log(solution('foo(bar)baz')); // Output: "foorabbaz"
console.log(solution('foo(bar)baz(blim)')); // Output: "foorabbazmilb"
console.log(solution('foo(bar(baz))blim')); // Output: "foobazrabblim"
