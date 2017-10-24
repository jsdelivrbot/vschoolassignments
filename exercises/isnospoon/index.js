var monitor = {
  brand: "ASUS",
  color: "black",
  heightInches: 14,
  widthInches: 30,
  quickDescription: function(){
    return this.color + " " this.brand;
      },
console.log(monitor.quickDescription);
    }

var desk = {
  brand: "Bushwood",
  color: "maple",
  size: 'single'
  deskHeight: 30,
  deskWidth: 42,
  deskName: function(){
    return this.brand + " " + "is my favorite."
      },
    }

var floor = {
  color: "brown",
  material: "wood",
  floorLengthFeet: 40,
  floorWidthFeet: 22,
  creak: function() {
    return this.color + " " + this.material + " " + "creaks like a mofo!"
      },
  }

var fleece = {
  color: "black",
  size: "large",
  logo: "CORNELL",
  shoutOut: function() {
    return this.logo + " " + "is the best alma mater EVER!"
  },
}

var chair = {
  color: "white",
  numberWheels: 5,
  hasWheels: true,
  roll: function(){
      return this.color + " " + "on" + " " + this.numberWheels + " " + "is greased lightning!"
  },
}

var wideScreen = {
  color: "white",
  heightInFeet: 6,
  widthInFeet: 10,
  screengem: function() {
    return this.color + " and" + this.heightInFeet + " X "
    + this.widthInFeet + " makes for mighty fine viewing."
  },
}

var derek = {
  firstName: "Derek",
  lastName: "Cross",
  nationality: "Peru"
  age: "42",
  shortBio: function() {
    return this.firstName + " " + this.LastName + " is from" + " "
    + this.nationality + " and is" + this.age;
  },
}

var airDuct = {
  color: "silver"
  material: "aluminum"
  isMetal: true
  
}
