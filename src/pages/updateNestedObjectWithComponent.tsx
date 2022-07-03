import { Button, Typography } from 'antd';
import React, { useEffect, useRef, useState } from 'react';
import { useImperativeHandle, forwardRef } from 'react';

const { Text } = Typography;

const Test = forwardRef((props: any, ref) => {
  console.log('test-render', props);
  const a = () => {
    console.log('a');
  };
  useImperativeHandle(ref, () => {
    return {
      a
    };
  });
  return <div>{props.name}</div>;
});

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

//
const UpdateNestedObjectWithComponent = (props: any) => {
  const [state, setState] = useState<any[]>(createInitialState);
  const [, update] = useState({});
  const testRef = useRef(null);
  const findItemByKey = (key: string) => {
    return state.find(item => item.key === key);
  };
  useEffect(() => {
    const item = findItemByKey('a');
    if (item) {
      item.component = <Test name={item.name} ref={testRef}/>;
    }
    // state has updated
    // update({});
    // remove dependencies, Test component always don't re-render

    setState([...state]);
  }, []);
  const onClick = () => {
    console.log('testRef', testRef);
    const item = findItemByKey('a');
    item.name = 'test-a-1';
    setState([...state]);
  };
  const generateItems = () => {
    return state.map(item => {
      return (
        <div key={item.key}>
          <h2>{item.key}</h2>
          {item.component && <div>
            {/*{item.component}*/}
            {/* Why this doesn't trigger update */}
            <item.component.type></item.component.type>
          </div>}
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
