# TypeScript Function Return Value Bug

This repository demonstrates a common, yet easily missed, bug in TypeScript: a function incorrectly returning `undefined` instead of the intended value.

## The Bug

The `returnNumbers` function is designed to return an array of numbers. However, it lacks an explicit `return` statement for the array. It only logs the array to the console using `console.log()`, resulting in an implicit `undefined` return value.

## The Solution

The solution involves adding a `return` statement to return the correctly generated array.

## How to Reproduce

1. Clone the repository.
2. Navigate to the directory.
3. Compile and run `bug.ts` using a TypeScript compiler (tsc) and Node.js.
4. Observe the output and the unexpected return value of `undefined`.
5. Then, run the solution file, `bugSolution.ts`, and notice the correct array is returned.

This example highlights the importance of carefully reviewing function return statements in TypeScript and other programming languages to ensure that they accurately reflect the intended behavior.