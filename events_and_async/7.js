/*
When the user clicks on a navigation link (Articles 1-4), the browser scrolls to that article in the <main> element and adds the highlight class to it. If another element already has the highlight class, the browser removes the class from that element.
- track currently highlighted el
- extract article highlighted/dehighlighting to a class

When the user clicks on an article element or any of its child elements, the browser adds the highlight class to it. If another element already has the highlight class, the browser removes the class from that element.
- stopPropgation

When the user clicks anywhere else on the page, the browser adds the highlight class to the main element. If another element already has the highlight class, the browser removes the class from that element.
- add listener to body
*/

document.addEventListener('DOMContentLoaded', function(){
  var header = document.querySelector('header');
  var main = document.querySelector('main');

  var highlightElement = (function(){
    var highlightedEl;

    return function(element) {
      if (highlightedEl) {
        highlightedEl.classList.remove('highlight');
      }
      element.classList.add('highlight');
      highlightedEl = element;
    }
  })()

  header.addEventListener('click', function(e) {
    if (e.target.tagName !== 'A') {
      return;
    }
    e.stopPropagation();

    var articleID = e.target.href.match(/\#article-\d{1,}/)[0];
    var article = document.querySelector(articleID);
    highlightElement(article);
  });

  var articles = Array.from(main.children).filter(function(el) {
    return el.tagName === 'ARTICLE';
  })

  articles.forEach(function(article) {
    article.addEventListener('click', function(e){
      e.stopPropagation();
      highlightElement(this);
    })
  })

  document.body.addEventListener('click', function(e) {
    highlightElement(main);
  })

});