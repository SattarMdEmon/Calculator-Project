function playSound(text) {
  switch (text) {
    case "0":
      audio = new Audio("sound/note1.wav");
      break;
    case "1":
      audio = new Audio("sound/note2.wav");
      break;
    case "2":
      audio = new Audio("sound/note3.wav");
      break;
    case "3":
      audio = new Audio("sound/note4.wav");
      break;
    case "4":
      audio = new Audio("sound/note5.wav");
      break;
    case "5":
      audio = new Audio("sound/note6.wav");
      break;
    case "6":
      audio = new Audio("sound/note7.wav");
      break;
    case "7":
      audio = new Audio("sound/note1.wav");
      break;
    case "8":
      audio = new Audio("sound/note2.wav");
      break;
    case "9":
      audio = new Audio("sound/note3.wav");
      break;
    case "+":
      audio = new Audio("sound/note4.wav");
      break;
    case "-":
      audio = new Audio("sound/note5.wav");
      break;
    case "*":
      audio = new Audio("sound/note6.wav");
      break;
    case "/":
      audio = new Audio("sound/note7.wav");
      break;
    default:
      break;
  }
  audio.play();
}
