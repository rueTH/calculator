console.log("yes, your js is linked to index");

var uno = document.getElementById("inputUno").value;
var dos = document.getElementById("inputDos").value;
var output = document.getElementById("outputField");


//event listeners per calcFunction
add.addEventListener("click", addStuff);
subtract.addEventListener("click", subtractStuff);
multiply.addEventListener("click", multiplyStuff);
divide.addEventListener("click", divideStuff);


//*ADD* input1&input2 and return *SUM*
function addStuff() {
  console.log("insideFunction='addStuff'");

  var sum = parseFloat(inputUno.value) + parseFloat(inputDos.value);
  output.innerHTML = sum;
};

//*SUBTRACT* input1&input2 and return *DIFFERENCE*
function subtractStuff() {
  console.log("insideFunction='subtractStuff'");

  var difference = parseFloat(inputUno.value) - parseFloat(inputDos.value);
  output.innerHTML = difference;
};

//*MULTIPLY* input1&input2 and return *PRODUCT*
function multiplyStuff() {
  console.log("insideFunction='multiplyStuff'");

  var product = parseFloat(inputUno.value) * parseFloat(inputDos.value);
  output.innerHTML = product;
};

//*DIVIDE* input1&input2 and return *QUOTIENT*
function divideStuff() {
  console.log("insideFunction='divideStuff'");

  var quotient = parseFloat(inputUno.value) / parseFloat(inputDos.value);
  output.innerHTML = quotient;
}


