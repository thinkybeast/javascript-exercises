// Go over the two HTML snippets. How many nodes will the resulting DOM tree have?

/*
<div>
  <p>Then press the <em>Draw</em> button</p>
</div>
*/
// 11: html head body
//                  div
//             text p text
//             text em  text
//                 text

/*
<div><p>Then press the <em>Draw</em> button.</p></div>

9:
html
  head body
        div
        p
  text em  text
      text

*/
