/**
 
https://www.hackerrank.com/challenges/mini-max-sum

Given five positive integers, find the minimum and maximum values that can be calculated by summing exactly four of the five integers. Then print the respective minimum and maximum values as a single line of two space-separated long integers.

Example

The minimum sum is  and the maximum sum is . The function prints

16 24
Function Description

Complete the miniMaxSum function in the editor below.

miniMaxSum has the following parameter(s):

arr: an array of  integers
Print

Print two space-separated integers on one line: the minimum sum and the maximum sum of  of  elements.

Input Format

A single line of five space-separated integers.

Constraints


Output Format

Print two space-separated long integers denoting the respective minimum and maximum values that can be calculated by summing exactly four of the five integers. (The output can be greater than a 32 bit integer.)

Sample Input

1 2 3 4 5
Sample Output

10 14
Explanation

The numbers are , , , , and . Calculate the following sums using four of the five integers:

Sum everything except , the sum is .
Sum everything except , the sum is .
Sum everything except , the sum is .
Sum everything except , the sum is .
Sum everything except , the sum is .
Hints: Beware of integer overflow! Use 64-bit Integer.

Need help to get started? Try the Solve Me First problem
 
 */

function miniMaxSum(arr) {
    let numMin = Infinity;
    let numMax = 0;
    let sumAll = 0;
    for (const num of arr) {
        sumAll += num;
        if (num < numMin) {
            numMin = num
        }
        if (num > numMax) {
            numMax = num
        }
    }

    const sumMin = sumAll - numMax
    const sumMax = sumAll - numMin

    console.log(sumMin, sumMax)
}

miniMaxSum([1, 2, 3, 4, 5])

//expected 10 14
