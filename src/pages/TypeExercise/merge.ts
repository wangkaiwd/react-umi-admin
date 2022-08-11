type Stringy = {
  bar: string;
  foo: string;
};

type NotStri = {
  foo: number;
  other: boolean;
};

const stringy: Stringy = { bar: 'bar', foo: 'foo' };
const notstri: NotStri = { foo: 42, other: true };

const result1 = Object.assign(stringy, notstri);
console.log(result1.foo);

// 'bar' | 'foo' , 'foo' | 'other'
// {bar:string } & { foo:number,other:boolean }
export type Merge<T, V> = Omit<T, Extract<keyof T, keyof V>> & V;
const result2: Merge<Stringy, NotStri> = Object.assign(stringy, notstri);
console.log(result2.foo);

const result3 = { ...stringy, ...notstri };
console.log(result3);
