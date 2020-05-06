function makeBold(el) {
  el.style.fontWeight = "bold";
  var bolded = new CustomEvent('bolded');
  el.dispatchEvent(bolded);
}

var sectionElement = document.querySelector('section');

sectionElement.addEventListener('bolded', function(e) {
  e.target.classList.add('highlight');
})


