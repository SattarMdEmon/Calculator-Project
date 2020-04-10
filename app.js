const display = document.getElementById("display");
const history = document.getElementById("history");
const btnStlye = document.getElementsByClassName("num");
var audio;
let currentInput = "";
display.innerHTML = "0";
history.innerHTML = "";
let lastChar = display.innerHTML.charAt(display.innerHTML.length - 1);
let clear = true;

//alert(input);

//btnAdd.addEventListener("click", subtract);
//btnAdd.addEventListener("click", multiply);
//btnAdd.addEventListener("click", divide);
