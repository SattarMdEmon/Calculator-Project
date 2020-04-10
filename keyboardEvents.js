window.addEventListener("keydown", checkKeyDown, false);
window.addEventListener("keyup", checkKeyUp);

function checkKeyDown(key) {
  switch (key.keyCode) {
    case 48:
      numInput("0");
      break;
    case 49:
      numInput("1");
      break;
    case 50:
      numInput("2");
      break;
    case 51:
      numInput("3");
      break;
    case 52:
      numInput("4");
      break;
    case 53:
      numInput("5");
      break;
    case 54:
      numInput("6");
      break;
    case 55:
      numInput("7");
      break;
    case 56:
      numInput("8");
      break;
    case 57:
      numInput("9");
      break;
    case 96:
      numInput("0");
      break;
    case 97:
      numInput("1");
      break;
    case 98:
      numInput("2");
      break;
    case 99:
      numInput("3");
      break;
    case 100:
      numInput("4");
      break;
    case 101:
      numInput("5");
      break;
    case 102:
      numInput("6");
      break;
    case 103:
      numInput("7");
      break;
    case 104:
      numInput("8");
      break;
    case 105:
      numInput("9");
      break;
    case 107:
      operator("+");
      break;
    case 109:
      operator("-");
      break;
    case 106:
      operator("*");
      break;
    case 111:
      operator("div");
      break;
    case 13:
      equal();
      break;
    default:
      break;
  }
}

function checkKeyUp(key) {
  switch (key.keyCode) {
    case 48:
      defaultStyle("0");
      break;
    case 49:
      defaultStyle("1");
      break;
    case 50:
      defaultStyle("2");
      break;
    case 51:
      defaultStyle("3");
      break;
    case 52:
      defaultStyle("4");
      break;
    case 53:
      defaultStyle("5");
      break;
    case 54:
      defaultStyle("6");
      break;
    case 55:
      defaultStyle("7");
      break;
    case 56:
      defaultStyle("8");
      break;
    case 57:
      defaultStyle("9");
      break;
    case 96:
      defaultStyle("0");
      break;
    case 97:
      defaultStyle("1");
      break;
    case 98:
      defaultStyle("2");
      break;
    case 99:
      defaultStyle("3");
      break;
    case 100:
      defaultStyle("4");
      break;
    case 101:
      defaultStyle("5");
      break;
    case 102:
      defaultStyle("6");
      break;
    case 103:
      defaultStyle("7");
      break;
    case 104:
      defaultStyle("8");
      break;
    case 105:
      defaultStyle("9");
      break;
    case 107:
      defaultStyle("+");
      break;
    case 109:
      defaultStyle("-");
      break;
    case 106:
      defaultStyle("*");
      break;
    case 111:
      defaultStyle("div");
      break;
    case 13:
      defaultStyle("=");
      break;
    default:
      break;
  }
}

document.getElementById("1").addEventListener("mouseover", mouseOver1);
document.getElementById("1").addEventListener("mouseout", mouseOut1);
document.getElementById("2").addEventListener("mouseover", mouseOver2);
document.getElementById("2").addEventListener("mouseout", mouseOut2);
document.getElementById("3").addEventListener("mouseover", mouseOver3);
document.getElementById("3").addEventListener("mouseout", mouseOut3);
document.getElementById("4").addEventListener("mouseover", mouseOver4);
document.getElementById("4").addEventListener("mouseout", mouseOut4);
document.getElementById("5").addEventListener("mouseover", mouseOver5);
document.getElementById("5").addEventListener("mouseout", mouseOut5);
document.getElementById("6").addEventListener("mouseover6", mouseOver6);
document.getElementById("6").addEventListener("mouseout", mouseOut6);
document.getElementById("7").addEventListener("mouseover", mouseOver7);
document.getElementById("7").addEventListener("mouseout", mouseOut7);
document.getElementById("8").addEventListener("mouseover", mouseOver8);
document.getElementById("8").addEventListener("mouseout", mouseOut58);
document.getElementById("9").addEventListener("mouseover6", mouseOver9);
document.getElementById("9").addEventListener("mouseout", mouseOut9);
document.getElementById("0").addEventListener("mouseover", mouseOver0);
document.getElementById("0").addEventListener("mouseout", mouseOut0);

function mouseOver1() {
  hoverStyle("1");
}
function mouseOver2() {
  hoverStyle("2");
}
function mouseOver3() {
  hoverStyle("3");
}
function mouseOver4() {
  hoverStyle("4");
}
function mouseOver5() {
  hoverStyle("5");
}
function mouseOver6() {
  hoverStyle("6");
}
function mouseOver7() {
  hoverStyle("7");
}

function mouseOver8() {
  hoverStyle("8");
}
function mouseOver9() {
  hoverStyle("9");
}
function mouseOver0() {
  hoverStyle("0");
}

//mouse Out Style

function mouseOut1() {
  defaultStyle("1");
}
function mouseOut2() {
  defaultStyle("2");
}
function mouseOut3() {
  defaultStyle("3");
}
function mouseOut4() {
  defaultStyle("4");
}
function mouseOut5() {
  defaultStyle("5");
}
function mouseOut6() {
  defaultStyle("6");
}
function mouseOut7() {
  defaultStyle("7");
}

function mouseOut5() {
  defaultStyle("8");
}
function mouseOut6() {
  defaultStyle("9");
}
function mouseOut7() {
  defaultStyle("0");
}
