 let a = [-1, 150, 190, 170, -1, -1, 160, 180]

function sortByHeight(){
  var array2 = a;
  array2 = array2.filter((element)=>{
    if(element !==-1){
      return element;
    }
  }).sort((a, b)=>{
      return a-b;
  });
  var indexVal = 0;
    for(var i =0; i < a.length; i++){
      if(a[i] != -1){
        a[i] = array2[indexVal];
        indexVal++;
      }
    }

    return a;
};
console.log(sortByHeight(a));
