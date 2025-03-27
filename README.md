### **Example README.md**

```markdown
# Binary Search Implementations in JavaScript

This repository contains two implementations of the **Binary Search** algorithm in JavaScript:

1. **Iterative Binary Search**
2. **Recursive Binary Search**

Both implementations are designed to search for a target element in a sorted array and return its index if found, or `-1` if not found.

## How to Use

1. Clone the repository to your local machine:

   ```bash
   git clone https://github.com/ahronlu/repository-name.git
   ```

2. Navigate to the directory and open the JavaScript file (`binarySearch.js`).

3. The `binarySearch.js` file contains the following functions:
   
   - `binarySearchIterative(arr, target)` – Searches the array `arr` for the `target` value using an iterative approach.
   - `binarySearchRecursive(arr, target)` – Searches the array `arr` for the `target` value using a recursive approach.

4. Example usage:

   ```javascript
   const arr = [1, 3, 5, 7, 9, 11];
   const target = 7;

   console.log(binarySearchIterative(arr, target)); // Output: 3
   console.log(binarySearchRecursive(arr, target)); // Output: 3
   ```

## Time Complexity

- Both the iterative and recursive implementations have a **time complexity of O(log n)**.
- The space complexity of the recursive implementation is **O(log n)** due to the function call stack, while the iterative implementation has a space complexity of **O(1)**.
```
