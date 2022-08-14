## You Might Not Need an Effect

core: avoid `useEffect` update state to `re-render` dom tree again

```jsx
function List({ items }) {
  const [isReverse, setIsReverse] = useState(false);
  const [selection, setSelection] = useState(null);

  // Better: Adjust the state while rendering
  const [prevItems, setPrevItems] = useState(items);
  if (items !== prevItems) {
    setPrevItems(items);
    setSelection(null);
  }
  // optimize:
  // useMemo(() => {
  //   setPrevItems(items)
  //   setSelection(null)
  // },[items])
  // ...
}
```

```jsx
function SearchResults({ query }) {
  const [results, setResults] = useState([]);
  const [page, setPage] = useState(1);
  useEffect(() => {
    let ignore = false;
    fetchResults(query, page).then((json) => {
      if (!ignore) {
        setResults(json);
      }
    });
    return () => {
      ignore = true;
    };
  }, [query, page]);

  function handleNextPageClick() {
    setPage(page + 1);
  }

  // ...
}
```

- If you can calculate something during render, you don't need an effect
- To reset the state of an entire component tree, pass a different `key` to it
- You can fetch data with effects, but you need to implement cleanup to avoid race conditions
