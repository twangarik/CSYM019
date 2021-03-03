function myLoadFunction(){
  var element = document.getElementById('Pageheading');
  element.firstChild.nodeValue = 'New Heading';
}

document.addEventListener('DOMContentLoaded',myLoadFunction);
