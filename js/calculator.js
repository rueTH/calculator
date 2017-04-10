"use strict";

var uno = document.getElementById("inputUno").value;
var dos = document.getElementById("inputDos").value;
var output = document.getElementById("outputField");


add.addEventListener("click", addStuff);
subtract.addEventListener("click", subtractStuff);
multiply.addEventListener("click", multiplyStuff);
divide.addEventListener("click", divideStuff);


function addStuff() {
  var sum = parseFloat(inputUno.value) + parseFloat(inputDos.value);
  output.innerHTML = sum;
};

function subtractStuff() {
  var difference = parseFloat(inputUno.value) - parseFloat(inputDos.value);
  output.innerHTML = difference;
};

function multiplyStuff() {
  var product = parseFloat(inputUno.value) * parseFloat(inputDos.value);
  output.innerHTML = product;
};


function divideStuff() {
  var quotient = parseFloat(inputUno.value) / parseFloat(inputDos.value);
  output.innerHTML = quotient;
};