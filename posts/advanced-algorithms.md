# Advanced Algorithms: Sorting, Searching, and Graph Theory

Mastering algorithms is the cornerstone of coding excellence. From basic sorting to complex graph traversals, understanding these fundamental concepts separates good programmers from great ones.

## Sorting Algorithms

### QuickSort: The Speed Demon

```javascript
function quickSort(arr, low = 0, high = arr.length - 1) {
  if (low < high) {
    const pi = partition(arr, low, high);
    quickSort(arr, low, pi - 1);
    quickSort(arr, pi + 1, high);
  }
  return arr;
}

function partition(arr, low, high) {
  const pivot = arr[high];
  let i = low - 1;
  for (let j = low; j < high; j++) {
    if (arr[j] < pivot) {
      i++;
      [arr[i], arr[j]] = [arr[j], arr[i]];
    }
  }
  [arr[i + 1], arr[high]] = [arr[high], arr[i + 1]];
  return i + 1;
}
```

Average O(n log n), worst case O(n²) - but practically unbeatable.

## Graph Algorithms

### Dijkstra's Shortest Path

```python
import heapq

def dijkstra(graph, start):
    queue = [(0, start)]
    distances = {node: float('inf') for node in graph}
    distances[start] = 0

    while queue:
        current_distance, current_node = heapq.heappop(queue)

        if current_distance > distances[current_node]:
            continue

        for neighbor, weight in graph[current_node].items():
            distance = current_distance + weight
            if distance < distances[neighbor]:
                distances[neighbor] = distance
                heapq.heappush(queue, (distance, neighbor))

    return distances
```

Essential for routing, network optimization, and pathfinding.

## Dynamic Programming

Memoization and tabulation techniques for solving complex problems efficiently.

## Big O Complexity

Understanding time and space complexity is crucial for writing scalable code.

---

*"Algorithms are the poetry of computation. Each line a verse, each optimization a metaphor."* - Donald Knuth