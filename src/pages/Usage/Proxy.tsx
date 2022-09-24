import { proxy, useSnapshot } from 'valtio';
import { Button } from 'antd';
import { PageContainer } from '@ant-design/pro-components';
import { useRef } from 'react';

const useProxy = <T extends object>(initialState: T) => {
  const stateRef = useRef(proxy(initialState));
  return stateRef.current;
};
const Proxy = () => {
  const state = useProxy({ count: 0, text: 'hello' });
  const snap = useSnapshot(state);
  return (
    <PageContainer>
      {snap.count}
      <Button onClick={() => ++state.count}>+1</Button>
    </PageContainer>
  );
};

export default Proxy;
