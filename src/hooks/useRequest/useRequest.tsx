// Debounce:
// Throttle:

// manual run service how to pass params ?
// manual run: pass parameter by yourself
// not manual run: execute service without parameter
// params may chaos ()
// refresh:
import { useEffect, useState } from 'react';

const useRequest = (service, options?) => {
  const { manual = false } = options || {};
  const [params, setParams] = useState([]);
  const wrapperService = (...args) => {
    setParams(args);
    service(...args);
  };
  const refresh = () => {
    wrapperService(...params);
  };
  useEffect(() => {
    if (!manual) {
      wrapperService();
    }
  }, []);
  return { run: wrapperService, params, refresh };
};

export default useRequest;
