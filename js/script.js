const btn = document.getElementById('btn');

btn.addEventListener('click', function onClick(event) {
  const box = document.getElementById('box'); 
  var color = "#"+(Math.random()*16777215|0).toString(16);

  box.style.backgroundColor = color;

});
