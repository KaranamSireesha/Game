let p = 1;
let diceSound = new Audio("./required/rpg-dice-rolling-95182.mp3");
let winSound = new Audio("./succes-fanfare-trumpet-6185.mp3");
let p1sum = 0;
let p2sum = 0;

// const ladders = {
//   "4" : 25,
//   "21" : 39,
//   "29" : 74,
//   "43" : 76,
//   "63" : 80,
//   "71" : 89

// }

// const snakes = {
//   "30" : 7,
//   "47" : 15,
//   "56" : 19,
//   "73" : 51,
//   "98" : 55,
//   "82" : 42,
//   "92" : 75
// }

// random dice number for player 1

document.getElementById("rollbtn").addEventListener("click", function () {
  diceSound.play();
  num = Math.floor(Math.random() * 6) + 1;
  document.getElementById("dice").innerText = num;

  if (p % 2 != 0) {
    document.getElementById("pl1").innerText = "player 1 ";
    play("p1", "p1sum", 0, num);
  }

  p = p + 1;
});

// random dice number for player 2

document.getElementById("rollbtn2").addEventListener("click", function () {
  diceSound.play();
  num2 = Math.floor(Math.random() * 6) + 1;
  document.getElementById("dice2").innerText = num2;
  if (p % 2 == 0) {
    document.getElementById("pl2").innerText = "player 2 ";

    play("p2", "p2sum", 50, num2);
  }
  p = p + 1;
});

function play(player, psum, correction, num, num2) {
  let sum;
  if (psum == "p1sum") {
    p1sum = p1sum + num;
    if (p1sum > 100) {
      p1sum = p1sum - num;
    }
    sum = p1sum;
  }
  if (psum == "p2sum") {
    p2sum = p2sum + num;
    if (p1sum > 100) {
      p1sum = p1sum - num2;
    }
    sum = p2sum;
  }

  if (sum < 10) {
    document.getElementById(`${player}`).style.left = `${(sum - 1) *80}px`;
    document.getElementById(`${player}`).style.top = `${
      0 *80 - correction
    }px`;
  } 
  
  else {
    numarr = Array.from(String(sum));
    n1 = eval(numarr.shift());
    n2 = eval(numarr.pop());

    if (n1 % 2 != 0) {
      if (n2 == 0) {
        document.getElementById(`${player}`).style.left = `${9 *80}px`;
        document.getElementById(`${player}`).style.top = `${
          (n1 + 1) *80 - correction
        }px`;
      } else {
        document.getElementById(`${player}`).style.left = `${
          (9 - (n2 - 1)) *80
        }px`;
        document.getElementById(`${player}`).style.top = `${
          n1 *80 - correction
        }px`;
      }
    } else if (n1 % 2 == 0) {
      if (n2 == 0) {
        document.getElementById(`${player}`).style.left = `${0 *80}px`;
        document.getElementById(`${player}`).style.top = `${
          (n1 + 1) *80 - correction
        }px`;
      } else {
        document.getElementById(`${player}`).style.left = `${(n2 - 1) *80}px`;
        document.getElementById(`${player}`).style.top = `${
          n1 *80 - correction
        }px`;
      }
    }
  }
}
