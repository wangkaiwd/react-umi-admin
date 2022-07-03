import { Button, Typography } from 'antd';
import React, { useEffect, useState } from 'react';

const { Text } = Typography;

const Test = (props: any) => {
  // mounted
  console.log('props', props);
  useEffect(() => {
  }, []);
  return <div>{props.name}</div>;
};

const initialState = [
  {
    key: 'a',
    name: 'test-a',
    item: [{ x: 1, y: 2, z: 3 }],
    component: <Test/>
  },
  {
    key: 'b',
    item: { x: 1, y: 2 }
  },
  {
    key: 'c',
    item: 'c'
  }
];

// vue data
const createInitialState = () => {
  return initialState;
};

const UpdateNestedObjectWithComponent = (props: any) => {
  const [state, setState] = useState<any[]>(createInitialState);
  const [, update] = useState({});
  const findItemByKey = (key: string) => {
    return state.find(item => item.key === key);
  };
  useEffect(() => {
    const item = findItemByKey('a');
    if (item) {
      item.component = <Test name={item.name}/>;
    }
    // state has updated
    update({});
  }, [state]);
  const onClick = () => {
    const item = findItemByKey('a');
    item.name = 'test-a-1';
    setState([...state]);
  };
  const generateItems = () => {
    return state.map(item => {
      return (
        <div key={item.key}>
          <h2>{item.key}</h2>
          {item.component && <div>{item.component}</div>}
        </div>
      );
    });
  };
  const jsonString = JSON.stringify(state, null, 2);
  return (
    <div>
      <Text code>
        {jsonString}
      </Text>
      <Button onClick={onClick}>update object</Button>
      {generateItems()}
    </div>
  );
};

export default UpdateNestedObjectWithComponent;
