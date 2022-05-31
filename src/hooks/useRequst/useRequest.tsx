// Debounce:
// Throttle:

// manual run service how to pass params ?
// params may chaos ()
// refresh:
import { useEffect, useRef } from 'react';

const useRequest = (service, options?) => {
  const { manual = false } = options || {};
  const lastParamsRef = useRef([]);
  const wrapperService = (...args) => {
    lastParamsRef.current = args;
    service(...args);
  };
  const refresh = () => {
    wrapperService(...lastParamsRef.current);
  };
  useEffect(() => {
    if (!manual) {
      wrapperService(undefined);
    }
  }, []);
  return { run: service, params: lastParamsRef.current, refresh };
};

export default useRequest;
