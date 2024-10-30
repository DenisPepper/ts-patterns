// const user = { name: 'Denis', age: 42, js: true };
// type User = typeof user;
// type UserKeys = keyof User;

type Handler = (a: number, b: number) => number;
type Operator = '+' | '-' | '*' | '/';

export const methods: Record<Operator, Handler> = {
  '+': (a, b) => a + b,
  '-': (a, b) => a - b,
  '*': (a, b) => a * b,
  '/': (a, b) => a / b,
};

export type Method = keyof typeof methods;
