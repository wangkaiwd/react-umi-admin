import { Button, Typography } from 'antd';
import React, { useEffect, useState } from 'react';

const { Text } = Typography;
// number, string, boolean object null undefined symbol
// Component: jsx.createElement
const UpdateNestedObjectWithoutComponent = (props: any) => {
  const [state, setState] = useState<any>([
    { a: [{ x: 1, y: 2, z: 3 }] },
    { b: { x: 1, y: 2 } },
    { c: 'c' }
  ]);
  const onClick = () => {
    state[0].a[0].x = 11;
    setState([...state]);
    state[1].b.y = 22;
    setState([...state]);
  };
  const jsonString = JSON.stringify(state, null, 2);
  return (
    <div>
      <Text code>
        {jsonString}
      </Text>
      <Button onClick={onClick}>update object</Button>
    </div>
  );
};

export default UpdateNestedObjectWithoutComponent;
