// Write a JavaScript function that takes an element's id and returns the DOM tree of the element in a two-dimensional array. The first subarray contains the element and its siblings, the second contains the parent of the element and its siblings, so on and so forth, all the way up to the "grandest" parent. Assume that the grandest parent is the element with an id of "1". Use the following HTML and test cases to test your code:

/*

Input: id
Output: nested array
  - Each element of nested array is array of strings, representing nodeNames of sibling elements
  - Each subsequent element is array of siblings one level higher in the tree

Algo:
- Initialize nodeTree
- Starting at id, get node with that id
- While node.id !== 1
  - get node.parentElement.children and convert to array
  - map that collection to their nodeNames
  - push that array to nodeTree arr
  - node = node.parent
- push [node(id==1).nodeName] into tree list
- return list

*/

function domTreeTracer(id) {
  let nodeTree = [];
  let currentNode = document.getElementById(id);
  while(currentNode.id !== '1') {
    let siblings = Array.from(currentNode.parentElement.children);
    siblings = siblings.map((el) => el.nodeName);
    nodeTree.push(siblings);
    currentNode = currentNode.parentElement;
  }

  nodeTree.push([currentNode.nodeName]);
  return nodeTree;
}

domTreeTracer(1);
// = [["ARTICLE"]]
domTreeTracer(2);
// = [["HEADER", "MAIN", "FOOTER"], ["ARTICLE"]]
domTreeTracer(22);
// = [["A"], ["STRONG"], ["SPAN", "SPAN"], ["P", "P"], ["SECTION", "SECTION"], ["HEADER", "MAIN", "FOOTER"], ["ARTICLE"]]