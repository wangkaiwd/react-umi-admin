## React Typescript

### Hooks

- [React Hooks 使用误区，驳官方文档](https://github.com/brickspert/blog/issues/45)
- [design decision: why do we need the stale closure problem in the first place](https://github.com/facebook/react/issues/16956)

Follow scenarios will cause stale closure:

- make request in `useEffect(() => { fetchApi() },[])`
- `Promise.then`,`setTimeout`,`setInterval`
- `useEffect` cleanup function: `useEffect(() => () => Promise.resolve().then(() => {}),[])`
