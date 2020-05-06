/*


Algo:
- walk the tree, keeping track of level
- if currentNode === null, return
- if level === generationLevel, add that node to array (or style that node), then return
*/

function colorGeneration(generationLevel) {
  function addGenerationColor() {
    this.classList.add('generation-color');
  }

  function walk(node, func, level) {
    level = level || 0;

    if (level === generationLevel) {
      func.call(node);
      return;
    }

    var children = Array.from(node.children);
    children.forEach(function(child) {
      walk(child, func, level + 1);
    })
  }

  if (generationLevel <= 0) return undefined;
  walk(document.body, addGenerationColor);
}