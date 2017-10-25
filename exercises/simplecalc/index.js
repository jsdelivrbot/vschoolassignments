var output = document.getElementById("output");

document.getElementById("add-number").addEventListener("click", function(){
    var numberOne = Number(document.getElementById("number-one").value)
    var numberTwo = Number(document.getElementById("number-two").value)

    document.getElementById("add-result").innerText = numberOne + numberTwo;

})
