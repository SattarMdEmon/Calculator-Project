function CE() {
  display.innerHTML = 0;
  clear = true;
  currentInput = "";
  history.innerHTML = "";
}

function C() {
  display.innerHTML = 0;
  clear = true;
  currentInput = "";
}

function equal() {
  lastChar = display.innerHTML.charAt(display.innerHTML.length - 1);
  if (
    lastChar == "+" ||
    lastChar == "-" ||
    lastChar == "*" ||
    lastChar == "/"
  ) {
    display.innerHTML = display.innerHTML.slice(0, -1);
    updateCurrentInput("=");
    evaluate();
    history.innerHTML = "";
  } else {
    updateCurrentInput("=");
    evaluate();
    history.innerHTML = "";
  }
  clear = true;
}

function decimal() {
  if (currentInput.includes(".") == false) {
    if (currentInput == "") {
      display.innerHTML += "0.";
      updateCurrentInput(".");
    } else {
      display.innerHTML += ".";
      updateCurrentInput(".");
    }
  }
}

function evaluate() {
  display.innerHTML = eval(display.innerHTML);
  history.innerHTML += currentInput;
  if (history.innerHTML != "") {
    currentInput = "";
  }
}

function numInput(text) {
  if (clear == true || display.innerHTML == "0") {
    display.innerHTML = text;
    updateCurrentInput(text);
    clear = false;
  } else {
    display.innerHTML += text;
    updateCurrentInput(text);
  }
  styleChange(text);
  playSound(text);
}

function updateCurrentInput(text) {
  if (currentInput == "") {
    if (text == "0") {
      currentInput = "";
    } else if (
      text == "." ||
      text == "+" ||
      text == "-" ||
      text == "*" ||
      text == "/"
    ) {
      currentInput = "0" + text;
    } else if (text == "=") {
      currentInput = "";
    } else {
      currentInput = text;
    }
  } else {
    if (text == "=") {
      lastInput = currentInput.charAt(currentInput.length - 1);
      if (
        lastInput == "+" ||
        lastInput == "-" ||
        lastInput == "*" ||
        lastInput == "/"
      ) {
        currentInput.slice(0, -1);
      } else {
        currentInput += "";
      }
    } else {
      currentInput += text;
    }
  }
}

function operator(text) {
  lastChar = display.innerHTML.charAt(display.innerHTML.length - 1);

  if (
    lastChar == "+" ||
    lastChar == "-" ||
    lastChar == "*" ||
    lastChar == "/"
  ) {
    display.innerHTML = display.innerHTML.replace(lastChar, text);
  } else {
    updateCurrentInput(text);
    evaluate();
    display.innerHTML += text;
  }
}

function activeStyle(text) {
  document.getElementById(text).style.border = "none";
  document.getElementById(text).style.backgroundColor = "black";
  document.getElementById(text).style.color = "white";
  document.getElementById(text).style.fontSize = "28px";
  document.getElementById(text).style.transform = "scale(0.8)";
}

function sleep(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

async function styleChange(text) {
  activeStyle(text);
  await sleep(300);
  defaultStyle(text);
}

function defaultStyle(text) {
  document.getElementById(text).style.border = "1px solid white";
  document.getElementById(text).style.background = "none";
  document.getElementById(text).style.color = "black";
  document.getElementById(text).style.fontSize = "24px";
  document.getElementById(text).style.transform = "scale(1)";
}

function hoverStyle(text) {
  document.getElementById(text).style.border = "none";
  document.getElementById(text).style.backgroundColor = "black";
  document.getElementById(text).style.color = "white";
  document.getElementById(text).style.fontSize = "28px";
  document.getElementById(text).style.transform = "scale(1.1)";
}
