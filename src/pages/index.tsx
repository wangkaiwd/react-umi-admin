import { Button } from 'antd';
import './index.less';
import { useEffect, useState } from 'react';

const Test = (props: any) => {
  console.log('props', props);
  return <div>Test</div>;
};

interface Item {
  key: string;
  child?: JSX.Element;
}

// parameter not
const list: Item[] = [
  {
    key: 'a',
    child: undefined
  }
];

export default function HomePage () {
  const [formItems, setFormItems] = useState(list);
  const findItemByKey = (key: string) => {
    return formItems.find(item => item.key === key);
  };
  useEffect(() => {
    const itemA = findItemByKey('a');
    if (itemA) {
      itemA.child = <Test/>;
    }
    setFormItems([...formItems]);
  }, []);
  return (
    <div className={'app'}>
      <Button type={'primary'}>click</Button>
    </div>
  );
}
