function roll() {
  document.getElementById("dice").innerHTML = Math.floor(Math.random() * 6) + 1;
}

function roll2() {
  document.getElementById("dice2").innerHTML =
    Math.floor(Math.random() * 6) + 1;
}

const container = document.querySelector(".grid-container");
for (let i = 100; i > 0; i--) {
  const div = document.createElement("div");
  div.className = "grid-item";
  container.appendChild(div);
  if (i === i || i  === 0){
  const number = document.createTextNode((i - 0));
  div.appendChild(number);
}
}
