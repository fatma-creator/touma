var favs = Array.from(document.querySelectorAll(".fa-heart"));
var cards = Array.from(document.querySelectorAll(".card"));
var deleteBnts = Array.from(document.querySelectorAll(".supprimer"));
var plusBnts = Array.from(document.querySelectorAll(".fa-plus"));
var minusBnts = Array.from(document.querySelectorAll(".fa-minus"));
for (let fas of favs) {
  fas.addEventListener("click", function () {
    if (fas.style.color == "black") {
      fas.style.color = "red";
    } else {
      fas.style.color = "black";
    }
  });
}
for (let i in deleteBnts) {
  deleteBnts[i].addEventListener("click", function () {
    cards[i].remove();
    Total();
  });
}
for (let plus of plusBnts) {
  plus.addEventListener("click", function () {
    plus.nextElementSibling.innerHTML++;
    Total();
  });
}
for (let minus of minusBnts) {
  minus.addEventListener("click", function () {
    minus.previousElementSibling.innerHTML > 0
      ? minus.previousElementSibling.innerHTML--
      : null;
    Total();
  });
}

//Total price
function Total() {
  let qte = Array.from(document.querySelectorAll(".qute"));
  let price = Array.from(document.querySelectorAll(".unit-price"));
  let s = 0;
  for (i = 0; i < price.length; i++) {
    s = s + price[i].innerHTML * qte[i].innerHTML;
  }
  document.getElementById("total-price").innerHTML = s;
}

// Step 2: Select the clickable element
const clickButton = document.getElementById("clickButton");
const totalDisplay = document.getElementById("totalDisplay");

// Step 3: Attach a click event listener
clickButton.addEventListener("click", () => {
  // Step 4: Update the total and display
  total += 100;
  totalDisplay.textContent = total;
});
