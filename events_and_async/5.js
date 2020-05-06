// Given the following markup, implement distinct context menus for the main and the sub areas of the web page. You can represent a context menu as an alert box that displays the name of the respective area (i.e., alert("sub")). Only one context menu should appear when the event occurs.

document.addEventListener('DOMContentLoaded', function(){
  document.querySelector('main').addEventListener('contextmenu', function(event) {
    event.preventDefault();
    var areaName = event.target.firstChild.textContent.trim();
    alert(areaName);
  })
})