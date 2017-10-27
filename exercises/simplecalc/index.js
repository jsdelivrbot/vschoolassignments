

document.getElementById("add-number").addEventListener("click", function(){
    var numberOne = Number(document.getElementById("number-one").value)
    var numberTwo = Number(document.getElementById("number-two").value)

    document.getElementById("add-result").innerText = numberOne + numberTwo;

})



document.getElementById("subtract-number").addEventListener("click", function(){
    var numberOne = Number(document.getElementById("number-three").value)
    var numberTwo = Number(document.getElementById("number-four").value)

    document.getElementById("subtract-result").innerText = numberOne - numberTwo;
  })



  document.getElementById("multiply-number").addEventListener("click", function(){
      var numberOne = Number(document.getElementById("number-five").value)
      var numberTwo = Number(document.getElementById("number-six").value)

      document.getElementById("multiply-result").innerText = numberOne * numberTwo;
    })
