# React Performance Hacks: Optimizing Your Frontend

React is powerful, but without proper optimization, it can become sluggish. Master these techniques to build lightning-fast applications.

## Memoization Techniques

### React.memo

```jsx
const ExpensiveComponent = React.memo(({ data }) => {
  return <div>{/* Heavy computation */}</div>;
});
```

Prevents unnecessary re-renders when props haven't changed.

### useMemo

```jsx
const expensiveValue = useMemo(() => {
  return computeExpensiveValue(a, b);
}, [a, b]);
```

Caches expensive calculations between renders.

## Virtual Scrolling

For large lists, use libraries like `react-window` or `react-virtualized` to render only visible items.

```jsx
import { FixedSizeList as List } from 'react-window';

<List
  height={400}
  itemCount={1000}
  itemSize={35}
  width={300}
>
  {({ index, style }) => <div style={style}>Item {index}</div>}
</List>
```

## Code Splitting

### Dynamic Imports

```jsx
const OtherComponent = lazy(() => import('./OtherComponent'));

function MyComponent() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <OtherComponent />
    </Suspense>
  );
}
```

Reduces initial bundle size by loading components on demand.

## Profiling Tools

Use React DevTools Profiler to identify performance bottlenecks.

```bash
npm install -g react-devtools
react-devtools
```

## Bundle Analysis

```bash
npm install --save-dev webpack-bundle-analyzer
```

Identify and eliminate unnecessary dependencies.

---

*"Performance is not a feature. It's a requirement."* - Anonymous Senior Developer