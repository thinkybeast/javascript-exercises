// Implement a function that converts a nested array of nodeNames (see Nodes to Array exercise for examples) to nodes. Go over the sample code and the corresponing return values below as a guide for what you will implement.
/*
var nodes = ["BODY",[["HEADER",[]],["MAIN",[]],["FOOTER",[]]]];

Input: Nested array; each array's first element is the tag name, and its nested array contains arrays of child elements in the same format
Output: A DOM with node elements inserted in the structure described by the array input

- Given a nodeArr
- Create parentElement from nodeArr[0]
- For each element of nodeArr[1]
  - append result of arraytoNode to parentElement
- Return parentElement
*/



function arrayToNodes(nodesArr) {
  var parentElement = document.createElement(nodesArr[0]);
  var children = nodesArr[1]
  if (children.length === 0) return parentElement;

  children.forEach(function(nodeArr) {
    parentElement.appendChild(arrayToNodes(nodeArr));
  })
  return parentElement;
}

var nodes1 = ["BODY",[["HEADER",[]],["MAIN",[]],["FOOTER",[]]]];
var nodes2 = ["BODY",[["DIV",[["DIV",[]],["DIV",[["DIV",[]]]]]],["DIV",[]],["DIV",[["DIV",[]],["DIV",[]],["DIV",[]]]]]];
