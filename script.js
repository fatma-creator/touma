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
for (let plus of plusBnts) {
  plus.addEventListener("click", function () {
    plus.nextElementSibling.innerHTML++;
  });
}
for (let minus of minusBnts) {
  minus.addEventListener("click", function () {
    minus.previousElementSibling.innerHTML > 0
      ? minus.previousElementSibling.innerHTML--
      : null;
  });
}
