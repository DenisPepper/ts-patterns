import { operators, type Operator } from './derive-types.ts';

export const evaluate = (a: number, b: number, operator: Operator) => {
  return operators[operator](a, b);
};

console.log(evaluate(4, 2, '+'));
console.log(evaluate(4, 2, '*'));
console.log(evaluate(4, 2, '/'));

// ts-node .\example.ts
// or use cod-runner
