// const user = { name: 'Denis', age: 42, js: true };
// type User = typeof user;
// type UserKeys = keyof User;

export const operators = {
  '+': (a: number, b: number) => a + b,
  '-': (a: number, b: number) => a - b,
  '*': (a: number, b: number) => a * b,
  '/': (a: number, b: number) => a / b,
};

export type Operator = keyof typeof operators;
