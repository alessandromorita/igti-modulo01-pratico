window.addEventListener('load', start);

function start() {
  var rangeRed = document.getElementById('rangeRed');
  var rangeGreen = document.getElementById('rangeGreen');
  var rangeBlue = document.getElementById('rangeBlue');

  rangeRed.addEventListener('input', alteraValor);
  rangeGreen.addEventListener('input', alteraValor);
  rangeBlue.addEventListener('input', alteraValor);
}

function alteraValor() {
  textRed.value = rangeRed.value;
  textGreen.value = rangeGreen.value;
  textBlue.value = rangeBlue.value;
  r = rangeRed.value;
  g = rangeGreen.value;
  b = rangeBlue.value;
  criaDiv(r, g, b);
}

function criaDiv(r, g, b) {
  var colorBox = document.querySelector('.colorBox');
  var div = document.createElement('div');
  div.setAttribute('class', 'colorBox');
  //colorBox.style.backgroundColor = 'rgb(' + r + ',' + g + ',' + b + ')';
  colorBox.style.backgroundColor = `rgb(${r},${g},${b})`;
}
