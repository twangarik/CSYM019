function myLoadFunction(){
  var element = document.getElementById('Pageheading');
  element.firstChild.nodeValue = 'New Heading';
}
function scriptLoaded(){
  alert('Script load');
}
function print5(){
console.log(1);
console.log(2);
console.log(3);
console.log(4);
}
print5();
print5();
document.addEventListener('DOMContentLoaded',myLoadFunction);
