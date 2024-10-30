import { operators, type Operator } from './derive-types.ts';

type EvaluateProps = {
  a?: number;
  b?: number;
  operator?: Operator;
};

export const evaluate = (props: EvaluateProps) => {
  const { a = 1, b = 1, operator = '+' } = props;
  return operators[operator](a, b);
};

console.log(evaluate({ a: 4, b: 2 }));
console.log(evaluate({ a: 4, b: 2, operator: '*' }));
console.log(evaluate({ a: 4, b: 2, operator: '/' }));

// ts-node .\example.ts
// or use cod-runner
