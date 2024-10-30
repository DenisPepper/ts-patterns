import { methods, type Method } from './derive-types.ts';

type EvaluateProps = {
  a?: number;
  b?: number;
  method?: Method;
};

export const evaluate = (props: EvaluateProps) => {
  const { a = 1, b = 1, method = '+' } = props;
  return methods[method](a, b);
};

console.log(evaluate({ a: 4, b: 2, method: '+' }));
console.log(evaluate({ a: 4, b: 2, method: '*' }));
console.log(evaluate({ a: 4, b: 2, method: '/' }));

// ts-node .\example.ts
// or use cod-runner
