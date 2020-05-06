// Implement a binarySearch function that takes an array and a searchItem as arguments, and returns the index of the searchItem if found, or -1 otherwise. You may assume that the array argument will always be sorted.

/*
Input: list (sorted arr) and searchItem
Output: number: index of searchItem in list, or -1 indicating not found

searchItem: n
midIdx = 3
[1, 4, 5, 7, 10, 12]

- find midpoint of the list
  - length / 2

n !== arr[mid] list.length === 1, return -1
n < arr[mid]
- result = binarySearch(arr.slice(0, mid), term )
  - return result;
n > arr[mid]
-  result = binarySearch(arr.slice(mid), term)
  - return result === -1 ? result : result + mid + 1
n === arr[mid]
- return mid

*/



function binarySearch(list, searchItem) {
  let midpoint = Math.floor(list.length / 2);
  let testVal = list[midpoint];
  let searchResult;

  if (testVal === searchItem) return midpoint;
  if (list.length <= 1) return -1;

  if (testVal < searchItem) {
    searchResult = binarySearch(list.slice(midpoint + 1), searchItem);
    return (searchResult === -1) ? searchResult : (searchResult + midpoint + 1);
  } else {
    return binarySearch(list.slice(0, midpoint), searchItem)
  }
}

var yellowPages = ['Apple Store', 'Bags Galore', 'Bike Store', 'Donuts R Us', 'Eat a Lot', 'Good Food', 'Pasta Place', 'Pizzeria', 'Ruby Lounge', 'Zooper'];
console.log(binarySearch(yellowPages, 'Pizzeria'));                   // 7
console.log(binarySearch(yellowPages, 'Apple Store'));                // 0

console.log(binarySearch([1, 5, 7, 11, 23, 45, 65, 89, 102], 77));    // -1
console.log(binarySearch([1, 5, 7, 11, 23, 45, 65, 89, 102], 89));    // 7
console.log(binarySearch([1, 5, 7, 11, 23, 45, 65, 89, 102], 5));     // 1

console.log(binarySearch(['Alice', 'Bonnie', 'Kim', 'Pete', 'Rachel', 'Sue', 'Tyler'], 'Peter'));  // -1
console.log(binarySearch(['Alice', 'Bonnie', 'Kim', 'Pete', 'Rachel', 'Sue', 'Tyler'], 'Tyler'));  // 6