/*
Implement a function, sliceTree, that is "similar" to the Array.prototype.slice method, but this time for a DOM tree. The sliceTree function takes two arguments: the start index which is the parent node's id attribute and, the end index which is the innermost child node's id attribute. The function returns an array of tagNames. Take note of the following when implementing the sliceTree function:

It's similar to slice but different in the sense that slice isn't inclusive on the right hand side.
The end index doesn't have to be the id of the "innermost" child node as some of the examples suggest.
Only consider element nodes.
Only elements that have body as an ancestor (parent, grandparent, etc.) are sliceable.
If the id attribute of the start or end index is not in the DOM, return undefined.
If the slice is not feasible — there's no path connecting the element at the starting index to the ending index — return undefined.

Input: startId and endId
Output: Array of tagNames, tracing the path from the element with id === startId to id === endId
- if no path connects them, return undefined
- if either id is not in DOM, return undefined

Algo:
- initialize treeSlice = []
- validate that ids are present in tree
  - if not, return undefined
- startNode =  getElementAtId(startId)
- currentNode = getElementAtId(endid)
- while currentNode.tagName not equal to 'BODY'
  - unshift currentNode.tagname into array
  - if currentNode === startNode break
  - currentNode = currentNode.parentElement

- if treeSlice[0] === startNode
  return treeSlice
- else return undefined

*/

function sliceTree(startId, endId) {
  let treeSlice = [];
  let startNode = document.getElementById(String(startId));
  let currentNode = document.getElementById(String(endId));

  if (!startNode || !currentNode) return undefined;

  while (currentNode.tagName !== 'BODY') {
    treeSlice.unshift(currentNode.tagName);
    if (currentNode === startNode) break;
    currentNode = currentNode.parentElement;
  }

  return (currentNode === startNode) ? treeSlice : undefined;
}