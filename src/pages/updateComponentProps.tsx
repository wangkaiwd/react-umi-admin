import { useState } from 'react';
import { Button } from 'antd';

const Child = (props: any) => {
  console.log('props', props);
  return <div>Child</div>;
};
const UpdateComponentProps = () => {
  const [item, setItem] = useState({ a: [{ key: '1', name: '1' }] });
  const x = <Child/>;
  return (
    <div>
      <Button onClick={() => {
        const a = item.a;
        a[0].name = '11';
        setItem({ ...item });
      }}>update item</Button>
      {x}
    </div>
  );
};

export default UpdateComponentProps;
