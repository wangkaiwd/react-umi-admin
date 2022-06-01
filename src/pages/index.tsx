import { Input } from 'antd';
import useRequest from '@/hooks/useRequest/useRequest';
// import { useRequest } from 'ahooks';
import { useEffect, useState } from 'react';
// json: Search, Table, Form, Descriptions

// core feature:
// 1. columns: search form and table
// 2.
// response: {code: 200, data:{ list:[{k1:'1'},{k1:'2'}], total: 100 },message: null}
// request:
// form
// custom operate: such as export
// form parameters, pagination

// write a useRequest for your enterprise
// put parameter to url

// manual invoke: need pass params when call promise
// auto invoke: invoke passed parameter
export default function IndexPage() {
  const [name, setName] = useState('');
  const fetchDemo = () => {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve(name);
      }, 3000);
    });
  };
  const { run, params } = useRequest(fetchDemo, {});
  useEffect(() => {
    run();
  }, [name]);
  return (
    <div>
      {/*<TestProFormTextFields />*/}
      <h2>{name}</h2>
      <Input
        placeholder={'Please input something...'}
        style={{ width: '100px' }}
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
    </div>
  );
}

// tasks:
// 1. table
// 2. search
// 3. create
// 4. edit
// 5. detail
