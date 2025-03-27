// Binary Search: Iterative and Recursive Versions

// Iterative version of Binary Search
function binarySearchIterative(arr, target) {
  // Initialize left and right pointers
  let left = 0, right = arr.length - 1;

  // Continue until the search range is valid (left <= right)
  while (left <= right) {
    // Calculate the middle index
    let mid = Math.floor((left + right) / 2);
    
    // Check if the middle element is the target
    if (arr[mid] === target) return mid;
    // If target is greater than middle element, search right half
    else if (arr[mid] < target) left = mid + 1;
    // If target is smaller than middle element, search left half
    else right = mid - 1;
  }
  
  // If target is not found, return -1
  return -1; 
}

// Recursive version of Binary Search
function binarySearchRecursive(arr, target, left = 0, right = arr.length - 1) {
  // Base case: if left pointer crosses right, the target is not found
  if (left > right) return -1;

  // Calculate the middle index
  let mid = Math.floor((left + right) / 2);
  
  // Check if the middle element is the target
  if (arr[mid] === target) return mid;
  // If target is greater than middle element, search right half
  else if (arr[mid] < target) return binarySearchRecursive(arr, target, mid + 1, right);
  // If target is smaller than middle element, search left half
  else return binarySearchRecursive(arr, target, left, mid - 1);
}

// Example array and target to search
const arr = [1, 3, 5, 7, 9, 11];
const target = 7;

// Test the Iterative Binary Search
console.log("Iterative Binary Search Result:", binarySearchIterative(arr, target)); // Output: 3 (index of target 7)

// Test the Recursive Binary Search
console.log("Recursive Binary Search Result:", binarySearchRecursive(arr, target)); // Output: 3 (index of target 7)
