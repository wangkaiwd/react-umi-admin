import { act, renderHook } from '@testing-library/react-hooks';
import useRequest from '../useRequest';
// import { useRequest } from 'ahooks';

const createPromise = (value, reason, delay) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (value) {
        resolve(value);
      } else {
        reject(reason);
      }
    }, delay);
  });
};
describe('useRequest:', () => {
  it('should auto run service', async () => {
    const fetchDemo = jest.fn(() => {
      return createPromise('cat', undefined, 1000);
    });
    const { result, waitForNextUpdate } = renderHook(() => {
      return useRequest(fetchDemo);
    });
    expect(fetchDemo).toBeCalledTimes(1);
  });
  it('should run service manual', () => {
    const fetchDemo = jest.fn(() => {
      return createPromise('cat', undefined, 1000);
    });
    const { result } = renderHook(() => {
      return useRequest(fetchDemo, { manual: true });
    });
    expect(fetchDemo).toBeCalledTimes(0);
    act(() => {
      result.current.run();
      expect(fetchDemo).toBeCalledTimes(1);
    });
  });
  it('should get params of service', async () => {
    const fetchDemo = jest.fn((value) => {
      return createPromise(value, undefined, 1000);
    });
    const { result, waitForNextUpdate } = renderHook(() => {
      return useRequest(fetchDemo, { manual: true });
    });
    await act(async () => {
      result.current.run('cat');
      await waitForNextUpdate();
      expect(result.current.params).toEqual(['cat']);
    });
  });
});
