interface A {
  a: number;
  b: number;
}

type AKeys = keyof A;
type Test<T extends AKeys> = T;

// interface B {
//   a: number,
//   b: number,
//   c: string
// }

const b: Test<'a' | 'b'> = 'a';

console.log('b', b);

export { b };
