// Write a function that takes two element ids as arguments and swaps the positions of the elements represented by the ids. The function returns true for valid swaps and undefined for invalid. To put the focus on the node swapping functionality, you can assume that nodes will have a value for the id attribute and two arguments will always be provided. Use the following HTML and sample codes to test your output.

/*
Input: two ids
Output: true (swap performed) or undefined (invalid)

Invalid swaps:
- id is not a node
- node is a child of other node

Algo:
- Get elements at id1 and id2
- validate elements
  - if either element doesnt exist, return undefined
  - check if id1 is parent of id2 or id2 is parent of id1
    - while el1.nodeName !== 'BODY'
      if el1 === el2 return true
      el1 = el1.parent
    - return false
  - if so, return undefined
- deep clone id2
- id2.parent.replaceChild(id1, id2)
- id1.parent.replaceChild(id2Clone, id1)
- return true

*/

function nodeSwap(id1, id2) {
  let areRelated = function(el1, el2) {
    return el1.contains(el2) || el2.contains(el1);
  }

  let cloneSwap = function(element1, element2) {
    var cloneElement1 = element1.cloneNode(true);
    var cloneElement2 = element2.cloneNode(true);
    element2.parentElement.replaceChild(cloneElement1, element2);
    element1.parentElement.replaceChild(cloneElement2, element1);
  }

  let element1 = document.getElementById(String(id1));
  let element2 = document.getElementById(String(id2));

  if(!element1 || !element2 || areRelated(element1, element2)) {
    return undefined;
  }

  var tempEl1 = document.createElement('div');
  element1.insertAdjacentElement("afterend", tempEl1);
  element2.insertAdjacentElement("afterend", element1);
  tempEl1.insertAdjacentElement("beforebegin", element2);
  tempEl1.remove();


  return true;
}