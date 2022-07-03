import { useState } from 'react';
import { Button } from 'antd';

const Child = (props: any) => {
  console.log('props', props);
  return <div>Child</div>;
};
const UpdateComponentProps = () => {
  const [item, setItem] = useState({ a: [{ key: '1', name: '1' }] });
  return (
    <div>
      <Button onClick={() => {
        const a = item.a;
        a[0].name = '11';
        setItem({ ...item });
      }}>update item</Button>
      <Child options={item.a}/>
    </div>
  );
};

export default UpdateComponentProps;
