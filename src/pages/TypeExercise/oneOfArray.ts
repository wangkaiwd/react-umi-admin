const arr = ['foo', 'bar', 'baz'] as const;

type OneOfArr = typeof arr[number];

type X = {
  [K in OneOfArr]: string;
};

const b: X = { foo: '1', bar: '2', baz: '3' };

console.log('b', b);
