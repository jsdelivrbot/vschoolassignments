

var shopper = {
  firstName: "Julia",
  lastName: "Child",
  age: 63,
  isFemale: true,
  fullName: function(){
    return this.firstName + " " + this.lastName

  },
  groceryCart: ["grapes", "steak", "soap", "eggs"]
}
console.log(shopper.fullName());
