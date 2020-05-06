// Implement a function that converts the DOM, starting from the body, to nested arrays. Each element in the DOM is represented as ["PARENT_TAG_NAME", [children]] where children are elements as well and as such follow the same format. When an element has no children, it's represented as ["PARENT_TAG_NAME", []]. For instance, if the HTML doesn't have any elements inside the body, the result array would be: ["BODY", []]. Likewise, if the HTML only has a div element as its content, the result array would be: ["BODY", [["DIV", []]]].

// Input: document.body
// Output: nested array, where each array contains tagname of a given element, along with an array containing its children (if existing) or an empty array

/*
intialize array
- push node.tagName, node.children.map(nodesToArr)


*/

function nodesToArr(node) {
  if (node === undefined) {
    node = document.body;
  }

  var domArr = [];
  var children = Array.from(node.children)

  domArr.push(node.tagName, children.map(childNode =>  nodesToArr(childNode)));

  return domArr;
}