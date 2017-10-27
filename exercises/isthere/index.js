function isThere(str, char)

function isThereAnA(str){
    for(var i = 0; i < str.length; i++){
        if(str[i].toLowerCase() === "a"){
            return "There is an A in your word"
        }

    }
    return "There is no A in your word"
}

console.log(isThereAnA("Dog"));
console.log(isThereAnA("Cat"));
