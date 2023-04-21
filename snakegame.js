let tog = 1;
let rollingSound = new Audio("./required/rpg-dice-rolling-95182.mp3");
let winningSound = new Audio("./required/success-fanfare-trumpets-6185.mp3");
let snakeSound = new Audio("./required/open-hat-snake-100639.mp3");
let ladderSound = new Audio("./required/game-level-complete-143022.mp3");

let p1sum = 0;
let p2sum = 0;

function play(player, psum, correction, num) {
  let sum;
  if (psum == "p1sum") {
    p1sum = p1sum + num;

    if (p1sum > 100) {
      p1sum = p1sum - num;
    }

    if (p1sum == 4) {
      p1sum = 25;
      alert("yayy!you got the ladder");
      ladderSound.play();
    }
    if (p1sum == 21) {
      p1sum = 39;
      alert("yayy!you got the ladder");
      ladderSound.play();
    }
    if (p1sum == 29) {
      p1sum = 74;
      alert("yayy!you got the ladder");
      ladderSound.play();
    }
    if (p1sum == 43) {
      p1sum = 76;
      alert("yayy!you got the ladder");
      ladderSound.play();
    }
    if (p1sum == 63) {
      p1sum = 80;
      alert("yayy!you got the ladder");
      ladderSound.play();
    }
    if (p1sum == 71) {
      p1sum = 89;
      alert("yayy!you got the ladder");
      ladderSound.play();
    }
    if (p1sum == 30) {
      p1sum = 7;
      alert("oops!Snake bite");
      snakeSound.play();
    }
    if (p1sum == 47) {
      p1sum = 15;
      alert("oops!Snake bite");
      snakeSound.play();
    }
    if (p1sum == 56) {
      p1sum = 19;
      alert("oops!Snake bite");
      snakeSound.play();
    }
    if (p1sum == 73) {
      p1sum = 51;
      alert("oops!Snake bite");
      snakeSound.play();
    }
    if (p1sum == 82) {
      p1sum = 42;
      alert("oops!Snake bite");
      snakeSound.play();
    }
    if (p1sum == 92) {
      p1sum = 75;
      alert("oops!Snake bite");
      snakeSound.play();
    }
    if (p1sum == 98) {
      p1sum = 55;
      alert("oops!Snake bite");
      snakeSound.play();
    }

    sum = p1sum;
  }

  if (psum == "p2sum") {
    p2sum = p2sum + num;

    if (p2sum > 100) {
      p2sum = p2sum - num;
    }

    if (p2sum == 4) {
      p2sum = 25;
      alert("yayy!you got the ladder");
      ladderSound.play();
    }
    if (p2sum == 21) {
      p2sum = 39;
      alert("yayy!you got the ladder");
      ladderSound.play();
    }
    if (p2sum == 29) {
      p2sum = 74;
      alert("yayy!you got the ladder");
      ladderSound.play();
    }
    if (p2sum == 43) {
      p2sum = 76;
      alert("yayy!you got the ladder");
      ladderSound.play();
    }
    if (p2sum == 63) {
      p2sum = 80;
      alert("yayy!you got the ladder");
      ladderSound.play();
    }
    if (p2sum == 71) {
      p2sum = 89;
      alert("yayy!you got the ladder");
      ladderSound.play();
    }
    if (p2sum == 30) {
      p2sum = 7;
      alert("oops!Snake bite");
      snakeSound.play();
    }
    if (p2sum == 47) {
      p2sum = 15;
      alert("oops!Snake bite");
      snakeSound.play();
    }
    if (p2sum == 56) {
      p2sum = 19;
      alert("oops!Snake bite");
      snakeSound.play();
    }
    if (p2sum == 73) {
      p2sum = 51;
      alert("oops!Snake bite");
      snakeSound.play();
    }
    if (p2sum == 82) {
      p2sum = 42;
      alert("oops!Snake bite");
      snakeSound.play();
    }
    if (p2sum == 92) {
      p2sum = 75;
      alert("oops!Snake bite");
      snakeSound.play();
    }
    if (p2sum == 98) {
      p2sum = 55;
      alert("oops!Snake bite");
      snakeSound.play();
    }
    sum = p2sum;
  }


  if (sum < 10) {
    document.getElementById(`${player}`).style.left = `${(sum - 1) *62}px`;
    document.getElementById(`${player}`).style.top = `${
      -0 *62 - correction
    }px`;
  } else if (sum == 100) {
    winningSound.play();
    if (player == "p1") {
      alert("Red Won !!");
    } else if (player == "p2") {
      alert("Green Won !!");
    }
    location.reload();
  } else {
    numarr = Array.from(String(sum));
    n1 = eval(numarr.shift());
    n2 = eval(numarr.pop());

    if (n1 % 2 != 0) {
      if (n2 == 0) {
        document.getElementById(`${player}`).style.left = `${9 *62}px`;
        document.getElementById(`${player}`).style.top = `${
          (-n1 + 1) *62 - correction
        }px`;
      } else {
        document.getElementById(`${player}`).style.left = `${
          (9 - (n2 - 1)) *62
        }px`;
        document.getElementById(`${player}`).style.top = `${
          -n1 *62 - correction
        }px`;
      }
    } else if (n1 % 2 == 0) {
      if (n2 == 0) {
        document.getElementById(`${player}`).style.left = `${0 *62}px`;
        document.getElementById(`${player}`).style.top = `${
          (-n1 + 1) *62 - correction
        }px`;
      } else {
        document.getElementById(`${player}`).style.left = `${(n2 - 1) *62}px`;
        document.getElementById(`${player}`).style.top = `${
          -n1 *62 - correction
        }px`;
      }
    }
  }
}

document.getElementById("diceBtn").addEventListener("click", function () {
  rollingSound.play();
  num = Math.floor(Math.random() * (6) + 1);
  document.getElementById("dice").innerText = num;

  if (tog % 2 != 0) {
    document.getElementById("tog").innerText = "Green's Turn : ";
    play("p1", "p1sum", 0, num);
  } else if (tog % 2 == 0) {
    document.getElementById("tog").innerText = "Red's Turn : ";

    play("p2", "p2sum", 50, num);
  }

  tog = tog + 1;
});
