document.getElementById("submit").addEventListener("click", function() {
  var goomba = document.getElementById("Goomba-charge").value;
  var bobOmb = document.getElementById("Bobomb-charge").value;
  var cheepCheep = document.getElementById("CheepCheep-charge").value;

  goomba *= 5;
  bobOmb *= 7;
  cheepCheep *= 11;

  document.getElementById("sum").innerText = "Total: " + (goomba + bobOmb + cheepCheep);
});
