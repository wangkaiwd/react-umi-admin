// Debounce:
// Throttle:

// manual run service how to pass params ? // params may chaos ()
// manual run: pass parameter by yourself
// not manual run: execute service without parameter,user can set default param
// refresh

// manual
// params
// cancel ?

import { useEffect, useState } from 'react';

interface IOptions {
  manual?: boolean;
  defaultParams?: any;
}

const useRequest = (service, options?: IOptions) => {
  const { manual = false, defaultParams } = options || {};
  const [params, setParams] = useState([]);
  const wrapperService = (...args) => {
    setParams(args);
    service(...args);
  };
  const refresh = () => {
    wrapperService(...params);
  };
  const cancel = () => {};
  useEffect(() => {
    if (!manual) {
      wrapperService(defaultParams);
    }
  }, []);
  return { run: wrapperService, params, refresh };
};

export default useRequest;
